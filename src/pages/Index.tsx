import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import CourseSearch from "@/components/CourseSearch";
import { useToast } from "@/components/ui/use-toast";
import type { CourseFilters } from "@/components/CourseSearch";

const Index = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<CourseFilters>({});

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast({
      title: "Search initiated",
      description: `Searching for courses matching: ${query}`,
    });
  };

  const handleFilterChange = (newFilters: CourseFilters) => {
    setFilters(newFilters);
    toast({
      title: "Filters applied",
      description: "Course list has been updated with your filters",
    });
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: "-100vw",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <CourseSearch onSearch={handleSearch} onFilterChange={handleFilterChange} />
        </motion.div>
        <FeaturedCourses searchQuery={searchQuery} filters={filters} />
        <Features />
        <Benefits />
        <CallToAction />
      </motion.div>
      <Footer />
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <ThemeToggle />
      </motion.div>
    </div>
  );
};

export default Index;