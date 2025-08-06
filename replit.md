# Octagon Legal - Law Firm Website

## Overview

Octagon Legal is a professional law firm website built as a full-stack web application. The site specializes in Criminal Law, Family Law, Immigration Law, and Employment Law services. It features a modern, responsive design with consultation booking functionality, team profiles, practice area information, and client testimonials. The application is optimized for SEO and includes proper legal disclaimers and privacy policies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system featuring navy, gold, and cyan color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library following "new-york" design style
- **Routing**: Wouter for client-side routing with pages for home, contact, privacy, terms, and legal disclaimer
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Responsive Design**: Mobile-first approach with custom responsive utilities

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API**: RESTful API with `/api` prefix for all endpoints
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware
- **Development**: Vite middleware integration for hot module replacement

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL via `@neondatabase/serverless`
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Storage**: Temporary MemStorage implementation for development with Map-based storage

### Authentication and Authorization
- **Session Management**: Express session handling with connect-pg-simple for PostgreSQL session storage
- **User Schema**: Basic user table with username/password fields and UUID primary keys
- **Security**: Prepared for secure authentication implementation

### Deployment and Build
- **Production**: Vercel deployment with serverless functions
- **Build Process**: Vite for client build, ESBuild for server bundling
- **Static Assets**: Optimized asset handling with proper caching strategies
- **Environment**: Environment-based configuration for development and production

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database client and query builder
- **Connection Pooling**: Built-in connection management via Neon serverless driver

### UI and Design Libraries
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Playfair Display and Lato font families for typography

### Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking and development experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Deployment Platform
- **Vercel**: Hosting platform with serverless function support
- **Vercel Analytics**: Built-in performance and usage analytics
- **Domain Management**: Custom domain support with SSL certificates

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

### Monitoring and Logging
- **Console Logging**: Server-side request logging and consultation tracking
- **Vercel Dashboard**: Built-in logging and monitoring for serverless functions
- **Error Tracking**: Centralized error handling and reporting

## Recent Changes

### Latest Updates (August 6, 2025)
- **Project Cleanup Completed**: Removed all dead files and optimized for deployment
- **Team Photos Updated**: All professional headshots properly integrated and serving correctly
- **Footer Alignment Perfected**: Social media icons precisely positioned under "B" in "Barristers"
- **Navigation Cleaned**: Removed blog references, changed "People" to "Our Team"
- **Practice Areas Simplified**: Removed images for cleaner design focus on content
- **Copyright Updated**: Footer now shows 2025
- **Build Verified**: Production build successful, zero LSP errors
- **Deployment Ready**: GitHub → Vercel configuration complete with zero monthly costs

### Technical Status
- 82 clean source files with no dead code
- All images properly served from client/public/images/
- WhatsApp notifications via console logging to Vercel dashboard
- SEO optimized for Melbourne legal services
- Professional team photos: William (with Mandarin), Aret, Friznik (updated), Estelle
- Ready for immediate deployment