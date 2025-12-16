import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 md:py-12 lg:py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <img
              src={logo}
              alt="Guedes Barboza Agro Garden"
              className="h-12 md:h-14 lg:h-16 w-auto mb-4 md:mb-6 brightness-0 invert"
            />
            <p className="text-background/70 leading-relaxed text-sm md:text-base max-w-md mb-4 md:mb-6">
              Cultivando soluções, florescendo resultados. Desde os anos 70 oferecendo produtos e serviços de qualidade para o setor agropecuário e urbano.
            </p>
            <p className="text-background/50 text-xs md:text-sm">
              CNPJ: 12.855.451/0001-90
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-heading font-bold mb-4 md:mb-6">Links rápidos</h3>
            <nav className="space-y-2 md:space-y-3">
              <a href="#inicio" className="block text-background/70 hover:text-background transition-colors text-sm md:text-base">
                Início
              </a>
              <a href="#sobre" className="block text-background/70 hover:text-background transition-colors text-sm md:text-base">
                Sobre
              </a>
              <a href="#produtos" className="block text-background/70 hover:text-background transition-colors text-sm md:text-base">
                Produtos
              </a>
              <a href="#servicos" className="block text-background/70 hover:text-background transition-colors text-sm md:text-base">
                Serviços
              </a>
              <a href="#planos" className="block text-background/70 hover:text-background transition-colors text-sm md:text-base">
                Planos
              </a>
              <a href="#contato" className="block text-background/70 hover:text-background transition-colors text-sm md:text-base">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base md:text-lg font-heading font-bold mb-4 md:mb-6">Contato</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-xs md:text-sm">
                  Rua Andrade Neves, 205<br />
                  São Gabriel/RS
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span className="text-background/70 text-xs md:text-sm">
                  (55) 99686-2124
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span className="text-background/70 text-xs md:text-sm break-all">
                  ernani.poll@yahoo.com.br
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-background/50 text-xs md:text-sm">
            © {new Date().getFullYear()} Guedes Barboza Agro Garden. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
