import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Resources", "Community", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <address className="not-italic text-gray-600 dark:text-gray-300 space-y-2">
              <p>123 Learning Street</p>
              <p>Education City, ED 12345</p>
              <p>Email: contact@easymylearning.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Subscribe to get updates on new courses and events.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[200px]"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
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
        </div>

        {/* Back to Top Button */}
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;