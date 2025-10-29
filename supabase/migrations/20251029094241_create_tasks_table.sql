/*
  # Task Manager Database Schema

  1. New Tables
    - `tasks`
      - `id` (uuid, primary key) - Unique identifier for each task
      - `title` (text) - Task title/name
      - `description` (text, optional) - Detailed task description
      - `status` (text) - Task status: 'pending', 'in-progress', or 'completed'
      - `priority` (text) - Task priority: 'low', 'medium', or 'high'
      - `due_date` (timestamp, optional) - Task deadline
      - `created_at` (timestamp) - When the task was created
      - `updated_at` (timestamp) - When the task was last modified
      - `user_id` (uuid) - Foreign key to auth.users

  2. Security
    - Enable RLS on `tasks` table
    - Add policies for authenticated users to manage their own tasks:
      - SELECT: Users can view their own tasks
      - INSERT: Users can create tasks for themselves
      - UPDATE: Users can update their own tasks
      - DELETE: Users can delete their own tasks

  3. Indexes
    - Index on user_id for faster query performance
    - Index on status for filtering tasks
*/

CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in-progress', 'completed')),
  priority text NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  due_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own tasks"
  ON tasks FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tasks"
  ON tasks FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks"
  ON tasks FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks"
  ON tasks FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS tasks_user_id_idx ON tasks(user_id);
CREATE INDEX IF NOT EXISTS tasks_status_idx ON tasks(status);
CREATE INDEX IF NOT EXISTS tasks_due_date_idx ON tasks(due_date);