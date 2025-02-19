
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
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
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
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-lg p-4 transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-64'
      }`}
    >
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Online Students
        </h2>
        <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <Circle className="w-3 h-3 text-green-500 fill-current mr-1" />
          {onlineStudents.length}
        </span>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-3 max-h-[300px] overflow-y-auto scrollbar-none"
          >
            {onlineStudents.map((student) => (
              <motion.div
                key={student.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                {student.profiles.avatar_url ? (
                  <img
                    src={student.profiles.avatar_url}
                    alt={student.profiles.full_name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <UserRound className="w-8 h-8 text-gray-400" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {student.profiles.full_name}
                  </p>
                  {student.activity && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {student.activity}
                    </p>
                  )}
                </div>
                <Circle className="w-2 h-2 text-green-500 fill-current flex-shrink-0" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
