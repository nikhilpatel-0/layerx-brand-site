import { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import { FaFire, FaRocket, FaGlobe, FaShippingFast } from "react-icons/fa";

const MarqueeBanner = () => {
  const [direction, setDirection] = useState("left");
  const lastScroll = useRef(0);
  const lastDirection = useRef("left");
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const newDirection =
        currentScroll > lastScroll.current ? "left" : "right";

      
      if (newDirection !== lastDirection.current) {
        lastDirection.current = newDirection;

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setDirection(newDirection);
        }, 100); 
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="bg-[#00FFD1] py-3">
      <Marquee
        pauseOnHover={true}
        speed={60}
        gradient={false}
        direction={direction}
      >
        <div className="flex items-center gap-6 text-black font-semibold text-base md:text-lg">
          <span className="flex items-center gap-2">
            <FaFire /> OVERLAYS DROP 03 COMING SOON
          </span>
          <span className="flex items-center gap-2 mx-10">
            <FaRocket /> Designed for Creators, Rebels & Students
          </span>
          <span className="flex items-center gap-2 mx-10">
            <FaGlobe /> Made in Noida. Worn Worldwide.
          </span>
          <span className="flex items-center gap-2 mx-10">
            <FaShippingFast /> Free Shipping Above ₹999
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;
