import { useState, useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    document.title = "Demonstração de Vitrine - Guedes Barboza Agro Garden";
    
    const calculateHeight = () => {
      // Header: 80px, Badge: 63px
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />

      {/* Espaçador para o header fixo */}
      <div className="h-20 flex-shrink-0" />

      {/* Iframe - altura dinâmica */}
      <div className="flex-1 w-full">
        <iframe
          src="https://guedesbarboza.egestor.com.br/vitrine/"
          style={{ 
            width: "100%", 
            height: `${iframeHeight}px`, 
            border: "none" 
          }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;