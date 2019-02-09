<?php

include 'auth.php';
include 'constants.php';

$auth = new AuthDatabase();
$auth->authenticate();

$ADMINURL = ADMINURL;
$SITENAME = SITENAME;

echo <<<HTML
<html>
<head>
<title>$SITENAME System Administration</title>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<h1>$SITENAME Administration Page</h1>
HTML;

if ($auth->isloggedin) {
    print "{$auth->username} logged in | ";
    print "<a href='$ADMINURL?logout'>log out</a>";
    print "<form method='post' action='$ADMINURL?logout'>\n";
    print "<button type='submit'>Logout</button>\n";
    print "</form>\n";
    print "<form method='post' action='${ADMINURL}?user&account'>\n";
    print "<button type='submit'>Account</button>\n";
    print "</form>\n";
}

if (!$auth->isloggedin) {
    print "<form action='${ADMINURL}?login' method='post'>";
    print "username: <input type='text' name='username'>";
    print "password: <input type='password' name='password'>";
    print "<input type='submit' value='login'>";
    print "</form>";
}

$userid = $auth->post('userid');
if ($userid == '')
    $userid = $auth->userid;

if ($auth->isadmin) {
    echo <<<HTML
<h2>Admin Panel</h2>
HTML;
    $auth->admin_lock();
    $auth->admin_unlock();
    $auth->admin_adduser();
    $auth->admin_deluser();
    $auth->admin_updateuser();
    $auth->admin_passwd();

    print "<h3>Users</h3>\n";
    $rows = $auth->admin_getusers();
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
        $action1 = "${ADMINURL}?user";
        $action2 = "${ADMINURL}?deluser";
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
            $lockedform = "<form action='${ADMINURL}?unlock' method='post'><button type='submit' name='userid' value='$userid'>Unlock</button></form>";
        } else {
            $lockedform = "<form action='${ADMINURL}?lock' method='post'><button type='submit' name='userid' value='$userid'>Lock</button></form>";
        }
        print "<td>$lockedform</td>";
        print "<td><form action='$action2' method='post'>$button2</form></td>";
        print "</tr>\n";
    }
    print "<tr><td><form method='post' action='${ADMINURL}?adduser'><button type='submit'>Add User</button></form></td></tr>";
    print "</table>\n";

    // add user
    if (isset($_GET['adduser'])) {
        $adduser = "<h3>Add User</h3>\n"
            . "<form method='post' action='${ADMINURL}?adduser'>"
            . "<label>Username</label><input name='username' type='text' /><br />"
            . "<label>Password</label><input name='password' type='password' /><br />"
            . "<label>Full Name</label><input name='fullname' type='text' /><br />"
            . "<label>Organization</label><input name='organization' type='text' /><br />"
            . "<label>Email</label><input name='email' type='text' /><br />"
            . "<button type='submit' name='action' value='adduser'>Add User</button>"
            . "</form>"
            . "<form method='post' action='${ADMINURL}'>"
            . "<button type='submit'>Cancel</button>"
            . "</form>";
END_OF_TEXT;
    } else {
        $adduser = "";
    }
    print $adduser;

    $userid = $auth->post('userid');
    if (isset($_GET['user']) && $userid > 0) {
        $row = $auth->admin_getuser($userid);
        $userid = $row['userid'];
        $username = $row['username'];
        $role = $row['role'];
        $fullname = $row['fullname'];
        $organization = $row['organization'];
        $email = $row['email'];
        echo <<<END_OF_TEXT
<h3>Update User</h3>
<label>User ID:</label>$userid
<form method="post" action="$ADMINURL?user&update">
<label>Username</label>    <input name='username'     type='text' value='$username'/><br />
<label>Role</label>        <input name='role'         type='text' value='$role' /><br />
<label>Full Name</label>   <input name='fullname'     type='text' value='$fullname'/><br />
<label>Organization</label><input name='organization' type='text' value='$organization'/><br />
<label>Email</label>       <input name='email'        type='email' value='$email'/><br />
<button type="submit" name="userid" value='$userid'>Update</button>
</form>
<form method="post" action="$ADMINURL">
<button type="submit">Cancel</button>
</form>

<h3>Change User Password</h3>
<form method="post" action="$ADMINURL?user&passwd">
<input type='password' name="password" value='' />
<button type='submit' name='userid' value='$userid' />Change Password</button>
</form>
<form method="post" action="$ADMINURL">
<button type="submit">Cancel</button>
</form>
END_OF_TEXT;
    }
}

if ($auth->isloggedin && isset($_GET['user']) && isset($_GET['account'])) {
    echo <<<END_OF_TEXT
<h2>User Account Information</h2>
END_OF_TEXT;

    $auth->updateuser();
    $auth->updatepasswd();

    $row = $auth->getuser($auth->userid);
    $userid = $row['userid'];
    $username = $row['username'];
    $role = $row['role'];
    $fullname = $row['fullname'];
    $organization = $row['organization'];
    $email = $row['email'];
    echo <<<END_OF_TEXT
<h3>User Details</h3>
<label>User ID:</label>$userid
<form method="post" action="$ADMINURL?user&update">
<label>Username</label>    $username<br />
<label>Full Name</label>   <input name='fullname'     type='text' value='$fullname'/><br />
<label>Organization</label><input name='organization' type='text' value='$organization'/><br />
<label>Email</label>       <input name='email'        type='email' value='$email'/><br />
<button type="submit" name="userid" value='$userid'>Update</button>
</form>
<form method="post" action="$ADMINURL">
<button type="submit">Cancel</button>
</form>

<h3>Change Password</h3>
<form method="post" action="$ADMINURL?user&passwd">
<label>Previous Password: </label><input type='password' name='oldpassword' value='' /><br/>
<label>Password: </label><input type='password' name='newpassword1' value='' /><br/>
<label>Verify: </label><input type='password' name='newpassword2' value='' /><br/>
<button type='submit' name='userid' value='$userid' />Change Password</button>
</form>
<form method="post" action="$ADMINURL">
<button type="submit">Cancel</button>
</form>
END_OF_TEXT;
}

print "</body></html>";

?>
