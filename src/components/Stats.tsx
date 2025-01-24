import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Users, BookOpen, Trophy, Target } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Active Students",
    value: "2,000+",
    icon: Users,
    description: "Join our growing community of learners!",
    color: "text-blue-500"
  },
  {
    id: 2,
    title: "Courses Available",
    value: "150+",
    icon: BookOpen,
    description: "Explore our diverse range of courses",
    color: "text-green-500"
  },
  {
    id: 3,
    title: "Success Rate",
    value: "95%",
    icon: Trophy,
    description: "Our students achieve their learning goals",
    color: "text-yellow-500"
  },
  {
    id: 4,
    title: "Career Placements",
    value: "80%",
    icon: Target,
    description: "Students placed in their desired careers",
    color: "text-purple-500"
  }
];

const Stats = () => {
  const { toast } = useToast();

  const handleStatClick = (stat: typeof stats[0]) => {
    toast({
      title: stat.title,
      description: stat.description,
      duration: 3000,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStatClick(stat)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-12 h-12 ${stat.color}`} />
                <motion.span 
                  className="text-3xl font-bold text-gray-900 dark:text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {stat.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;