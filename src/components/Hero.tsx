import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Future with
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-2">
                Online Learning
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Access world-class education from anywhere. Learn at your own pace with expert-led courses
              designed to boost your skills and career. Join thousands of successful learners who have
              transformed their lives through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 group transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 transition-all duration-300 hover:scale-105">
                Browse Courses
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl rounded-lg"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Student learning online"
                className="rounded-lg shadow-2xl w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;