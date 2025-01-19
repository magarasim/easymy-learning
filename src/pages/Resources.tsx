import Navbar from "@/components/Navbar";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Learning Resources</h1>
        <p className="text-lg text-gray-600">
          Explore our comprehensive collection of learning materials.
        </p>
      </div>
    </div>
  );
};

export default Resources;