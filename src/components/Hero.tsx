import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
              <motion.img 
                src="/lovable-uploads/eeeeac3b-ba49-4a1c-aacc-0b34b7f39b57.png" 
                alt="EasyMy Learning Logo" 
                className="w-32 h-32"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                className="bg-yellow-400 rounded-full p-4 text-center transform hover:scale-105 transition-transform cursor-pointer"
              >
                <p className="text-black font-bold">
                  Special Offer<br />
                  Rs. 3299/-<br />
                  Now Rs. 999/-
                </p>
              </motion.div>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Master All Courses
              <span className="block text-yellow-400">@ EasyMy Learning</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our MCQs include questions from Kathmandu Metro Scholarship & Top Colleges including
              St. Xavier, KMC, SOS, Global, CCRC, Sainik, Prasadi, Trinity, Xavier International, Arniko & More
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 bg-yellow-400 hover:bg-yellow-500 text-black"
                  >
                    Join WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Scan QR Code to Join WhatsApp Group</DialogTitle>
                    <DialogDescription>
                      Bridge course Pre-booking 1st stage
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center justify-center p-6">
                    <img 
                      src="/lovable-uploads/28e4901e-6806-41f5-8bf6-2479fe7118cc.png"
                      alt="WhatsApp Group QR Code"
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500">Contact Numbers:</p>
                    <div className="space-y-1">
                      <p>+977 9763570043</p>
                      <p>+977 9701583778</p>
                      <p>+977 9708553673</p>
                      <p>+977 9802594435</p>
                      <p>+977 9820790791</p>
                    </div>
                    <a 
                      href="https://wa.me/+9779863312602"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors block mt-4"
                    >
                      Click here to join directly
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/courses'}
              >
                Explore Courses
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 blur-2xl rounded-lg"></div>
            <div className="relative space-y-6 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white">Key Features</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Quality Education
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Career Growth & Scholarship Opportunities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Low Price with More Benefits
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Accelerate Technical Growth & Boost Productivity by 10X
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-600/30 rounded-lg">
                <p className="text-yellow-400 font-semibold">
                  Pre-Booking Starts On January 7th 2025 Onwards
                </p>
              </div>
              <div className="mt-4 text-white/90">
                <p className="font-semibold">More Information:</p>
                <a href="https://www.EasyMyLearning.com" className="text-blue-300 hover:text-blue-200">
                  www.EasyMyLearning.com
                </a>
                <p className="mt-2">
                  <a href="mailto:info@EasyMyLearning.com" className="text-blue-300 hover:text-blue-200">
                    info@EasyMyLearning.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;