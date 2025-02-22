
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
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
  const whatsappLink = 'https://chat.whatsapp.com/IeouklwfjxTBkq8k1SLRsY';
  
  const handleWhatsAppJoin = () => {
    window.open(whatsappLink, '_blank');
  };

  const phoneNumbers = [
    "+977 9763570043",
    "+977 9701583778",
    "+977 9708553673",
    "+977 9802594435",
    "+977 9820790791",
    "+977 9863312602",
    "+977 9709223262"
  ];

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 pt-16">
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
                src="/lovable-uploads/c1419d13-0027-4219-980c-d0be45b7ebc3.png" 
                alt="EasyMy Learning Logo" 
                className="w-32 h-32"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 rounded-full p-4 text-center transform cursor-pointer shadow-lg"
              >
                <p className="text-black font-bold">
                  Price<br />
                  Just @Rs.<br />
                  <span className="line-through">3299/-</span><br />
                  999/-
                </p>
              </motion.div>
            </div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Master All Courses
              <span className="block text-yellow-400">@ EasyMy Learning</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed bg-blue-600/30 p-4 rounded-lg"
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
                    className="text-lg px-8 bg-yellow-400 hover:bg-yellow-500 text-black group"
                  >
                    Join WhatsApp
                    <MessageSquare className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Bridge course Pre-booking 1st stage</DialogTitle>
                    <DialogDescription>
                      Scan QR Code to Join WhatsApp Group
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center justify-center p-6">
                    <img 
                      src="/lovable-uploads/28e4901e-6806-41f5-8bf6-2479fe7118cc.png"
                      alt="WhatsApp Group QR Code"
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="font-semibold text-blue-600">Contact Numbers:</p>
                      {phoneNumbers.map((number, index) => (
                        <p key={index} className="hover:text-blue-600 transition-colors">
                          <a href={`tel:${number}`}>{number}</a>
                        </p>
                      ))}
                    </div>
                    <Button 
                      onClick={handleWhatsAppJoin}
                      className="w-full bg-green-500 hover:bg-green-600"
                    >
                      Click here to join directly
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white text-white hover:bg-white/10 group"
                onClick={() => window.location.href = 'tel:+9779863312602'}
              >
                Call Now
                <Phone className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
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
                <motion.li 
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span className="mr-2 text-yellow-400">✓</span>
                  Quality Education
                </motion.li>
                <motion.li 
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span className="mr-2 text-yellow-400">✓</span>
                  Career Growth & Scholarship Opportunities
                </motion.li>
                <motion.li 
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span className="mr-2 text-yellow-400">✓</span>
                  Low Price with More Benefits
                </motion.li>
                <motion.li 
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span className="mr-2 text-yellow-400">✓</span>
                  Accelerate Technical Growth & Boost Productivity by 10X
                </motion.li>
              </ul>
              <motion.div 
                className="mt-6 p-4 bg-blue-600/30 rounded-lg border-2 border-yellow-400"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-yellow-400 font-semibold text-center">
                  Pre-Booking Starts On January 7th 2025 Onwards
                </p>
              </motion.div>
              <div className="mt-4 text-white/90 space-y-2">
                <p className="font-semibold">More Information:</p>
                <a 
                  href="https://www.EasyMyLearning.com" 
                  className="block text-blue-300 hover:text-blue-200 transition-colors"
                >
                  www.EasyMyLearning.com
                </a>
                <a 
                  href="mailto:info@EasyMyLearning.com" 
                  className="block text-blue-300 hover:text-blue-200 transition-colors"
                >
                  info@EasyMyLearning.com
                </a>
                <a 
                  href="https://www.youtube.com/@EasyMyLearning" 
                  className="block text-blue-300 hover:text-blue-200 transition-colors"
                >
                  youtube.com/@EasyMyLearning
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
