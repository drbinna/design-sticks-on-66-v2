@echo off
REM Sticks on 66 - Git Deployment Script (Windows)

echo.
echo ====================================
echo   Sticks on 66 - Deployment Script
echo ====================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo Git initialized
    echo.
)

REM Add remote if not exists
git remote get-url origin >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Adding remote repository...
    git remote add origin https://github.com/drbinna/design_sticks_on_66.git
    echo Remote added
    echo.
) else (
    echo Updating remote URL...
    git remote set-url origin https://github.com/drbinna/design_sticks_on_66.git
    echo Remote updated
    echo.
)

REM Switch to main branch
git rev-parse --verify main >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Creating main branch...
    git checkout -b main
) else (
    echo Switching to main branch...
    git checkout main
)
echo.

REM Show status
echo Current status:
git status --short
echo.

REM Stage all changes
echo Staging all changes...
git add .
echo Changes staged
echo.

REM Commit changes
echo Committing changes...
git commit -m "Production deployment: Fixed routing and added build configuration"
echo Changes committed
echo.

REM Push to GitHub
echo.
echo Pushing to GitHub...
echo Repository: https://github.com/drbinna/design_sticks_on_66.git
echo Branch: main
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   Successfully pushed to GitHub!
    echo ========================================
    echo.
    echo Next steps:
    echo   1. Visit: https://github.com/drbinna/design_sticks_on_66
    echo   2. Verify your files are uploaded
    echo   3. Deploy to Vercel: https://vercel.com/new
    echo.
    echo Documentation:
    echo   - QUICK_START.md - 10-minute deployment guide
    echo   - DEPLOYMENT.md - Full deployment instructions
    echo   - BUILD_CONFIG.md - Build configuration details
    echo.
) else (
    echo.
    echo ========================================
    echo   Push failed - Troubleshooting
    echo ========================================
    echo.
    echo Common issues:
    echo   1. Authentication required - Git will prompt for credentials
    echo   2. No permission - Check repo access on GitHub
    echo   3. Network issue - Check internet connection
    echo.
    echo Manual push command:
    echo   git push -u origin main
    echo.
)

pause
