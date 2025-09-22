import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EnhancedFooter = () => {
  const aboutLinks = [
    { name: "About Us", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "CSR / Sustainability", href: "#csr" },
    { name: "Careers", href: "#careers" },
  ];

  const productLinks = [
    { name: "APIs", href: "#apis" },
    { name: "Finished Dosage Forms", href: "#finished-dosage" },
    { name: "Specialty Formulations", href: "#specialty" },
    { name: "Contract Manufacturing", href: "#contract" },
  ];

  const resourceLinks = [
    { name: "Certifications", href: "#certifications" },
    { name: "Markets Served", href: "#markets" },
    { name: "Press Releases", href: "#press" },
    { name: "Blog / Insights", href: "#blog" },
    { name: "Media Kit", href: "#media-kit" },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Youtube, href: "#", label: "YouTube" },
    { Icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Compliance Statement", href: "#compliance" },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Upper Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">About</h3>
            <div className="space-y-3">
              {aboutLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <div className="space-y-3">
              {productLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <div className="space-y-3">
              {resourceLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <div className="font-semibold text-white mb-1">Headquarters</div>
                  123 Pharma Street<br />
                  Industrial City, PC 12345<br />
                  United States
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">info@pharmaglobal.com</span>
              </div>
            </div>
            
            <Button className="bg-gradient-secondary hover:opacity-90 transition-opacity w-full">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Left Side - Logo & Tagline */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div>
                <div className="text-xl font-bold">PharmaGlobal</div>
                <div className="text-sm text-white/60">Global Partner in Healthcare Manufacturing</div>
              </div>
            </div>

            {/* Center - Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-white hover:bg-white/10 w-10 h-10 p-0"
                  asChild
                >
                  <a href={href} aria-label={label}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Right - Legal Links */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <div className="flex flex-wrap justify-center space-x-4">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-sm text-white/60">
              © 2024 PharmaGlobal. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;