import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import products from "../data/products";
import HeroSection from "../components/HeroSection";
import MarqueeBanner from "../components/MarqueeBanner";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.utils.toArray(".section-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <MarqueeBanner />

      
      <section className="section-reveal bg-[#1e1e1e] text-white px-6 md:px-20 py-20 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold">🔬 Tech-Engineered Fabric</h3>
            <p className="text-gray-400">Anti-shrink, anti-fade, breathable — fashion that performs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🔥 Limited Drops Only</h3>
            <p className="text-gray-400">No restocks. Every drop is bold, rare, and exclusive.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🌎 Built by Creators</h3>
            <p className="text-gray-400">Made for rebels, dreamers & doers — not just fashion, a statement.</p>
          </div>
        </div>
      </section>

     
      <section className="section-reveal bg-[#121212] text-white px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🔥 Trending Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-400">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Explore All
            </button>
          </Link>
        </div>
      </section>

      
      <section className="section-reveal bg-[#1e1e1e] text-white px-6 md:px-20 py-20 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">👣 Creator to Brand Journey</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          From a small room with a second-hand mic to a global streetwear label — this is the story of Tech Burner & Overlays.
        </p>
        <Link to="/about">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Read the Journey
          </button>
        </Link>
      </section>

      
      <section className="section-reveal bg-[#121212] text-white px-6 md:px-20 py-20 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Join The Movement</h2>
        <p className="text-gray-400">Be the first to know about new drops, behind-the-scenes & exclusive offers.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-full text-white w-full" />
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
