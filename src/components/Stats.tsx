import { Users, BookOpen, Trophy, GraduationCap } from "lucide-react";

const stats = [
  {
    label: "Active Students",
    value: "10,000+",
    icon: Users,
    description: "Learning with us globally",
  },
  {
    label: "Courses",
    value: "500+",
    icon: BookOpen,
    description: "Across various disciplines",
  },
  {
    label: "Success Rate",
    value: "95%",
    icon: Trophy,
    description: "Student satisfaction",
  },
  {
    label: "Expert Instructors",
    value: "100+",
    icon: GraduationCap,
    description: "Industry professionals",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;