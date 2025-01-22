import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const techStacks = [
  {
    category: "Frontend",
    logos: [
      { name: "React", image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png" },
      { name: "TypeScript", image: "/lovable-uploads/88959ca4-7d53-4d1a-8f3d-16a3602420fe.png" },
      { name: "Tailwind CSS", image: "/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png" },
    ]
  },
  {
    category: "Backend",
    logos: [
      { name: "Supabase", image: "/lovable-uploads/c6c35c7b-9a0c-48d6-80ed-d8b7f02c07f1.png" },
      { name: "PostgreSQL", image: "/lovable-uploads/e7ddf5c0-3c2f-42d4-891c-744eb8ac2316.png" },
    ]
  }
];

const LogoShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Technology Stack
          </h2>
          <div className="flex justify-center gap-4">
            {techStacks.map((stack) => (
              <Button
                key={stack.category}
                variant={activeCategory === stack.category ? "default" : "outline"}
                onClick={() => setActiveCategory(stack.category)}
                className="min-w-[120px]"
              >
                {stack.category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {techStacks
            .find((stack) => stack.category === activeCategory)
            ?.logos.map((logo, index) => (
              <TooltipProvider key={logo.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-square relative">
                        <img
                          src={logo.image}
                          alt={`${logo.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{logo.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoShowcase;