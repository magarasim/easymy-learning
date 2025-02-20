import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
import { Achievements } from "@/components/Achievements";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";
import { OnlineStudents } from "@/components/OnlineStudents";
import Testimonials from "@/components/Testimonials";
import InternshipProgram from "@/components/InternshipProgram";
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronUp } from "lucide-react";

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

  const handleJoinWhatsApp = () => {
    window.open('https://wa.me/+9779863312602', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="fixed top-24 left-4 z-50"
        >
          <Button
            onClick={handleJoinWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center gap-2 rounded-full px-6"
          >
            <MessageSquare className="w-4 h-4" />
            Join WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="fixed top-24 right-4 z-50"
        >
          <OnlineStudents />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
            style={{ opacity: showScrollTop ? 1 : 0 }}
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10"
        >
          <CourseSearch onSearch={handleSearch} onFilterChange={handleFilterChange} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <InternshipProgram />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Stats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Features />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Achievements />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Benefits />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Partners />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Newsletter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <CallToAction />
        </motion.div>
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
