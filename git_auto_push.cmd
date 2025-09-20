@echo off
REM Ask user for commit message
set /p commitMessage=Enter commit message: 

REM Go to your repository folder (optional)
REM cd "C:\path\to\your\repo"

REM Git commands
git add .
git commit -m "%commitMessage%"
git push

echo Done! Commit message was: %commitMessage%
pause
