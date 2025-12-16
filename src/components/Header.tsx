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

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-soft ${
        isScrolled ? "py-2" : "py-3 md:py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Guedes Barboza Agro Garden"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-foreground transition-colors hover:text-primary text-sm xl:text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5555996862124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-4 xl:px-5 py-2 xl:py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-accent text-sm xl:text-base"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-foreground font-medium py-3 px-2 hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5555996862124"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold text-center hover:bg-accent/90 transition-colors mt-2"
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
