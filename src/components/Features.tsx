import { Clock, Users, BookOpen, Trophy } from "lucide-react";

const features = [
  {
    title: "Learn at Your Own Pace",
    description: "Access course content 24/7 and learn according to your schedule",
    icon: Clock,
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
    icon: Users,
  },
  {
    title: "Interactive Learning",
    description: "Engage with quizzes, projects, and hands-on exercises",
    icon: BookOpen,
  },
  {
    title: "Certified Courses",
    description: "Earn recognized certificates upon course completion",
    icon: Trophy,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the advantages of learning with our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;