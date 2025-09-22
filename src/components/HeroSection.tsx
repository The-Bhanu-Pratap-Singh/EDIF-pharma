import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pharma-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pharmaceutical manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Global Pharmaceutical 
            <span className="block text-transparent bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text">
              Manufacturing Partner
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Supplying trusted APIs & formulations to 45+ countries across Africa, Europe & Asia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
            >
              Request a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;