import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Clock, BookOpen, Code2, Star, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { CourseFilters } from "@/components/CourseSearch";

interface FeaturedCoursesProps {
  searchQuery?: string;
  filters?: CourseFilters;
}

const FeaturedCourses = ({ searchQuery = "", filters = {} }: FeaturedCoursesProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['featuredCourses', searchQuery, filters],
    queryFn: async () => {
      let query = supabase
        .from('courses')
        .select(`
          *,
          instructor:profiles(full_name)
        `)
        .order('rating', { ascending: false });

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }

      if (filters.category) {
        query = query.eq('category', filters.category);
      }

      if (filters.level) {
        query = query.eq('level', filters.level);
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) {
          query = query.gte('price', min).lte('price', max);
        } else {
          query = query.gte('price', min);
        }
      }

      const { data, error } = await query.limit(6);

      if (error) throw error;
      return data;
    }
  });

  const handleCourseClick = (courseId: number) => {
    setExpandedId(expandedId === courseId ? null : courseId);
  };

  const handlePurchase = async (courseId: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast({
        title: "Login Required",
        description: "Please login to purchase courses",
      });
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId }),
      });

      const { url, error } = await response.json();

      if (error) throw new Error(error);
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Purchase Failed",
        description: "There was an error processing your purchase. Please try again.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

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
                key={course.id}
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
                      src={course.image_url || "https://images.unsplash.com/photo-1587620962725-abab7fe55159"}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePurchase(course.id);
                        }}
                      >
                        Purchase for ${course.price} <ExternalLink className="w-4 h-4 ml-2" />
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
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {course.enrollment_count || 0} enrolled
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        {course.rating?.toFixed(1) || "New"}
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        {course.reviews_count || 0} reviews
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration || "Self-paced"}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        By {course.instructor?.full_name || "Expert Instructor"}
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