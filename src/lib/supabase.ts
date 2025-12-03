/**
 * Supabase Client Configuration
 * 
 * This module initializes and exports the Supabase client for database operations.
 * It also defines the Task interface used throughout the application.
 * 
 * @module supabase
 */

import { createClient } from '@supabase/supabase-js';

/**
 * Supabase project URL from environment variables
 * @constant
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

/**
 * Supabase anonymous key for client-side authentication
 * @constant
 */
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Initialized Supabase client instance
 * Used for all database operations and authentication
 * @constant
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Task interface representing a task in the database
 * 
 * @interface Task
 * @property {string} id - Unique identifier for the task (UUID)
 * @property {string} title - Task title/name
 * @property {string} description - Detailed description of the task
 * @property {'pending' | 'in-progress' | 'completed'} status - Current status of the task
 * @property {'low' | 'medium' | 'high'} priority - Priority level of the task
 * @property {string | null} due_date - Optional due date in ISO format
 * @property {string} created_at - Timestamp when task was created
 * @property {string} updated_at - Timestamp when task was last updated
 * @property {string} user_id - ID of the user who owns the task
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  due_date: string | null;
  created_at: string;
  updated_at: string;
  user_id: string;
}
