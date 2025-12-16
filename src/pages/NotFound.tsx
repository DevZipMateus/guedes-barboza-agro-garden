import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1 items-center justify-center bg-muted pt-20">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Página não encontrada
          </p>
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;