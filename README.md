# Task Manager - Build Tool Demonstration Project

A full-featured task management web application that demonstrates comprehensive build automation using **Vite**, **npm**, **React**, **TypeScript**, and **Supabase**. This project showcases modern build tool capabilities including dependency management, TypeScript compilation, bundling optimization, and production-ready packaging.

![License](https://img.shields.io/badge/license-MIT-green.svg)

## Project Overview

This Task Manager application allows users to:
- Create, read, update, and delete tasks
- Organize tasks by status (Pending, In Progress, Completed)
- Set task priorities (Low, Medium, High)
- Assign due dates to tasks
- Filter tasks by status
- View real-time task statistics

### Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Backend/Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React 0.344.0
- **Package Manager**: npm
- **Linting**: ESLint 9.9.1

## Build Tool Features Demonstrated

### 1. Dependency Management 
The project uses **npm** to manage all dependencies automatically:

```bash
npm install
```

All dependencies are defined in `package.json`:
- **Production dependencies**: React, React DOM, Supabase client, Lucide React
- **Development dependencies**: TypeScript, Vite, ESLint, Tailwind CSS, PostCSS

### 2. Project Version Management 
Version management is built into the automation scripts:

```bash
npm run version:patch  
```


### 3. Packaging 

```bash
npm run build
```

Output directory: `./dist/`

##  Build Replicability

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

##  Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/muhammadawais92/BuildTool_demo_Project.git
cd BuildTool_demo_Project
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



### Run this Application

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

## Testing Instructions

### Run Unit Tests

Run the test suite with Vitest:

```bash
npm test
```

### Watch Mode

Run tests in watch mode during development:

```bash
npm run test:watch
```

### Coverage Report

Generate test coverage report:

```bash
npm run test:coverage
```

### Interactive Test UI

Launch Vitest UI for interactive testing:

```bash
npm run test:ui
```

## Documentation

### API Reference Documentation

This project includes comprehensive TypeScript documentation for all modules, components, and utilities.

#### Generate Documentation

```bash
npm run docs
```

Documentation will be generated in the `docs/api/` directory.

#### View Documentation

To generate and view documentation in your browser:

```bash
npm run docs:serve
```

### Tutorial

For a step-by-step guide on using the Task Manager, see the [Tutorial](docs/tutorials/tutorial.md).

## Project Structure

```
task-manager-build-demo/
├── src/
│   ├── components/        # React components
│   │   ├── __tests__/    # Component tests
│   │   ├── Auth.tsx
│   │   ├── Dashboard.tsx
│   │   ├── TaskCard.tsx
│   │   ├── TaskForm.tsx
│   │   └── TaskEditForm.tsx
│   ├── lib/              # Utility modules
│   │   ├── __tests__/    # Library tests
│   │   ├── logger.ts     # Logging utility
│   │   └── supabase.ts   # Supabase client
│   ├── test/             # Test configuration
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── docs/
│   ├── api/              # Generated API docs
│   └── tutorials/        # User tutorials
├── supabase/
│   └── migrations/       # Database migrations
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Vitest configuration
├── typedoc.json          # TypeDoc configuration
├── tsconfig.json         # TypeScript configuration
└── LICENSE               # MIT License

```

## Logging

The application includes a comprehensive logging system with multiple log levels:

- **DEBUG**: Development-only detailed logs
- **INFO**: General informational messages
- **WARN**: Warning messages
- **ERROR**: Error messages

Logs include timestamps and structured data for easy debugging.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Troubleshooting

### Error: "Could not find the table 'public.tasks'"

**Solution**: You need to run the database migration in Supabase.

1. Go to your Supabase dashboard
2. Open **SQL Editor**
3. Run the SQL from `supabase/migrations/20251029094241_create_tasks_table.sql`

See https://supabase.com/docs/guides/database/overview for detailed instructions.

### Error: Application won't start

**Solution**: Check that your `.env` file exists with valid Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Error: Can't sign in

**Solution**: Make sure email authentication is enabled in Supabase:
1. Go to **Authentication** → **Providers**
2. Enable **Email** provider

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/muhammadawais92/BuildTool_demo_Project).

---
