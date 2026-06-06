# Aspra Overseas Consultancy Website - TODO

## Database & Backend
- [x] Define database schema (jobs, countries, courses, inquiries, testimonials, blog posts)
- [x] Create tRPC procedures for job listings, countries, inquiries, admin operations
- [ ] Set up admin authentication and role-based access control
- [ ] Implement inquiry submission and notification system
- [ ] Create seed data for initial jobs, countries, and courses

## Design System & Styling
- [x] Configure Tailwind CSS with custom color tokens (navy, accent pink)
- [x] Set up Framer Motion for animations and micro-interactions
- [x] Create glassmorphism component utilities
- [x] Define global typography and spacing system
- [x] Create reusable animated components (glowing buttons, hover effects)

## Core Pages
- [x] Home page with hero section, CTAs, and smooth animations
- [x] Jobs page with horizontal scroll, filters, and expandable listings
- [x] Study Abroad page with horizontal scroll country panels
- [x] Healthcare Careers page (Germany & UAE focus)
- [ ] Services section (Study Abroad, Visa, IELTS) with split layout
- [x] Courses page (IELTS)
- [x] Visa Services page
- [x] About page
- [x] Success Stories page with horizontal scroll testimonials
- [x] Contact page with form and WhatsApp CTA
- [x] Blog/Updates page

## Admin Panel
- [x] Admin login page with role-based access
- [x] Admin dashboard with stats
- [x] Job listing management (add, edit, delete)
- [x] Inquiry management (view, respond)
- [x] Admin navigation and layout

## Features & Integrations
- [x] Contact form with validation
- [x] WhatsApp CTA button integration
- [ ] Owner notification system for new inquiries
- [ ] Horizontal scroll components for jobs, countries, testimonials
- [x] Expandable job listing detail view
- [ ] Country panel hover effects with detail reveal

## Testing & Optimization
- [ ] Write vitest tests for critical features
- [ ] Test responsive design across devices
- [ ] Optimize animations and performance
- [ ] Test contact form and notifications
- [ ] Test admin panel functionality

## Deployment
- [ ] Create checkpoint before delivery
- [ ] Verify all pages are accessible
- [ ] Test all CTAs and forms
- [ ] Final review and polish


## Bug Fixes & Changes
- [x] Fix admin panel authentication and access
- [x] Remove Healthcare Careers page
- [x] Remove Blog page
- [x] Remove Visa Services page
- [x] Add WhatsApp floating icon component
- [x] Update navigation to remove deleted pages
- [x] Update routes to remove deleted pages

## Current Issues
- [x] Create /login route and page

## Bug Fixes - Nested Anchor Tag
- [x] Fix nested <a> tag error causing React validation error

## Bug Fixes - WhatsApp Icon
- [x] Fix WhatsApp floating icon to display proper chat bubble icon

## Windows Compatibility
- [x] Fix NODE_ENV command for Windows compatibility using cross-env

## Environment Variables
- [x] Create .env.local file with required environment variables
- [x] Fix missing analytics and OAuth configuration

## Critical Issues - Environment Loading
- [ ] Fix .env.local not being loaded on Windows
- [ ] Fix OAUTH_SERVER_URL undefined error
- [ ] Fix getLoginUrl() Invalid URL error
- [ ] Suppress analytics warnings in Vite build
