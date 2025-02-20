
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, Circle, MessageSquare, Clock, Activity } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OnlineStudent {
  id: string;
  profiles: {
    full_name: string;
    avatar_url: string | null;
  };
  status: string;
  activity: string | null;
  last_seen: string;
}

export const OnlineStudents = () => {
  const [onlineStudents, setOnlineStudents] = useState<OnlineStudent[]>([]);
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'idle'>('all');

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
            activity,
            last_seen
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
    const interval = setInterval(fetchOnlineStudents, 30000); // Refresh every 30 seconds
    
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
      clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, [toast]);

  const filteredStudents = onlineStudents.filter(student => {
    if (filter === 'all') return true;
    if (filter === 'active') return student.status === 'online';
    return student.status === 'idle';
  });

  const getTimeSince = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-lg p-4 transition-all duration-300 ${
        isExpanded ? 'w-96' : 'w-72'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Online Students
        </h2>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="animate-pulse">
            <Circle className="w-2 h-2 text-green-500 fill-current mr-1" />
            {onlineStudents.length}
          </Badge>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:bg-gray-100 dark:hover:bg-gray-700/50"
          >
            <Activity className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        {(['all', 'active', 'idle'] as const).map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(filterType)}
            className="capitalize"
          >
            {filterType}
          </Button>
        ))}
      </div>
      
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{ height: "auto", opacity: 1 }}
          className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-none"
        >
          {filteredStudents.map((student) => (
            <HoverCard key={student.id}>
              <HoverCardTrigger asChild>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                >
                  <div className="relative">
                    {student.profiles.avatar_url ? (
                      <img
                        src={student.profiles.avatar_url}
                        alt={student.profiles.full_name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-offset-2 ring-purple-500"
                      />
                    ) : (
                      <UserRound className="w-10 h-10 text-gray-400 p-1 bg-gray-100 rounded-full" />
                    )}
                    <Circle className={`absolute bottom-0 right-0 w-3 h-3 ${
                      student.status === 'online' ? 'text-green-500' : 'text-yellow-500'
                    } fill-current ring-2 ring-white dark:ring-gray-800`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {student.profiles.full_name}
                    </p>
                    {student.activity && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate flex items-center">
                        <Activity className="w-3 h-3 mr-1" />
                        {student.activity}
                      </p>
                    )}
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{student.profiles.full_name}</h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      Last seen: {getTimeSince(student.last_seen)}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      {student.status === 'online' ? 'Currently active' : 'Away'}
                    </div>
                  </div>
                  {student.profiles.avatar_url && (
                    <img
                      src={student.profiles.avatar_url}
                      alt={student.profiles.full_name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                </div>
                {student.activity && (
                  <div className="mt-2 pt-2 border-t">
                    <p className="text-xs text-gray-500">{student.activity}</p>
                  </div>
                )}
              </HoverCardContent>
            </HoverCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
