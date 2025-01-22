import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className }: LogoProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-24 h-24",
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            to="/" 
            className={cn(
              "group flex items-center gap-2 transition-transform hover:scale-105",
              className
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className={cn(
                "relative bg-yellow-400 rounded-full p-2 flex items-center justify-center transition-colors group-hover:bg-yellow-300",
                sizes[size]
              )}>
                <img 
                  src="/lovable-uploads/177a7430-45cd-48af-a5b3-4530819e536b.png"
                  alt="EasyMy Learning Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {showText && (
              <span className="text-xl font-bold text-primary dark:text-white">
                EasyMy Learning
              </span>
            )}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <p className="font-semibold">EasyMy Learning Platform</p>
            <p className="text-xs text-muted-foreground">Click to go home</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Logo;