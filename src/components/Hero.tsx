import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />

      {/* Content */}
      <div className="container relative z-10 text-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-background mb-4 animate-fade-in">
          Guedes Barboza Agro Garden
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-background/90 font-light mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Cultivando soluções, florescendo resultados
        </h2>

        <p
          className="max-w-2xl mx-auto text-background/80 text-lg mb-10 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Desde os anos 70 oferecendo produtos e serviços de qualidade para o setor agropecuário e urbano, com foco em sustentabilidade e inovação.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#sobre"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-soft"
          >
            Conheça nossa história
          </a>
          <a
            href="https://wa.me/5555996862124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all shadow-accent"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
