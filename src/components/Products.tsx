import { Leaf, Droplets, Sun, Sprout, TreeDeciduous, Flower2 } from "lucide-react";
import productsStore from "@/assets/products-store.jpg";

const products = [
  {
    icon: Leaf,
    title: "Insumos agrícolas",
    description: "Fertilizantes, defensivos e sementes de alta qualidade para maximizar sua produção.",
  },
  {
    icon: Sprout,
    title: "Mudas e plantas",
    description: "Variedade de mudas para jardins, hortas e cultivos comerciais.",
  },
  {
    icon: Droplets,
    title: "Irrigação",
    description: "Sistemas de irrigação eficientes para otimizar o uso da água.",
  },
  {
    icon: Sun,
    title: "Produtos orgânicos",
    description: "Linha completa de produtos orgânicos e sustentáveis.",
  },
  {
    icon: TreeDeciduous,
    title: "Jardinagem",
    description: "Ferramentas e acessórios para cuidar do seu jardim.",
  },
  {
    icon: Flower2,
    title: "Paisagismo",
    description: "Produtos especializados para projetos de paisagismo.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nossos produtos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Oferecemos uma linha diversificada de produtos para o setor agro e urbano, com foco em qualidade, eficiência e sustentabilidade.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <img
            src={productsStore}
            alt="Interior da loja com produtos agrícolas, fertilizantes e ferramentas de jardinagem"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-soft"
          />
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
