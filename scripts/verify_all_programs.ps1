# PowerShell Batch Verification Script
Write-Host "=== Java Lab Verification Script ==="
Get-ChildItem -Path "programs" -Filter "*.java" -Recurse | ForEach-Object { Write-Host "Checking: $($_.Name)" }
