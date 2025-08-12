# Azure Static Web Apps Deployment Guide

This guide will help you deploy your React app to Azure Static Web Apps using either PowerShell or GitHub Actions.

## Prerequisites

1. **Azure Account**: You need an active Azure subscription
2. **Azure CLI**: Install Azure CLI from [Microsoft Docs](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
3. **Node.js**: Ensure you have Node.js installed (version 14 or higher)
4. **Git**: For GitHub Actions deployment

## Method 1: PowerShell Deployment (Recommended for testing)

### Step 1: Install Azure CLI
```powershell
# Download and install Azure CLI from Microsoft's website
# Or use winget (Windows Package Manager)
winget install Microsoft.AzureCLI
```

### Step 2: Login to Azure
```powershell
az login
```

### Step 3: Create Azure Static Web App (if not exists)
```powershell
# Create a resource group (if not exists)
az group create --name LocalShopRG --location "East US"

# Create Static Web App
az staticwebapp create \
  --name LocalShopWebApp \
  --resource-group LocalShopRG \
  --source https://github.com/yourusername/yourrepo \
  --location "East US" \
  --branch main \
  --app-location "/" \
  --output-location "build"
```

### Step 4: Get Deployment Token
```powershell
# Get the deployment token
az staticwebapp secrets list --name LocalShopWebApp --resource-group LocalShopRG
```

### Step 5: Update Deployment Script
Update the `Deploy-ReactApp.ps1` file with your actual values:
- `$AppName`: Your Static Web App name
- `$ResourceGroup`: Your resource group name
- `$DeploymentToken`: The deployment token from step 4

### Step 6: Run Deployment
```powershell
# Make sure you're in your React project directory
cd C:\Krishna\FRONTEND\localshop

# Run the deployment script
.\Deploy-ReactApp.ps1
```

## Method 2: GitHub Actions (Recommended for production)

### Step 1: Create GitHub Repository
Push your code to a GitHub repository.

### Step 2: Create GitHub Actions Workflow
The `.github/workflows/azure-deploy.yml` file has been created for you.

### Step 3: Set GitHub Secrets
In your GitHub repository, go to Settings > Secrets and variables > Actions, and add:
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Your deployment token
- `AZURE_STATIC_WEB_APPS_API_TOKEN_<ENVIRONMENT>`: Same token

### Step 4: Push to Main Branch
The workflow will automatically trigger when you push to the main branch.

## Configuration Files

### Azure Static Web Apps Configuration
Create a `staticwebapp.config.json` file in your `public` folder:

```json
{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```

### Environment Variables
If your app needs environment variables, create a `.env` file:
```env
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_ENVIRONMENT=production
```

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check for syntax errors in your React code
2. **Deployment Token Invalid**: Regenerate the token in Azure portal
3. **Resource Group Not Found**: Create the resource group first
4. **SWA CLI Not Found**: Install it globally with `npm install -g @azure/static-web-apps-cli`

### Useful Commands:

```powershell
# Check Azure CLI version
az --version

# Check SWA CLI version
swa --version

# List Static Web Apps
az staticwebapp list --resource-group LocalShopRG

# Get Static Web App details
az staticwebapp show --name LocalShopWebApp --resource-group LocalShopRG

# Delete Static Web App (if needed)
az staticwebapp delete --name LocalShopWebApp --resource-group LocalShopRG
```

## Post-Deployment

After successful deployment:
1. Your app will be available at: `https://LocalShopWebApp.azurestaticapps.net`
2. You can configure custom domains in the Azure portal
3. Set up authentication and authorization if needed
4. Monitor your app using Azure Application Insights

## Support

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Azure CLI Documentation](https://docs.microsoft.com/en-us/cli/azure/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
