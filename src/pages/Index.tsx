import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="fixed bottom-8 right-8 z-50">
        <ThemeToggle />
      </div>
      <main>
        <Hero />
        <Benefits />
        <Stats />
        <FeaturedCourses />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;