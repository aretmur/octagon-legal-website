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

          {/* ---------- LOGO (ONE-LINE) ---------- */}
          <div className="flex items-center gap-2 whitespace-nowrap select-none">
            <span
              className="text-3xl font-bold tracking-wider"
              style={{
                fontFamily: "Lato, sans-serif",
                color: "#2d3748",
                letterSpacing: "0.15em",
              }}
            >
              <span style={{ color: "#f5b841" }}>O</span>CTAGON LEGAL
            </span>
          </div>

          {/* ---------- DESKTOP NAV ---------- */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity text-gray-700"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("practice-areas")}
              className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity text-gray-700"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Practice Areas
            </button>

            <button
              onClick={() => scrollToSection("our-team")}
              className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity text-gray-700"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Our Team
            </button>

            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity text-gray-700"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Contact
            </Link>
          </nav>

          {/* ---------- MOBILE MENU BUTTON ---------- */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-1 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* ---------- MOBILE SLIDE-DOWN MENU ---------- */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">

              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="text-left text-sm font-medium uppercase tracking-wide text-gray-700"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("practice-areas")}
                className="text-left text-sm font-medium uppercase tracking-wide text-gray-700"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Practice Areas
              </button>

              <button
                onClick={() => scrollToSection("our-team")}
                className="text-left text-sm font-medium uppercase tracking-wide text-gray-700"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Our Team
              </button>

              <Link
                href="/contact"
                className="text-left text-sm font-medium uppercase tracking-wide text-gray-700"
                style={{ fontFamily: "Lato, sans-serif" }}
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
