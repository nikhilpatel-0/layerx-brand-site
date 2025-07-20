import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="bg-[#121212] min-h-screen pt-24 px-6 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">🔥 Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
