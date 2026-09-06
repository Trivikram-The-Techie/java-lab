# Run script for Java Assignment Viewer
$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "     Java Assignment Viewer (Weeks 1 - 8)" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command javac -ErrorAction SilentlyContinue)) {
    Write-Error "javac command not found. Please install JDK and add it to PATH."
    exit 1
}

if (-not (Test-Path "bin")) { New-Item -ItemType Directory -Path "bin" | Out-Null }
if (-not (Test-Path "storage\uploads")) { New-Item -ItemType Directory -Path "storage\uploads" | Out-Null }

Write-Host "[1/2] Compiling Java source files..." -ForegroundColor Yellow
javac -encoding UTF-8 -d bin (Get-ChildItem -Path "src\server\*.java" | ForEach-Object { $_.FullName })

if ($LASTEXITCODE -ne 0) {
    Write-Error "Compilation failed."
    exit $LASTEXITCODE
}

Write-Host "[2/2] Starting server at http://localhost:8080 ..." -ForegroundColor Green
Write-Host "Opening web browser..."
Start-Process "http://localhost:8080"

java -cp bin server.AssignmentServer 8080
