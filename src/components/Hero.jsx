import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaAward,
  FaChartLine,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";

const roles = [
  "AI systems and data science",
  "Full stack product engineering",
  "Human-centered interface design",
  "Performance and architecture",
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/sawaraunakk31", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/raunak-sawa", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com/raunak.sawa", label: "Instagram" },
  { icon: <FaEnvelope />, href: "mailto:sawaraunak31@gmail.com", label: "Email" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    const typingDelay = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = activeRole.slice(0, typedRole.length + 1);
        setTypedRole(next);

        if (next === activeRole) {
          setTimeout(() => setDeleting(true), 700);
        }
      } else {
        const next = activeRole.slice(0, typedRole.length - 1);
        setTypedRole(next);

        if (next.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [deleting, roleIndex, typedRole]);

  return (
    <div className="section-container min-h-screen pt-28 sm:pt-32">
      <div className="grid items-center gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="eyebrow">Open to high-impact product challenges</span>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Software built for speed, clarity, and real-world impact.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I build future-ready products across data science and full stack engineering, focused on
            real outcomes, smooth interfaces, and resilient systems.
          </p>

          <div className="mt-5 h-8 font-mono text-sm uppercase tracking-[0.2em] text-amber-100 sm:text-base">
            {typedRole}
            <span className="ml-1 inline-block text-yellow-100">|</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary interactive-pill">
              <FaRocket />
              View Projects
            </a>

            <a
              href="/resume-viewer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary interactive-pill"
            >
              <FaFilePdf />
              Open Latest Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="animate-pulse-ring interactive-pill inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-lg text-zinc-100 transition hover:border-amber-200/60 hover:text-amber-100"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="relative"
        >
          <div className="glass-panel interactive-lift relative overflow-hidden p-5 sm:p-7">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-200/18 blur-3xl" />
            <div className="absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber-100">Current Focus</p>

            <h3 className="mt-3 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Building software that blends analytics, full stack speed, and clean product execution.
            </h3>

            <div className="mt-6 space-y-3">
              {[
                {
                  icon: <FaChartLine className="mt-1 shrink-0 text-amber-100" />,
                  text: "Power BI storytelling and benchmark intelligence for enterprise decisions.",
                },
                {
                  icon: <FaRocket className="mt-1 shrink-0 text-amber-100" />,
                  text: "High-performance web apps with React, Next.js, and API-first architecture.",
                },
                {
                  icon: <FaAward className="mt-1 shrink-0 text-amber-100" />,
                  text: "Top 1% academic track record and event leadership at VIT Vellore.",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="interactive-lift flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-200"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -bottom-6 right-2 rounded-2xl border border-amber-200/35 bg-zinc-950/90 px-4 py-3 text-xs uppercase tracking-[0.16em] text-amber-100 shadow-[0_10px_30px_rgba(212,175,55,0.2)] sm:right-5"
            animate={{ y: [0, -8, 0] }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Premium Product Engineering
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="interactive-pill mx-auto mt-12 flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-200"
        animate={{ y: [0, 6, 0] }}
        whileHover={{ y: -1 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll to explore
        <FaArrowDown />
      </motion.a>
    </div>
  );
};

export default Hero;
