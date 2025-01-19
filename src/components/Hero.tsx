import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your Future with
            <span className="text-primary block mt-2">Online Learning</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Access world-class education from anywhere. Learn at your own pace with expert-led courses
            designed to boost your skills and career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Browse Courses
            </Button>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur opacity-30 dark:opacity-40 rounded-lg"></div>
              <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
                <img
                  src="/placeholder.svg"
                  alt="Learning Platform Preview"
                  className="w-full rounded shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;