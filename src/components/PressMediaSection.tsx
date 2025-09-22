import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

const PressMediaSection = () => {
  const mediaLogos = [
    "Financial Times", "Forbes", "Reuters", "Bloomberg", "The Economist"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Press & Media Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Latest news and media coverage highlighting our achievements and industry recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest Press Release */}
          <Card className="p-8 bg-white">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>March 20, 2024</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
              PharmaGlobal Expands Manufacturing Capacity with New $50M Facility in Southeast Asia
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The new state-of-the-art facility will increase our production capacity by 40% and create 200 new jobs, 
              strengthening our commitment to serving growing Asian markets with quality pharmaceutical products.
            </p>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              Read Full Release
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Media Coverage */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured In</h3>
            <div className="grid grid-cols-1 gap-6">
              {mediaLogos.map((logo, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg border hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{logo.charAt(0)}</span>
                  </div>
                  <span className="text-lg font-semibold text-foreground">{logo}</span>
                </div>
              ))}
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity mt-8 w-full">
              View All Newsroom
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressMediaSection;