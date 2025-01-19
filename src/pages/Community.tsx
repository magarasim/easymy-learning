import Navbar from "@/components/Navbar";

const Community = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Community</h1>
        <p className="text-lg text-gray-600">
          Connect with fellow learners and share your knowledge.
        </p>
      </div>
    </div>
  );
};

export default Community;