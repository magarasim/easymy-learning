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
    category: "Frontend Development",
    description: "Modern web technologies for building responsive user interfaces",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    logos: [
      { 
        name: "React", 
        image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png",
        description: "Component-based UI library"
      },
      { 
        name: "TypeScript", 
        image: "/lovable-uploads/88959ca4-7d53-4d1a-8f3d-16a3602420fe.png",
        description: "Typed JavaScript for better development"
      },
      { 
        name: "Tailwind CSS", 
        image: "/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png",
        description: "Utility-first CSS framework"
      },
    ]
  },
  {
    category: "Backend Development",
    description: "Robust server-side technologies for data management",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    logos: [
      { 
        name: "Supabase", 
        image: "/lovable-uploads/c6c35c7b-9a0c-48d6-80ed-d8b7f02c07f1.png",
        description: "Open source Firebase alternative"
      },
      { 
        name: "PostgreSQL", 
        image: "/lovable-uploads/e7ddf5c0-3c2f-42d4-891c-744eb8ac2316.png",
        description: "Advanced open source database"
      },
    ]
  }
];

const LogoShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend Development");

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Technology Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Explore the cutting-edge technologies we use to build amazing applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStacks.map((stack) => (
              <Button
                key={stack.category}
                variant={activeCategory === stack.category ? "default" : "outline"}
                onClick={() => setActiveCategory(stack.category)}
                className="min-w-[200px] relative overflow-hidden group"
              >
                <span className="relative z-10">{stack.category}</span>
                {activeCategory === stack.category && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stack.gradient} opacity-80`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </Button>
            ))}
          </div>
        </div>

        {techStacks.map((stack) => (
          stack.category === activeCategory && (
            <div key={stack.category} className="space-y-8">
              <div className="text-center mb-8">
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {stack.description}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {stack.logos.map((logo, index) => (
                  <TooltipProvider key={logo.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`bg-gradient-to-br ${stack.gradient} p-1 rounded-xl group`}
                        >
                          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg h-full">
                            <div className="aspect-square relative">
                              <img
                                src={logo.image}
                                alt={`${logo.name} logo`}
                                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <h3 className="text-lg font-semibold text-center mt-4 text-gray-900 dark:text-white">
                              {logo.name}
                            </h3>
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{logo.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </motion.div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default LogoShowcase;