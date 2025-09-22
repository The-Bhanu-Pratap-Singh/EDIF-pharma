import { TestTube, Pill, Beaker, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      icon: TestTube,
      title: "APIs",
      description: "High-quality Active Pharmaceutical Ingredients manufactured under stringent quality standards.",
      link: "#apis"
    },
    {
      icon: Pill,
      title: "Finished Dosage Forms",
      description: "Complete pharmaceutical formulations ready for market distribution worldwide.",
      link: "#dosage-forms"
    },
    {
      icon: Beaker,
      title: "Specialty Formulations",
      description: "Custom pharmaceutical solutions tailored to specific therapeutic needs and markets.",
      link: "#specialty"
    },
    {
      icon: Building,
      title: "Contract Manufacturing",
      description: "End-to-end manufacturing services from development to commercial production.",
      link: "#contract"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products & Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive pharmaceutical solutions backed by decades of expertise and global regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;