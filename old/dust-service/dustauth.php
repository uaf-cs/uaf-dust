<?php

session_start();
foreach ($argv as $arg) {
    $e=explode("=",$arg);
    if(count($e)==2)
        $_GET[$e[0]]=$e[1];
    else   
        $_GET[$e[0]]=0;
}

class DustAuth extends SQLite3
{
    const dustauth_db = 'db/dustauth.sqlite';
    const dustauth_create_sql = <<<EOF
DROP TABLE IF EXISTS users;

CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT NOT NULL UNIQUE,
hash TEXT,
role TEXT,
fullname TEXT NOT NULL,
organization TEXT,
email TEXT,
lockedout INTEGER NOT NULL DEFAULT 0,
authfailures INTEGER NOT NULL DEFAULT 0
);

INSERT INTO users (username, hash, role, fullname, organization, email)
VALUES ('jbmetzgar', '', 'admin', 'Jonathan Metzgar', 'UAF', 'jbmetzgar@alaska.edu');
EOF;

    function __construct() {
        parent::__construct(self::dustauth_db);
        if (!$this->exists()) {
            print "db does not exist or does not contain 'users'";
            $this->createDB();
        }
        $this->openDB();
        $this->isloggedin = false;
        $this->isadmin = false;
        $this->username = '';
        $this->userid = '';
        $this->userrole = '';
        $this->userfullname = '';
        $this->userorganization = '';
        $this->useremail = '';
    }

    function exists() {
        if (!file_exists(self::dustauth_db)) {
            print "no database";
            return false;
        }
        if (!$this->query('SELECT * FROM users')) {
            print "no users";
            return false;
        }
        return true;
    }

    function createDB() {
        $results = array(
            'operation' => 'create',
            'results' => 'success',
            'result' => true
        );
        $sql = self::dustauth_create_sql;
        $ret = $this->exec(self::dustauth_create_sql);
        if (!$ret) {
            $results['results'] = "SQL: '${sql}' | LastErrorMsg(): " . $this->lastErrorMsg();
            $results['result'] = false;
        } else {
            $hash = password_hash('uafdust', PASSWORD_DEFAULT);
            $this->updatefield('jbmetzgar', 'hash', $hash);
            // update the default user with a default password
            /*
            $sql = "UPDATE users SET hash = :hash WHERE username = :username;";
            $stmt = $this->prepare($sql);
            $stmt->bindValue(':hash', password_hash('uafdust', PASSWORD_DEFAULT));
            $stmt->bindValue(':username', 'jbmetzgar');
            $stmt->execute();
             */
        }
        $this->close();

        return $results;
    }

    function openDB() {
        if (!$this->exists()) {
            $this->createDB();
        }
    }

    function resetState() {
        $this->isloggedin = false;
        $this->isadmin = false;
        $this->username = '';
        $this->userid = '';
        $this->userrole = '';
        $this->userfullname = '';
        $this->userorganization = '';
        $this->useremail = '';
    }

    function begin() {
        session_start();
    }

    function session($id) {
        return isset($_SESSION[$id]) ? $_SESSION[$id] : '';
    }

    function post($id) {
        return isset($_POST[$id]) ? $_POST[$id] : '';
    }

    function printsession() {
        print "\n<br>" . $this->session('userid');
        print "\n<br>" . $this->session('username');
        print "\n<br>" . $this->session('userrole');
        print "\n<br>" . $this->session('userfullname');
        print "\n<br>" . $this->session('userorganization');
        print "\n<br>" . $this->session('useremail');
    }

    function setsession() {
        $_SESSION['userid'] = $this->userid;
        $_SESSION['username'] = $this->username;
        $_SESSION['userrole'] = $this->userrole;
        $_SESSION['userfullname'] = $this->userfullname;
        $_SESSION['userorganization'] = $this->userorganization;
        $_SESSION['useremail'] = $this->useremail;
    }

    function getsession() {
        if (isset($_SESSION['userid'])) {
            $this->userid = $_SESSION['userid'];
            $this->username = $_SESSION['username'];
            $this->userrole = $_SESSION['userrole'];
            $this->userfullname = $_SESSION['userfullname'];
            $this->userorganization = $_SESSION['userorganization'];
            $this->useremail = $_SESSION['useremail'];
            $this->setflags();            
        } else {
            $this->resetState();
            return;
        }
    }

    function setflags() {
        $this->isloggedin = false;
        $this->isadmin = false;
        if (!empty($this->username)) {
            $this->isloggedin = true;
        }
        if ($this->userrole == 'admin') {
            $this->isadmin = true;
        }
    }

    function updatefield($username, $fieldname, $fieldvalue) {
        $sql = "UPDATE users SET $fieldname = :fieldvalue WHERE username = :username;";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':username', $username);
        $stmt->bindValue(':fieldvalue', $fieldvalue);
        $result = $stmt->execute();
        if (!$result) {
            print "<br>error updating $fieldname with value $fieldvalue for $username";
            print "<br>$sql";
        }
    }

    function authfailure($username, $failures) {
        $this->updatefield($username, "authfailures", $failures + 1);

        $maxFailures = 5;
        if ($failures < $maxFailures) {
            $most = max($maxFailures - $failures, 0);
            print "<br>You have {$most} tries left";
        } else {
            $this->updatefield($username, "lockedout", 1);
            print "<br>You are locked out. Contact an adminstrator.";
        }
    }

    function login() {
        // User login and password is a POST variable
        //
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "SELECT * FROM users "
            . "WHERE username = :username AND lockedout = 0";
        $stmt = $this->prepare($sql);
        if (!$stmt) {
            print "could not prepare statement";
            print "'" . $sql . "'";
            return;
        }
        $stmt->bindValue(':username', $username, SQLITE3_TEXT);
        $result = $stmt->execute();
        if ($result->numColumns()) {
            while ($row = $result->fetchArray()) {
                $hash = $row['hash'];
                if (!password_verify($password, $hash)) {
                    $this->authfailure($username, $row['authfailures']);
                    return false;
                }
                $this->userid = $row['id'];
                $this->username = $row['username'];
                $this->userrole = $row['role'];
                $this->userfullname = $row['fullname'];
                $this->userorganization = $row['organization'];
                $this->useremail = $row['email'];
                $this->setsession();
                $this->setflags();
                $this->updatefield($username, "authfailures", 0);                
                return true;
            }
            print "<br>Account locked or does not exist\n";
            return false;
        } else {
            print "<br>Account locked or does not existi\n";
            return false;
        }
    }

    function logout() {
        session_unset();
        session_destroy();
        $this->resetState();
        session_start();
    }

    function authenticate() {
        $logout = false;
        $login = false;
        if (isset($_GET['logout'])) {
            $logout = true;
        }

        if (isset($_GET['login'])) {
            $login = true;
        }

        if ($login && $logout) {
            die("login and logout cannot both be specified");
        }

        if ($logout) {
            $this->logout();
            unset($_GET['logout']);
            $this->authenticate();
            return;
            // print "<meta http-equiv='refresh' content='0;URL=dustauth.php' />";
            // exit(0);
        }

        $this->getsession();

        if ($login && !$this->isloggedin) {
            if (isset($_POST['username']) && isset($_POST['password'])) {
                $this->login();
            }
        }
    }

    function getuser($userid) {
        $user = array(
            "userid" => "",
            "username" => "",
            "role" => "",
            "fullname" => "",
            "organization" => "",
            "email" => "",
        );
        $sql = "SELECT id, username, role, fullname, organization, email "
            . "FROM users WHERE id = :id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $userid);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>SELECT query failed";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}";
        }
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $user['userid'] = $row['id'];
            $user['username'] = $row['username'];
            $user['role'] = $row['role'];
            $user['fullname'] = $row['fullname'];
            $user['organization'] = $row['organization'];
            $user['email'] = $row['email'];
            return $user;
        }
        return $user;
    }

    function getusers() {
        $sql = "SELECT id, username, role, fullname, organization, email"
            . "FROM users";
        $result = $this->query($sql);
        $users = array();
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $user = array();
            $user['userid'] = $row['id'];
            $user['role'] = $row['role'];
            $user['fullname'] = $row['fullname'];
            $user['organization'] = $row['organization'];
            $user['email'] = $row['email'];
            array_push($users, $user);
        }
        return $users;
    }

    function updateuser() {
        if (!isset($_GET['user'])) return;
        if (!isset($_GET['update'])) return;

        $fullname = $this->post('fullname');
        $organization = $this->post('organization');
        $email = $this->post('email');

        $id = $this->post('userid');
        if ($id < 1) return;

        if ($id != $this->userid) {
            print "<br>You are only allowed to change your own information";
            return;
        }

        $sql = "UPDATE users SET fullname=:fullname, organization=:organization, email=:email "
            . "WHERE id=:id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':fullname', $fullname);
        $stmt->bindValue(':organization', $organization);
        $stmt->bindValue(':email', $email);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>UPDATE query failed";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}";
        }
    }

    function updatepasswd() {
        if (!$this->isloggedin) return false;
        if (!isset($_GET['user'])) return false;
        if (!isset($_GET['passwd'])) return false;

        $id = $this->post('userid');
        if ($id < 1) return;
        if ($id != $this->userid) {
            print "<br>You may only change your password";
            return false;
        }

        $oldpassword = $this->post('oldpassword');
        $newpassword1 = $this->post('newpassword1');
        $newpassword2 = $this->post('newpassword2');

        print "[{$this->userid}], [$id], [$oldpassword], [$newpassword1], [$newpassword2]";

        $oldpasswordVerified = false;
        $sql = "SELECT id, hash FROM users WHERE id=:id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $result = $stmt->execute();
        if ($result->numColumns()) {
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $hash = $row['hash'];
                if (password_verify($oldpassword, $hash)) {
                    $oldpasswordVerified = true;
                }
            }
        }
        for($l = strlen($oldpassword), $i = 0; $i < $l; $i++)
        {
            $oldpassword[$i] = '@';
        }
        if (!$oldpasswordVerified) {
            print "<br/>Incorrect password";
            return false;
        }

        if (strlen($newpassword1) < 8) {
            print "<br>password must be at least 8 characters long";
            return false;
        }

        if ($newpassword1 != $newpassword2) {
            print "<br>New passwords do not match\n";
            return false;
        }

        $hash = password_hash($newpassword1, PASSWORD_DEFAULT);
        for($l = strlen($newpassword1), $i = 0; $i < $l; $i++)
        {
            $newpassword1[$i] = '@';
        }
        for($l = strlen($newpassword2), $i = 0; $i < $l; $i++)
        {
            $newpassword2[$i] = '@';
        }
        $sql = "UPDATE users SET hash=:hash WHERE id=:id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':hash', $hash);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>UPDATE query failed\n";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}\n";
            return false;
        }
        print "<br>password changed\n";
        return true;
    }

    function admin_getuser($userid) {
        $user = array(
            "userid" => "",
            "username" => "",
            "role" => "",
            "fullname" => "",
            "organization" => "",
            "email" => "",
            "lockedout" => 0,
            "authfailures" => 0
        );
        if (!$this->isadmin) return $user;
        $sql = "SELECT id, username, role, fullname, organization, email, lockedout, authfailures "
            . "FROM users WHERE id = :id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $userid);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>SELECT query failed";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}";
        }
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $user['userid'] = $row['id'];
            $user['username'] = $row['username'];
            $user['role'] = $row['role'];
            $user['fullname'] = $row['fullname'];
            $user['organization'] = $row['organization'];
            $user['email'] = $row['email'];
            $user['lockedout'] = $row['lockedout'];
            $user['authfailures'] = $row['authfailures'];
            return $user;
        }
        return $user;
    }

    function admin_getusers() {
        if (!$this->isadmin) return array();
        $sql = "SELECT id, username, role, fullname, organization, email, lockedout, authfailures "
            . "FROM users";
        $result = $this->query($sql);
        $users = array();
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $user = array();
            $user['userid'] = $row['id'];
            $user['username'] = $row['username'];
            $user['role'] = $row['role'];
            $user['fullname'] = $row['fullname'];
            $user['organization'] = $row['organization'];
            $user['email'] = $row['email'];
            $user['lockedout'] = $row['lockedout'];
            $user['authfailures'] = $row['authfailures'];
            array_push($users, $user);
        }
        return $users;
    }

    function admin_islockedout($username) {
        if (!$this->isadmin) return false;
        $sql = "SELECT lockedout FROM users WHERE lockedout <> 0 AND username = :username;";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':username', $usernamei, SQLITE3_TEXT);
        $result = $stmt->execute();
        $count = 0;
        while ($row = $result->fetchArray()) $count++;
        return $count;
    }

    function admin_adduser() {
        if (!$this->isadmin) return;
        if (!isset($_GET['adduser'])) return;
        $username = $this->post('username');

        if ($username == '' || strlen($username) < 5) return false;

        if ($this->usernameExists($username)) {
            print "<br>Username $username already exists!";
            return;
        }
        $password = $this->post('password');
        $fullname = $this->post('fullname');
        $organization = $this->post('organization');
        $email = $this->post('email');
        $lockedout = 0;
        $authfailures = 0;
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (username, hash, role, fullname, organization, email, lockedout, authfailures) "
            . "VALUES (:username, :hash, :role, :fullname, :organization, :email, :lockedout, :authfailures)";        
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':username', $username);
        $stmt->bindValue(':hash', $hash);
        $stmt->bindValue(':fullname', $fullname);
        $stmt->bindValue(':organization', $organization);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':lockedout', $lockedout);
        $stmt->bindValue(':authfailures', $authfailures);
        $result = $stmt->execute();
        if (!$result) { 
            print "INSERT query failed";
            echo `whoami`;
            print "Error code: $this->lastErrorCode()} {$this->lastErrorMsg()}";
        } else {
            $lastId = $this->lastInsertRowID();
            print "<br>Inserted new user $lastId";
        }
    }

    function admin_deluser() {
        if (!$this->isadmin) return;
        if (!isset($_GET['deluser'])) return;

        $id = $this->post('userid');
        if ($id < 1) return;

        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>DELETE query failed";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}";
        }
    }

    function admin_unlock() {
        if (!$this->isadmin) return;
        if (!isset($_GET['unlock'])) return;

        $id = $this->post('userid');
        if ($id < 1) return;

        $sql = "UPDATE users SET ";
        $sql = $sql . "lockedout = 0, authfailures = 0";
        $sql = $sql . " WHERE id = :id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>UPDATE query failed";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}";
        }
    }

    function admin_lock() {
        if (!$this->isadmin) return;
        if (!isset($_GET['lock'])) return;

        $id = $this->post('userid');
        if ($id < 1) return;

        $sql = "UPDATE users SET ";
        $sql = $sql . "lockedout = 1, authfailures = 0";
        $sql = $sql . " WHERE id = :id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>UPDATE query failed";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}";
        }
    }

    function usernameExists($username) {
        $sql = "SELECT username FROM users WHERE username = :username";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':username', $username);
        $result = $stmt->execute();
        if ($result->numColumns()) {
            while ($row = $result->fetchArray()) {
                return true;
            }
        }
        return false;
    }

    function admin_updateuser() {
        if (!$this->isadmin) return;
        if (!isset($_GET['user'])) return;
        if (!isset($_GET['update'])) return;

        $username = $this->post('username');
        $role = $this->post('role');
        $fullname = $this->post('fullname');
        $organization = $this->post('organization');
        $email = $this->post('email');

        $id = $this->post('userid');
        if ($id < 1) return;
        print "updating $id";

        $sql = "UPDATE users SET username=:username, role=:role, fullname=:fullname, organization=:organization, email=:email "
            . "WHERE id=:id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':username', $username);
        $stmt->bindValue(':role', $role);
        $stmt->bindValue(':fullname', $fullname);
        $stmt->bindValue(':organization', $organization);
        $stmt->bindValue(':email', $email);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>UPDATE query failed";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}";
        }
    }

    function admin_passwd() {
        if (!$this->isadmin) return;
        if (!isset($_GET['user'])) return;
        if (!isset($_GET['passwd'])) return;

        $id = $this->post('userid');
        if ($id < 1) return;
        $password = $this->post('password');

        if (strlen($password) < 8) {
            print "<br>password must be at least 8 characters long";
            return;
        }

        $hash = password_hash($password, PASSWORD_DEFAULT);
        print "<br>changing password\n";

        $sql = "UPDATE users SET hash=:hash WHERE id=:id";
        $stmt = $this->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':hash', $hash);
        $result = $stmt->execute();
        if (!$result) { 
            print "<br>UPDATE query failed\n";
            print "<br>Error code: {$this->lastErrorCode()} {$this->lastErrorMsg()}\n";
            return;
        }
        print "<br>password changed\n";
    }
}

$dustauth = new DustAuth();
$dustauth->authenticate();


echo <<<HTML
<html>
<head>
<title>UAFDUST System Administration</title>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<h1>UAFDUST Administration Page</h1>
HTML;

if ($dustauth->isloggedin) {
    print "{$dustauth->username} logged in | ";
    print "<a href='dustauth.php?logout'>log out</a>";
    echo <<<END_OF_TEXT
<form method="post" action="dustauth.php?logout">
<button type="submit">Logout</button>
</form>
<form method="post" action="dustauth.php?user&account">
<button type="submit">Account</button>
</form>
END_OF_TEXT;
}

if (!$dustauth->isloggedin) {
    print "<form action='dustauth.php?login' method='post'>";
    print "username: <input type='text' name='username'>";
    print "password: <input type='password' name='password'>";
    print "<input type='submit' value='login'>";
    print "</form>";
}

$userid = $dustauth->post('userid');
if ($userid == '')
    $userid = $dustauth->userid;

if ($dustauth->isadmin) {
    echo <<<HTML
<h2>Admin Panel</h2>
HTML;
    $dustauth->admin_lock();
    $dustauth->admin_unlock();
    $dustauth->admin_adduser();
    $dustauth->admin_deluser();
    $dustauth->admin_updateuser();
    $dustauth->admin_passwd();

    print "<h3>Users</h3>\n";
    $rows = $dustauth->admin_getusers();
    print "<table>\n";
    echo <<<TABLEHEADER
<tr>
<th>select</th>
<th>id</th>
<th>username</th>
<th>role</th>
<th>fullname</th>
<th>organization</th>
<th>email</th>
<th>locked</th>
<th>auth failures</th>
<th>lock</th>
<th>delete</th>
</tr>
TABLEHEADER;

    foreach ($rows as $row) {
        $userid = $row['userid'];
        $locked = $row['lockedout'] != 0;        
        print "<tr>";
        $action1 = 'dustauth.php?user';
        $action2 = 'dustauth.php?deluser';
        $button1 = "<button type='submit' name='userid' value='$userid'>Select</button>"; 
        $button2 = "<button type='submit' name='userid' value='$userid'>Delete</button>"; 
        print "<td>";
        print "<form action='$action1' method='post'>$button1</form>";
        print "</td>";
        print "<td>$userid</td>\n";
        print "<td>{$row['username']}</td>\n";
        print "<td>{$row['role']}</td>\n";
        print "<td>{$row['fullname']}</td>\n";
        print "<td>{$row['organization']}</td>\n";
        print "<td>{$row['email']}</td>\n";
        print "<td>{$row['lockedout']}</td>\n";
        print "<td>{$row['authfailures']}</td>\n";
        $userid = $row['userid'];
        if ($locked) {
            $lockedform = "<form action='dustauth.php?unlock' method='post'><button type='submit' name='userid' value='$userid'>Unlock</button></form>";
        } else {
            $lockedform = "<form action='dustauth.php?lock' method='post'><button type='submit' name='userid' value='$userid'>Lock</button></form>";
        }
        print "<td>$lockedform</td>";
        print "<td><form action='$action2' method='post'>$button2</form></td>";
        print "</tr>\n";
    }
    print "<tr><td><form method='post' action='dustauth.php?adduser'><button type='submit'>Add User</button></form></td></tr>";
    print "</table>\n";

    // add user
    if (isset($_GET['adduser'])) {
        $adduser = <<<END_OF_TEXT
<h3>Add User</h3>
<form method="post" action="dustauth.php?adduser">
<label>Username</label><input name="username" type="text" /><br />
<label>Password</label><input name="password" type="password" /><br />
<label>Full Name</label><input name="fullname" type="text" /><br />
<label>Organization</label><input name="organization" type="text" /><br />
<label>Email</label><input name="email" type="text" /><br />
<button type="submit" name='action' value="adduser">Add User</button>
</form>
<form method="post" action="dustauth.php">
<button type="submit">Cancel</button>
</form>
END_OF_TEXT;
    } else {
        $adduser = "";
    }
    print $adduser;

    if (isset($_GET['user']) && $userid > 0) {
        $row = $dustauth->admin_getuser($userid);
        $userid = $row['userid'];
        $username = $row['username'];
        $role = $row['role'];
        $fullname = $row['fullname'];
        $organization = $row['organization'];
        $email = $row['email'];
        echo <<<END_OF_TEXT
<h3>Update User</h3>
<label>User ID:</label>$userid
<form method="post" action="dustauth.php?user&update">
<label>Username</label>    <input name='username'     type='text' value='$username'/><br />
<label>Role</label>        <input name='role'         type='text' value='$role' /><br />
<label>Full Name</label>   <input name='fullname'     type='text' value='$fullname'/><br />
<label>Organization</label><input name='organization' type='text' value='$organization'/><br />
<label>Email</label>       <input name='email'        type='email' value='$email'/><br />
<button type="submit" name="userid" value='$userid'>Update</button>
</form>
<form method="post" action="dustauth.php">
<button type="submit">Cancel</button>
</form>

<h3>Change User Password</h3>
<form method="post" action="dustauth.php?user&passwd">
<input type='password' name="password" value='' />
<button type='submit' name='userid' value='$userid' />Change Password</button>
</form>
<form method="post" action="dustauth.php">
<button type="submit">Cancel</button>
</form>
END_OF_TEXT;
    }
}

if ($dustauth->isloggedin && isset($_GET['user']) && isset($_GET['account'])) {
    echo <<<END_OF_TEXT
<h2>User Account Information</h2>
END_OF_TEXT;

    $dustauth->updateuser();
    $dustauth->updatepasswd();

    $row = $dustauth->getuser($dustauth->userid);
    $userid = $row['userid'];
    $username = $row['username'];
    $role = $row['role'];
    $fullname = $row['fullname'];
    $organization = $row['organization'];
    $email = $row['email'];
    echo <<<END_OF_TEXT
<h3>User Details</h3>
<label>User ID:</label>$userid
<form method="post" action="dustauth.php?user&update">
<label>Username</label>    $username<br />
<label>Full Name</label>   <input name='fullname'     type='text' value='$fullname'/><br />
<label>Organization</label><input name='organization' type='text' value='$organization'/><br />
<label>Email</label>       <input name='email'        type='email' value='$email'/><br />
<button type="submit" name="userid" value='$userid'>Update</button>
</form>
<form method="post" action="dustauth.php">
<button type="submit">Cancel</button>
</form>

<h3>Change Password</h3>
<form method="post" action="dustauth.php?user&passwd">
<label>Previous Password: </label><input type='password' name='oldpassword' value='' /><br/>
<label>Password: </label><input type='password' name='newpassword1' value='' /><br/>
<label>Verify: </label><input type='password' name='newpassword2' value='' /><br/>
<button type='submit' name='userid' value='$userid' />Change Password</button>
</form>
<form method="post" action="dustauth.php">
<button type="submit">Cancel</button>
</form>
END_OF_TEXT;
}

print "</body></html>";

?>

