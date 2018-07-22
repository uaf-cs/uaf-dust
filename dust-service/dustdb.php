<?php
    class User {
        function User() {
            $this->id = 0;
            $this->username = 'nobody';
            $this->password = 'password';
            $this->password_hash = '';
            $this->flags = 0;
            $this->firstname = '';
            $this->lastname = '';
            $this->organization = '';
            $this->email = '';
        }

        function hash() {
            $this->password_hash = password_hash($this->password, PASSWORD_DEFAULT);
        }

        static function HttpGetColumns() {
            return 'id, username, flags, firstname, lastname, organization, email';
        }

        static function HttpGetFields() {
            return ':id, :username, :flags, :firstname, :lastname, :organization, :email';
        }

        static function HttpPutFields() {
            return ':id, :flags, :firstname, :lastname, :organization, :email';
        }

        static function HttpDeleteColumns() {
            return 'id';
        }

        static function HttpDeleteFields() {
            return ':id';
        }

        static function HttpAuthFields() {
            return ':id, :username, :password';
        }

        static function HttpPostColumns() {
            return 'id, username, password';
        }

        static function HttpPostFields() {
            return ':id, :username, :password';
        }
    }

    class Palliative {
        function Palliative() {
            $this->id = 0;
            $this->fkuser = 0;
            $this->testid = '';
            $this->shortname = '';
            $this->longname = '';
            $this->description = '';
            $this->data = '';
            $this->mprt = 0.0;
        }
    }

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
                password     TEXT NOT NULL,
                flags        INTEGER NOT NULL,
                firstname    TEXT NOT NULL,
                lastname     TEXT NOT NULL,
                organization TEXT NOT NULL,
                email        TEXT NOT NULL);

                CREATE TABLE palliatives
                (id         INTEGER PRIMARY KEY AUTOINCREMENT,
                fkuser      INTEGER NOT NULL,
                testid      TEXT NOT NULL,
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

        /**
         * addUser creates a new user in the database with the specified properties. If
         * the user already exists, this method only returns the id of the existing user,
         * otherwise it returns the newly created id. Returns 0 if failure.
         * @param $user is type User
         */
        function addUser($user) {
            $hashedPassword = password_hash($user->password, PASSWORD_DEFAULT);
            $user->hash();
            $postFields = User::HttpPostFields();

            $sql = <<<EOF
                INSERT INTO users (id, username, password)
                VALUES(${postFields});
EOF;
            // SQLite3Stmt stmt
            $stmt = $this->prepare($sql);
            $stmt->bindValue(':username', $user->username);
            $stmt->bindValue(':password', $user->password_hash);
            $stmt->bindValue(':flags', $user->flags);
            $stmt->bindValue(':firstname', $user->firstname);
            $stmt->bindValue(':lastname', $user->lastname);
            $stmt->bindValue(':organization', $user->organization);
            $stmt->bindValue(':email', $user->email);
            $result = $stmt->execute();

            $id = 0;
            if ($row = $result->fetchArray()) {
                if (isset($row['id'])) {
                    $id = $row['id'];
                }
            }
            return $id;
        }

        /**
         * updateUser($user) updates the user information table with new information.
         * This is used for HTTP PUT requests.
         */
        function updateUser($user) {
            $sql = <<<EOF
                UPDATE
EOF;
        }

        /**
         * getUsers returns a JSON object representing the Users table
         */
        function getUsers() {
            $sql = <<<EOF
                SELECT username, flags, firstname, lastname, organization, email FROM `users`;
EOF;
            $ret = $this->exec($sql);
        }
    }
?>