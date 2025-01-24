import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="flex justify-between items-start mb-6">
              <img 
                src="/lovable-uploads/c4b7d511-c7bc-41d9-a21f-f2f128f4ce32.png" 
                alt="EasyMy Learning Logo" 
                className="w-24 h-24"
              />
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                className="bg-yellow-400 rounded-full p-4 text-center"
              >
                <p className="text-black font-bold">
                  Special Offer<br />
                  Rs. 3299/-<br />
                  Now Rs. 999/-
                </p>
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-yellow-400">Learning Journey</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Comprehensive courses for Science, Law, Management and CTEVT Streams.
              Join our community of learners and save up to 70% today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-yellow-400 hover:bg-yellow-500 text-black"
                onClick={() => window.open('https://wa.me/+9779863312602', '_blank')}
              >
                Join WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/courses'}
              >
                Explore Courses
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 blur-2xl rounded-lg"></div>
            <img 
              src="/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png"
              alt="Learning Platform"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;