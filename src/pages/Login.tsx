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

            // Send welcome email using the edge function
            try {
              await supabase.functions.invoke('send-email', {
                body: {
                  to: session.user.email,
                  subject: "Welcome to EasyMy Learning!",
                  html: `
                    <div style="background-color: #f9fafb; padding: 40px 0;">
                      <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        <h1 style="color: #1e40af; margin-bottom: 20px;">Welcome to EasyMy Learning!</h1>
                        <p style="color: #374151; font-size: 16px; line-height: 1.6;">Dear ${session.user.email?.split('@')[0]},</p>
                        <p style="color: #374151; font-size: 16px; line-height: 1.6;">Thank you for joining EasyMy Learning! We're excited to have you on board.</p>
                        <p style="color: #374151; font-size: 16px; line-height: 1.6;">Get started by exploring our courses and resources.</p>
                        <div style="margin: 30px 0;">
                          <a href="${window.location.origin}/dashboard" 
                             style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                             Explore Courses
                          </a>
                        </div>
                        <p style="color: #374151; font-size: 16px; line-height: 1.6;">Best regards,<br>The EasyMy Learning Team</p>
                      </div>
                    </div>
                  `
                }
              });
            } catch (emailError) {
              console.error('Error sending welcome email:', emailError);
              // Don't show toast for email error as it's not critical
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
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-4 pt-16">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Welcome to EasyMy Learning
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Your journey to knowledge starts here
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: 'rgb(37, 99, 235)',
                        brandAccent: 'rgb(29, 78, 216)',
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