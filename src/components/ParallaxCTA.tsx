import parallaxFields from "@/assets/parallax-fields.jpg";

const ParallaxCTA = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${parallaxFields})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content with Glassmorphism */}
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-background/20 border border-background/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-background mb-4 md:mb-6">
              Pronto para transformar seu cultivo?
            </h2>
            <p className="text-background/90 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você a alcançar os melhores resultados, seja no campo ou na cidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5555996862124"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-accent/90 transition-all shadow-lg"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#contato"
                className="backdrop-blur-md bg-background/20 text-background border border-background/40 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-background/30 transition-all"
              >
                Ver localização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
