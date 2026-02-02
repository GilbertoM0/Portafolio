import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const tecnmRef = useRef(null);
  const elviaRef = useRef(null);
  const alcateRef = useRef(null);
  const bejamRef = useRef(null);
  const gamuRef = useRef(null);

  // Gallery state for Casa Gamu
  const gamuImages = [
    { src: "/images/casa_gamu/CasaGamu.png", alt: "Casa Gamu" },
    { src: "/images/casa_gamu/HomeView.png", alt: "Home" },
    { src: "/images/casa_gamu/Order.png", alt: "Order" },
    { src: "/images/casa_gamu/Favorites.png", alt: "Favorites" },
    { src: "/images/casa_gamu/Settings.png", alt: "Settings" },
  ];
  const [selectedGamuImage, setSelectedGamuImage] = useState(0);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      tecnmRef.current,
      elviaRef.current,
      alcateRef.current,
      bejamRef.current,
      gamuRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Main Project - TECNM Prenacional */}
          <a
            href="https://prenacional-itj.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            ref={tecnmRef}
            className="first-project-wrapper cursor-pointer"
          >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="TECNM Prenacional" />
            </div>
            <div className="text-content">
              <h2>
                Real-Time Tracking System for Sports Events -
                TECNM Prenacional
              </h2>
              <p className="text-white-50 md:text-xl">
                Web platform developed with HTML, CSS, TypeScript and NestJS for live
                tracking of sports events, athlete management, and real-time
                results updates.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            {/* Joyería Espejito Espejito */}
            <a
              href="https://espejito-espejito.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project cursor-pointer"
              ref={elviaRef}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="Joyería Espejito Espejito E-commerce" />
              </div>
              <h2>Joyería Espejito Espejito - E-commerce Platform (In progress)</h2>
            </a>

            {/* ALCATE */}
            <a
              href="https://gilbertom0.github.io/sitiowebALCATE/"
              target="_blank"
              rel="noopener noreferrer"
              className="project cursor-pointer"
              ref={alcateRef}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="ALCATE Website" />
              </div>
              <h2>ALCATE - Mango Chipotle Sauce Website</h2>
            </a>

            {/* Bejam */}
            <a
              href="https://bejam.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project cursor-pointer"
              ref={bejamRef}
            >
              <div className="image-wrapper bg-[#E7F0FF]">
                <img src="/images/project4.png" alt="Bejam Website" />
              </div>
              <h2>Bejam - Pork Distribution Website</h2>
            </a>

            {/* Casa Gamu */}
            <div className="project" ref={gamuRef}>
              <div className="image-wrapper bg-[#FFF5E6]">
                <img 
                  src={gamuImages[selectedGamuImage].src} 
                  alt={gamuImages[selectedGamuImage].alt} 
                  className="transition-all duration-300"
                />
              </div>
              <h2>Casa Gamu - Mobile Ordering App</h2>
              <p className="text-white-50 text-sm mt-2">
                Android app built with Kotlin & Jetpack Compose, PostgreSQL database, and Django backend for seamless food ordering experience.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {gamuImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={image.alt} 
                    className={`w-16 h-16 rounded-lg object-cover cursor-pointer transition-all duration-300 ${
                      selectedGamuImage === index 
                        ? 'ring-2 ring-blue-500 scale-105' 
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => setSelectedGamuImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
