import { Button } from "@/components/ui/button";
import { Phone, Mail, Youtube, QrCode } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const CallToAction = () => {
  const whatsappLink = 'https://chat.whatsapp.com/IeouklwfjxTBkq8k1SLRsY';

  const handleWhatsAppJoin = () => {
    window.open(whatsappLink, '_blank');
  };

  const socialLinks = [
    {
      platform: "Email",
      value: "info@EasyMyLearning.com",
      icon: <Mail className="inline-block mr-2 h-5 w-5" />
    },
    {
      platform: "YouTube",
      value: "youtube.com/@EasyMyLearning",
      url: "https://youtube.com/@EasyMyLearning",
      icon: <Youtube className="inline-block mr-2 h-5 w-5" />
    }
  ];

  const phoneNumbers = [
    "+977 9763570043",
    "+977 9701583778",
    "+977 9708553673",
    "+977 9802594435",
    "+977 9820790791"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Contact Us Today</h2>
          <p className="text-lg text-blue-100 mb-8">
            Pre-Booking Starts On January 7th 2025 Onwards
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
              <div className="space-y-2 text-blue-100">
                {phoneNumbers.map((number, index) => (
                  <p key={index} className="hover:text-white transition-colors">
                    <a href={`tel:${number}`}>{number}</a>
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <p key={index} className="text-blue-100">
                    {link.icon}
                    {link.url ? (
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      link.value
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-blue-100">
              EasyMy Learning Pvt. Ltd. is an online ed-tech company of Nepal offering a platform
              dedicated to providing free, high-quality courses across various subjects. Our team includes
              Doctors, Engineers, BBS, BBA, MBA, BSc Nursing, HA, law professionals, CA, and ACCA members.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-yellow-400 hover:bg-yellow-500 text-black"
              onClick={() => window.open('tel:+9779863312602')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 border-white text-white hover:bg-white/10"
                >
                  <QrCode className="mr-2 h-5 w-5" />
                  Join WhatsApp Group
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Scan QR Code to Join WhatsApp Group</DialogTitle>
                  <DialogDescription>
                    Use your phone's camera to scan the QR code below
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center p-6">
                  <img 
                    src="/lovable-uploads/28e4901e-6806-41f5-8bf6-2479fe7118cc.png"
                    alt="WhatsApp Group QR Code"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <a 
                    href="https://wa.me/+9779863312602"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    Or click here to join directly
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
