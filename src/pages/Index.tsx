
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useToast } from "@/components/ui/use-toast";
import type { CourseFilters } from "@/components/CourseSearch";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActions from "@/components/FloatingActions";
import MainContent from "@/components/MainContent";

const Index = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<CourseFilters>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      <Navbar />
      
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        <FloatingActions />
        <MainContent onSearch={handleSearch} onFilterChange={handleFilterChange} />
        <ScrollToTop visible={showScrollTop} />
      </motion.div>

      <Footer />
      
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.4, type: "spring", stiffness: 200, damping: 20 }}
      >
        <ThemeToggle />
      </motion.div>
    </div>
  );
};

export default Index;
