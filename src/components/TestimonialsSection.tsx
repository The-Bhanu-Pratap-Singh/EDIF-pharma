import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "PharmaGlobal has been our reliable partner for consistent quality and timely delivery across multiple markets. Their commitment to excellence is unmatched.",
      author: "Dr. Sarah Johnson",
      title: "Chief Procurement Officer",
      company: "Global Health Solutions",
      rating: 5
    },
    {
      quote: "The regulatory compliance and documentation provided by PharmaGlobal made our market entry seamless across 15 countries.",
      author: "Michael Chen",
      title: "Regional Director",
      company: "International Pharma Corp",
      rating: 5
    },
    {
      quote: "Their R&D capabilities and custom formulation services have helped us bring innovative products to market faster than ever before.",
      author: "Dr. Maria Rodriguez",
      title: "Head of Product Development",
      company: "MedTech Innovations",
      rating: 5
    }
  ];

  const partners = [
    "Johnson & Johnson", "Pfizer", "Novartis", "Roche", "GSK", "Merck"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our partnerships speak to our commitment to quality, reliability, and innovation in pharmaceutical manufacturing.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <span className="text-lg font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;