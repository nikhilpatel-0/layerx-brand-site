import { Link } from "react-router-dom"; // ✅ Add this at the top

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const HeroSection = () => {
  // Prevent auto scroll on reload
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#121212] text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-20 pb-10">

      {/* BIG BACKGROUND TEXT */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute text-[14vw] md:text-[10vw] font-extrabold text-white leading-none tracking-tight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0 pointer-events-none"
      >
        LAYERX
      </motion.h1>

      {/* LEFT: INTRO + CTA */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 w-full text-center md:text-left space-y-6 z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Tech Meets Fabric
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          Elevating streetwear with bold identity and innovation.
        </p>

        {/* CTA Button */}
        <Link to="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Shop The Drop
          </motion.button>
        </Link>

        {/* Newsletter */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full w-full sm:w-auto text-black bg-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Join Newsletter
          </button>
        </div>
      </motion.div>

      {/* RIGHT: MODEL IMAGE + SOCIAL + BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative md:w-1/2 w-full flex justify-center items-end mt-10 md:mt-0 z-10"
      >
        <img
          src="/1.png"
          alt="Model"
          className="w-[220px] sm:w-[280px] md:w-[420px] object-contain"
        />

        {/* Latest Drop Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 md:top-6 md:left-6 md:translate-x-0 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold shadow"
        >
          🔥 Latest Drop
        </motion.div>

        {/* Social Icons */}
        <div className="absolute bottom-6 left-4 flex gap-4 text-white text-xl">
          <motion.a
            href="https://instagram.com"
            whileHover={{ scale: 1.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://x.com"
            whileHover={{ scale: 1.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </motion.a>
          <motion.a
            href="https://youtube.com"
            whileHover={{ scale: 1.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
