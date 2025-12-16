import { useState, useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    document.title = "Demonstração de Vitrine - Guedes Barboza Agro Garden";
    
    const calculateHeight = () => {
      // Header: 80px, Badge MonteSite: 63px
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    
    // Posicionar o badge do MonteSite fixo na parte inferior
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) {
      badge.style.position = "fixed";
      badge.style.bottom = "0";
      badge.style.left = "0";
      badge.style.right = "0";
      badge.style.width = "100%";
      badge.style.height = "63px";
      badge.style.zIndex = "40";
      badge.style.display = "block";
    }

    return () => {
      window.removeEventListener("resize", calculateHeight);
      // Resetar estilos do badge ao sair da página
      if (badge) {
        badge.style.position = "";
        badge.style.bottom = "";
        badge.style.left = "";
        badge.style.right = "";
        badge.style.width = "";
        badge.style.height = "";
        badge.style.zIndex = "";
      }
    };
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />

      {/* Espaçador para o header fixo */}
      <div className="h-20 flex-shrink-0" />

      {/* Iframe - altura dinâmica */}
      <div style={{ height: `${iframeHeight}px` }} className="w-full">
        <iframe
          src="https://guedesbarboza.egestor.com.br/vitrine/"
          style={{ 
            width: "100%", 
            height: "100%", 
            border: "none" 
          }}
          title="Demonstração de Vitrine"
        />
      </div>

      {/* Espaço reservado para o badge MonteSite (63px) */}
      <div className="h-[63px] flex-shrink-0 w-full bg-background" />
    </div>
  );
};

export default Vitrine;