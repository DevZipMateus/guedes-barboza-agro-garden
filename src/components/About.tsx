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
    <section id="sobre" className="py-20 bg-muted">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Sobre nós
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* History with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Nossa história
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Surgimos no final da década dos anos 70, começando como um pequeno negócio voltado para soluções agropecuárias. Ao longo dos anos, fomos ampliando nosso mix de produtos e serviços, sempre acompanhando as mudanças do mercado e necessidades dos nossos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Desde o início, a empresa se sustentou enfrentando não só os desafios normais de um mercado em expansão, mas também as adversidades climáticas da região onde estamos sediados. Superar essas condições desafiadoras foi uma grande vitória e moldou nossa resiliência e capacidade de inovação.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={aboutGarden}
              alt="Horta orgânica com vegetais frescos cultivados de forma sustentável"
              className="rounded-2xl shadow-soft w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={landscaping}
              alt="Jardim paisagístico com flores coloridas e gramado verde"
              className="rounded-2xl shadow-soft w-full h-[350px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Mercado de atuação
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              No nosso segmento, atuamos tanto no mercado agropecuário quanto no mercado urbano, oferecendo soluções para uma ampla gama de clientes. Nosso mercado inclui desde produtores rurais que buscam tecnologias sustentáveis e eficientes até consumidores urbanos interessados em soluções para hortas, jardins e espaços verdes em casa ou em pequenos negócios.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Essa diversidade nos permite atender a diferentes necessidades e contribuir para um mercado mais sustentável e inovador, tanto no campo quanto na cidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
