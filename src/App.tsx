
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import { supabase } from "./integrations/supabase/client";

// Create a new QueryClient instance outside of the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      retry: 1,
    },
  },
});

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Configure Supabase auth redirects
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        if (location.pathname === '/login') {
          window.location.href = '/dashboard';
        }
        
        // Update online presence
        const updatePresence = async () => {
          try {
            const { error } = await supabase
              .from('online_presence')
              .upsert({
                user_id: session.user.id,
                status: 'online',
                last_seen: new Date().toISOString(),
                activity: `Viewing ${location.pathname}`
              }, {
                onConflict: 'user_id'
              });

            if (error) throw error;
          } catch (error) {
            console.error('Error updating presence:', error);
          }
        };

        updatePresence();

        // Set up presence channel
        const channel = supabase.channel('online-presence')
          .subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
              await updatePresence();
            }
          });

        // Update presence before user leaves
        const handleBeforeUnload = async () => {
          try {
            await supabase
              .from('online_presence')
              .update({
                status: 'offline',
                last_seen: new Date().toISOString()
              })
              .eq('user_id', session.user.id);
          } catch (error) {
            console.error('Error updating offline status:', error);
          }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
          supabase.removeChannel(channel);
        };
      }
    });
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
