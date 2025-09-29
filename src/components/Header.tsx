import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/edif-pharma-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Manufacturing & R&D", href: "#manufacturing" },
    { name: "Certifications", href: "#certifications" },
    { name: "Markets", href: "#markets" },
    { name: "Newsroom", href: "#newsroom" },
    { name: "Careers", href: "#careers" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="EDIF PHARMA" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-gradient-primary hover:opacity-90 transition-opacity">
              Request a Quote
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="self-start bg-gradient-primary hover:opacity-90 transition-opacity">
                Request a Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;