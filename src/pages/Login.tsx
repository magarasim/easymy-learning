import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/");
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

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
              }}
              providers={[]}
              redirectTo={window.location.origin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;