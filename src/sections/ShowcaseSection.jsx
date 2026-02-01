import { useRef } from "react";
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
            {/* Joyería Elvia */}
            <a
              href="https://espejito-espejito.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project cursor-pointer"
              ref={elviaRef}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="Joyería Elvia E-commerce" />
              </div>
              <h2>Joyería Elvia - E-commerce Platform</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
