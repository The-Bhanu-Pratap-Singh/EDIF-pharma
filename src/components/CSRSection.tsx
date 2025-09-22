import { Button } from "@/components/ui/button";
import csrImage from "@/assets/csr-community.jpg";

const CSRSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={csrImage}
          alt="Corporate Social Responsibility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Healthcare with
            <span className="block text-transparent bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text">
              Responsibility
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
            Our commitment extends beyond manufacturing. We're dedicated to sustainable practices, 
            community health initiatives, and ethical business operations that create lasting positive impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-white/80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-white/80">Carbon Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Community Programs</div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
          >
            Read Our CSR Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CSRSection;