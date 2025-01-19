import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <FeaturedCourses />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;