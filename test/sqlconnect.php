<!DOCTYPE html>
<html lang="en">
<body>
<h1>SQL Connect</h1>
<?php
   class MyDB extends SQLite3 {
      function __construct() {
         $this->open('test.db');
      }
   }
   try {
        $db = new MyDB();
        if(!$db) {
            echo "Error creating database";
            echo $db->lastErrorMsg();
        } else {
            echo "Opened database successfully\n";
        }
    }
    catch(Exception $e) {
        echo 'Message: ' .$e->getMessage();
    }
?>
</body>
</html>