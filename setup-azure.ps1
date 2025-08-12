# Azure Setup Script for LocalShop React App
# This script helps you set up Azure resources and get deployment tokens

param(
    [string]$ResourceGroupName = "LocalShopRG",
    [string]$Location = "East US",
    [string]$AppName = "LocalShopWebApp"
)

Write-Host "Azure Setup Script for LocalShop React App" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""

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

# Check if user is logged in
try {
    $account = az account show 2>$null
    if (-Not $account) {
        Write-Host "Please login to Azure first..." -ForegroundColor Yellow
        az login
    }
} catch {
    Write-Host "Please login to Azure first..." -ForegroundColor Yellow
    az login
}

Write-Host "Setting up Azure resources..." -ForegroundColor Cyan

# Create resource group
Write-Host "Creating resource group: $ResourceGroupName" -ForegroundColor Yellow
az group create --name $ResourceGroupName --location $Location

# Create Static Web App
Write-Host "Creating Static Web App: $AppName" -ForegroundColor Yellow
az staticwebapp create `
  --name $AppName `
  --resource-group $ResourceGroupName `
  --location $Location `
  --source https://github.com/yourusername/yourrepo `
  --branch main `
  --app-location "/" `
  --output-location "build"

# Get deployment token
Write-Host "Getting deployment token..." -ForegroundColor Yellow
$token = az staticwebapp secrets list --name $AppName --resource-group $ResourceGroupName --query "properties.apiKey" -o tsv

Write-Host ""
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "===============" -ForegroundColor Green
Write-Host "Resource Group: $ResourceGroupName" -ForegroundColor Yellow
Write-Host "Static Web App: $AppName" -ForegroundColor Yellow
Write-Host "Location: $Location" -ForegroundColor Yellow
Write-Host ""
Write-Host "Deployment Token: $token" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Update your deployment scripts with the token above" -ForegroundColor White
Write-Host "2. Update the AppName and ResourceGroup variables in your scripts" -ForegroundColor White
Write-Host "3. Run the deployment script: .\Deploy-ReactApp.ps1" -ForegroundColor White
Write-Host ""
Write-Host "Your app will be available at: https://$AppName.azurestaticapps.net" -ForegroundColor Green
