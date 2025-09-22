import EnhancedHeader from "@/components/EnhancedHeader";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductsSection from "@/components/ProductsSection";
import RDSection from "@/components/RDSection";
import ManufacturingExcellenceSection from "@/components/ManufacturingExcellenceSection";
import CertificationsSection from "@/components/CertificationsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import BlogInsightsSection from "@/components/BlogInsightsSection";
import PressMediaSection from "@/components/PressMediaSection";
import CSRSection from "@/components/CSRSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import EnhancedFooter from "@/components/EnhancedFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <RDSection />
      <ManufacturingExcellenceSection />
      <CertificationsSection />
      <GlobalPresenceSection />
      <BlogInsightsSection />
      <PressMediaSection />
      <CSRSection />
      <TestimonialsSection />
      <FinalCTASection />
      <EnhancedFooter />
    </div>
  );
};

export default Index;