import { Headphones, FileSearch, Truck, Wrench, GraduationCap, Users } from "lucide-react";
import servicesConsulting from "@/assets/services-consulting.jpg";

const services = [
  {
    icon: Headphones,
    title: "Atendimento técnico",
    description: "Orientação especializada para encontrar as melhores soluções para cada necessidade.",
  },
  {
    icon: FileSearch,
    title: "Consultoria",
    description: "Análise personalizada do seu projeto, seja no campo ou na cidade.",
  },
  {
    icon: Truck,
    title: "Entrega",
    description: "Logística eficiente para entregar seus produtos com segurança e agilidade.",
  },
  {
    icon: Wrench,
    title: "Suporte pós-venda",
    description: "Acompanhamento contínuo para garantir sua satisfação.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    description: "Capacitação sobre uso correto de produtos e técnicas de cultivo.",
  },
  {
    icon: Users,
    title: "Parcerias",
    description: "Programas especiais para produtores e revendedores.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
            Nossos serviços
          </h2>
          <div className="w-16 md:w-20 h-1 bg-accent mx-auto rounded-full mb-4 md:mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/80 text-sm md:text-base lg:text-lg px-2">
            Prestamos atendimento técnico e orientação especializada, buscando sempre indicar as melhores soluções para cada cliente.
          </p>
        </div>

        {/* Image and Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image with glass effect */}
          <div className="lg:sticky lg:top-24 order-2 lg:order-1">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={servicesConsulting}
                alt="Consultores agrícolas conversando com produtor rural no campo"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-primary/40 border-t border-primary-foreground/20 p-4 md:p-6">
                <p className="text-primary-foreground font-heading font-semibold text-sm md:text-base text-center">
                  Atendimento personalizado para cada cliente
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid with Glassmorphism */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="backdrop-blur-xl bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-primary-foreground/20 transition-all duration-300 shadow-lg"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 backdrop-blur-md bg-accent/90 border border-accent/50 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-md">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                </div>
                <h3 className="text-base md:text-lg font-heading font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed text-xs md:text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
