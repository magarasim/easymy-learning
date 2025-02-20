
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Intern {
  name: string;
  role: string;
  image: string;
}

const interns: Intern[] = [
  {
    name: "Nishab Yadav",
    role: "Junior Digital Content Creator",
    image: "/lovable-uploads/d2db1f21-7525-4218-b077-f0f5156687f0.png"
  },
  {
    name: "Lucky Yadav",
    role: "Junior Digital Content Creator",
    image: "/lovable-uploads/a6dc0999-2854-43d4-b5b6-42f46a250f93.png"
  },
  // ... Add more interns
];

const InternshipProgram = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Internship Program
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet our talented interns who are developing their skills and contributing to our mission
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {interns.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Card className="relative overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-square relative">
                      <img
                        src={intern.image}
                        alt={intern.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-semibold truncate">{intern.name}</h3>
                        <p className="text-sm opacity-90">{intern.role}</p>
                      </div>
                    </div>
                  </Card>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col h-full">
                    <div className="flex-1 py-6">
                      <div className="aspect-square mb-6 rounded-full overflow-hidden">
                        <img
                          src={intern.image}
                          alt={intern.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{intern.name}</h3>
                      <Badge variant="secondary" className="mb-4">
                        {intern.role}
                      </Badge>
                      <p className="text-muted-foreground">
                        Wishing you an enriching learning experience and a successful journey ahead. 
                        We're excited to have you on board! 🚀
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipProgram;
