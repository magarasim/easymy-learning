import { Award, BookOpen, Laptop, Gift, Users, Trophy } from "lucide-react";

const features = [
  {
    title: "Frontend Development",
    description: "Master modern frontend technologies including React, TypeScript, and responsive design principles. Build interactive user interfaces with modern tooling.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Backend Development",
    description: "Learn server-side programming, database management, and API development. Build robust and scalable backend systems.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "AI Integration",
    description: "Implement artificial intelligence solutions and machine learning models in your applications.",
    icon: Gift,
    image: "/lovable-uploads/177a7430-45cd-48af-a5b3-4530819e536b.png"
  },
  {
    title: "Full Stack Development",
    description: "Combine frontend and backend skills to build complete web applications from start to finish.",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Community Support",
    description: "Join our active community of developers, share knowledge, and grow together through collaborative learning.",
    icon: Users,
    image: "/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png"
  },
  {
    title: "Career Growth",
    description: "Get certified, build your portfolio, and advance your career with our comprehensive development programs.",
    icon: Trophy,
    image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-900 dark:via-blue-800 dark:to-blue-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900 dark:text-white">
            Development Process & Features
          </h2>
          <p className="text-blue-700 dark:text-blue-200 max-w-2xl mx-auto">
            Explore our comprehensive development tracks and learning features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-700 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-200" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-blue-700 dark:text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;