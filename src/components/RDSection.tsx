import { Button } from "@/components/ui/button";
import rdLabImage from "@/assets/rd-lab.jpg";
import { Microscope, FlaskConical, Brain } from "lucide-react";

const RDSection = () => {
  return (
    <section id="manufacturing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={rdLabImage}
                alt="Research and Development Laboratory"
                className="rounded-2xl shadow-hover w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Innovation & R&D Excellence
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art research facilities drive pharmaceutical innovation, 
              developing breakthrough solutions that meet evolving global healthcare needs.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Analytics</h3>
                  <p className="text-muted-foreground">Cutting-edge analytical methods and quality control systems</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Formulation Development</h3>
                  <p className="text-muted-foreground">Expert formulation science for complex drug delivery systems</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Process Innovation</h3>
                  <p className="text-muted-foreground">Continuous improvement in manufacturing processes and efficiency</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-3">
              Explore Our R&D Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RDSection;