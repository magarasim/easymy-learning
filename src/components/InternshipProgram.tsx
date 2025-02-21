
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

interface Intern {
  name: string;
  role: string;
  image: string;
  bio?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const interns: Intern[] = [
  {
    name: "Alex Chen",
    role: "Full Stack Developer Intern",
    image: "/lovable-uploads/177a7430-45cd-48af-a5b3-4530819e536b.png",
    bio: "Passionate about building scalable web applications and learning new technologies.",
    skills: ["React", "Node.js", "TypeScript"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Sarah Miller",
    role: "UI/UX Design Intern",
    image: "/lovable-uploads/1fa1b139-6c61-44ff-a996-224a1752f7a6.png",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences.",
    skills: ["Figma", "Adobe XD", "User Research"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "James Wilson",
    role: "Frontend Developer Intern",
    image: "/lovable-uploads/28e4901e-6806-41f5-8bf6-2479fe7118cc.png",
    bio: "Frontend enthusiast with a keen eye for detail and performance optimization.",
    skills: ["React", "CSS", "JavaScript"],
    social: {
      github: "https://github.com"
    }
  },
  {
    name: "Emily Zhang",
    role: "Backend Developer Intern",
    image: "/lovable-uploads/85722318-f9f5-4283-a33a-6d10a88d8380.png",
    bio: "Backend developer passionate about building robust and efficient systems.",
    skills: ["Python", "Django", "PostgreSQL"]
  },
  {
    name: "Michael Brown",
    role: "Mobile App Developer Intern",
    image: "/lovable-uploads/95a0c5f6-c40c-46ce-ade4-d298d207eda7.png",
    bio: "Mobile developer focused on creating seamless user experiences.",
    skills: ["React Native", "iOS", "Android"]
  },
  {
    name: "Lisa Park",
    role: "DevOps Engineer Intern",
    image: "/lovable-uploads/b8a6f831-1cd0-4691-b270-1375b0a4158c.png",
    bio: "DevOps enthusiast working on automation and infrastructure improvements.",
    skills: ["Docker", "Kubernetes", "AWS"]
  },
  {
    name: "David Kumar",
    role: "Data Science Intern",
    image: "/lovable-uploads/c4b7d511-c7bc-41d9-a21f-f2f128f4ce32.png",
    bio: "Data scientist exploring machine learning and AI applications.",
    skills: ["Python", "TensorFlow", "Data Analysis"]
  },
  {
    name: "Rachel Torres",
    role: "Cloud Computing Intern",
    image: "/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png",
    bio: "Cloud computing specialist working on scalable solutions.",
    skills: ["AWS", "Azure", "Cloud Architecture"]
  }
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
            Meet Our Talented Interns
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our diverse team of interns brings fresh perspectives and innovative ideas to our projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {interns.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Card className="relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl">
                    <div className="aspect-square relative">
                      <img
                        src={intern.image}
                        alt={intern.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
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
                      <div className="aspect-square mb-6 rounded-full overflow-hidden border-4 border-blue-500">
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
                      {intern.bio && (
                        <p className="text-muted-foreground mb-4">
                          {intern.bio}
                        </p>
                      )}
                      {intern.skills && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-2">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {intern.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {intern.social && (
                        <div className="flex gap-4">
                          {intern.social.github && (
                            <Button variant="ghost" size="icon" asChild>
                              <a href={intern.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {intern.social.linkedin && (
                            <Button variant="ghost" size="icon" asChild>
                              <a href={intern.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {intern.social.twitter && (
                            <Button variant="ghost" size="icon" asChild>
                              <a href={intern.social.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
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
