
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products"; // ✅ update the path as per your structure
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product by ID (make sure to match string vs number)
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <p className="text-xl">❌ Product not found</p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-[#121212] text-white px-6 md:px-20 py-24"
    >
     
      <button
        onClick={() => navigate(-1)}
        className="text-sm mb-8 text-gray-400 hover:text-white transition"
      >
        ← Back to Products
      </button>

      <div className="flex flex-col md:flex-row items-center gap-10">
       
        <img
          src={product.image}
          alt={product.name}
          className="w-[280px] sm:w-[350px] md:w-[450px] rounded-xl shadow-xl object-contain"
        />

      
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-400">{product.description}</p>
          <p className="text-xl font-semibold">{product.price}</p>

          <button className="mt-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
            Buy Now
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetail;
