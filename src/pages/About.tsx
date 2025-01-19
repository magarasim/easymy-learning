import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to EasyMy Learning, where we make education accessible and engaging for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;