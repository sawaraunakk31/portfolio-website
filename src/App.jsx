import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Skills, { tickerTools } from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AuroraBackground from "./components/AuroraBackground";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [playLandingReveal, setPlayLandingReveal] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      return undefined;
    }

    setPlayLandingReveal(true);
    const timeoutId = setTimeout(() => setPlayLandingReveal(false), 1400);

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.05,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading || !mainRef.current) return;

    const ctx = gsap.context(() => {
      const stackSections = gsap.utils.toArray(".section-stack");

      stackSections.forEach((section, i) => {
        const isLast = i === stackSections.length - 1;

        // Pin the current section
        if (!isLast) {
          ScrollTrigger.create({
            trigger: section,
            // If section is taller than viewport, wait until user reaches its bottom
            // If it's shorter, pin it as soon as it reaches the top
            start: () => (section.offsetHeight > window.innerHeight ? "bottom bottom" : "top top"),
            pin: true,
            pinSpacing: false, // The next section will overlap it
          });
        }
      });

      // Recalculate triggers in case fonts/images load
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }, mainRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      <div className={`app-shell ${isLoading ? "app-shell-hidden" : "app-shell-visible"}`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <AnimatePresence>
          {playLandingReveal && (
            <motion.div
              initial={{ opacity: 0.95 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="pointer-events-none fixed inset-0 z-[115] bg-[radial-gradient(circle_at_50%_36%,rgba(255,243,209,0.34),transparent_42%),linear-gradient(180deg,rgba(12,12,12,0.7),transparent)]"
            />
          )}
        </AnimatePresence>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4200,
            style: {
              background: "rgba(9, 9, 9, 0.95)",
              color: "#f8f5ef",
              border: "1px solid rgba(212, 175, 55, 0.45)",
              boxShadow: "0 12px 35px rgba(212, 175, 55, 0.2)",
              borderRadius: "14px",
              padding: "12px 16px",
              fontFamily: '"Outfit Variable", "Outfit", sans-serif',
            },
          }}
        />

        <main ref={mainRef} className="relative z-10 bg-zinc-950">
          <section
            id="hero"
            className="section-block section-hero section-hero-base relative overflow-hidden"
          >
            <AuroraBackground />
            <Hero />
          </section>

          {/* Marquee Ticker between Hero and About */}
          <div className="relative border-y border-amber-200/20 bg-amber-900/10 py-6 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-950 to-transparent sm:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-950 to-transparent sm:w-32" />

            <div className="marquee-track pointer-events-none flex w-[200%] gap-4 whitespace-nowrap px-4">
              {[...tickerTools, ...tickerTools].map((tool, idx) => (
                <span
                  key={`${tool}-${idx}`}
                  className="tag-pill interactive-pill inline-flex border-amber-200/40 bg-amber-200/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-amber-50"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Stacking sections using native CSS position: sticky */}
          <section id="about" className="section-block section-stack">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <About />
            </motion.div>
          </section>

          <section id="experience" className="section-block section-stack">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <ExperienceTimeline />
            </motion.div>
          </section>

          <section id="skills" className="section-block section-stack">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Skills />
            </motion.div>
          </section>

          <section id="projects" className="section-block section-stack">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Projects />
            </motion.div>
          </section>

          <section id="contact" className="section-block section-contact section-stack">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Contact />
            </motion.div>
          </section>
        </main>

        {/* Spacer to reserve scroll height for the fixed reveal footer */}
        <div className="h-[40vh] min-h-[300px] w-full" />
        <Footer />
      </div>

      <Analytics />
    </>
  );
};

export default App;
