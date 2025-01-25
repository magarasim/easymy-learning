import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Benefits = () => {
  const benefitSections = [
    {
      title: "Core Benefits",
      image: "/lovable-uploads/95a0c5f6-c40c-46ce-ade4-d298d207eda7.png",
      items: [
        "Video Lectures: Online live classes, recorded videos",
        "MCQ Practice: Integrated Test system",
        "Content: Bridge Course Book, Entrance Question Bank",
      ]
    },
    {
      title: "Awards and Cash Prizes",
      image: "/lovable-uploads/3b3fc1a3-9db9-468b-9b6f-a5c2b5c19420.png",
      items: [
        "Weekly Tests with cash prizes up to Rs. 5k",
        "Grand Awards: Laptop worth Rs. 50,000/-",
        "Daily Surprise Cash Prizes: Rs. 500",
        "Certificates for all courses and awards"
      ]
    },
    {
      title: "Additional Benefits",
      image: "/lovable-uploads/303c6b7f-4d31-4b54-8e4e-55fe21719f54.png",
      items: [
        "FREE access to EasyMy Learning community",
        "FREE Master Courses on AI and tools",
        "Premium software access worth Rs. 10,000/-",
        "500+ templates for various applications"
      ]
    },
    {
      title: "Free Courses",
      image: "/lovable-uploads/7840f035-5305-4485-92a4-c427e706b893.png",
      items: [
        "FREE 11th & 12th Notes",
        "FREE Pre-Medical & Engineering guidance",
        "FREE Computer Masterclass",
        "FREE Programming Courses with certificates"
      ]
    },
    {
      title: "Support Services",
      image: "/lovable-uploads/789d3055-4634-45de-b5e0-3b0faa87358f.png",
      items: [
        "FREE scholarship form filling assistance",
        "Guidance for international scholarships",
        "Embassy application support",
        "Lifetime personal guidance"
      ]
    },
    {
      title: "Workshops and Internships",
      image: "/lovable-uploads/1fa1b139-6c61-44ff-a996-224a1752f7a6.png",
      items: [
        "Part-time internships for top performers",
        "AI Workshops with hands-on training",
        "Specialized courses for different streams",
        "Programming competitions with prizes"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Benefits</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive learning solutions for your academic success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            onClick={() => window.open('https://wa.me/+9779863312602', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Join Our WhatsApp Group
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;