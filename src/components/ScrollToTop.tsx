
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

interface ScrollToTopProps {
  visible: boolean;
}

const ScrollToTop = ({ visible }: ScrollToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-8 z-50"
    >
      <Button
        onClick={scrollToTop}
        className="rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </motion.div>
  );
};

export default ScrollToTop;
