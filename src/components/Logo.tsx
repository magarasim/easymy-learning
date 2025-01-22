import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  showTooltip?: boolean;
}

const Logo = ({ size = "md", showText = true, className, showTooltip = true }: LogoProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-24 h-24",
  };

  const logoContent = (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group flex items-center gap-2 transition-all duration-300",
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
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-yellow-200 dark:to-yellow-400"
        >
          EasyMy Learning
        </motion.span>
      )}
    </motion.div>
  );

  if (!showTooltip) {
    return <Link to="/">{logoContent}</Link>;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/">{logoContent}</Link>
        </TooltipTrigger>
        <TooltipContent className="bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 p-4 max-w-xs">
          <div className="space-y-2">
            <h3 className="font-semibold text-primary dark:text-yellow-300">
              EasyMy Learning Platform
            </h3>
            <p className="text-sm text-muted-foreground">
              Your gateway to comprehensive online education. Click to explore our courses and learning resources.
            </p>
            <div className="flex gap-2 text-xs text-muted-foreground pt-2 border-t">
              <span className="px-2 py-1 bg-muted rounded-full">Online Courses</span>
              <span className="px-2 py-1 bg-muted rounded-full">Expert Instructors</span>
              <span className="px-2 py-1 bg-muted rounded-full">24/7 Support</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Logo;