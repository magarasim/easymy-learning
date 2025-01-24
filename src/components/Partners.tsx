import { Building } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  { 
    name: "Esewa", 
    logo: "/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png",
  },
  { 
    name: "Khalti", 
    logo: "/lovable-uploads/e7ddf5c0-3c2f-42d4-891c-744eb8ac2316.png",
  },
  { 
    name: "EasyMy Learning", 
    logo: "/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png",
  },
  { 
    name: "Google", 
    logo: "/lovable-uploads/85722318-f9f5-4283-a33a-6d10a88d8380.png",
  },
  { 
    name: "Microsoft", 
    logo: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png",
  }
];

const Partners = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Trusted by Industry Leaders
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="w-32 h-32 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;