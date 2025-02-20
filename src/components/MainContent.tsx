
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import CourseSearch from "@/components/CourseSearch";
import { Achievements } from "@/components/Achievements";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import InternshipProgram from "@/components/InternshipProgram";
import type { CourseFilters } from "@/components/CourseSearch";

interface MainContentProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: CourseFilters) => void;
}

const MainContent = ({ onSearch, onFilterChange }: MainContentProps) => {
  return (
    <>
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
        <CourseSearch onSearch={onSearch} onFilterChange={onFilterChange} />
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
    </>
  );
};

export default MainContent;
