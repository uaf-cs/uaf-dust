<?php
    class User {
        function __construct() {
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
        function __construct() {
            $this->id = 0;
            $this->userid = 0;
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
                DROP TABLE auth;
                DROP TABLE log;
EOF;
            $ret = $this->exec($sql);
            $results = array(
                'operation' => 'create',
                'results' => 'success',
                'result' => TRUE
            );
            if (!$ret) {
                $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
                $results['result'] = FALSE;
            }

            $sql =<<<EOF
                CREATE TABLE users
                (id          INTEGER PRIMARY KEY AUTOINCREMENT,
                username     TEXT NOT NULL,
                firstname    TEXT,
                lastname     TEXT,
                organization TEXT,
                email        TEXT);

                CREATE TABLE auth
                (userid     INTEGER PRIMARY KEY,
                 password   TEXT NOT NULL,
                 flags      INTEGER NOT NULL);

                CREATE TABLE log
                (dtg DATE,
                 log        TEXT);

                CREATE TABLE palliatives
                (id          INTEGER PRIMARY KEY AUTOINCREMENT,
                userid       INTEGER,
                testid       TEXT,
                shortname    TEXT NOT NULL,
                longname     TEXT,
                laboratory   TEXT,
                testDate     TEXT,
                testTech     TEXT,
                analysisDate TEXT,
                analysisTech TEXT,
                description  TEXT,
                data         TEXT,
                mprt         REAL,
                mprtTime     REAL);
EOF;
            $ret = $this->exec($sql);
            if (!$ret) {
                $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
                $results['result'] = FALSE;
            }

            $sql =<<<EOF
                INSERT INTO users (username, firstname, lastname, organization, email)
                VALUES ('jbmetzgar', 'Jonathan', 'Metzgar', 'UAF', 'jbmetzgar@alaska.edu');

                INSERT INTO users (username, firstname, lastname, organization, email)
                VALUES ('dmurph', 'Diane', 'Murph', 'UAF', 'jmmurph@alaska.edu');

                INSERT INTO palliatives (userid, testid, shortname, longname, description, data, mprt)
                VALUES (1, 'T-000', 'Water', 'Water', 'A description of water', '[]', 0.0);
EOF;
            $ret = $this->exec($sql);
            if (!$ret) {
                $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
                $results['result'] = FALSE;
            }
            return $results;
        }

        function alterDatabase() {
            $sql = <<<EOF
            ALTER TABLE palliatives ADD COLUMN testDate TEXT;
            ALTER TABLE palliatives ADD COLUMN testTech TEXT;
            ALTER TABLE palliatives ADD COLUMN analysisDate TEXT;
            ALTER TABLE palliatives ADD COLUMN analysisTech TEXT;
            ALTER TABLE palliatives ADD COLUMN laboratory TEXT;
EOF;
            $ret = $this->exec($sql);
            $results = array(
                'operation' => 'create',
                'results' => 'success',
                'result' => TRUE
            );
            if (!$ret) {
                $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
                $results['result'] = FALSE;
            }
            return $results;
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
            $results = array(
                'operation' => 'getUsers()',
                'results' => 'success',
                'result' => TRUE
            );

            $sql = 'SELECT * FROM `users`';
            $ret = $this->exec($sql);
            if (!$ret) {
                $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
                $results['result'] = FALSE;
            } else {
                $results['results'] = json_encode($ret);
            }
            return $results;
        }

        /**
         * getTable returns a JSON object representing a table
         */
        function getTable($table) {
            $results = array(
                'operation' => 'getTable()',
                'results' => 'success',
                'result' => TRUE
            );

            $results['operation'] = $sql = "SELECT * FROM `${table}`;";
            $ret = $this->query($sql);
            if (!$ret) {
                $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
                $results['result'] = FALSE;
            } else {
                $json = '[ ';
                $count = 0;
                while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
                    $json .= "<br/>";
                    $json .= ($count++ == 0 ? '' : ', ') . json_encode($row);
                    //$count++;
                }
                $json .= ']';

                $results['results'] = $json;
            }
            return $results; 
        }
    }
?>