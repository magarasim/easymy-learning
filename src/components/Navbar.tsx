import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">EasyMy Learning</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#courses" className="text-gray-600 hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
            Testimonials
          </a>
          <Button variant="default" size="lg">
            Enroll Now
          </Button>
        </div>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;