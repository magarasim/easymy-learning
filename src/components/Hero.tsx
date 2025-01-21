import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-up">
            <div className="flex justify-between items-start mb-6">
              <img 
                src="/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png" 
                alt="EasyMy Learning Logo" 
                className="w-24 h-24"
              />
              <div className="bg-yellow-400 rounded-full p-4 text-center transform rotate-12">
                <p className="text-black font-bold">
                  Price Just @Rs.<br />
                  3299/-<br />
                  999/-
                </p>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master All Courses
              <span className="block mt-2">@ EasyMy Learning</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Bridge Course for Science, Law, Management and CTEVT Streams
              <br />
              <span className="text-yellow-300">Save up to 70% for the first 2000 students!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white text-white hover:bg-white/10"
              >
                View Courses
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30 blur-2xl rounded-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Core Benefits</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-center gap-2">
                  <span className="bg-green-500 rounded-full p-1">✓</span>
                  Video Lectures & Live Classes
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-500 rounded-full p-1">✓</span>
                  MCQ Practice with Test System
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-500 rounded-full p-1">✓</span>
                  Study Materials & Resources
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-500 rounded-full p-1">✓</span>
                  Certificates & Awards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;