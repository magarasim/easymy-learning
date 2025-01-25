import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import FeaturedCourses from "@/components/FeaturedCourses";

const Index = () => {
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
        <FeaturedCourses />
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