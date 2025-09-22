import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Partner with a Trusted
            <span className="block text-transparent bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text">
              Global Pharma Manufacturer
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90 max-w-3xl mx-auto">
            Ready to elevate your pharmaceutical supply chain? Join 1000+ companies worldwide 
            who trust us for quality manufacturing and reliable partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg min-w-[200px]"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Request a Quote
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg min-w-[200px]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Catalog
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-8 bg-white/10 backdrop-blur rounded-2xl">
            <p className="text-lg mb-4 text-white/90">Need immediate assistance?</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div>
                <span className="text-white/70">Phone: </span>
                <span className="font-semibold">+1 (555) 123-4567</span>
              </div>
              <div className="hidden md:block text-white/50">|</div>
              <div>
                <span className="text-white/70">Email: </span>
                <span className="font-semibold">partnerships@pharmaglobal.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;