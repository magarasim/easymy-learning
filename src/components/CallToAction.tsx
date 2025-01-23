import { Button } from "@/components/ui/button";
import { Phone, Mail, Youtube, ExternalLink } from "lucide-react";

const CallToAction = () => {
  const handleWhatsAppRedirect = () => {
    // Replace this URL with your actual WhatsApp group invite link
    window.open('https://chat.whatsapp.com/your-group-link', '_blank');
  };

  const socialLinks = [
    {
      platform: "Email",
      value: "info@EasyMyLearning.com",
      icon: <Mail className="inline-block mr-2 h-5 w-5" />
    },
    {
      platform: "YouTube",
      value: "youtube.com/@EasyMyLearning",
      url: "https://youtube.com/@EasyMyLearning",
      icon: <Youtube className="inline-block mr-2 h-5 w-5" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Us Today</h2>
          <p className="text-lg text-blue-100 mb-8">
            Pre-Booking Starts On January 7th 2025 Onwards
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
              <div className="space-y-2 text-blue-100">
                <p>+977 9763570043</p>
                <p>+977 9701583778</p>
                <p>+977 9708553673</p>
                <p>+977 9802594435</p>
                <p>+977 9820790791</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <p key={index} className="text-blue-100">
                    {link.icon}
                    {link.url ? (
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      link.value
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-blue-100">
              EasyMy Learning Pvt. Ltd. is an online ed-tech company of Nepal offering a platform
              dedicated to providing free, high-quality courses across various subjects. Our team includes
              Doctors, Engineers, BBS, BBA, MBA, BSc Nursing, HA, law professionals, CA, and ACCA members.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-yellow-400 hover:bg-yellow-500 text-black">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-white text-white hover:bg-white/10"
              onClick={handleWhatsAppRedirect}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Join WhatsApp Group
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;