import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace("₹", "")), 0);

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 md:px-20 py-24">
      <h1 className="text-3xl font-bold mb-8">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between bg-[#1f1f1f] p-4 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-400">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 sm:mt-0 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t border-gray-700 pt-6">
            <p className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
