import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const benefitsData = [
  {
    id: 1,
    title: "Core Benefits",
    image: "/lovable-uploads/7dae9b03-684c-41e4-bbc0-c8657dad5097.png",
    description: "Video lectures, MCQ practice, and comprehensive study materials"
  },
  {
    id: 2,
    title: "Awards and Cash Prizes",
    image: "/lovable-uploads/f3bff778-3423-4584-9e8b-6083cd14ba42.png",
    description: "Weekly tests with exciting cash prizes and grand awards"
  },
  {
    id: 3,
    title: "Additional Benefits",
    image: "/lovable-uploads/58672377-a9af-4b6c-b08e-4a3eb119fc12.png",
    description: "Free access to premium tools and lifetime community membership"
  },
  {
    id: 4,
    title: "Free Courses",
    image: "/lovable-uploads/b8a6f831-1cd0-4691-b270-1375b0a4158c.png",
    description: "Access to programming, computer, and English courses"
  },
  {
    id: 5,
    title: "Additional Support",
    image: "/lovable-uploads/28e4901e-6806-41f5-8bf6-2479fe7118cc.png",
    description: "Scholarship assistance and form filling support"
  }
];

const Benefits = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Comprehensive Benefits Package
        </h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {benefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedId(expandedId === benefit.id ? null : benefit.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <Button variant="ghost" size="icon">
                    {expandedId === benefit.id ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </Button>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedId === benefit.id ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-4">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full rounded-lg shadow-md"
                    />
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;