import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const BlogInsightsSection = () => {
  const blogPosts = [
    {
      title: "Future of Pharmaceutical Manufacturing: Trends and Innovations",
      excerpt: "Exploring emerging technologies and methodologies shaping the future of pharmaceutical production and quality control.",
      date: "March 15, 2024",
      category: "Industry Insights"
    },
    {
      title: "Regulatory Compliance in Global Markets: A Comprehensive Guide",
      excerpt: "Understanding the complex landscape of international pharmaceutical regulations and compliance requirements.",
      date: "March 10, 2024",
      category: "Regulatory"
    },
    {
      title: "Sustainable Practices in Pharmaceutical Manufacturing",
      excerpt: "How environmentally conscious manufacturing processes are becoming essential for modern pharmaceutical companies.",
      date: "March 5, 2024",
      category: "Sustainability"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Insights & Knowledge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest research findings, industry insights, and expert perspectives on pharmaceutical manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-primary font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors p-0 h-auto"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsightsSection;