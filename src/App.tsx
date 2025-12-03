/**
 * Main Application Component
 * 
 * This is the root component that handles authentication state and renders
 * either the Auth component (for login/signup) or the Dashboard component
 * (for authenticated users).
 * 
 * @module App
 */

import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import type { Session } from '@supabase/supabase-js';

/**
 * App Component
 * 
 * Manages authentication state and displays appropriate UI based on user session.
 * Shows a loading spinner while checking authentication status.
 * 
 * @component
 * @returns {JSX.Element} The rendered application
 */
function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return session ? <Dashboard /> : <Auth />;
}

export default App;
