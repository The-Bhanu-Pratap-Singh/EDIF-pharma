import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductsSection from "@/components/ProductsSection";
import CertificationsSection from "@/components/CertificationsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <CertificationsSection />
      <GlobalPresenceSection />
      <Footer />
    </div>
  );
};

export default Index;