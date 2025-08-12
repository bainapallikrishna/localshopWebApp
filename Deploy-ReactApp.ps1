# PowerShell Script to Build and Deploy React App to Azure Static Web Apps

# Set variables
$AppName = "LocalShopWebApp"
$ResourceGroup = "LocalShopRG"
$DeploymentToken = "52b76e977f19d30547ba169ccea57f0b4c565e9b8cfbd178ac2427dc7fae496101-4c0f8d97-45e2-4d09-a1f1-acfbe441ad9b00022100c3ffaa00"
$Environment = "production"
$ProjectPath = Get-Location
$OutputLocation = "build"

Write-Host "Starting deployment process..." -ForegroundColor Green
Write-Host "Project Path: $ProjectPath" -ForegroundColor Yellow
Write-Host "App Name: $AppName" -ForegroundColor Yellow
Write-Host "Resource Group: $ResourceGroup" -ForegroundColor Yellow

# Check if we're in the right directory (should contain package.json)
if (-Not (Test-Path "package.json")) {
    Write-Host "Error: package.json not found. Please run this script from your React project root directory." -ForegroundColor Red
    exit 1
}

# Check if Azure CLI is installed
try {
    $azVersion = az --version 2>$null
    if (-Not $azVersion) {
        Write-Host "Azure CLI not found. Please install Azure CLI first." -ForegroundColor Red
        Write-Host "Download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host "Azure CLI not found. Please install Azure CLI first." -ForegroundColor Red
    exit 1
}

# Check if SWA CLI is installed
try {
    $swaVersion = swa --version 2>$null
    if (-Not $swaVersion) {
        Write-Host "SWA CLI not found. Installing SWA CLI..." -ForegroundColor Yellow
        npm install -g @azure/static-web-apps-cli
    }
} catch {
    Write-Host "SWA CLI not found. Installing SWA CLI..." -ForegroundColor Yellow
    npm install -g @azure/static-web-apps-cli
}

# Install dependencies if node_modules doesn't exist
if (-Not (Test-Path "node_modules")) {
    Write-Host "Installing npm dependencies..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies." -ForegroundColor Red
        exit 1
    }
}

# Clean previous build
if (Test-Path $OutputLocation) {
    Write-Host "Cleaning previous build..." -ForegroundColor Cyan
    Remove-Item -Recurse -Force $OutputLocation
}

# Run npm build
Write-Host "Building React app..." -ForegroundColor Cyan
npm run build

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Please check for errors above." -ForegroundColor Red
    exit 1
}

# Check if build folder exists
if (-Not (Test-Path $OutputLocation)) {
    Write-Host "Build folder '$OutputLocation' not found. Build may have failed." -ForegroundColor Red
    exit 1
}

Write-Host "Build successful! Build folder created at: $OutputLocation" -ForegroundColor Green

# Deploy using SWA CLI
Write-Host "Deploying to Azure Static Web Apps..." -ForegroundColor Cyan
try {
    swa deploy `
      --app-name $AppName `
      --resource-group $ResourceGroup `
      --deployment-token $DeploymentToken `
      --env $Environment `
      --output-location $OutputLocation

    if ($LASTEXITCODE -eq 0) {
        Write-Host "Deployment completed successfully for '$AppName'!" -ForegroundColor Green
        Write-Host "Your app should be available at: https://$AppName.azurestaticapps.net" -ForegroundColor Green
    } else {
        Write-Host "Deployment failed with exit code: $LASTEXITCODE" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "Deployment failed with error: $_" -ForegroundColor Red
    exit 1
}