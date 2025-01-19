import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Future with
            <span className="text-primary block mt-2">Online Learning</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access world-class education from anywhere. Learn at your own pace with expert-led courses
            designed to boost your skills and career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;