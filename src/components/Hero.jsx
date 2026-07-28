import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import designerImg from "../assets/Designer.png";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/sawaraunakk31", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/raunak-sawa", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com/raunak.sawa", label: "Instagram" },
  { icon: <FaEnvelope />, href: "mailto:sawaraunak31@gmail.com", label: "Email" },
];

const Hero = () => {
  const [canvasSize, setCanvasSize] = useState({ w: 480, h: 580 });
  const heroRef = useRef(null);

  // Responsive canvas sizing
  const updateCanvasSize = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (vw >= 1280) {
      setCanvasSize({ w: 460, h: 560 });
    } else if (vw >= 1024) {
      setCanvasSize({ w: 400, h: 480 });
    } else if (vw >= 768) {
      setCanvasSize({ w: 340, h: 400 });
    } else {
      // On mobile, make it wider but shorter
      setCanvasSize({ w: Math.min(vw - 40, 360), h: Math.min(vh * 0.45, 400) });
    }
  }, []);

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [updateCanvasSize]);

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.4 + i * 0.06,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const nameFirst = "RAUNAK";
  const nameLast = "SAWA.";

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-amber-500/[0.06] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-yellow-300/[0.04] blur-[150px]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-amber-200/[0.03] blur-[100px]" />
      </div>

      {/* Main content grid */}
      <div className="section-container relative z-10 flex min-h-screen flex-col justify-center pb-16 pt-20 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4 xl:gap-8">
          {/* LEFT — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-amber-300"
            >
              Software Engineer and Full Stack Developer
            </motion.p>

            {/* Sub tags */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500"
            >
              Data Science &nbsp;•&nbsp; Full Stack &nbsp;•&nbsp; Product Engineering
            </motion.p>

            {/* BIG NAME */}
            <div className="mt-6">
              <div className="hero-name-line overflow-hidden">
                {nameFirst.split("").map((char, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-name-char inline-block text-white"
                    style={{ perspective: "600px" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="hero-name-line overflow-hidden">
                {nameLast.split("").map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + nameFirst.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-name-char hero-name-accent inline-block"
                    style={{ perspective: "600px" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Status pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                <span className="inline-block h-2 w-2 rounded-sm bg-amber-400" />
                Building AI & Full Stack Products
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                <span className="inline-block h-2 w-2 rounded-sm bg-amber-400" />
                Open to High-Impact Challenges
              </span>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="hero-social-icon interactive-pill"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Pixelated Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="hero-canvas-wrapper relative">
              {/* Glow behind canvas */}
              <div className="absolute -inset-8 z-0 rounded-3xl bg-gradient-to-br from-amber-500/[0.08] via-transparent to-yellow-200/[0.05] blur-2xl" />
              <PixelatedCanvas
                src={designerImg}
                width={canvasSize.w}
                height={canvasSize.h}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                backgroundColor="#070707"
                dropoutStrength={0.35}
                interactive
                distortionStrength={3}
                distortionRadius={80}
                distortionMode="swirl"
                followSpeed={0.2}
                jitterStrength={4}
                jitterSpeed={4}
                sampleAverage
                tintColor="#d4af37"
                tintStrength={0.12}
                className="relative z-10 rounded-xl border border-white/[0.06] shadow-[0_20px_80px_rgba(212,175,55,0.08)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="interactive-pill mx-auto mt-8 flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-400 lg:mt-4"
          animate={{ y: [0, 6, 0] }}
          whileHover={{ y: -1 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
          <FaArrowDown />
        </motion.a>
      </div>

    </div>
  );
};

export default Hero;
