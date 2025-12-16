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
    <section id="planos" className="py-20 bg-muted">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nossos planos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Disponibilizamos planos flexíveis e personalizados pensando em oferecer praticidade, economia e parceria de longo prazo.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card border border-border hover:shadow-soft"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  plan.highlight ? "bg-accent" : "bg-primary/10"
                }`}
              >
                <plan.icon
                  className={`w-7 h-7 ${
                    plan.highlight ? "text-accent-foreground" : "text-primary"
                  }`}
                />
              </div>

              <h3 className="text-2xl font-heading font-bold mb-2">
                {plan.name}
              </h3>
              <p
                className={`mb-6 ${
                  plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        plan.highlight ? "text-primary-foreground/90" : "text-foreground"
                      }
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
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
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
