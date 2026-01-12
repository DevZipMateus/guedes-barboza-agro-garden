import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />

      {/* Content */}
      <div className="container relative z-10 text-center pt-24 md:pt-20 px-4">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-lg bg-background/10 border border-background/20 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 max-w-4xl mx-auto shadow-2xl">
          {/* Logo visível + H1 oculto para SEO */}
          <div className="mb-4 animate-fade-in">
            <img 
              src={logo} 
              alt="Guedes Barboza Agro Garden" 
              className="h-32 sm:h-44 md:h-56 lg:h-64 xl:h-72 w-auto mx-auto"
            />
            <h1 className="sr-only">Guedes Barboza Agro Garden</h1>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-background/90 font-light mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Cultivando soluções, florescendo resultados
          </h2>

          <p
            className="max-w-2xl mx-auto text-background/80 text-base md:text-lg mb-8 md:mb-10 animate-fade-in px-2"
            style={{ animationDelay: "0.4s" }}
          >
            Desde os anos 70 oferecendo produtos e serviços de qualidade para o setor agropecuário e urbano, com foco em sustentabilidade e inovação.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#sobre"
              className="backdrop-blur-md bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-primary transition-all shadow-lg border border-primary/50"
            >
              Conheça nossa história
            </a>
            <a
              href="https://wa.me/5555996862124"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-accent/90 text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-accent transition-all shadow-lg border border-accent/50"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
