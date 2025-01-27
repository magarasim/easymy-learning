import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowUp, 
  MessageSquare,
  ExternalLink 
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Community", path: "/community" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { 
      icon: MessageSquare, 
      label: "WhatsApp Group", 
      url: "https://chat.whatsapp.com/your-group-link",
      className: "hover:text-green-500"
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      url: "https://facebook.com/easymylearning",
      className: "hover:text-blue-600"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      url: "https://instagram.com/easymylearning",
      className: "hover:text-pink-500"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      url: "https://linkedin.com/company/easymylearning",
      className: "hover:text-blue-700"
    },
    { 
      icon: Youtube, 
      label: "YouTube", 
      url: "https://youtube.com/@easymylearning",
      className: "hover:text-red-600"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
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
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <address className="not-italic text-gray-600 dark:text-gray-300 space-y-2">
              <p>123 Learning Street</p>
              <p>Education City, ED 12345</p>
              <p>Email: contact@easymylearning.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Newsletter
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Subscribe to get updates on new courses and events.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[200px]"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Follow Us
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map(({ icon: Icon, label, url, className }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 EasyMy Learning. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/privacy"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg bg-white dark:bg-gray-800"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;