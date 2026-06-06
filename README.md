# Aspra Overseas Consultancy Website

This is a modern, responsive website for Aspra Overseas Consultancy, built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started (Local Development)

To run this project on your computer using VS Code:

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or higher)
- [pnpm](https://pnpm.io/installation) (Recommended) or npm

### Installation
1. Extract the zip file.
2. Open the folder in **VS Code**.
3. Open the terminal in VS Code (`Ctrl + ` `) and run:
   ```bash
   pnpm install
   ```
   *If you don't have pnpm, use `npm install`.*

### Running the App
Run the following command to start the development server:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🌐 How to Publish (Deployment)

To make this website live on the internet:

### Option 1: Vercel (Recommended - Easiest & Free)
1. Create a free account on [Vercel](https://vercel.com/).
2. Push your code to a **GitHub** repository.
3. Import the repository into Vercel.
4. Vercel will automatically detect the settings and deploy your site.

### Option 2: Netlify
1. Create an account on [Netlify](https://www.netlify.com/).
2. Drag and drop the `dist` folder (generated after running `pnpm build`) into the Netlify dashboard.

---

## 🎯 Connecting a Domain

Once your site is deployed (e.g., on Vercel):
1. Purchase a domain from providers like **GoDaddy**, **Namecheap**, or **Google Domains**.
2. In your Vercel/Netlify dashboard, go to **Settings > Domains**.
3. Add your purchased domain (e.g., `www.aspraoverseas.com`).
4. Follow the instructions to update your domain's **DNS settings** (usually adding an A record or CNAME).

---

## 🛠 Project Structure
- `client/src/pages/`: Contains all the page content (Jobs, Study Abroad, etc.).
- `client/src/components/`: Reusable UI components like Navigation and Footer.
- `tailwind.config.ts`: Styling configuration.
