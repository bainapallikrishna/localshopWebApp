@echo off
echo Starting React App Deployment to Azure Static Web Apps...
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo Error: package.json not found. Please run this script from your React project root directory.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js not found. Please install Node.js first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Azure CLI is installed
az --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Azure CLI not found. Please install Azure CLI first.
    echo Download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing npm dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo Failed to install dependencies.
        pause
        exit /b 1
    )
)

REM Clean previous build
if exist "build" (
    echo Cleaning previous build...
    rmdir /s /q build
)

REM Build the React app
echo Building React app...
npm run build
if %errorlevel% neq 0 (
    echo Build failed. Please check for errors above.
    pause
    exit /b 1
)

REM Check if build was successful
if not exist "build" (
    echo Error: Build folder not found. Build may have failed.
    pause
    exit /b 1
)

echo Build successful! Build folder created at: build
echo.

REM Deploy using SWA CLI
echo Deploying to Azure Static Web Apps...
swa deploy --app-name LocalShopWebApp --resource-group LocalShopRG --deployment-token 52b76e977f19d30547ba169ccea57f0b4c565e9b8cfbd178ac2427dc7fae496101-4c0f8d97-45e2-4d09-a1f1-acfbe441ad9b00022100c3ffaa00 --env production --output-location build

if %errorlevel% equ 0 (
    echo.
    echo Deployment completed successfully for LocalShopWebApp!
    echo Your app should be available at: https://LocalShopWebApp.azurestaticapps.net
) else (
    echo.
    echo Deployment failed. Please check the error messages above.
)

echo.
pause
