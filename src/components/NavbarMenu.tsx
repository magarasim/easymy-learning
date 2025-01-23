import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavSubItem {
  title: string;
  path: string;
  description: string;
  icon: React.ReactNode;
}

interface NavItem {
  title: string;
  path: string;
  description: string;
  icon: React.ReactNode;
  items?: NavSubItem[];  // Making items optional with the ? operator
}

interface NavbarMenuProps {
  items: NavItem[];
  mobile?: boolean;
}

const NavbarMenu = ({ items, mobile = false }: NavbarMenuProps) => {
  if (mobile) {
    return (
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.title}>
            <Link
              to={item.path}
              className="block px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <div>
                  <div className="font-medium">{item.title}</div>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            </Link>
            {item.items && (
              <div className="ml-6 mt-2 space-y-2">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      {subItem.icon}
                      <div>
                        <div className="font-medium">{subItem.title}</div>
                        <p className="text-xs text-muted-foreground">{subItem.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {items.map((item) => (
        <NavigationMenuLink
          key={item.title}
          asChild
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <Link to={item.path}>
            <div className="flex items-center space-x-2">
              {item.icon}
              <div>
                <div className="text-sm font-medium leading-none">{item.title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        </NavigationMenuLink>
      ))}
    </>
  );
};

export default NavbarMenu;