import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content:
      "The courses here completely transformed my career. The instructors are excellent and the content is top-notch. I landed my dream job thanks to the skills I learned!",
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    content:
      "I've taken several online courses, but these are by far the best. The interactive learning approach and practical projects really helped me master new skills quickly.",
  },
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    content:
      "The data science course exceeded my expectations. The curriculum is well-structured and the support from instructors is amazing. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read success stories from our students around the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {testimonial.name[0]}
                  </div>
                  <blockquote className="text-gray-600 mb-4">{testimonial.content}</blockquote>
                  <cite className="not-italic">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;