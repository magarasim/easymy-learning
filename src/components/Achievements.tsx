
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Achievement {
  id: string;
  title: string;
  description: string;
  badge_url: string | null;
  achievement_type: string;
  points: number;
  earned_at: string;
}

export const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAchievements = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('achievements')
          .select('*')
          .eq('user_id', user.id)
          .order('earned_at', { ascending: false });

        if (error) throw error;
        setAchievements(data || []);
      } catch (error) {
        console.error('Error fetching achievements:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load achievements",
        });
      }
    };

    fetchAchievements();

    // Subscribe to realtime changes
    const channel = supabase
      .channel('achievements')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'achievements',
        },
        async (payload) => {
          const { data: { user } } = await supabase.auth.getUser();
          if (payload.new.user_id === user?.id) {
            setAchievements(prev => [payload.new as Achievement, ...prev]);
            toast({
              title: "New Achievement Unlocked!",
              description: payload.new.title,
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'course_completion':
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 'milestone':
        return <Star className="w-6 h-6 text-purple-500" />;
      default:
        return <Award className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        My Achievements
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  {getAchievementIcon(achievement.achievement_type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Trophy className="w-4 h-4 mr-1" />
                    <span>{achievement.points} points</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
