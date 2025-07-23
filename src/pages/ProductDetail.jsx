import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <p className="text-xl">❌ Product not found</p>
      </div>
    );
  }

  const handleBuy = () => {
    setShowModal(true);
  };

  const confirmPurchase = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setShowModal(false);
      setOrderPlaced(false);
      navigate("/"); // Redirect to home
    }, 2000);
  };

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart"); // Navigate to Cart page
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-[#121212] text-white px-6 md:px-20 py-24 relative"
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

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleBuy}
              className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Buy Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black rounded-xl p-8 w-[90%] max-w-md"
            >
              {orderPlaced ? (
                <div className="text-center space-y-4">
                  <h2 className="text-xl font-bold">✅ Payment Successful</h2>
                  <p>Thank you for your purchase!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Confirm Purchase</h2>
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain rounded"
                    />
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmPurchase}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProductDetail;
