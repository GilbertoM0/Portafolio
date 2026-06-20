import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const quinielaRef = useRef(null);
  const tecnmRef = useRef(null);
  const elviaRef = useRef(null);
  const alcateRef = useRef(null);
  const bejamRef = useRef(null);
  const gamuRef = useRef(null);

  // Gallery state for Play Quiniela
  const quinielaImages = [
    { src: "/images/play_quiniela/icon.png", alt: "Icon" },
    { src: "/images/play_quiniela/IMG_3895.jpg", alt: "Play Quiniela 1" },
    { src: "/images/play_quiniela/IMG_3896.jpg", alt: "Play Quiniela 2" },
    { src: "/images/play_quiniela/IMG_3897.jpg", alt: "Play Quiniela 3" },
    { src: "/images/play_quiniela/IMG_3898.jpg", alt: "Play Quiniela 4" },
    { src: "/images/play_quiniela/IMG_3899.jpg", alt: "Play Quiniela 5" },
    { src: "/images/play_quiniela/IMG_3900.jpg", alt: "Play Quiniela 6" },
    { src: "/images/play_quiniela/IMG_3901.jpg", alt: "Play Quiniela 7" },
    { src: "/images/play_quiniela/IMG_3902.jpg", alt: "Play Quiniela 8" },
    { src: "/images/play_quiniela/IMG_3903.jpg", alt: "Play Quiniela 9" },
    { src: "/images/play_quiniela/sesion.jpg", alt: "Sesión" },
  ];
  const [selectedQuinielaImage, setSelectedQuinielaImage] = useState(0);

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
      quinielaRef.current,
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
          {/* Main Project - Play Quiniela MX */}
          <div
            ref={quinielaRef}
            className="first-project-wrapper"
          >
            <div className="image-wrapper bg-[#1a1a2e] flex items-center justify-center p-4 md:p-8">
              <img
                src={quinielaImages[selectedQuinielaImage].src}
                alt={quinielaImages[selectedQuinielaImage].alt}
                className="transition-all duration-300 w-auto h-full max-w-full max-h-full object-contain rounded-xl relative"
                style={{ position: "relative", inset: "auto" }}
              />
            </div>
            <div className="text-content">
              <h2>
                Play Quiniela MX - Mobile App
              </h2>
              <div className="flex gap-3 mt-4 flex-wrap">
                <a
                  href="https://apps.apple.com/mx/app/play-quiniela-mx/id6776365393?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Store
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3DDC84] text-black px-4 py-2 rounded-lg hover:bg-[#34c776] transition-colors duration-300 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5L21 12L3 3.5v17zm2-3.4V6.9L16.3 12L5 17.1z"/>
                  </svg>
                  Google Play
                </a>
              </div>
              <p className="text-white-50 md:text-lg leading-relaxed">
                Play Quiniela is a hybrid mobile sports betting app built with <strong>Angular 19 + Ionic 8 + Capacitor</strong>, published on both Android and iOS. It follows <strong>Clean Architecture</strong> (Domain / Application / Infrastructure / Presentation) with <strong>NgRx</strong> for global state management (auth, pools, notifications, leaderboards, achievements, and chat).
                <br /><br />
                <strong>Authentication:</strong> Dual JWT token system (access + refresh) with automatic renewal, email/password login, and social login (Google, Apple). Protected by AuthGuard, NoAuthGuard, AdminGuard, and SuperAdminGuard based on user roles (user, admin, superadmin, reloader).
                <br /><br />
                <strong>Networking:</strong> HTTP interceptor injects Bearer token and handles 401 errors with automatic refresh. A ChunkErrorHandler reloads the app on lazy-loading failures.
                <br /><br />
                <strong>Payments:</strong> Stripe Checkout for balance top-ups (MXN $10–$10,000) and donations, with deep-link return to the app.
                <br /><br />
                <strong>Advertising:</strong> AdMob with adaptive banners and server-verified rewarded video ads (max 3/day) to earn extra entries.
                <br /><br />
                <strong>Push notifications</strong> via Firebase Cloud Messaging with an in-app notification center and deep linking. <strong>Real-time</strong> features powered by Socket.io.
                <br /><br />
                <strong>Dashboard</strong> with personal stats, achievements, and goals (first_participation, streak_master, accuracy_expert, etc.). Referral system with unique codes and QR sharing. Public/private pools with entry costs and limits, per-pool leaderboards, dark mode, and a full admin panel (user management, pool management, QR reloads, mass notifications, audit logs, and campaigns).
                <br /><br />
                Backend deployed on <strong>Railway</strong> following the same Clean Architecture principles.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {quinielaImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`w-16 h-16 rounded-lg object-cover cursor-pointer transition-all duration-300 ${
                      selectedQuinielaImage === index
                        ? 'ring-2 ring-blue-500 scale-105'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => setSelectedQuinielaImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* TECNM Prenacional */}
            <a
              href="https://prenacional-itj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project cursor-pointer"
              ref={tecnmRef}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project1.png" alt="TECNM Prenacional" />
              </div>
              <h2>Real-Time Tracking System for Sports Events - TECNM Prenacional</h2>
            </a>

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
