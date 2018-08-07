REM @ECHO OFF
cd ..\dust-app
cmd /c "ng build --prod --build-optimizer"
del ..\*.js
del ..\*.map
copy dist\dust-app\*.* ..
copy dist\dust-app\assets\*.* ..\assets
cd ..\dust-service
copy dust.php ..
copy dustdb.php ..
copy admin.php ..
cd ..\build