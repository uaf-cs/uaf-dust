<?php
    include 'dustdb.php';

    $filedb = new PDO('sqlite:dust.sqlite3');
    if (!$filedb) {
        $db = new DustDB();
        if (!$db) {
            echo "Unable to open database!";
            http_response_code(404);
            die($db->lastErrorMsg());
        } else {
            echo "Created database successfully";
        }
        $db->createDatabase();
        $filedb = new PDO('sqlite:dust.sqlite3');
    }

    if (!$filedb) {
        echo "Unable to open database!";
        http_response_code(404);
        die($db->lastErrorMsg());
    } else {
        //echo "Opened database successfully";
    }
    $db = new DustDB();
?>
<!DOCTYPE html>
<html>
    <body>
<?php
    echo "Opened database successfully";

    // This came from https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/
    // under an MIT License.
    $method = $_SERVER['REQUEST_METHOD'];
    $request = explode('/', trim($_SERVER['PATH_INFO'], '/'));
    $fileContents = file_get_contents('php://input');
    $input = json_decode($fileContents, true);

    echo "<br>METHOD ";
    var_dump($method);
    echo "<br>REQUEST ";
    var_dump($request);
    echo "<br>INPUT ";
    var_dump($input);

    $table = preg_replace('/[^a-z0-9_]+/i', '', array_shift($request));
    $key = array_shift($request) + 0;

    echo "<br>TABLE ";
    var_dump($table);
    echo "<br>KEY ";
    var_dump($key);

    $link = null;
    $columns = preg_replace('/[^a-z0-9_]+/i', '', array_keys($input));
    $values = array_map(function ($value) use ($link) {
        if ($value === null) return null;
        return (string)$value;
        //return mysqli_real_escape_string($link, (string)$value);
    }, array_values($input));

    echo "<br>COLUMNS ";
    var_dump($columns);
    echo "<br>VALUES ";
    var_dump($values);

    // build the SET part of the SQL command
    $set = '';
    for ($i = 0; $i < count($columns); $i++) {
        $set .= ($i > 0 ? ',':'') . '`' . $columns[$i] . '`=';
        $set .= ($values[$i] === null) ? 'NULL' : '"' . $values[$i] . '"';
    }

    echo "<br>SET ";
    var_dump($set);

    // create SQL based on HTTP method
    switch ($method) {
        case 'GET':
            $sql = "SELECT * FROM `$table`" . ($key ? " WHERE id=$key" : '');
            break;
        case 'PUT':
            $sql = "UPDATE `$table` SET $set WHERE id=$key";
            break;
        case 'POST':
            $sql = "INSERT INTO `$table` SET $set";
            break;
        case 'DELETE':
            $sql = "DELETE `$table` WHERE id=$key";
            break;
    }
    
    echo "<br>SQL ";
    var_dump($sql);
    if ($db->createDatabase()) {
        echo "<br>CREATED DATABASE<br>";
    } else {
        echo "<br>UNABLE TO CREATE DATABASE<br>";
    }
    $result = $db->query($sql);

    if (!$result) {
        echo "<br>IT DIDN'T WORK :(";
        // http_response_code(404);
        // die($db->lastErrorMsg());
    } else {
        echo "<br>RESULT";
        var_dump($result);
    }

    echo "<br>RESULTS";
    if ($method == 'GET') {
        if (!$key) echo '[';
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            echo "<br>\n";
            echo json_encode($row);
        }
        if (!$key) echo ']';
    } else if ($method == 'POST') {
        // insert new record
    } else {
        // update/delete record
    }
?>
</body>
</html>