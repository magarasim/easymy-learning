import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavbarMenuProps {
  items: {
    title: string;
    path: string;
    description?: string;
  }[];
  mobile?: boolean;
}

const NavbarMenu = ({ items, mobile = false }: NavbarMenuProps) => {
  if (mobile) {
    return (
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="block px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          >
            <div className="font-medium">{item.title}</div>
            {item.description && (
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            )}
          </Link>
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
            <div className="text-sm font-medium leading-none">{item.title}</div>
            {item.description && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                {item.description}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      ))}
    </>
  );
};

export default NavbarMenu;