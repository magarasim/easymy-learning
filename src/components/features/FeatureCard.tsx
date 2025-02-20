
import { Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { FeatureStats } from "./FeatureStats";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    color: string;
    stats: {
      students: number;
      rating: number;
      reviews: number;
    };
  };
  index: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const FeatureCard = ({
  feature,
  index,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: FeatureCardProps) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group relative"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="relative overflow-hidden rounded-xl bg-white/80 dark:bg-blue-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
              <Icon className="absolute top-4 right-4 w-8 h-8 text-white" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                className="absolute bottom-4 left-4 flex space-x-2"
              >
                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                  <Users className="w-3 h-3 mr-1" />
                  {feature.stats.students}
                </Badge>
                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                  <Star className="w-3 h-3 mr-1" />
                  {feature.stats.rating}
                </Badge>
              </motion.div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </HoverCardTrigger>
        
        <FeatureStats title={feature.title} stats={feature.stats} />
      </HoverCard>
    </motion.div>
  );
};
