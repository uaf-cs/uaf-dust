<?php
    class DustDB extends SQLite3 {
        function __construct() {
            $this->open("dust.sqlite");
        }
    }

    $db = new DustDB();
    if (!db) {
        echo $db->lastErrorMsg();
    } else {
        echo "Opened database successfully";
    }
?>