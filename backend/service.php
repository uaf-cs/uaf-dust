<?php
header('Access-Control-Allow-Origin: *');

include 'auth.php';
include 'servicedatabase.php';

$SITENAME = SITENAME;

// This was heavily modified from https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/
// under an MIT License.

class Service
{
    public function __construct()
    {
        $this->auth = new AuthDatabase();
        $this->auth->authenticate();

        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->request = isset($_SERVER['PATH_INFO']) ? explode('/', trim($_SERVER['PATH_INFO'], '/')) : array();
        $this->fileContents = file_get_contents('php://input');
        $this->input = json_decode($this->fileContents, true);
        $this->db = new ServiceDatabase();
        if (!$this->db) {
            http_response_code(404);
            die(json_encode($this->db->lastErrorMsg()));
        }
    }

    public function outputHeader()
    {
        if ($this->method == 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
            header('Access-Control-Max-Age: 1000');
            if (array_key_exists('HTTP_ACCESS_CONTROL_REQUEST_HEADERS', $_SERVER)) {
                header('Access-Control-Allow-Headers: ' . $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
            } else {
                header('Access-Control-Allow-Headers: *');
            }
            exit(0);
        }
        header('Content-Type: application/json');
    }

    public function processAuth()
    {
        if (isset($_GET['reconnect'])) {
            error_log(print_r($this->auth, true));
            echo json_encode([
                "isloggedin" => $this->auth->isloggedin,
                "userid" => $this->auth->userid,
                "userrole" => $this->auth->userrole,
                "username" => $this->auth->username,
                "session" => session_id(),
            ]);
            return true;
        }
        if (isset($_GET['login'])) {
            echo json_encode([
                "isloggedin" => $this->auth->isloggedin,
                "userid" => $this->auth->userid,
                "userrole" => $this->auth->userrole,
                "username" => $this->auth->username,
                "session" => session_id(),
            ]);
            return true;
        }
        if (isset($_GET['logout'])) {
            echo json_encode([
                "isloggedin" => $this->auth->isloggedin,
                "userid" => $this->auth->userid,
                "userrole" => $this->auth->userrole,
                "username" => $this->auth->username,
                "session" => '',
            ]);
            return true;
        }
        return false;
    }

    public function processREST()
    {
        $tableBefore = array_shift($this->request);
        $table = preg_replace('/[^a-z]+/i', '', $tableBefore);
        $keyBefore = array_shift($this->request);
        if (is_numeric($keyBefore)) {
            $id = intval($keyBefore) + 0;
        } else {
            $id = 0;
            $badidPercept = true;
        }

        // disallow short table names and non alpha table names
        if (strlen($table) < 3 || $table != $tableBefore) {
            return;
        }

        $getPercept = false;
        $putPercept = false;
        $postPercept = false;
        $deletePercept = false;
        $idPercept = ($id > 0) ? true : false;
        $badidPercept = false;
        $adminPercept = $this->auth->isadmin;
        $userPercept = $this->auth->isloggedin;
        $shortnamePercept = isset($_GET['shortname']);
        $queryPercept = (isset($_SERVER['QUERY_STRING']) && strlen($_SERVER['QUERY_STRING']) > 0) ? true : false;
        $stmtPercept = false;
        $searchPercept = true;
        $inputData = $this->input;
        if (isset($_POST['data'])) {
            $inputData = json_decode($_POST['data']);
            if (is_object($inputData)) {
                $inputData = get_object_vars($inputData);
            }
        }

        if ($this->method == 'POST' && isset($_POST['method'])) {
            $this->method = $_POST['method'];
        }

        switch ($this->method) {
            case 'GET':
                $getPercept = true;
                break;
            case 'PUT':
                $putPercept = true;
                break;
            case 'POST':
                $postPercept = true;
                break;
            case 'DELETE':
                $deletePercept = true;
                break;
            default:
                die('method not supported');
                break;
        }

        $queryParams = [];

        if ($id) {
            $queryParams['id'] = $id;
        }
        foreach ($_GET as $key => &$value) {
            if ($key == 'q' || $key == 'query') {
                continue;
            }

            if ($key == 's' || $key == 'search') {
                $searchPercept = true;
            }

            $queryParams[$key] = $value;
        }

        $set = '';
        $vstr = '';
        $key_values = array();
        if (is_array($inputData)) {
            $columns = preg_replace('/[^a-z0-9_]+/i', '', array_keys($inputData));
            $values = array_map(function ($key, $value) {
                if ($value === null) {
                    return 'NULL';
                }

                if ($key == 'data') {
                    return '\'' . json_encode($value) . '\'';
                }
                return (string) SQLite3::escapeString($value);
            }, $columns, array_values($inputData));

            for ($i = 0; $i < count($columns); $i++) {
                if (strlen($columns[$i]) == 0 || $values[$i] == 'NULL') {
                    continue;
                }
                $key_values[$columns[$i]] = $values[$i];
            }

            // build the SET part of the UPDATE SQL command for PUT
            if ($this->method == 'PUT') {
                $count = 0;
                for ($i = 0; $i < count($columns); $i++) {
                    $k = $columns[$i];
                    if ($columns[$i] == 'id') {
                        continue;
                    }

                    $set .= ($count > 0 ? ',' : '') . "`$k`=:$k";
                    $count++;
                }
            }

            // build the VALUES part of the INSERT SQL command for POST
            if ($this->method == 'POST') {
                $vstr = '(';
                $count = 0;
                for ($i = 0; $i < count($columns); $i++) {
                    if ($columns[$i] == 'id') {
                        continue;
                    }

                    $vstr .= ($count > 0 ? ', ' : '') . '`' . $columns[$i] . '`';
                    $count++;
                }
                $vstr .= ') VALUES (';
                $count = 0;
                for ($i = 0; $i < count($columns); $i++) {
                    if ($columns[$i] == 'id') {
                        continue;
                    }

                    $vstr .= ($count > 0 ? ', ' : '') . ':' . $columns[$i];
                    $count++;
                }
                $vstr .= ')';
            }
        }

        $tablefields = '*';

        if ($table == 'palliatives' && !$idPercept) {
            $tablefields = 'id, testid, shortname, longname, laboratory';
        }
        if ($table == 'users') {
            if ($adminPercept) {
                echo json_encode($this->auth->admin_getusers());

            } else {
                echo json_encode($this->auth->getusers());

            }
            return;
        }

        $sql = "";

        // if ($userPercept) error_log("user logged in");

        if ($getPercept) {
            $sql = "SELECT $tablefields FROM `$table`";
        } else if ($putPercept && $idPercept && $userPercept) {
            $sql = "UPDATE `$table` SET $set";
            $key_values['id'] = $id;
            error_log("PUT: " . $sql);
        } else if ($postPercept && $userPercept) {
            $sql = "INSERT INTO `$table` $vstr";
            error_log("POST: " . $sql);
        } else if ($deletePercept && $idPercept && $adminPercept) {
            $sql = "DELETE FROM `$table`";
            error_log("DELETE: " . $sql);
        }

        if (strlen($sql) && count($queryParams)) {
            $sql = $sql . " WHERE ";
            foreach ($queryParams as $key => &$value) {
                if (is_numeric($value)) {
                    $sql = $sql . "$key = :$key";
                } else {
                    $sql = $sql . "$key LIKE :$key";
                }
            }
            $stmt = $this->db->prepare($sql);
            foreach ($queryParams as $key => &$value) {
                $stmt->bindValue(":$key", $value);
            }
            $stmtPercept = true;
            // error_log("Query Parameters: $sql");
        }

        // bind values to query
        if ($postPercept || $putPercept) {
            if (!isset($stmt)) {
                $stmt = $this->db->prepare($sql);
            }
            foreach ($key_values as $key => &$value) {
                $stmt->bindValue(":$key", $value);
            }
        }

        if ($queryPercept) {
            error_log($_SERVER['QUERY_STRING']);
        }

        $result = null;
        if (isset($stmt)) {
            $result = $stmt->execute();
        } else if ($getPercept) {
            $result = $this->db->query($sql);
        } else {
            $result = $this->db->exec($sql);
        }

        if ($postPercept) {
            $id = $this->db->lastInsertRowID();
            // error_log('INSERTED id=' . $id);
        }

        $lastErrorMsg = $this->db->lastErrorMsg();

        // DEBUG CODE
        $log = "<br/>METHOD: " . $this->method . " | TABLE: " . $table . " | ID: " . $id . " | input: " . $this->fileContents . " | " . SQLite3::escapeString($sql) . " | " . $this->db->lastErrorMsg();
        $date = date('m/d/Y h:i:s a', time());
        $this->db->exec("INSERT INTO log (dtg, log) VALUES ('${date}', '${log}');");
        // END DEBUG CODE

        if (!$result) {
            error_log("Ugggghhhhh");
            http_response_code(404);
            die(json_encode($lastErrorMsg+"<br/>"+$sql));
        }

        // requery if not a GET because we want to return an array
        if ($this->method != 'GET') {
            $sql = "SELECT $tablefields FROM `$table`" . ($id ? " WHERE id=$id" : '');
            $result = $this->db->query($sql);
        }

        $isArray = $id > 0 ? false : true;

        $tablerows = array();
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $tablerow = array();
            foreach ($row as $akey => &$value) {
                if ($akey == 'data') {
                    $value = json_decode($value);
                } else {
                    $value = str_replace('\'\'', '\'', $value);
                }
                $tablerow[$akey] = $value;
            }
            array_push($tablerows, $tablerow);
        }
        if ($isArray) {
            echo json_encode($tablerows);
        } else if (count($tablerows) > 0) {
            echo json_encode($tablerows[0]);
        } else {
            echo json_encode(array());
        }
        // var_dump($tablerows);
    }
}

$service = new Service();
$service->outputHeader();
if ($service->processAuth()) {

} else {
    $service->processREST();
}
