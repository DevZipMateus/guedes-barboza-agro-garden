import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Vitrine = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    document.title = "Demonstração de Vitrine - Guedes Barboza Agro Garden";
    
    const calculateHeight = () => {
      // Header: 80px, Badge: 63px
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-soft h-20 flex items-center">
        <div className="container flex items-center justify-between px-4 w-full">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Guedes Barboza Agro Garden"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/"
              className="font-medium text-foreground transition-colors hover:text-primary text-sm xl:text-base"
            >
              Início
            </Link>
            <Link
              to="/vitrine"
              className="font-medium text-primary transition-colors text-sm xl:text-base"
            >
              Vitrine
            </Link>
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
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border">
            <div className="container py-4 flex flex-col gap-2 px-4">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-foreground font-medium py-3 px-2 hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                Início
              </Link>
              <Link
                to="/vitrine"
                onClick={handleLinkClick}
                className="text-primary font-medium py-3 px-2 hover:bg-muted rounded-lg transition-colors"
              >
                Vitrine
              </Link>
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

      {/* Espaçador para o header fixo */}
      <div className="h-20 flex-shrink-0" />

      {/* Iframe - altura dinâmica */}
      <div className="flex-1 w-full">
        <iframe
          src="https://guedesbarboza.egestor.com.br/vitrine/"
          style={{ 
            width: "100%", 
            height: `${iframeHeight}px`, 
            border: "none" 
          }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
