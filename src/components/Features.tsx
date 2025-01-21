import { Clock, Users, BookOpen, Trophy, Star, Globe } from "lucide-react";

const features = [
  {
    title: "Learn at Your Own Pace",
    description: "Access course content 24/7 and learn according to your schedule. Our flexible learning platform adapts to your lifestyle.",
    icon: Clock,
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience. Get insights from leaders in their respective fields.",
    icon: Users,
  },
  {
    title: "Interactive Learning",
    description: "Engage with quizzes, projects, and hands-on exercises. Practice what you learn through real-world applications.",
    icon: BookOpen,
  },
  {
    title: "Certified Courses",
    description: "Earn recognized certificates upon course completion. Add valuable credentials to your professional profile.",
    icon: Trophy,
  },
  {
    title: "Global Community",
    description: "Connect with learners worldwide. Share experiences and grow together in our diverse learning community.",
    icon: Globe,
  },
  {
    title: "Quality Content",
    description: "Access carefully curated and regularly updated course materials. Stay current with industry trends and best practices.",
    icon: Star,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the advantages of learning with our platform. We provide the tools and support you need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;