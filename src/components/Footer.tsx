import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  PhoneCall
} from "lucide-react";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/easymylearning", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/easymylearning", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/company/easymylearning", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/@easymylearning", label: "YouTube" },
    { icon: <MessageSquare className="w-5 h-5" />, url: "https://chat.whatsapp.com/KSdzJ6Ff0kX9vQJPVSLvXC", label: "Join WhatsApp Group" }
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "+977 9863312602" },
    { icon: <PhoneCall className="w-5 h-5" />, text: "+977 9841589082" },
    { icon: <Mail className="w-5 h-5" />, text: "info@easymylearning.com" },
    { icon: <MapPin className="w-5 h-5" />, text: "Kathmandu, Nepal" }
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-100 via-blue-50 to-white dark:from-purple-900 dark:via-blue-900 dark:to-blue-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
              EasyMy Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Empowering learners worldwide with quality education and practical skills.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-blue-600 dark:text-purple-400 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 5 }}
                  className="transform transition-all duration-200"
                >
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-purple-600 dark:text-purple-400">{info.icon}</span>
                  <span>{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
              Newsletter
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/50 dark:bg-white/10 border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-400"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-purple-200 dark:border-purple-800 text-center text-gray-700 dark:text-gray-300"
        >
          <p>&copy; {new Date().getFullYear()} EasyMy Learning. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;