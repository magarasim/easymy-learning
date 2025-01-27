import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/dashboard");
      }
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        try {
          // Check if profile exists
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select()
            .eq('id', session.user.id)
            .single();

          if (!profile && !profileError) {
            // Create profile if it doesn't exist
            const { error: insertError } = await supabase
              .from('profiles')
              .insert([
                {
                  id: session.user.id,
                  username: session.user.email?.split('@')[0],
                  full_name: session.user.user_metadata.full_name,
                  avatar_url: session.user.user_metadata.avatar_url
                }
              ]);

            if (insertError) {
              console.error('Error creating profile:', insertError);
              toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to create user profile. Please try again.",
              });
              return;
            }
          }

          toast({
            title: "Welcome!",
            description: "You have successfully signed in.",
          });
          navigate("/dashboard");
        } catch (error) {
          console.error('Error during sign in:', error);
          toast({
            variant: "destructive",
            title: "Error",
            description: "An unexpected error occurred. Please try again.",
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800"
    >
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-center mb-8">Welcome to EasyMy Learning</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: 'rgb(59, 130, 246)',
                        brandAccent: 'rgb(37, 99, 235)',
                      },
                    },
                  },
                  className: {
                    button: 'bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors',
                    input: 'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    label: 'text-gray-700 dark:text-gray-200 font-medium',
                  },
                }}
                providers={[]}
                redirectTo={window.location.origin}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;