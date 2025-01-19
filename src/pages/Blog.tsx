import Navbar from "@/components/Navbar";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-lg text-gray-600">
          Stay updated with our latest articles and educational insights.
        </p>
      </div>
    </div>
  );
};

export default Blog;