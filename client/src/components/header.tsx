import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <div className="text-2xl md:text-3xl font-bold tracking-wider" style={{ 
              fontFamily: 'Lato, sans-serif',
              color: '#2d3748',
              letterSpacing: '0.15em'
            }}>
              <span style={{ color: '#f5b841' }}>O</span>CTAGON
            </div>
            <div className="text-2xl md:text-3xl font-bold tracking-wider" style={{ 
              fontFamily: 'Lato, sans-serif',
              color: '#2d3748',
              letterSpacing: '0.15em',
              marginLeft: '1.2em'
            }}>
              LEGAL
            </div>
          </div>
          
          {/* Right: Clean Navigation */}
          <div className="flex items-center space-x-8">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1"
              style={{ color: '#2d3748' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => window.scrollTo(0, 0)} 
                className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('practice-areas')} 
                className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Practice Areas
              </button>
              <button 
                onClick={() => scrollToSection('our-team')} 
                className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Our Team
              </button>
              <Link 
                href="/contact"
                className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => window.scrollTo(0, 0)} 
                className="text-left text-sm font-medium uppercase tracking-wide"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('practice-areas')} 
                className="text-left text-sm font-medium uppercase tracking-wide"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Practice Areas
              </button>
              <button 
                onClick={() => scrollToSection('our-team')} 
                className="text-left text-sm font-medium uppercase tracking-wide"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Our Team
              </button>
              <Link 
                href="/contact"
                className="text-left text-sm font-medium uppercase tracking-wide"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: '#4a5568'
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>

    </header>
  );
}
