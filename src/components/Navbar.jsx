import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(savedCart.length);
    };

    updateCart();

    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full fixed top-0 left-0 z-50 bg-[#121212] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">LayerX</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-10 text-sm font-medium">
            <motion.li whileHover={{ scale: 1.05 }} className="relative group">
              <Link to="/" className="hover:text-gray-400 transition-all">Home</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="relative group">
              <Link to="/products" className="hover:text-gray-400 transition-all">Products</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="relative group">
              <Link to="/about" className="hover:text-gray-400 transition-all">About</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          </ul>

          {/* Cart Icon */}
          <Link to="/cart" className="relative group">
            <ShoppingCart size={24} className="hover:text-gray-400 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth Button */}
          <div className="ml-6">
            <Link to="/login">
              <button className="bg-[#00FFD1] text-black px-5 py-1.5 rounded-full text-sm hover:bg-white transition">
                Login / Signup
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="md:hidden bg-[#121212] px-6 pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ul className="flex flex-col space-y-4 text-base font-medium mb-4">
            <li className="hover:text-gray-400">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link to="/cart" onClick={() => setOpen(false)}>Cart ({cartCount})</Link>
            </li>
          </ul>

          {/* Mobile Auth Button */}
          <div className="flex flex-col gap-3">
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="bg-[#00FFD1] text-black w-full py-2 rounded-full text-sm hover:bg-white transition">
                Login / Signup
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
