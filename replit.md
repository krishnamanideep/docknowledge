# DOCK - Democratic Organisation of Civic Knowledge

## Overview

DOCK is a non-partisan civic pressure group website dedicated to strengthening democratic awareness, constitutional values, and issue-based public engagement. The platform serves as an informational hub that educates citizens about their rights, governance structures, public policies, and accountability mechanisms.

The application follows a full-stack TypeScript architecture with a React frontend and Express backend, designed for civic engagement and community outreach programs targeting various demographic groups including first-time voters, women's groups, healthcare workers, and labor unions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming (blue civic theme)
- **UI Components**: shadcn/ui component library (New York style variant) built on Radix UI primitives
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Storage Pattern**: Interface-based storage abstraction (`IStorage`) allowing swappable implementations
- **Current Storage**: In-memory storage (`MemStorage`) - designed to be replaced with database implementation

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Migrations**: Generated to `./migrations` directory
- **Validation**: Zod schemas auto-generated from Drizzle schemas via `drizzle-zod`

### Project Structure
```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and query client
│   │   └── pages/          # Route components
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Vite dev server integration
├── shared/          # Shared code between frontend/backend
│   └── schema.ts    # Database schema and types
└── attached_assets/ # Static assets and documentation
```

### Build System
- **Development**: Vite dev server with Express middleware integration
- **Production Build**: Custom build script using esbuild for server bundling, Vite for client
- **Server Bundle**: Dependencies are selectively bundled to optimize cold start times

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Framework
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **TypeScript**: Strict mode enabled with bundler module resolution

### Required Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for database operations)