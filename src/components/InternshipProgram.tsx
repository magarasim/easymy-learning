
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

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
    name: "Nishab Yadav",
    role: "Junior Digital Content Creator",
    image: "/lovable-uploads/222f68bb-27bf-42a5-b2e8-8553730aeab9.png",
    bio: "Creative content creator focused on digital media and educational content.",
    skills: ["Content Creation", "Digital Media", "Creative Writing"]
  },
  {
    name: "Lucky Yadav",
    role: "Junior Digital Content Creator",
    image: "/lovable-uploads/1ab69fe7-b556-44aa-a174-ae7f019a1283.png",
    bio: "Digital content specialist with a passion for educational content.",
    skills: ["Content Strategy", "Social Media", "Video Editing"]
  },
  {
    name: "Asim Pun Magar",
    role: "Junior Software Developer",
    image: "/lovable-uploads/0b4210dc-ee2f-449a-ab42-07269c7bab8e.png",
    bio: "Enthusiastic developer working on web applications.",
    skills: ["JavaScript", "React", "Node.js"]
  },
  {
    name: "Arpana Rimal",
    role: "Digital Content Creator",
    image: "/lovable-uploads/177a7430-45cd-48af-a5b3-4530819e536b.png",
    bio: "Creative professional specializing in digital content creation.",
    skills: ["Content Strategy", "Digital Marketing", "Social Media"]
  },
  {
    name: "Bipana Sharma",
    role: "Junior Software Developer",
    image: "/lovable-uploads/28e4901e-6806-41f5-8bf6-2479fe7118cc.png",
    bio: "Passionate developer focused on building innovative solutions.",
    skills: ["Python", "Django", "React"]
  },
  {
    name: "Khagendra Badu",
    role: "Graphics Designer",
    image: "/lovable-uploads/303c6b7f-4d31-4b54-8e4e-55fe21719f54.png",
    bio: "Creative designer with expertise in visual communication.",
    skills: ["Adobe Suite", "UI Design", "Brand Identity"]
  },
  {
    name: "Mandeep Thapa",
    role: "Junior Software Developer",
    image: "/lovable-uploads/3b3fc1a3-9db9-468b-9b6f-a5c2b5c19420.png",
    bio: "Full-stack developer with a focus on user experience.",
    skills: ["JavaScript", "Node.js", "MongoDB"]
  },
  {
    name: "Pradip Bhatt",
    role: "Junior Software Developer",
    image: "/lovable-uploads/58672377-a9af-4b6c-b08e-4a3eb119fc12.png",
    bio: "Backend specialist developing robust server solutions.",
    skills: ["Java", "Spring Boot", "MySQL"]
  },
  {
    name: "Prakash Bhatta",
    role: "Junior Software Developer",
    image: "/lovable-uploads/7840f035-5305-4485-92a4-c427e706b893.png",
    bio: "Frontend developer creating engaging user interfaces.",
    skills: ["React", "TypeScript", "CSS"]
  },
  {
    name: "Prakash Poudel",
    role: "Junior Software Developer",
    image: "/lovable-uploads/789d3055-4634-45de-b5e0-3b0faa87358f.png",
    bio: "Full-stack developer with a passion for clean code.",
    skills: ["JavaScript", "Python", "PostgreSQL"]
  },
  {
    name: "Prashant Ghimire",
    role: "Junior Software Developer",
    image: "/lovable-uploads/7dae9b03-684c-41e4-bbc0-c8657dad5097.png",
    bio: "Software engineer focused on scalable solutions.",
    skills: ["Java", "Spring", "React"]
  },
  {
    name: "Rabi Ranjan",
    role: "Junior Software Developer",
    image: "/lovable-uploads/85722318-f9f5-4283-a33a-6d10a88d8380.png",
    bio: "Developer specializing in cloud-native applications.",
    skills: ["AWS", "Docker", "Node.js"]
  },
  {
    name: "Rabindra Shah",
    role: "Graphics Designer",
    image: "/lovable-uploads/88959ca4-7d53-4d1a-8f3d-16a3602420fe.png",
    bio: "Creative designer with a keen eye for detail.",
    skills: ["Photoshop", "Illustrator", "Motion Graphics"]
  },
  {
    name: "Rajendra Chaudhary",
    role: "Junior Software Developer",
    image: "/lovable-uploads/95a0c5f6-c40c-46ce-ade4-d298d207eda7.png",
    bio: "Developer focused on mobile and web applications.",
    skills: ["React Native", "React", "Node.js"]
  },
  {
    name: "Ravi Panday",
    role: "Junior Software Developer",
    image: "/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png",
    bio: "Full-stack developer with DevOps experience.",
    skills: ["Python", "Docker", "Jenkins"]
  },
  {
    name: "Sakar Poudel",
    role: "Junior Software Developer",
    image: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png",
    bio: "Developer specializing in frontend technologies.",
    skills: ["React", "Vue.js", "CSS"]
  },
  {
    name: "Sandeep Timalsina",
    role: "Junior Software Developer",
    image: "/lovable-uploads/a6dc0999-2854-43d4-b5b6-42f46a250f93.png",
    bio: "Backend developer focused on system architecture.",
    skills: ["Java", "Microservices", "MongoDB"]
  },
  {
    name: "Sanjay Mahato",
    role: "Junior Software Developer",
    image: "/lovable-uploads/b8a6f831-1cd0-4691-b270-1375b0a4158c.png",
    bio: "Full-stack developer with AI/ML interests.",
    skills: ["Python", "TensorFlow", "React"]
  },
  {
    name: "Santosh Neupane",
    role: "Junior Software Developer",
    image: "/lovable-uploads/c1419d13-0027-4219-980c-d0be45b7ebc3.png",
    bio: "Developer specializing in web security.",
    skills: ["Security", "Node.js", "PHP"]
  },
  {
    name: "Shiva Raj",
    role: "Junior Software Developer",
    image: "/lovable-uploads/c4b7d511-c7bc-41d9-a21f-f2f128f4ce32.png",
    bio: "Full-stack developer with cloud expertise.",
    skills: ["AWS", "Node.js", "React"]
  }
];

const InternshipProgram = () => {
  const whatsappLink = 'https://chat.whatsapp.com/IeouklwfjxTBkq8k1SLRsY';
  
  const handleWhatsAppJoin = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Meet Our Talented Interns
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Our diverse team of interns brings fresh perspectives and innovative ideas to our projects
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleWhatsAppJoin}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto text-lg"
            >
              <MessageSquare className="w-6 h-6" />
              Join Our WhatsApp Community
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {interns.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Card className="relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl dark:bg-gray-800/90 backdrop-blur-sm border-2 hover:border-blue-500">
                    <div className="aspect-square relative">
                      <motion.img
                        src={intern.image}
                        alt={intern.name}
                        className="w-full h-full object-cover rounded-t-lg"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-semibold mb-1 truncate">{intern.name}</h3>
                        <p className="text-sm opacity-90 text-blue-100">{intern.role}</p>
                      </div>
                    </div>
                  </Card>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900">
                  <motion.div 
                    className="flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex-1 py-6">
                      <motion.div 
                        className="aspect-square mb-6 rounded-full overflow-hidden border-4 border-blue-500 mx-auto max-w-[200px] shadow-xl"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={intern.image}
                          alt={intern.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {intern.name}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Badge variant="secondary" className="mb-4 block text-center mx-auto w-fit">
                          {intern.role}
                        </Badge>
                      </motion.div>
                      {intern.bio && (
                        <motion.p 
                          className="text-muted-foreground mb-4 text-center px-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {intern.bio}
                        </motion.p>
                      )}
                      {intern.skills && (
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className="text-sm font-semibold mb-2 text-center">Skills</h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {intern.skills.map((skill, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + idx * 0.1 }}
                              >
                                <Badge 
                                  variant="outline"
                                  className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      <motion.div 
                        className="flex flex-col gap-4 items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Button 
                          onClick={handleWhatsAppJoin}
                          className="bg-green-500 hover:bg-green-600 text-white w-full max-w-xs flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105"
                        >
                          <MessageSquare className="w-5 h-5" />
                          Connect on WhatsApp
                        </Button>
                        {intern.social && (
                          <div className="flex gap-4 justify-center">
                            {intern.social.github && (
                              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                                <a href={intern.social.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-5 w-5" />
                                </a>
                              </Button>
                            )}
                            {intern.social.linkedin && (
                              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                                <a href={intern.social.linkedin} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="h-5 w-5" />
                                </a>
                              </Button>
                            )}
                            {intern.social.twitter && (
                              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                                <a href={intern.social.twitter} target="_blank" rel="noopener noreferrer">
                                  <Twitter className="h-5 w-5" />
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipProgram;
