import { Award, Globe, Package, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      icon: Calendar,
      value: "25+",
      label: "Years of Expertise",
    },
    {
      icon: Package,
      value: "100+",
      label: "Products",
    },
    {
      icon: Globe,
      value: "45+",
      label: "Countries Served",
    },
    {
      icon: Award,
      value: "WHO-GMP",
      label: "EU GMP | US FDA Certified",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;