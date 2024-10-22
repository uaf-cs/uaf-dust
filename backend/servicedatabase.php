<?php

$auth = new AuthDatabase();
$auth->authenticate();

class ServiceDatabase extends SQLite3
{
    public function __construct()
    {
        $this->open(SERVICEDB);
    }

    public function createDatabase()
    {
        $sql = <<<EOF
                DROP TABLE IF EXISTS palliatives;
                DROP TABLE IF EXISTS log;
EOF;
        $ret = $this->exec($sql);
        $results = array(
            'operation' => 'create',
            'results' => 'success',
            'result' => true,
        );
        if (!$ret) {
            $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
            $results['result'] = false;
        }

        $sql = <<<EOF
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
            $results['result'] = false;
        }

        $sql = <<<EOF
                INSERT INTO palliatives (userid, testid, shortname, longname, description, data, mprt)
                VALUES (1, 'T-000', 'Water', 'Water', 'A description of water', '[]', 0.0);
EOF;
        $ret = $this->exec($sql);
        if (!$ret) {
            $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
            $results['result'] = false;
        }
        return $results;
    }

    public function alterDatabase()
    {
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
            'result' => true,
        );
        if (!$ret) {
            $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
            $results['result'] = false;
        }
        return $results;
    }

    /**
     * addUser creates a new user in the database with the specified properties. If
     * the user already exists, this method only returns the id of the existing user,
     * otherwise it returns the newly created id. Returns 0 if failure.
     * @param $user is type User
     */
    public function addUser($user)
    {
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
    public function updateUser($user)
    {
        $sql = <<<EOF
                UPDATE
EOF;
    }

    /**
     * getUsers returns a JSON object representing the Users table
     */
    public function getUsers()
    {
        $results = array(
            'operation' => 'getUsers()',
            'results' => 'success',
            'result' => true,
        );

        $sql = 'SELECT * FROM `users`';
        $ret = $this->exec($sql);
        if (!$ret) {
            $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
            $results['result'] = false;
        } else {
            $results['results'] = json_encode($ret);
        }
        return $results;
    }

    /**
     * getTable returns a JSON object representing a table
     */
    public function getTable($table)
    {
        $results = array(
            'operation' => 'getTable()',
            'results' => 'success',
            'result' => true,
        );

        $results['operation'] = $sql = "SELECT * FROM `${table}`;";
        $ret = $this->query($sql);
        if (!$ret) {
            $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . var_export($this->lastErrorMsg());
            $results['result'] = false;
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