# Test Azure Connection and Get Deployment Token
# This script will help verify your Azure setup

Write-Host "Testing Azure Connection..." -ForegroundColor Green
Write-Host "============================" -ForegroundColor Green
Write-Host ""

# Check if Azure CLI is installed
try {
    $azVersion = az --version 2>$null
    if (-Not $azVersion) {
        Write-Host "❌ Azure CLI not found. Please install Azure CLI first." -ForegroundColor Red
        Write-Host "Download from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" -ForegroundColor Yellow
        exit 1
    } else {
        Write-Host "✅ Azure CLI is installed" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Azure CLI not found. Please install Azure CLI first." -ForegroundColor Red
    exit 1
}

# Check if user is logged in
try {
    $account = az account show 2>$null
    if (-Not $account) {
        Write-Host "❌ Not logged into Azure. Please login first..." -ForegroundColor Yellow
        az login
    } else {
        Write-Host "✅ Logged into Azure" -ForegroundColor Green
        $accountInfo = $account | ConvertFrom-Json
        Write-Host "   Account: $($accountInfo.name)" -ForegroundColor Cyan
        Write-Host "   Subscription: $($accountInfo.id)" -ForegroundColor Cyan
    }
} catch {
    Write-Host "❌ Not logged into Azure. Please login first..." -ForegroundColor Yellow
    az login
}

Write-Host ""
Write-Host "Checking Azure Static Web Apps..." -ForegroundColor Cyan

# List resource groups
Write-Host "Available Resource Groups:" -ForegroundColor Yellow
az group list --query "[].{Name:name, Location:location}" -o table

Write-Host ""
Write-Host "Checking for Static Web Apps..." -ForegroundColor Yellow

# Check if LocalShopRG exists
$rgExists = az group exists --name "LocalShopRG" 2>$null
if ($rgExists -eq "true") {
    Write-Host "✅ Resource Group 'LocalShopRG' exists" -ForegroundColor Green
    
    # Check if LocalShopWebApp exists
    $swaExists = az staticwebapp show --name "LocalShopWebApp" --resource-group "LocalShopRG" 2>$null
    if ($swaExists) {
        Write-Host "✅ Static Web App 'LocalShopWebApp' exists" -ForegroundColor Green
        
        # Get deployment token
        Write-Host ""
        Write-Host "Getting deployment token..." -ForegroundColor Yellow
        $token = az staticwebapp secrets list --name "LocalShopWebApp" --resource-group "LocalShopRG" --query "properties.apiKey" -o tsv 2>$null
        
        if ($token) {
            Write-Host "✅ Deployment Token found:" -ForegroundColor Green
            Write-Host "   $token" -ForegroundColor Cyan
            Write-Host ""
            Write-Host "Update your Deploy-ReactApp.ps1 file with this token!" -ForegroundColor Yellow
        } else {
            Write-Host "❌ Could not retrieve deployment token" -ForegroundColor Red
        }
    } else {
        Write-Host "❌ Static Web App 'LocalShopWebApp' not found in 'LocalShopRG'" -ForegroundColor Red
        Write-Host "   You may need to create it first using the setup-azure.ps1 script" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Resource Group 'LocalShopRG' not found" -ForegroundColor Red
    Write-Host "   You may need to create it first using the setup-azure.ps1 script" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Test completed!" -ForegroundColor Green
