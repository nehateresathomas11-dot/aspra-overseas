# Environment Variables Setup Guide

This guide will help you configure the environment variables needed to run the Aspra Overseas website on Windows.

## What are Environment Variables?

Environment variables are configuration values that your application needs to run. They include API keys, database URLs, and other sensitive information that should not be hardcoded in the source code.

## Step-by-Step Setup

### Step 1: Create the .env.local File

1. Navigate to your project directory:
   ```
   D:\downloads\aspra-overseas-consultancy-final
   ```

2. Create a new file named `.env.local` (note the dot at the beginning)
   - Right-click in the folder
   - Select "New" → "Text Document"
   - Name it `.env.local`
   - If Windows adds `.txt` extension, rename it to just `.env.local`

### Step 2: Copy the Template Content

Copy the following content into your `.env.local` file:

```
# Database Configuration
DATABASE_URL=mysql://user:password@localhost:3306/aspra_overseas

# JWT Secret for session management
JWT_SECRET=your-secret-key-here-change-this-in-production

# OAuth Configuration
VITE_APP_ID=your-manus-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# Analytics Configuration (Can be empty for development)
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=

# Owner Information
OWNER_NAME=Your Name
OWNER_OPEN_ID=your-open-id

# Manus Built-in APIs
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your-frontend-api-key

# App Configuration
VITE_APP_TITLE=Aspra Overseas Consultancy
VITE_APP_LOGO=
```

### Step 3: Update the Values

Replace the placeholder values with your actual configuration:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | MySQL database connection string | `mysql://root:password@localhost:3306/aspra` |
| `JWT_SECRET` | Secret key for session encryption | `your-random-secret-key-123` |
| `VITE_APP_ID` | Your Manus OAuth app ID | `your-app-id-from-manus` |
| `OAUTH_SERVER_URL` | OAuth server URL | `https://api.manus.im` |
| `VITE_OAUTH_PORTAL_URL` | OAuth portal URL | `https://portal.manus.im` |
| `VITE_ANALYTICS_ENDPOINT` | Analytics endpoint (optional) | Leave empty for development |
| `VITE_ANALYTICS_WEBSITE_ID` | Analytics website ID (optional) | Leave empty for development |
| `OWNER_NAME` | Your name | `John Doe` |
| `OWNER_OPEN_ID` | Your Manus open ID | `your-open-id` |
| `BUILT_IN_FORGE_API_KEY` | API key for Manus services | `your-api-key` |
| `VITE_FRONTEND_FORGE_API_KEY` | Frontend API key | `your-frontend-key` |
| `VITE_APP_TITLE` | Website title | `Aspra Overseas Consultancy` |
| `VITE_APP_LOGO` | Logo URL | `https://example.com/logo.png` |

## Quick Start (Development Mode)

For quick testing without all values configured, use these minimal settings:

```
# Minimal Configuration for Development
DATABASE_URL=mysql://root:password@localhost:3306/aspra_overseas
JWT_SECRET=dev-secret-key-123
VITE_APP_ID=dev-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
OWNER_NAME=Developer
OWNER_OPEN_ID=dev-user
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=dev-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=dev-frontend-key
VITE_APP_TITLE=Aspra Overseas
VITE_APP_LOGO=
```

## Troubleshooting

### Issue: ".env.local file not found"
**Solution:**
- Make sure the file is in the project root directory
- Check that the filename is exactly `.env.local` (with the dot)
- On Windows, you may need to show file extensions to see the actual filename

### Issue: "VITE_ANALYTICS_ENDPOINT is not defined"
**Solution:**
- Add the variable to your `.env.local` file
- You can leave it empty: `VITE_ANALYTICS_ENDPOINT=`

### Issue: "OAUTH_SERVER_URL is not configured"
**Solution:**
- Add this line to your `.env.local`: `OAUTH_SERVER_URL=https://api.manus.im`

### Issue: Cannot create .env.local file
**Solution:**
- Use Command Prompt or PowerShell to create the file:
  ```bash
  cd D:\path\to\aspra-overseas-consultancy
  type nul > .env.local
  ```
- Then open it with Notepad and add the content

## File Location

The `.env.local` file should be placed in the project root directory:

```
D:\downloads\aspra-overseas-consultancy-final\
├── .env.local          ← Create this file here
├── package.json
├── client/
├── server/
└── drizzle/
```

## Security Notes

- **Never commit `.env.local` to version control** - It contains sensitive information
- **Keep your API keys secret** - Don't share them with anyone
- **Use different keys for development and production** - Never use production keys in development
- **Rotate your keys regularly** - Change your JWT_SECRET and API keys periodically

## Next Steps

1. Create the `.env.local` file with the configuration
2. Run `pnpm install` to install dependencies
3. Run `pnpm dev` to start the development server
4. Open http://localhost:3000 in your browser

## Support

If you encounter any issues with environment variables, please refer to the WINDOWS_SETUP.md file or contact support.

---

**Last Updated:** April 2026
**Version:** 1.0.0
