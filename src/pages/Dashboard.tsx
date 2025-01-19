import Navbar from "@/components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <p className="text-lg text-gray-600">
          Welcome to your personal learning dashboard.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;