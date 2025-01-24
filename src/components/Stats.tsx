import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Stats = () => {
  const { toast } = useToast();

  const stats = [
    {
      number: "2000+",
      label: "Active Students",
      link: "/students",
      message: "Join our growing community of over 2000 active learners!"
    },
    {
      number: "100%",
      label: "Scholarship Success",
      link: "/scholarships",
      message: "Learn about our scholarship opportunities and success stories"
    },
    {
      number: "500+",
      label: "Video Lectures",
      link: "/courses",
      message: "Access our comprehensive library of video lectures"
    },
    {
      number: "50+",
      label: "Expert Instructors",
      link: "/instructors",
      message: "Learn from our qualified and experienced instructors"
    }
  ];

  const handleStatClick = (message: string) => {
    toast({
      title: "Coming Soon!",
      description: message,
      duration: 3000,
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to={stat.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleStatClick(stat.message);
                }}
                className="group block p-6 bg-white/80 dark:bg-blue-800/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;