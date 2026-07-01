import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket, FaServer } from "react-icons/fa";
import LanyardCard from "./LanyardCard";
import profilePhoto from "../assets/profile.jpg";

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

const quickFacts = ["VIT Vellore", "Data Science", "Product Engineering", "Fintech + Healthcare"];

const About = () => {
  return (
    <div className="section-container">
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -4 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <LanyardCard photoSrc={profilePhoto} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">About</span>
          <h2 className="gradient-title text-4xl font-semibold sm:text-5xl">Simple, sharp, and effective</h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I build software that balances product quality and engineering discipline. My focus is
            modern full stack web development, clean architecture, and polished user experience.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {quickFacts.map((fact) => (
              <span
                key={fact}
                className="interactive-pill rounded-full border border-amber-200/40 bg-amber-200/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-amber-100"
              >
                {fact}
              </span>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {focusBlocks.map((block) => (
              <div key={block.title} className="glass-panel interactive-lift p-4">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-base">
                  {block.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{block.text}</p>
              </div>
            ))}
          </div>

          <a
            href="/resume-viewer.html"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-link mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-amber-100"
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
