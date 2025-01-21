import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface SubNavigationItem {
  title: string;
  path: string;
}

interface NavigationItem {
  title: string;
  path: string;
  description?: string;
  items?: SubNavigationItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState(null);

  // Check for session on component mount
  useState(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  });

  const isActive = (path: string) => location.pathname === path;

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
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const protectedNavigationItems: NavigationItem[] = [
    {
      title: "Resources",
      path: "/resources",
      description: "Access our comprehensive learning materials",
      items: [
        { title: "Mathematics", path: "/resources/math" },
        { title: "Science", path: "/resources/science" },
        { title: "Technology", path: "/resources/technology" },
      ],
    },
    {
      title: "Community",
      path: "/community",
      description: "Connect with fellow learners",
    },
    {
      title: "Blog",
      path: "/blog",
      description: "Read our latest articles and updates",
    },
  ];

  const navigationItems = session ? protectedNavigationItems : publicNavigationItems;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            EasyMy Learning
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
                            isActive(item.path) && "text-primary"
                          )}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subItem.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          isActive(item.path) && "text-primary"
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
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                {item.title}
              </Link>
            ))}
            {session ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  Dashboard
                </Link>
                <Button variant="default" className="text-sm w-full" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
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