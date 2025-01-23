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
import NavDescription from "./NavDescription";
import Logo from "./Logo";
import { 
  Menu, 
  Code2, 
  Database, 
  Users, 
  BookOpen, 
  MessageSquare,
  Phone,
  GraduationCap,
  FileSpreadsheet,
  Binary
} from "lucide-react";

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

  const publicNavigationItems = [
    { 
      title: "About",
      path: "/about",
      description: "Discover our mission to empower developers worldwide",
      icon: <Users className="w-4 h-4 text-blue-500" />
    },
    { 
      title: "Contact",
      path: "/contact",
      description: "Get in touch with our expert support team",
      icon: <Phone className="w-4 h-4 text-green-500" />
    },
  ];

  const protectedNavigationItems = [
    {
      title: "Resources",
      path: "/resources",
      description: "Access comprehensive learning materials and guides",
      icon: <BookOpen className="w-4 h-4 text-purple-500" />,
      items: [
        { 
          title: "Frontend Development",
          path: "/resources/frontend",
          description: "Master modern web development with React and TypeScript",
          icon: <Code2 className="w-4 h-4 text-blue-500" />
        },
        { 
          title: "Backend Development",
          path: "/resources/backend",
          description: "Build robust server-side applications and APIs",
          icon: <Database className="w-4 h-4 text-green-500" />
        },
        { 
          title: "Data Science",
          path: "/resources/data-science",
          description: "Learn data analysis and machine learning",
          icon: <Binary className="w-4 h-4 text-purple-500" />
        },
      ],
    },
    {
      title: "Community",
      path: "/community",
      description: "Connect and collaborate with fellow developers",
      icon: <MessageSquare className="w-4 h-4 text-orange-500" />
    },
    {
      title: "Course Catalog",
      path: "/blog",
      description: "Browse our extensive collection of courses",
      icon: <GraduationCap className="w-4 h-4 text-blue-500" />
    },
  ];

  const navigationItems = session ? protectedNavigationItems : publicNavigationItems;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm dark:bg-slate-900/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-primary group",
                            location.pathname === item.path && "text-primary"
                          )}
                        >
                          <span className="flex items-center space-x-2">
                            {item.icon}
                            <span>{item.title}</span>
                          </span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[400px] p-4 space-y-4">
                            <NavDescription
                              title={item.title}
                              description={item.description}
                              icon={item.icon}
                            />
                            <div className="space-y-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.path}
                                  className="block p-3 space-y-1 rounded-md hover:bg-accent"
                                >
                                  <NavDescription
                                    title={subItem.title}
                                    description={subItem.description}
                                    icon={subItem.icon}
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                          location.pathname === item.path && "text-primary"
                        )}
                      >
                        {item.icon}
                        <span>{item.title}</span>
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