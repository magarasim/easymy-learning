import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code2, Database, Layers, Server, Workflow } from "lucide-react";

const techStacks = [
  {
    category: "Frontend Development",
    description: "Modern web development process and technologies for building responsive user interfaces",
    gradient: "from-rose-500 via-purple-500 to-indigo-500",
    icon: Code2,
    process: [
      {
        phase: "UI Development",
        tools: [
          { 
            name: "React", 
            image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png",
            description: "Component-based UI library for building interactive interfaces"
          },
          { 
            name: "TypeScript", 
            image: "/lovable-uploads/88959ca4-7d53-4d1a-8f3d-16a3602420fe.png",
            description: "Type-safe JavaScript for robust frontend development"
          }
        ]
      },
      {
        phase: "Styling & Layout",
        tools: [
          { 
            name: "Tailwind CSS", 
            image: "/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png",
            description: "Utility-first CSS framework for rapid UI development"
          }
        ]
      }
    ]
  },
  {
    category: "Backend Development",
    description: "Server-side technologies and processes for data management and business logic",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    icon: Server,
    process: [
      {
        phase: "Database Management",
        tools: [
          { 
            name: "PostgreSQL", 
            image: "/lovable-uploads/e7ddf5c0-3c2f-42d4-891c-744eb8ac2316.png",
            description: "Advanced relational database for data persistence"
          }
        ]
      },
      {
        phase: "API & Services",
        tools: [
          { 
            name: "Supabase", 
            image: "/lovable-uploads/c6c35c7b-9a0c-48d6-80ed-d8b7f02c07f1.png",
            description: "Backend-as-a-Service platform for rapid API development"
          }
        ]
      }
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
            Development Process & Technology Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Explore our comprehensive development workflow and the cutting-edge technologies we use
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStacks.map((stack) => (
              <Button
                key={stack.category}
                variant={activeCategory === stack.category ? "default" : "outline"}
                onClick={() => setActiveCategory(stack.category)}
                className="min-w-[200px] relative overflow-hidden group"
              >
                <stack.icon className="w-5 h-5 mr-2" />
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
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Workflow className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Development Process
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {stack.description}
                </p>
              </div>
              
              <div className="grid gap-8">
                {stack.process.map((phase, phaseIndex) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: phaseIndex * 0.2 }}
                    className={`bg-gradient-to-br ${stack.gradient} p-1 rounded-xl`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" />
                        {phase.phase}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {phase.tools.map((tool, toolIndex) => (
                          <TooltipProvider key={tool.name}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: toolIndex * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                  className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg hover:shadow-lg transition-all duration-300"
                                >
                                  <div className="aspect-square relative mb-4">
                                    <img
                                      src={tool.image}
                                      alt={`${tool.name} logo`}
                                      className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
                                    />
                                  </div>
                                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {tool.name}
                                  </h5>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{tool.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default LogoShowcase;