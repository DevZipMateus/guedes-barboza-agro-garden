import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    icon: Star,
    name: "Básico",
    description: "Para pequenos produtores e jardineiros",
    features: [
      "Acesso ao catálogo completo",
      "Atendimento por WhatsApp",
      "Descontos em compras recorrentes",
      "Newsletter com dicas",
    ],
    highlight: false,
  },
  {
    icon: Zap,
    name: "Profissional",
    description: "Para produtores e paisagistas",
    features: [
      "Tudo do plano Básico",
      "Consultoria técnica mensal",
      "Preços especiais por volume",
      "Entrega prioritária",
      "Treinamentos exclusivos",
    ],
    highlight: true,
  },
  {
    icon: Crown,
    name: "Empresarial",
    description: "Para grandes propriedades e empresas",
    features: [
      "Tudo do plano Profissional",
      "Gerente de conta dedicado",
      "Condições comerciais exclusivas",
      "Suporte técnico 24/7",
      "Parcerias customizadas",
    ],
    highlight: false,
  },
];

const Plans = () => {
  return (
    <section id="planos" className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container px-4">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nossos planos
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto rounded-full mb-4 md:mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base lg:text-lg px-2">
            Disponibilizamos planos flexíveis e personalizados pensando em oferecer praticidade, economia e parceria de longo prazo.
          </p>
        </div>

        {/* Plans Grid with Glassmorphism */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                plan.highlight
                  ? "backdrop-blur-xl bg-primary/95 text-primary-foreground shadow-2xl sm:scale-105 border border-primary/50"
                  : "backdrop-blur-md bg-card/80 border border-border/50 hover:shadow-xl hover:bg-card/90"
              }`}
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 ${
                  plan.highlight 
                    ? "backdrop-blur-md bg-accent/90 border border-accent/50" 
                    : "backdrop-blur-md bg-primary/20 border border-primary/30"
                }`}
              >
                <plan.icon
                  className={`w-6 h-6 md:w-7 md:h-7 ${
                    plan.highlight ? "text-accent-foreground" : "text-primary"
                  }`}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">
                {plan.name}
              </h3>
              <p
                className={`text-sm md:text-base mb-4 md:mb-6 ${
                  plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 md:gap-3">
                    <Check
                      className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm md:text-base ${
                        plan.highlight ? "text-primary-foreground/90" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5555996862124"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                  plan.highlight
                    ? "backdrop-blur-md bg-accent/90 text-accent-foreground hover:bg-accent border border-accent/50"
                    : "backdrop-blur-md bg-primary/90 text-primary-foreground hover:bg-primary border border-primary/50"
                }`}
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
