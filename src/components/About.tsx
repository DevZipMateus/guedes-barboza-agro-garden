import { Target, Eye, Heart, Clock } from "lucide-react";
import aboutGarden from "@/assets/about-garden.jpg";
import landscaping from "@/assets/landscaping.jpg";

const values = [
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em soluções sustentáveis e diversificadas para o setor agro e também para ambientes urbanos, promovendo o bem-estar e o crescimento tanto de comunidades rurais quanto urbanas.",
  },
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer produtos e serviços de qualidade que integrem soluções agrícolas, do meio rural e urbanas, com foco em sustentabilidade, inovação e atendimento próximo às necessidades dos nossos clientes.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Compromisso com a comunidade e o meio ambiente, praticando responsabilidade social e ambiental. Valorizamos as pessoas, cultivando relacionamentos éticos, respeitosos e de confiança.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container px-4">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Sobre nós
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* History with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
          <div className="order-2 lg:order-1">
            {/* Glassmorphism Card */}
            <div className="backdrop-blur-md bg-card/80 border border-border/50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 backdrop-blur-md bg-primary/20 border border-primary/30 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  Nossa história
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Surgimos no final da década dos anos 70, começando como um pequeno negócio voltado para soluções agropecuárias. Ao longo dos anos, fomos ampliando nosso mix de produtos e serviços, sempre acompanhando as mudanças do mercado e necessidades dos nossos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-3 md:mt-4">
                Desde o início, a empresa se sustentou enfrentando não só os desafios normais de um mercado em expansão, mas também as adversidades climáticas da região onde estamos sediados. Superar essas condições desafiadoras foi uma grande vitória e moldou nossa resiliência e capacidade de inovação.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={aboutGarden}
              alt="Horta orgânica com vegetais frescos cultivados de forma sustentável"
              className="rounded-xl md:rounded-2xl shadow-xl w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Vision, Mission, Values with Glassmorphism */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="backdrop-blur-md bg-card/80 border border-border/50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:bg-card/90 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 backdrop-blur-md bg-primary/20 border border-primary/30 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img
              src={landscaping}
              alt="Jardim paisagístico com flores coloridas e gramado verde"
              className="rounded-xl md:rounded-2xl shadow-xl w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 md:mb-6">
              Mercado de atuação
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
              No nosso segmento, atuamos tanto no mercado agropecuário quanto no mercado urbano, oferecendo soluções para uma ampla gama de clientes. Nosso mercado inclui desde produtores rurais que buscam tecnologias sustentáveis e eficientes até consumidores urbanos interessados em soluções para hortas, jardins e espaços verdes em casa ou em pequenos negócios.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg mt-3 md:mt-4">
              Essa diversidade nos permite atender a diferentes necessidades e contribuir para um mercado mais sustentável e inovador, tanto no campo quanto na cidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
