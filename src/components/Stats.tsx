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
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;