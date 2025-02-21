
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const FloatingActions = () => {
  const handleJoinWhatsApp = () => {
    window.open('https://wa.me/+9779863312602', '_blank');
  };

  return (
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
  );
};

export default FloatingActions;
