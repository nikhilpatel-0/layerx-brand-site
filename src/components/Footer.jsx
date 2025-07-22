import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <h2 className="text-2xl font-bold tracking-tight text-[#00FFD1]">
          LayerX
        </h2>

        <div className="flex gap-6 text-sm md:text-base font-medium text-gray-400">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex gap-4 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-[#00FFD1] transition" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaXTwitter className="hover:text-[#00FFD1] transition" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-[#00FFD1] transition" />
          </a>
        </div>
      </motion.div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} LayerX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
