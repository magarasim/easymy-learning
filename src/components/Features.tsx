import { Award, BookOpen, Laptop, Gift, Users, Trophy } from "lucide-react";

const features = [
  {
    title: "Core Benefits",
    description: "Video lectures, online live classes, recorded videos, and comprehensive study materials available on our platform.",
    icon: BookOpen,
    image: "/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png"
  },
  {
    title: "Awards and Cash Prizes",
    description: "Weekly tests with exciting cash prizes up to Rs. 5k, grand laptop award worth Rs. 50,000/-, and daily surprise prizes.",
    icon: Award,
    image: "/lovable-uploads/e7ddf5c0-3c2f-42d4-891c-744eb8ac2316.png"
  },
  {
    title: "Additional Benefits",
    description: "Free access to premium tools including ChatGPT, Canva, Kinemaster, and Microsoft Office suite worth Rs. 10,000/-",
    icon: Gift,
    image: "/lovable-uploads/85722318-f9f5-4283-a33a-6d10a88d8380.png"
  },
  {
    title: "Free Courses",
    description: "Access to 11th & 12th notes, pre-medical & engineering guidance, computer masterclass, and programming courses.",
    icon: Laptop,
    image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png"
  },
  {
    title: "Scholarship Support",
    description: "Free assistance with various scholarship applications including Metro, MGSS, GJSS, and embassy scholarships.",
    icon: Users,
    image: "/lovable-uploads/88959ca4-7d53-4d1a-8f3d-16a3602420fe.png"
  },
  {
    title: "Workshops & Internships",
    description: "Part-time internships for top performers, AI workshops, and specialized training with certificates.",
    icon: Trophy,
    image: "/lovable-uploads/c6c35c7b-9a0c-48d6-80ed-d8b7f02c07f1.png"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-900 dark:via-blue-800 dark:to-blue-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900 dark:text-white">
            Program Benefits
          </h2>
          <p className="text-blue-700 dark:text-blue-200 max-w-2xl mx-auto">
            Discover all the advantages of joining our comprehensive learning program
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