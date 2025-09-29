import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/edif-pharma-logo.jpg";

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productsDropdownItems = [
    { name: "Active Pharmaceutical Ingredients (APIs)", href: "#apis" },
    { name: "Finished Dosage Forms (FDFs)", href: "#finished-dosage" },
    { name: "Contract Manufacturing / Custom Formulation", href: "#contract" },
  ];

  const mainNavItems = [
    { name: "Products", href: "#products", dropdown: productsDropdownItems },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Markets", href: "#markets" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-b border-border shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="EDIF PHARMA" 
              className="h-10 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            {mainNavItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger 
                      className="flex items-center space-x-1 text-sm font-semibold text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="bg-background border shadow-lg rounded-md min-w-[280px] z-50 p-2"
                      align="start"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem 
                          key={dropdownItem.name}
                          className="focus:bg-accent focus:text-accent-foreground rounded-sm"
                        >
                          <a 
                            href={dropdownItem.href} 
                            className="w-full text-sm py-2 px-3 block hover:text-primary transition-colors"
                            tabIndex={0}
                          >
                            {dropdownItem.name}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
                    tabIndex={0}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label="Request a Quote"
            >
              Request a Quote
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border" role="navigation">
            <div className="flex flex-col space-y-1">
              {/* Request a Quote button at top for mobile */}
              <div className="mb-4">
                <Button 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold py-3 rounded-md transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Request a Quote"
                >
                  Request a Quote
                </Button>
              </div>
              
              {mainNavItems.map((item) => (
                <div key={item.name} className="border-b border-border/50 last:border-b-0 pb-3 last:pb-0">
                  <a
                    href={item.href}
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors block py-3 px-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setIsMenuOpen(false)}
                    tabIndex={0}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-2 px-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={() => setIsMenuOpen(false)}
                          tabIndex={0}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;