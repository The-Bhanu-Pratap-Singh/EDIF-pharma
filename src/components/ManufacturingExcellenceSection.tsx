import { Button } from "@/components/ui/button";
import manufacturingImage from "@/assets/manufacturing.jpg";
import { Shield, Users, Award, CheckCircle } from "lucide-react";

const ManufacturingExcellenceSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Manufacturing Excellence
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              World-class manufacturing facilities with stringent quality assurance protocols, 
              ensuring every product meets the highest international standards.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">Comprehensive QA/QC systems with real-time monitoring</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Expert Workforce</h3>
                  <p className="text-muted-foreground">Highly trained professionals with decades of experience</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Compliance Excellence</h3>
                  <p className="text-muted-foreground">Full compliance with WHO-GMP, FDA, and EU regulations</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-secondary hover:opacity-90 transition-opacity text-lg px-8 py-3">
              View Manufacturing Capabilities
            </Button>
          </div>

          {/* Right Side - Image */}
          <div>
            <div className="relative">
              <img
                src={manufacturingImage}
                alt="Manufacturing Excellence Facility"
                className="rounded-2xl shadow-hover w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellenceSection;