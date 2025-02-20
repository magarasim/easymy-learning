
import { Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCardContent } from "@/components/ui/hover-card";

interface FeatureStatsProps {
  title: string;
  stats: {
    students: number;
    rating: number;
    reviews: number;
  };
}

export const FeatureStats = ({ title, stats }: FeatureStatsProps) => {
  return (
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">{title}</h4>
        <div className="flex justify-between text-sm">
          <span>Total Students:</span>
          <span className="font-medium">{stats.students}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Average Rating:</span>
          <span className="font-medium">{stats.rating}/5.0</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Reviews:</span>
          <span className="font-medium">{stats.reviews}</span>
        </div>
        <Button className="w-full mt-2" variant="outline">
          Learn More
        </Button>
      </div>
    </HoverCardContent>
  );
};
