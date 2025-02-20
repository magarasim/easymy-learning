import { Award, BookOpen, Laptop, Gift, Users, Trophy, BookCheck, Brain, Rocket, Target, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FeatureCard } from "./features/FeatureCard";
import { CategoryFilters } from "./features/CategoryFilters";

const features = [
  {
    title: "Frontend Development",
    description: "Master modern frontend technologies including React, TypeScript, and responsive design principles. Build interactive user interfaces with modern tooling.",
    icon: BookOpen,
    image: "/lovable-uploads/c4b7d511-c7bc-41d9-a21f-f2f128f4ce32.png",
    color: "from-blue-500 to-blue-600",
    stats: { students: 1200, rating: 4.8, reviews: 450 }
  },
  {
    title: "Backend Development",
    description: "Learn server-side programming, database management, and API development. Build robust and scalable backend systems.",
    icon: Award,
    image: "/lovable-uploads/58672377-a9af-4b6c-b08e-4a3eb119fc12.png",
    color: "from-purple-500 to-purple-600",
    stats: { students: 980, rating: 4.7, reviews: 380 }
  },
  {
    title: "AI Integration",
    description: "Implement artificial intelligence solutions and machine learning models in your applications.",
    icon: Brain,
    image: "/lovable-uploads/177a7430-45cd-48af-a5b3-4530819e536b.png",
    color: "from-green-500 to-green-600",
    stats: { students: 1500, rating: 4.9, reviews: 520 }
  },
  {
    title: "Full Stack Development",
    description: "Combine frontend and backend skills to build complete web applications from start to finish.",
    icon: Laptop,
    image: "/lovable-uploads/88959ca4-7d53-4d1a-8f3d-16a3602420fe.png",
    color: "from-red-500 to-red-600",
    stats: { students: 2100, rating: 4.8, reviews: 780 }
  },
  {
    title: "Community Support",
    description: "Join our active community of developers, share knowledge, and grow together through collaborative learning.",
    icon: Users,
    image: "/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png",
    color: "from-yellow-500 to-yellow-600",
    stats: { students: 3500, rating: 4.9, reviews: 1200 }
  },
  {
    title: "Career Growth",
    description: "Get certified, build your portfolio, and advance your career with our comprehensive development programs.",
    icon: Trophy,
    image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png",
    color: "from-pink-500 to-pink-600",
    stats: { students: 2800, rating: 4.7, reviews: 950 }
  },
  {
    title: "Project-Based Learning",
    description: "Learn by building real-world projects with guidance from industry experts.",
    icon: Rocket,
    image: "/lovable-uploads/7dae9b03-684c-41e4-bbc0-c8657dad5097.png",
    color: "from-indigo-500 to-indigo-600",
    stats: { students: 1800, rating: 4.8, reviews: 680 }
  },
  {
    title: "Interview Preparation",
    description: "Comprehensive preparation for technical interviews with mock sessions and expert feedback.",
    icon: Target,
    image: "/lovable-uploads/c6c35c7b-9a0c-48d6-80ed-d8b7f02c07f1.png",
    color: "from-orange-500 to-orange-600",
    stats: { students: 1600, rating: 4.9, reviews: 590 }
  },
  {
    title: "Mentorship Program",
    description: "One-on-one guidance from experienced developers to accelerate your learning journey.",
    icon: Compass,
    image: "/lovable-uploads/f3bff778-3423-4584-9e8b-6083cd14ba42.png",
    color: "from-teal-500 to-teal-600",
    stats: { students: 900, rating: 4.9, reviews: 320 }
  }
];

const Features = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = ["All", "Development", "Career", "Community", "AI"];

  const filteredFeatures = selectedCategory && selectedCategory !== "All"
    ? features.filter(f => f.title.toLowerCase().includes(selectedCategory.toLowerCase()))
    : features;

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

          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isHovered={hoveredCard === index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
