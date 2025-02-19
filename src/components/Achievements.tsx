
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, Trophy, Share2, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

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

  const handleShareToWhatsApp = (achievement: Achievement) => {
    const message = `🏆 I just earned the "${achievement.title}" achievement on EasyMy Learning!\n\n${achievement.description}\n\nPoints: ${achievement.points}\n\nJoin me at https://easymylearning.com`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleJoinWhatsApp = () => {
    window.open('https://wa.me/+9779863312602', '_blank');
  };

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

  const getGradientByType = (type: string) => {
    switch (type) {
      case 'course_completion':
        return 'from-yellow-500 via-orange-500 to-red-500';
      case 'milestone':
        return 'from-purple-500 via-pink-500 to-red-500';
      default:
        return 'from-blue-500 via-indigo-500 to-purple-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Achievements
          </h2>
          <Button 
            onClick={handleJoinWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Join WhatsApp Group
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
                className={`relative overflow-hidden rounded-xl border border-white/20 backdrop-blur-sm bg-white/10 dark:bg-gray-800/50 p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradientByType(achievement.achievement_type)} opacity-5`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm">
                      {getAchievementIcon(achievement.achievement_type)}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleShareToWhatsApp(achievement)}
                      className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Trophy className="w-4 h-4 mr-1" />
                        <span>{achievement.points} points</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(achievement.earned_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
