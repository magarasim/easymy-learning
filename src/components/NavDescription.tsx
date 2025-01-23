import { ReactNode } from "react";

interface NavDescriptionProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const NavDescription = ({ title, description, icon }: NavDescriptionProps) => {
  return (
    <div className="flex items-start space-x-3 p-2">
      {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default NavDescription;