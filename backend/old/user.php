<?php

/**
 * User is a model for updating
 */
class User
{
    public function __construct()
    {
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

    public function hash()
    {
        $this->password_hash = password_hash($this->password, PASSWORD_DEFAULT);
    }

    public static function HttpGetColumns()
    {
        return 'id, username, flags, firstname, lastname, organization, email';
    }

    public static function HttpGetFields()
    {
        return ':id, :username, :flags, :firstname, :lastname, :organization, :email';
    }

    public static function HttpPutFields()
    {
        return ':id, :flags, :firstname, :lastname, :organization, :email';
    }

    public static function HttpDeleteColumns()
    {
        return 'id';
    }

    public static function HttpDeleteFields()
    {
        return ':id';
    }

    public static function HttpAuthFields()
    {
        return ':id, :username, :password';
    }

    public static function HttpPostColumns()
    {
        return 'id, username, password';
    }

    public static function HttpPostFields()
    {
        return ':id, :username, :password';
    }
}

?>