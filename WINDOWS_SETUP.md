# Windows Setup Guide for Aspra Overseas Consultancy

This guide will help you run the Aspra Overseas website on Windows.

## Prerequisites

Before you start, make sure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS version
   - During installation, make sure to check "Add to PATH"

2. **pnpm** (Package Manager)
   - Install globally using: `npm install -g pnpm`
   - Verify installation: `pnpm --version`

3. **Git** (Optional but recommended)
   - Download from: https://git-scm.com/

## Installation Steps

### Step 1: Extract the Project
Extract the `aspra-overseas-consultancy` folder to your desired location (e.g., `D:\projects\aspra-overseas-consultancy`).

### Step 2: Open Command Prompt or PowerShell
Navigate to the project directory:
```bash
cd D:\path\to\aspra-overseas-consultancy
```

### Step 3: Install Dependencies
Run the following command to install all required packages:
```bash
pnpm install
```

This will install all dependencies including the `cross-env` package that makes the scripts Windows-compatible.

## Running the Website

### Development Mode
To run the website in development mode (with hot reload):
```bash
pnpm dev
```

The website will be available at: `http://localhost:3000`

### Production Build
To create a production build:
```bash
pnpm build
```

### Start Production Server
To run the production build:
```bash
pnpm start
```

## Troubleshooting

### Issue: "pnpm: The term 'pnpm' is not recognized"
**Solution:** 
- Install pnpm globally: `npm install -g pnpm`
- Restart your Command Prompt or PowerShell

### Issue: "node_modules not found"
**Solution:**
- Run `pnpm install` again
- Make sure you have internet connection

### Issue: Port 3000 already in use
**Solution:**
- The application will automatically try the next available port
- Or close the application using port 3000

### Issue: Database connection error
**Solution:**
- Make sure you have internet connection
- Check if DATABASE_URL environment variable is set correctly
- Contact support if the issue persists

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm test` | Run tests |
| `pnpm check` | Check TypeScript types |
| `pnpm format` | Format code with Prettier |

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=your_oauth_url
```

Contact the development team for these values.

## Features

The Aspra Overseas website includes:

- **Home Page** - Hero section with CTAs
- **Jobs Page** - Browse and apply for jobs
- **Study Abroad** - Explore study opportunities
- **Courses** - IELTS and language courses
- **About** - Company information
- **Success Stories** - Student testimonials
- **Contact** - Get in touch with us
- **Admin Panel** - Manage jobs and inquiries (at `/admin`)
- **WhatsApp Integration** - Floating WhatsApp button

## Admin Panel Access

1. Navigate to `http://localhost:3000/admin`
2. Log in with your admin credentials
3. Manage jobs, view inquiries, and update content

## Support

For issues or questions, please contact the development team.

---

**Last Updated:** April 2026
**Version:** 1.0.0
