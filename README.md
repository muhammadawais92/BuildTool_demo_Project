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

Run the test suite (type checking + linting):

```bash
npm run test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.


---
