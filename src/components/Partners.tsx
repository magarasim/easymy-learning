import { Building, Star } from "lucide-react";

const partners = [
  { 
    name: "Esewa", 
    logo: "/lovable-uploads/973600f4-7cb9-4788-bd25-b4cd5fffa9b3.png",
    description: "Leading digital payment platform"
  },
  { 
    name: "Khalti", 
    logo: "/lovable-uploads/e7ddf5c0-3c2f-42d4-891c-744eb8ac2316.png",
    description: "Innovative fintech solution"
  },
  { 
    name: "EasyMy Learning", 
    logo: "/lovable-uploads/db562089-a0e0-499b-9925-e80d796c8480.png",
    description: "Premier education platform"
  },
  { 
    name: "Google", 
    logo: "/lovable-uploads/85722318-f9f5-4283-a33a-6d10a88d8380.png",
    description: "Global technology leader"
  },
  { 
    name: "Microsoft", 
    logo: "/lovable-uploads/978b14a0-4204-44d9-a5b5-5ebfebce37c5.png",
    description: "Enterprise software solutions"
  }
];

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white">
              Trusted by Industry Leaders
            </h2>
          </div>
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-2xl mx-auto">
            Join thousands of students learning with support from top companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-md">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                    {partner.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-blue-700 dark:text-blue-200">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-900 dark:text-white font-medium text-lg">
            Join over 10,000+ students already learning with us
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-blue-900 flex items-center justify-center text-white font-semibold text-sm"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 border-2 border-white dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-200 font-semibold text-sm">
              +5k
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;