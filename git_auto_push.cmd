@echo off
REM Get current date and time
for /f "tokens=1-4 delims=/: " %%a in ("%date% %time%") do (
    set datetime=%%a-%%b-%%c_%%d
)

REM Go to your repository folder (optional)
REM cd "C:\path\to\your\repo"

REM Git commands
git add .
git commit -m "Commit at %datetime%"
git push

echo Done! Commit message was: Commit at %datetime%
pause
