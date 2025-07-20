import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-400 mb-2">{product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
