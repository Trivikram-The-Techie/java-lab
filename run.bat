@echo off
setlocal
cd /d "%~dp0"

echo ===================================================
echo     Java Assignment Viewer (Weeks 1 - 8)
echo ===================================================
echo.

where javac >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] javac was not found in your PATH.
    echo Please make sure JDK is installed and configured.
    pause
    exit /b 1
)

if not exist bin mkdir bin
if not exist storage\uploads mkdir storage\uploads

echo [1/2] Compiling Java source files...
javac -encoding UTF-8 -d bin src\server\*.java
if %errorlevel% neq 0 (
    echo [ERROR] Compilation failed.
    pause
    exit /b 1
)

echo [2/2] Starting server at http://localhost:8080 ...
echo Press Ctrl+C to stop the server at any time.
echo.

start http://localhost:8080
java -cp bin server.AssignmentServer 8080

pause
