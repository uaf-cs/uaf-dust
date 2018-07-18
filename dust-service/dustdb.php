<?php
    class DustDB extends SQLite3 {
        function __construct() {
            $this->open("dust.sqlite3");
        }

        function createDatabase() {
            $sql =<<<EOF
                DROP TABLE users;
                DROP TABLE palliatives;
EOF;
            $ret = $this->exec($sql);
            if (!$ret) {
                echo $this->lastErrorMsg();
                var_dump($sql);
                //return false;
            }

            $sql =<<<EOF
                CREATE TABLE users
                (id          INTEGER PRIMARY KEY AUTOINCREMENT,
                username     TEXT NOT NULL,
                firstname    TEXT NOT NULL,
                lastname     TEXT NOT NULL,
                organization TEXT NOT NULL,
                email        TEXT NOT NULL);

                CREATE TABLE palliatives
                (id         INTEGER PRIMARY KEY AUTOINCREMENT,
                fkuser      INTEGER NOT NULL,
                shortname   TEXT NOT NULL,
                longname    TEXT NOT NULL,
                description TEXT NOT NULL,
                data        TEXT NOT NULL,
                mprt        REAL NOT NULL);
EOF;
            $ret = $this->exec($sql);
            if (!$ret) {
                echo $this->lastErrorMsg();
                var_dump($sql);
                return false;
            }

            $sql =<<<EOF
                INSERT INTO users (username, firstname, lastname, organization, email)
                VALUES ('jbmetzgar', 'Jonathan', 'Metzgar', 'UAF', 'jbmetzgar@alaska.edu');
                INSERT INTO users (username, firstname, lastname, organization, email)
                VALUES ('dmurph', 'Diane', 'Murph', 'UAF', 'jmmurph@alaska.edu');

                INSERT INTO palliatives (fkuser, shortname, longname, description, data, mprt)
                VALUES (1, 'Water', 'Water', 'A description of water', '', 0);
EOF;
            $ret = $this->exec($sql);
            if (!$ret) {
                echo $this->lastErrorMsg();
                var_dump($sql);
                return false;
            }
            return true;
        }
    }
?>