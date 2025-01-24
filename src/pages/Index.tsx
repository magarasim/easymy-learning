import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main>
        <Hero />
        <Partners />
        <Stats />
        <FeaturedCourses />
        <Features />
        <CallToAction />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;