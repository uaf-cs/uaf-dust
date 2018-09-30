<?php
    
    header("Access-Control-Allow-Origin: *");
    // header('Content-Type: application/json');

    include './dustdb.php';

    // $filedb = new PDO('sqlite:dust.sqlite3');
    // if (!$filedb) {
    //     $db = new DustDB();
    //     if (!$db) {
    //         echo "Unable to open database!";
    //         http_response_code(404);
    //         die($db->lastErrorMsg());
    //     } else {
    //         echo "Created database successfully";
    //     }
    //     $db->createDatabase();
    //     $filedb = new PDO('sqlite:dust.sqlite3');
    // }

    $db = new DustDB();
    if (!$db) {
        http_response_code(404);
        die(json_encode($db->lastErrorMsg()));
    }

    class RequestResponse {
        function __construct() {
            $this->request = '';
            $this->response = '';
            $this->token = '';
        }
    }

    $rr = new RequestResponse();
    $rr->response = '';

    $method = $_SERVER['REQUEST_METHOD'];
    if ($method != 'POST') {
        // http_response_code('404');
        // die('function not found');
        $rr->response = 'function not found';
    } else {
        $request = isset($_SERVER['PATH_INFO']) ? explode('/', trim($_SERVER['PATH_INFO'], '/')) : array();
        $fileContents = file_get_contents('php://input');
        $input = json_decode($fileContents, true);
        $rr->response = "success";

        $db = new DustDB();
        switch($_POST['request']) {
        case 'initialize':
            $rr->response = print_r($db->createDatabase());
            break;
        case 'alter':
            $rr->response = print_r($db->alterDatabase());
            break;
        case 'adduser':
            $db->addUser($input['param1'], $input['param2']);
            $rr->response = 'adding user ' . $input['param1'];
            break;
        default:
            $rr->response = 'service does not exist';
            break;
        }

        $rr->response = json_encode($rr->response);
    }
?>
<html>
    <head>DustDB Admin Functions</head>

    <body>
        <h2>Request</h2>
        <form action="admin.php" method="post">
            Request: <input type="text" name="request"><br/>
            Param1: <input type="text" name="param1"><br/>
            Param2: <input type="text" name="param2"><br/>
            Response: <input type="text" name="response" <?php echo "value='$rr->response'" ?>><br/>
            Token: <input type="text" name="token"><br/>
            <input type="submit">
        </form>

        <h2>Users</h2>
        <?php
        $db = new DustDB();
        $results = $db->getTable('users');
        echo "operation: " . $results['operation'];
        echo "<br/>result: " . $results['result'];
        echo "<br/>results: " . $results['results'];
        ?>

        <h2>Palliatives</h2>
        <?php
        $db = new DustDB();
        $results = $db->getTable('palliatives');
        echo "operation: " . $results['operation'];
        echo "<br/>result: " . $results['result'];
        echo "<br/>results: " . $results['results'];
        ?>

        <h2>Log</h2>
        <?php
        $db = new DustDB();
        $results = $db->getTable('log');
        echo "operation: " . $results['operation'];
        echo "<br/>result: " . $results['result'];
        echo "<br/>results: " . $results['results'];
        $db->exec('DELETE FROM log;')
        ?>
</body>

</html>