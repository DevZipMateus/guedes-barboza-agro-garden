import { Headphones, FileSearch, Truck, Wrench, GraduationCap, Users } from "lucide-react";

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
    <section id="servicos" className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg">
            Prestamos atendimento técnico e orientação especializada, buscando sempre indicar as melhores soluções para cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-primary-foreground/15 transition-all duration-300 border border-primary-foreground/20"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
