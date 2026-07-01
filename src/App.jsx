import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Lenis from "lenis";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AuroraBackground from "./components/AuroraBackground";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [playLandingReveal, setPlayLandingReveal] = useState(false);

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

    let rafId = 0;

    const animate = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      <div className={`app-shell ${isLoading ? "app-shell-hidden" : "app-shell-visible"}`}>
        <AuroraBackground />
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

        <motion.main
          className="relative z-10"
          initial={{ opacity: 0, y: 24, filter: "blur(9px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.section
            id="hero"
            className="section-block section-hero"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.22 }}
            transition={{ duration: 0.65 }}
          >
            <Hero />
          </motion.section>
          <motion.section
            id="about"
            className="section-block"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <About />
          </motion.section>
          <motion.section
            id="experience"
            className="section-block"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <ExperienceTimeline />
          </motion.section>
          <motion.section
            id="skills"
            className="section-block"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Skills />
          </motion.section>
          <motion.section
            id="projects"
            className="section-block"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Projects />
          </motion.section>
          <motion.section
            id="contact"
            className="section-block section-contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Contact />
          </motion.section>
        </motion.main>

        <Footer />
      </div>

      <Analytics />
    </>
  );
};

export default App;
