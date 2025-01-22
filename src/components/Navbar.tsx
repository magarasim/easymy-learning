import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import NavbarMenu from "./NavbarMenu";
import { Menu } from "lucide-react";

interface NavigationItem {
  title: string;
  path: string;
  description?: string;
  items?: NavigationItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
      });
    } else {
      navigate("/");
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
    }
  };

  const publicNavigationItems: NavigationItem[] = [
    { 
      title: "About", 
      path: "/about",
      description: "Learn about our mission and vision for education"
    },
    { 
      title: "Contact", 
      path: "/contact",
      description: "Get in touch with our support team"
    },
  ];

  const protectedNavigationItems: NavigationItem[] = [
    {
      title: "Resources",
      path: "/resources",
      description: "Access comprehensive learning materials and study guides",
      items: [
        { 
          title: "Mathematics", 
          path: "/resources/math",
          description: "Advanced mathematics courses and practice materials"
        },
        { 
          title: "Science", 
          path: "/resources/science",
          description: "In-depth science topics and laboratory guides"
        },
        { 
          title: "Technology", 
          path: "/resources/technology",
          description: "Latest technology trends and practical tutorials"
        },
      ],
    },
    {
      title: "Community",
      path: "/community",
      description: "Connect with fellow learners and share experiences",
    },
    {
      title: "Blog",
      path: "/blog",
      description: "Read our latest articles and educational insights",
    },
  ];

  const navigationItems = session ? protectedNavigationItems : publicNavigationItems;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm dark:bg-slate-900/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
          >
            <img 
              src="/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png" 
              alt="EasyMy Learning Logo" 
              className="w-8 h-8"
            />
            <span>EasyMy Learning</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            location.pathname === item.path && "text-primary"
                          )}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[400px] p-4">
                            <NavbarMenu items={item.items} />
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary flex items-center px-4 py-2",
                          location.pathname === item.path && "text-primary"
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              {session ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="ghost" className="text-sm">
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="default" className="text-sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="default" className="text-sm">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <NavbarMenu items={navigationItems} mobile />
            {session ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md mt-4"
                >
                  Dashboard
                </Link>
                <Button variant="default" className="text-sm w-full mt-2" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" className="block mt-4">
                <Button variant="default" className="text-sm w-full">
                  Login
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;