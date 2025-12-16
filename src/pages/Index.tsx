import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Plans />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
