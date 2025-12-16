import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Guedes Barboza Agro Garden"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              Cultivando soluções, florescendo resultados. Desde os anos 70 oferecendo produtos e serviços de qualidade para o setor agropecuário e urbano.
            </p>
            <p className="text-background/50 text-sm">
              CNPJ: 12.855.451/0001-90
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Links rápidos</h3>
            <nav className="space-y-3">
              <a href="#inicio" className="block text-background/70 hover:text-background transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-background/70 hover:text-background transition-colors">
                Sobre
              </a>
              <a href="#produtos" className="block text-background/70 hover:text-background transition-colors">
                Produtos
              </a>
              <a href="#servicos" className="block text-background/70 hover:text-background transition-colors">
                Serviços
              </a>
              <a href="#planos" className="block text-background/70 hover:text-background transition-colors">
                Planos
              </a>
              <a href="#contato" className="block text-background/70 hover:text-background transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Rua Andrade Neves, 205<br />
                  São Gabriel/RS
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  (55) 99686-2124
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  ernani.poll@yahoo.com.br
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Guedes Barboza Agro Garden. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
