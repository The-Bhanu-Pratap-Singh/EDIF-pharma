import { Globe, MapPin, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const GlobalPresenceSection = () => {
  const regions = [
    { name: "Africa", countries: "15+ Countries", growth: "+25% YoY" },
    { name: "Europe", countries: "18+ Countries", growth: "+18% YoY" },
    { name: "Asia", countries: "12+ Countries", growth: "+32% YoY" },
  ];

  return (
    <section id="markets" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global Presence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted pharmaceutical partner serving healthcare markets across three continents.
          </p>
        </div>

        {/* World Map Visual */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
            <Globe className="w-24 h-24 mx-auto mb-6 text-primary" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Exporting to 45+ Countries Worldwide
            </h3>
            <p className="text-lg text-muted-foreground">
              Building global healthcare partnerships since 1998
            </p>
          </div>
        </div>

        {/* Regional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-white">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {region.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {region.countries}
              </p>
              <div className="flex items-center justify-center text-secondary">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="font-semibold">{region.growth}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;