<?php
    header('Access-Control-Allow-Origin: *');
    include 'dustdb.php';

    $db = new DustDB();
    if (!$db) {
        http_response_code(404);
        die(json_encode($db->lastErrorMsg()));
    }

    // This came from https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/
    // under an MIT License.
    $method = $_SERVER['REQUEST_METHOD'];
    $request = isset($_SERVER['PATH_INFO']) ? explode('/', trim($_SERVER['PATH_INFO'], '/')) : array();
    $fileContents = file_get_contents('php://input');
    $input = json_decode($fileContents, true);

    if($method == 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
        header('Access-Control-Max-Age: 1000');
        if(array_key_exists('HTTP_ACCESS_CONTROL_REQUEST_HEADERS', $_SERVER)) {
            header('Access-Control-Allow-Headers: ' . $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']);
        } else {
            header('Access-Control-Allow-Headers: *');
        }
        exit(0);
    }

    header('Content-Type: application/json');

    $table = preg_replace('/[^a-z0-9_]+/i', '', array_shift($request));
    $key = array_shift($request) + 0;

    $set = '';
    $vstr = '';

    if (is_array($input)) {
        $columns = preg_replace('/[^a-z0-9_]+/i', '', array_keys($input));
        $values = array_map(function ($key, $value) {
            if ($value === null) return null;
            if ($key == 'data') return '\'' . json_encode($value) . '\'';
            return '"' . (string)SQLite3::escapeString($value) . '"';
        }, $columns, array_values($input));    

        // build the SET part of the UPDATE SQL command for PUT
        if ($method == 'PUT') {
            for ($i = 0; $i < count($columns); $i++) {
                $set .= ($i > 0 ? ',':'') . '`' . $columns[$i] . '`=';
                $set .= ($values[$i] === null) ? 'NULL' : $values[$i];
            }    
        }

        // build the VALUES part of the INSERT SQL command for POST
        if ($method == 'POST') {
            $vstr = '(';
            for ($i = 0; $i < count($columns); $i++) {
                $vstr .= ($i > 0 ? ', ': '') . '`' . $columns[$i] . '`';
            }
            $vstr .= ') VALUES (';
            for ($i = 0; $i < count($columns); $i++) {
                $vstr .= ($i > 0 ? ', ': '');
                $vstr .= ($values[$i] === null) ? 'NULL' : $values[$i];
            }
            $vstr .= ')';    
        }
    }

    // create SQL based on HTTP method
    switch ($method) {
        case 'GET':
            $sql = "SELECT * FROM `$table`" . ($key ? " WHERE id=$key" : '');
            break;
        case 'PUT':
            $sql = "UPDATE `$table` SET $set WHERE id=$key";
            break;
        case 'POST':
            $sql = "INSERT INTO `$table` $vstr";
            break;
        case 'DELETE':
            $sql = "DELETE FROM `$table` WHERE id=$key";
            break;
    }

    // $result = $db->query($sql);

    if ($method == 'GET') {
        $result = $db->query($sql);
    } else {
        $result = $db->exec($sql);
    }

    $lastErrorMsg = $db->lastErrorMsg();
    
    $log = "<br/>METHOD: " . $method . " | TABLE: " . $table . " | KEY: " . $key . " | input: " . $fileContents . " | " . SQLite3::escapeString($sql) . " | " . $db->lastErrorMsg();
    $date = date('m/d/Y h:i:s a', time());
    $db->exec("INSERT INTO log (dtg, log) VALUES ('${date}', '${log}');");

    if (!$result) {
        http_response_code(404);
        die(json_encode($lastErrorMsg + "<br/>" + $sql));
    }


    // requery if not a GET
    if ($method != 'GET') {
        $sql = "SELECT * FROM `$table`" . ($key ? " WHERE id=$key" : '');
        $result = $db->query($sql);
    }
    if (!$key) echo '[';
    $i = 0;
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        if ($i++ != 0) echo ", ";
        // if (array_key_exists('data', $row)) {
        //     $row['data'] = json_decode($row['data']);
        // }
        foreach ($row as $akey => &$value) {
            if ($akey == 'data') {
                $value = json_decode($value);
            } else {
                $value = str_replace('\'\'', '\'', $value);
            }
        }
        echo json_encode($row);
    }
    if (!$key) echo ']';
?>