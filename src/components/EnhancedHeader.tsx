import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutDropdownItems = [
    { name: "Vision & Values", href: "#vision" },
    { name: "Leadership", href: "#leadership" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "CSR", href: "#csr" },
  ];

  const productsDropdownItems = [
    { name: "APIs", href: "#apis" },
    { name: "Finished Dosage", href: "#finished-dosage" },
    { name: "Specialty", href: "#specialty" },
    { name: "Contract Manufacturing", href: "#contract" },
  ];

  const newsroomDropdownItems = [
    { name: "Press Releases", href: "#press" },
    { name: "Media Kit", href: "#media-kit" },
    { name: "Blog/Insights", href: "#blog" },
  ];

  const mainNavItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about", dropdown: aboutDropdownItems },
    { name: "Products", href: "#products", dropdown: productsDropdownItems },
    { name: "Manufacturing & R&D", href: "#manufacturing" },
    { name: "Certifications & Compliance", href: "#certifications" },
    { name: "Markets Served", href: "#markets" },
    { name: "Newsroom", href: "#newsroom", dropdown: newsroomDropdownItems },
    { name: "Careers", href: "#careers" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <span className="text-muted-foreground font-medium">
              Trusted Global Pharmaceutical Manufacturing Partner
            </span>
            <div className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>
              <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">PharmaGlobal</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-background border shadow-lg">
                        {item.dropdown.map((dropdownItem) => (
                          <DropdownMenuItem key={dropdownItem.name}>
                            <a href={dropdownItem.href} className="w-full">
                              {dropdownItem.name}
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-gradient-secondary hover:opacity-90 transition-opacity font-semibold">
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
                {mainNavItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button className="self-start bg-gradient-secondary hover:opacity-90 transition-opacity mt-4">
                  Request a Quote
                </Button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;