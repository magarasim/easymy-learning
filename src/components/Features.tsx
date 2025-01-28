import { Award, BookOpen, Laptop, Gift, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Frontend Development",
    description: "Master modern frontend technologies including React, TypeScript, and responsive design principles. Build interactive user interfaces with modern tooling.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Backend Development",
    description: "Learn server-side programming, database management, and API development. Build robust and scalable backend systems.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "AI Integration",
    description: "Implement artificial intelligence solutions and machine learning models in your applications.",
    icon: Gift,
    image: "/lovable-uploads/177a7430-45cd-48af-a5b3-4530819e536b.png",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Full Stack Development",
    description: "Combine frontend and backend skills to build complete web applications from start to finish.",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Community Support",
    description: "Join our active community of developers, share knowledge, and grow together through collaborative learning.",
    icon: Users,
    image: "/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Career Growth",
    description: "Get certified, build your portfolio, and advance your career with our comprehensive development programs.",
    icon: Trophy,
    image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png",
    color: "from-pink-500 to-pink-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Development Process & Features
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-2xl mx-auto">
            Explore our comprehensive development tracks and learning features
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-blue-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                <feature.icon className="absolute top-4 right-4 w-8 h-8 text-white" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;