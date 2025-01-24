import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        // Navigate to the intended page or dashboard
        const intendedPath = location.state?.from?.pathname || "/";
        navigate(intendedPath);
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
      } else if (event === "SIGNED_UP") {
        toast({
          title: "Welcome!",
          description: "Your account has been created successfully.",
        });
      } else if (event === "USER_DELETED") {
        toast({
          variant: "destructive",
          title: "Account deleted",
          description: "Your account has been successfully deleted.",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location, toast]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome to EasyMy Learning</h1>
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'rgb(var(--primary))',
                      brandAccent: 'rgb(var(--primary))',
                    },
                  },
                },
                className: {
                  container: 'flex flex-col gap-4',
                  button: 'bg-primary text-primary-foreground hover:bg-primary/90',
                  input: 'bg-background',
                },
              }}
              providers={[]}
              redirectTo={window.location.origin}
              onError={(error) => {
                toast({
                  variant: "destructive",
                  title: "Authentication Error",
                  description: error.message,
                });
              }}
            />
          </div>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Please sign up if you don't have an account yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;