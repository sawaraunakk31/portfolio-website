import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket, FaServer } from "react-icons/fa";
import profilePhoto from "../assets/profile.jpg";

// Lazy-load the heavy 3D Lanyard so it doesn't block initial render
const Lanyard = React.lazy(() => import("./Lanyard"));

const focusBlocks = [
  {
    icon: <FaCode className="text-amber-100" />,
    title: "Frontend",
    text: "React and Next.js interfaces designed to feel premium, responsive, and fast.",
  },
  {
    icon: <FaServer className="text-amber-100" />,
    title: "Backend",
    text: "API-first architecture with Node.js, Express, and reliable data workflows.",
  },
  {
    icon: <FaRocket className="text-amber-100" />,
    title: "Execution",
    text: "High-speed delivery with a product mindset and strong engineering fundamentals.",
  },
];

const quickFacts = ["Problem Solving", "Data Science", "Software Engineering"];

const About = () => {
  return (
    <div className="section-container">
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <Suspense
            fallback={
              <div className="flex h-[420px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-200/30 border-t-amber-200" />
              </div>
            }
          >
            <Lanyard
              position={[0, 0, 12]}
              gravity={[0, -40, 0]}
              frontImage={profilePhoto}
              backImage={profilePhoto}
              lanyardImage={process.env.PUBLIC_URL + "/favicon.png"}
              lanyardWidth={1.5}
            />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.05] bg-white/[0.02] p-8 shadow-2xl sm:p-10"
        >
          {/* Subtle top inner glow for the text panel */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent" />
          
          <span className="eyebrow">About</span>
          <h2 className="gradient-title text-4xl font-semibold sm:text-5xl font-display">Simple, sharp, and effective</h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I build software that balances product quality and engineering discipline. My focus is
            modern full stack web development, clean architecture, and polished user experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {quickFacts.map((fact) => (
              <span
                key={fact}
                className="interactive-pill rounded-full border border-amber-200/40 bg-amber-200/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-100"
              >
                {fact}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {focusBlocks.map((block) => (
              <div key={block.title} className="glass-panel interactive-lift p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-xl">
                  {block.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-display">{block.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{block.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/resume-viewer.html"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-link mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-amber-100 transition-colors hover:text-white"
          >
            Review Full Resume
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
