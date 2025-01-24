import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About EasyMy Learning
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At EasyMy Learning, we're dedicated to transforming education through accessible, 
              engaging, and comprehensive learning experiences. Our platform bridges the gap 
              between traditional education and modern learning needs.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">
                To provide quality education that's accessible to everyone, regardless of their 
                location or background. We believe in creating an inclusive learning environment 
                that empowers students to achieve their academic and professional goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3">What We Offer</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Comprehensive study materials</li>
                  <li>• Expert-led video lectures</li>
                  <li>• Interactive practice sessions</li>
                  <li>• Personalized learning paths</li>
                  <li>• Regular assessments and feedback</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Experienced instructors</li>
                  <li>• Flexible learning schedule</li>
                  <li>• Affordable pricing</li>
                  <li>• Community support</li>
                  <li>• Industry-relevant curriculum</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;