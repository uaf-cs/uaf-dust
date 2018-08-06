REM @ECHO OFF
cd ../dust-app
cmd /c "ng build"
copy dist\dust-app\*.* ..
cd ../dust-service
copy dust.php ..
copy dustdb.php ..
copy admin.php ..
cd ../build