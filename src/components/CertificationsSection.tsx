import { Download, Shield, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    { name: "WHO-GMP", description: "World Health Organization Good Manufacturing Practice" },
    { name: "US FDA", description: "United States Food and Drug Administration" },
    { name: "EU GMP", description: "European Union Good Manufacturing Practice" },
    { name: "ISO 9001", description: "International Organization for Standardization" },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & Quality Assurance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality is validated by international regulatory bodies and industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 text-center bg-white hover:shadow-card transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Download className="w-5 h-5 mr-2" />
            Download Certifications PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;