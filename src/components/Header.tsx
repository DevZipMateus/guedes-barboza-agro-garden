import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Guedes Barboza Agro Garden"
            className="h-12 md:h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5555996862124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-accent"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-background"}`}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5555996862124"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold text-center hover:bg-accent/90 transition-colors"
            >
              Fale conosco
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
