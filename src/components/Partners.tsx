const partners = [
  { name: "Company 1", logo: "/placeholder.svg" },
  { name: "Company 2", logo: "/placeholder.svg" },
  { name: "Company 3", logo: "/placeholder.svg" },
  { name: "Company 4", logo: "/placeholder.svg" },
  { name: "Company 5", logo: "/placeholder.svg" },
];

const Partners = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;