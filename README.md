# Task Manager - Build Tool Demonstration Project

A full-featured task management web application that demonstrates comprehensive build automation using **Vite**, **npm**, **React**, **TypeScript**, and **Supabase**. This project showcases modern build tool capabilities including dependency management, TypeScript compilation, bundling optimization, and production-ready packaging.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎯 Project Overview

This Task Manager application allows users to:
- Create, read, update, and delete tasks
- Organize tasks by status (Pending, In Progress, Completed)
- Set task priorities (Low, Medium, High)
- Assign due dates to tasks
- Filter tasks by status
- View real-time task statistics
- Secure authentication using Supabase

### Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Backend/Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React 0.344.0
- **Package Manager**: npm
- **Linting**: ESLint 9.9.1

## 🧱 Build Tool Features Demonstrated

### 1. Dependency Management ✅
The project uses **npm** to manage all dependencies automatically:

```bash
npm install
```

All dependencies are defined in `package.json`:
- **Production dependencies**: React, React DOM, Supabase client, Lucide React
- **Development dependencies**: TypeScript, Vite, ESLint, Tailwind CSS, PostCSS

### 2. Compilation / Transpilation ✅
The build process includes multiple compilation steps:

- **TypeScript → JavaScript**: Automatic transpilation using Vite + TypeScript
- **JSX/TSX → JavaScript**: React JSX compilation
- **CSS Processing**: PostCSS with Tailwind CSS compilation
- **Module Bundling**: ES modules bundled using Rollup (via Vite)

### 3. Project Version Management ✅
Version management is built into the automation scripts:

```bash
npm run version:patch  # Bump patch version (1.0.0 → 1.0.1)
npm run version:minor  # Bump minor version (1.0.0 → 1.1.0)
npm run version:major  # Bump major version (1.0.0 → 2.0.0)
```

Current version: **1.0.0** (defined in `package.json`)

### 4. Packaging ✅
The build process generates a production-ready distribution:

```bash
npm run build
```

Output directory: `./dist/`

**What gets packaged:**
- Minified JavaScript bundles with code splitting
- Optimized CSS files
- Source maps for debugging
- Vendor chunk separation (React, Supabase)
- Optimized assets and index.html

## 🔁 Build Replicability

The entire project can be built with **two simple commands**:

```bash
npm install && npm run build
```

This will:
1. Download and install all dependencies
2. Run type checking (TypeScript)
3. Clean previous build artifacts
4. Compile TypeScript to JavaScript
5. Bundle and optimize all assets
6. Generate production build in `./dist/` directory

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-manager-build-demo
```

### 2. Install Dependencies

```bash
npm install
```

This command will:
- Read `package.json`
- Download all required packages from npm registry
- Install them in `node_modules/`
- Generate `package-lock.json` for dependency locking

### 3. Environment Configuration

The project includes a pre-configured `.env` file with Supabase credentials. For production use, you should:

1. Create your own Supabase project at [supabase.com](https://supabase.com)
2. Update the `.env` file with your credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🔨 Build Instructions

### Development Build

Run the development server with hot module replacement:

```bash
npm run dev
```

Access the application at `http://localhost:5173`

### Production Build

Generate optimized production bundle:

```bash
npm run build
```

Or use the comprehensive production build:

```bash
npm run build:prod
```

This runs:
1. Clean (`rm -rf dist`)
2. Lint (ESLint code quality check)
3. Type check (TypeScript validation)
4. Build (Vite production bundle)

### Available Build Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start development server |
| `build` | `npm run typecheck && vite build` | Standard production build |
| `build:prod` | Full pipeline | Clean + Lint + Type check + Build |
| `clean` | `rm -rf dist` | Remove build artifacts |
| `lint` | `eslint .` | Check code quality |
| `lint:fix` | `eslint . --fix` | Fix linting issues |
| `typecheck` | `tsc --noEmit` | Validate TypeScript types |
| `test` | `npm run typecheck && npm run lint` | Run all checks |
| `preview` | `vite preview` | Preview production build |

## 🧪 Testing Instructions

Run the test suite (type checking + linting):

```bash
npm run test
```

Individual checks:

```bash
npm run typecheck  # TypeScript type validation
npm run lint       # ESLint code quality check
```

## 🎮 Run Instructions

### Option 1: Development Mode

```bash
npm install
npm run dev
```

Open browser to `http://localhost:5173`

### Option 2: Production Mode

```bash
npm install
npm run build
npm run preview
```

Open browser to `http://localhost:4173`

### Using the Application

1. **Sign Up**: Create an account with email and password
2. **Sign In**: Log in to access your tasks
3. **Create Task**: Click "New Task" button to add a task
4. **Edit Task**: Click "Edit" on any task card
5. **Update Status**: Use the dropdown to change task status
6. **Filter Tasks**: Use filter buttons to view specific task categories
7. **Delete Task**: Click "Delete" to remove a task

## 🛠️ Build Tool Explanation

This project uses **Vite** as the primary build tool, orchestrated through **npm scripts**. Here's how the build automation works:

### Why Vite?

Vite is a modern build tool that provides:
- **Lightning-fast dev server** using native ES modules
- **Instant hot module replacement (HMR)**
- **Optimized production builds** using Rollup
- **Built-in TypeScript support**
- **Plugin ecosystem** for React, PostCSS, etc.

### Build Pipeline Architecture

```
Source Code (src/)
    ↓
TypeScript Compiler (tsc)
    ↓
Vite Plugin React (JSX/TSX transformation)
    ↓
PostCSS + Tailwind CSS (styling)
    ↓
Rollup Bundler (code splitting, tree shaking)
    ↓
Terser Minifier (optimization)
    ↓
Production Bundle (dist/)
```

### Key Build Features

#### 1. Code Splitting
The build automatically splits code into chunks:
- `react-vendor.js` - React and React DOM
- `supabase-vendor.js` - Supabase client
- Main application code
- Dynamic route-based chunks

#### 2. Tree Shaking
Unused code is automatically removed from the final bundle using ES module static analysis.

#### 3. Minification
JavaScript is minified using Terser, reducing file sizes by ~70%.

#### 4. Source Maps
Source maps are generated for debugging production builds.

#### 5. Asset Optimization
- Images and fonts are optimized
- CSS is extracted and minified
- Static assets are versioned with content hashes

### Build Configuration

The build behavior is configured in:

- **`package.json`**: Scripts, dependencies, metadata
- **`vite.config.ts`**: Vite build settings
- **`tsconfig.json`**: TypeScript compiler options
- **`tailwind.config.js`**: CSS framework configuration
- **`postcss.config.js`**: PostCSS plugins

### Pre/Post Build Hooks

The build system includes automated hooks:

- **`prebuild`**: Runs before build (cleans dist directory)
- **`postbuild`**: Runs after build (success message)

These are defined in `package.json` and execute automatically.

## 📁 Project Structure

```
task-manager-build-demo/
├── src/
│   ├── components/          # React components
│   │   ├── Auth.tsx        # Authentication UI
│   │   ├── Dashboard.tsx   # Main dashboard
│   │   ├── TaskCard.tsx    # Task display card
│   │   ├── TaskForm.tsx    # New task form
│   │   └── TaskEditForm.tsx # Edit task form
│   ├── lib/
│   │   └── supabase.ts     # Supabase client & types
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── dist/                   # Build output (generated)
├── public/                 # Static assets
├── .env                    # Environment variables
├── package.json            # Project metadata & scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind CSS config
└── README.md               # This file
```

## 🗄️ Database Schema

The application uses Supabase (PostgreSQL) with the following schema:

### Tasks Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `title` | text | Task title |
| `description` | text | Task details |
| `status` | text | pending / in-progress / completed |
| `priority` | text | low / medium / high |
| `due_date` | timestamptz | Optional deadline |
| `created_at` | timestamptz | Creation timestamp |
| `updated_at` | timestamptz | Last update timestamp |
| `user_id` | uuid | Foreign key to auth.users |

### Security

- **Row Level Security (RLS)** enabled
- Users can only access their own tasks
- All CRUD operations are authenticated

## 🔒 Security Features

- Authentication required for all operations
- Row-level security policies in database
- Environment variables for sensitive data
- Input validation on all forms
- SQL injection prevention via Supabase client

## 📦 Build Output

After running `npm run build`, the `dist/` directory contains:

```
dist/
├── assets/
│   ├── index-[hash].js          # Main application bundle
│   ├── react-vendor-[hash].js   # React library chunk
│   ├── supabase-vendor-[hash].js # Supabase chunk
│   ├── index-[hash].css         # Compiled styles
│   └── *.map                     # Source maps
└── index.html                    # Entry HTML file
```

All files include content-based hashing for cache busting.

## 🚀 Deployment

The `dist/` directory can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Upload dist contents
- **AWS S3**: `aws s3 sync dist/ s3://bucket-name`

## 📈 Build Performance

Typical build times on modern hardware:

- **Development server start**: ~500ms
- **Hot module replacement**: <100ms
- **Production build**: ~5-10 seconds
- **Build output size**: ~200-300 KB (gzipped)

## 🤝 Contributing

This is a demonstration project for educational purposes. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run test` to validate
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎓 Educational Value

This project demonstrates:

✅ Modern build tool usage (Vite + npm)
✅ TypeScript compilation and type safety
✅ React component architecture
✅ State management patterns
✅ API integration (Supabase)
✅ Authentication implementation
✅ CSS framework integration (Tailwind)
✅ Build optimization techniques
✅ Production deployment preparation
✅ Project documentation standards

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Supabase Documentation](https://supabase.com/docs)
- [npm Documentation](https://docs.npmjs.com/)

---

**Built with ❤️ for the Build Tools Demonstration Project**
