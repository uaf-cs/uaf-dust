@ECHO OFF
cd ../dust-app
ng build
copy dist/dust-app/* ..
cd ../dust-service
copy dust.php ..
copy dustdb.php ..
copy admin.php ..
