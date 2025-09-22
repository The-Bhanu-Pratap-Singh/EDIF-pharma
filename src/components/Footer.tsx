import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Products", href: "#products" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Markets", href: "#markets" },
    { name: "Careers", href: "#careers" },
    { name: "CSR", href: "#csr" },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-2xl font-bold">PharmaGlobal</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading pharmaceutical manufacturer committed to delivering quality healthcare solutions globally while maintaining the highest standards of excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
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

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/80">123 Pharma Street, Industrial City, PC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/80">info@pharmaglobal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-white/60">
              © 2024 PharmaGlobal. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map(({ Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href={href} aria-label={label}>
                  <Icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;