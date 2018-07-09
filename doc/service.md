# UAF Dust Service

The file dust.php is a RESTful service using SQLite3 and PHP. This documentation is a tutorial on how to construct the service. This is separated into a few parts. We need to configure Azure to enable SQLite3, then we need the ability to add/remove users. Finally, we need the ability to add/remove dust palliatives.

## Configuring Azure for SQLite3

We need to enable the SQLite3 extension. In the app settings, we add the key `PHP_INI_SCAN_DIR` with the value `D:\home\site`. The location is not super important, but we put it right before the `wwwroot` folder so it is easy to find. We add the line `extension=sqlite3` to `php.ini` and that is it.

## PHP Service Basics

We want our PHP service to work with GET and PUT requests. We want to support the following operations:

* Add user
* Update user
* Remove user
* Add dust palliative
* Get dust palliative
* Update dust palliative
* Get list of users
* Get list of organizations
* Get list of dust palliatives

## Database Organization

The user information (`users` table) we want to have is:

* `id` (Primary key)
* Username (`username`)
* First Name (`firstname`)
* Last Name (`lastname`)
* Organization (`organization`)
* Email (`email`)

The Dust Palliative information (`palliatives` table) we want to have is:

* `id` (Primary key)
* `userid` (Foreign key)
* Short name (`shortname`)
* Long name (`longname`)
* Description (`description`)
* Data (`rawdata`)
* MPRT (`mprt`)

## User management

