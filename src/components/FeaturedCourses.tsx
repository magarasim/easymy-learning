import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Clock, BookOpen, Code2, Database, Binary } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const courses = [
  {
    title: "Frontend Development Mastery",
    description: "Master modern frontend development with HTML, CSS, JavaScript, React, and TypeScript. Build responsive and interactive web applications with industry best practices.",
    category: "Frontend",
    students: "2,341",
    duration: "12 weeks",
    level: "Intermediate",
    topics: [
      "HTML5 & Modern CSS",
      "JavaScript ES6+",
      "TypeScript Fundamentals",
      "React & Hooks",
      "State Management",
      "Responsive Design",
      "API Integration"
    ],
    modules: [
      "Module 1: HTML5 & CSS3 Fundamentals",
      "Module 2: JavaScript Core Concepts",
      "Module 3: TypeScript & Type Safety",
      "Module 4: React Components & Props",
      "Module 5: State & Effects",
      "Module 6: API Integration & Data Fetching"
    ],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Backend Development Professional",
    description: "Learn backend development with Python, Node.js, Express, and PostgreSQL. Build scalable and secure REST APIs with modern backend technologies.",
    category: "Backend",
    students: "1,876",
    duration: "14 weeks",
    level: "Advanced",
    topics: [
      "Python Programming",
      "Node.js & Express",
      "PostgreSQL",
      "API Design",
      "Authentication",
      "Security",
      "Performance"
    ],
    modules: [
      "Module 1: Python Fundamentals",
      "Module 2: Database Design",
      "Module 3: REST API Development",
      "Module 4: Authentication & Security",
      "Module 5: Performance Optimization",
      "Module 6: Deployment & Scaling"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Full Stack Development Journey",
    description: "Become a full-stack developer mastering both frontend and backend technologies. Learn to build complete web applications from start to finish.",
    category: "Full Stack",
    students: "1,543",
    duration: "16 weeks",
    level: "Advanced",
    topics: [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "API Integration",
      "DevOps Basics",
      "Testing",
      "Deployment"
    ],
    modules: [
      "Module 1: Web Development Fundamentals",
      "Module 2: Frontend Technologies",
      "Module 3: Backend Development",
      "Module 4: Database Integration",
      "Module 5: Full Stack Projects",
      "Module 6: Deployment & DevOps"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const FeaturedCourses = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCourseClick = (courseId: number) => {
    setExpandedId(expandedId === courseId ? null : courseId);
  };

  const handleEnrollClick = (courseTitle: string) => {
    toast({
      title: "Course Selected",
      description: `You've selected ${courseTitle}. Redirecting to enrollment...`,
    });
    // Simulate loading
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Development Courses
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take your development skills to the next level with our comprehensive courses.
            Learn from industry experts and build real-world projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {courses.map((course, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCourseClick(index)}
                className="cursor-pointer"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEnrollClick(course.title);
                        }}
                      >
                        Enroll Now <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${course.category === 'Frontend' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100' : 
                            course.category === 'Backend' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100' :
                            'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100'}
                        `}
                      >
                        {course.category}
                      </Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <AnimatePresence>
                      {expandedId === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-sm text-gray-700 dark:text-gray-200">Course Modules</h4>
                              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                                {course.modules.map((module, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center"
                                  >
                                    <Code2 className="w-4 h-4 mr-2 text-primary" />
                                    {module}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {course.topics.map((topic, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  <Badge variant="outline" className="bg-gray-50 dark:bg-gray-700">
                                    {topic}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {course.students} enrolled
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {course.modules.length} modules
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
