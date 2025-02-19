
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, Circle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface OnlineStudent {
  id: string;
  profiles: {
    full_name: string;
    avatar_url: string | null;
  };
  status: string;
  activity: string | null;
}

export const OnlineStudents = () => {
  const [onlineStudents, setOnlineStudents] = useState<OnlineStudent[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Initial fetch of online students
    const fetchOnlineStudents = async () => {
      try {
        const { data, error } = await supabase
          .from('online_presence')
          .select(`
            id,
            profiles (
              full_name,
              avatar_url
            ),
            status,
            activity
          `)
          .not('status', 'eq', 'offline')
          .order('last_seen', { ascending: false });

        if (error) throw error;
        setOnlineStudents(data || []);
      } catch (error) {
        console.error('Error fetching online students:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load online students",
        });
      }
    };

    fetchOnlineStudents();

    // Subscribe to realtime changes
    const channel = supabase
      .channel('online-presence')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'online_presence'
        },
        async () => {
          await fetchOnlineStudents();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Online Students
      </h2>
      <div className="space-y-4">
        <AnimatePresence>
          {onlineStudents.map((student) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {student.profiles.avatar_url ? (
                <img
                  src={student.profiles.avatar_url}
                  alt={student.profiles.full_name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <UserRound className="w-10 h-10 text-gray-400" />
              )}
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{student.profiles.full_name}</span>
                  <Circle className="w-3 h-3 text-green-500 fill-current" />
                </div>
                {student.activity && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {student.activity}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
