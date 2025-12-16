import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto rounded-full mb-4 md:mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base lg:text-lg px-2">
            Estamos prontos para atender você e encontrar as melhores soluções para suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Rua Andrade Neves, 205<br />
                  Centro - São Gabriel/RS<br />
                  CEP: 97300-434
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-1">
                  Telefone
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  (55) 3232-3093<br />
                  (55) 99686-2124
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-1">
                  E-mail
                </h3>
                <p className="text-muted-foreground text-sm md:text-base break-all">
                  ernani.poll@yahoo.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-1">
                  Horário de funcionamento
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Segunda a Sábado<br />
                  Manhã: 08:00 às 12:00<br />
                  Tarde: 14:00 às 18:00
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-2 md:pt-4">
              <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-3 md:mb-4">
                Redes sociais
              </h3>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-soft h-[300px] sm:h-[350px] lg:h-auto lg:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.8!2d-54.32!3d-30.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzI0LjAiUyA1NMKwMTknMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Guedes Barboza Agro Garden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
