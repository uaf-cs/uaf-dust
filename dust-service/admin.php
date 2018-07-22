<?php
    
    header("Access-Control-Allow-Origin: *");
    // header('Content-Type: application/json');

    include './dustdb.php';

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
        $request = explode('/', trim($_SERVER['PATH_INFO'], '/'));
        $fileContents = file_get_contents('php://input');
        $input = json_decode($fileContents, true);
        $rr->response = "success";

        $db = new DustDB();
        switch($_POST['request']) {
        case 'initialize':
            $db->createDatabase();    
            $rr->response = 'initialized database';
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
        <h2>Response</h2>
<pre>
<?php
    echo json_encode(var_dump($input));
?>
</pre>
</body>

</html>