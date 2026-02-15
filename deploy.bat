@echo off
echo Starting deployment to GitHub...
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
echo Deployment command finished.
pause
