import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLenisScroll from "../hooks/useLenisScroll";

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    title: "📹 From Bedroom to 10M+ Fans",
    text: "Shlok Srivastava aka Tech Burner started with a second-hand mic in a small room. Today, he’s loved by over 10M+ people.",
    img: "/about/1.jpg",
  },
  {
    title: "👕 From Gadgets to Garments",
    text: "Tired of clothes that didn't match creator energy, he launched Overlays — the brand for creators, students, and rebels.",
    img: "/about/2.jpg",
  },
  {
    title: "🧬 Signature Tech Fabric",
    text: "With anti-fade, anti-shrink, and breathable fabric, Overlays redefined fashion with purpose.",
    img: "/about/3.jpg",
  },
  {
    title: "🔥 Every Drop Has a Story",
    text: "From distressed collections to engineered fits, each drop reflects freedom, originality, and hustle.",
    img: "/about/4.jpg",
  },
  {
    title: "🌍 Built in Noida, Seen Worldwide",
    text: "From Noida to New York, Overlays is building the uniform for the creator generation.",
    img: "/about/5.jpg",
  },
];

const About = () => {
  useLenisScroll(); // 🔄 Smooth scroll hook

  const sectionRefs = useRef([]);

  useEffect(() => {
    // ✅ Slight delay ensures refs are populated
    const timer = setTimeout(() => {
      sectionRefs.current.forEach((el) => {
        if (!el) return;

        const image = el.querySelector(".journey-img");
        const text = el.querySelector(".journey-text");

        gsap.fromTo(
          image,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          text,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, 100); // 100ms delay to ensure refs are available

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#121212] text-white pt-24 px-6 md:px-20 pb-16 space-y-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        The Story of <span className="text-[#00FFD1]">Tech Burner</span>
      </h1>

      {journey.map((section, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-[50%]">
            <img
              src={section.img}
              alt={section.title}
              className="rounded-xl shadow-xl journey-img"
            />
          </div>

          <div className="md:w-[50%] space-y-4 text-center md:text-left journey-text">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="text-gray-300 text-base md:text-lg">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
