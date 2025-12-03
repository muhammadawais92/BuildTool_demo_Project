# Task Manager Tutorial

Welcome to the Task Manager application tutorial! This guide will walk you through setting up and using the application.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Setting Up Supabase](#setting-up-supabase)
3. [Running the Application](#running-the-application)
4. [Using the Task Manager](#using-the-task-manager)
5. [Building for Production](#building-for-production)
6. [Running Tests](#running-tests)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git**

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/muhammadawais92/BuildTool_demo_Project.git
cd BuildTool_demo_Project
```

2. **Install dependencies:**

```bash
npm install
```

This command will download and install all required packages defined in `package.json`.

## Setting Up Supabase

The Task Manager uses Supabase as its backend database and authentication provider.

### Step 1: Create a Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project

### Step 2: Get Your Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon/public key**

### Step 3: Configure Environment Variables

1. Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

2. Replace the placeholder values with your actual Supabase credentials

### Step 4: Set Up the Database

**IMPORTANT**: You must run this step or the application won't work!

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Open the file `supabase/migrations/20251029094241_create_tasks_table.sql` in your project
4. Copy the entire SQL content
5. Paste it into the SQL Editor
6. Click **Run** (or press Ctrl+Enter)

**What this does**: Creates the `tasks` table with proper security policies.

**Verify it worked**: Go to **Table Editor** in Supabase and you should see a "tasks" table.

> 💡 **Tip**: If you skip this step, you'll get an error: "Could not find the table 'public.tasks'"

## Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### What You'll See

1. **Login/Signup Page**: First-time users will see the authentication page
2. **Dashboard**: After logging in, you'll see the main task management interface

## Using the Task Manager

### Creating Your First Task

1. Click the **"New Task"** button in the top right
2. Fill in the task details:
   - **Title** (required): Give your task a name
   - **Description** (optional): Add more details
   - **Priority**: Choose Low, Medium, or High
   - **Due Date** (optional): Set a deadline
3. Click **"Create Task"**

### Managing Tasks

#### Changing Task Status

Each task has a status dropdown with three options:
- **Pending**: Task hasn't been started
- **In Progress**: Currently working on it
- **Completed**: Task is done

Simply select a new status from the dropdown to update it.

#### Editing a Task

1. Click the **"Edit"** button on any task card
2. Modify the task details
3. Click **"Update Task"** to save changes

#### Deleting a Task

1. Click the **"Delete"** button on any task card
2. Confirm the deletion in the popup dialog

### Filtering Tasks

Use the filter buttons at the top to view:
- **All**: Show all tasks
- **Pending**: Show only pending tasks
- **In Progress**: Show only tasks in progress
- **Completed**: Show only completed tasks

### Understanding the Dashboard

The dashboard displays four statistics cards:
- **Total Tasks**: Count of all your tasks
- **Pending**: Number of pending tasks
- **In Progress**: Number of tasks you're working on
- **Completed**: Number of finished tasks

## Building for Production

### Standard Build

```bash
npm run build
```

This command:
1. Runs TypeScript type checking
2. Compiles and bundles the application
3. Outputs optimized files to `./dist/`

### Production Build (Comprehensive)

```bash
npm run build:prod
```

This command runs a complete build pipeline:
1. Cleans previous build artifacts
2. Runs ESLint for code quality
3. Runs TypeScript type checking
4. Builds optimized production bundle

### Preview Production Build

After building, preview the production version:

```bash
npm run preview
```

## Running Tests

### Run All Tests

```bash
npm test
```

### Watch Mode (for development)

```bash
npm run test:watch
```

### Generate Coverage Report

```bash
npm run test:coverage
```

### Interactive Test UI

```bash
npm run test:ui
```

## Generating Documentation

### API Reference Documentation

Generate TypeScript API documentation:

```bash
npm run docs
```

Documentation will be generated in `docs/api/` directory.

### View Documentation

To view the generated documentation in your browser:

```bash
npm run docs:serve
```

## Tips and Best Practices

### Task Organization

1. **Use Priorities Wisely**: Mark urgent tasks as High priority
2. **Set Due Dates**: Add deadlines to stay on track
3. **Update Status Regularly**: Keep your task status current
4. **Add Descriptions**: Include details to remember context later

### Development Workflow

1. **Use Hot Reload**: The dev server automatically updates when you save files
2. **Check Console**: Open browser DevTools to see logs and errors
3. **Run Linter**: Use `npm run lint:fix` to auto-fix code style issues
4. **Type Check**: Run `npm run typecheck` before committing

## Troubleshooting

### Common Issues

**Issue**: Application won't start
- **Solution**: Make sure `.env` file exists with valid Supabase credentials

**Issue**: Can't create tasks
- **Solution**: Check that database migrations have been run in Supabase

**Issue**: Build fails
- **Solution**: Run `npm run typecheck` and `npm run lint` to identify issues

## Next Steps

Now that you're familiar with the basics:

1. Explore the codebase in `src/` directory
2. Check out the component documentation
3. Try customizing the UI with Tailwind CSS
4. Add new features or modify existing ones

## Getting Help

- Check the [README.md](../../README.md) for more information
- Review the API documentation in `docs/api/`
- Check the GitHub repository for issues and discussions

Happy task managing! 🎉
