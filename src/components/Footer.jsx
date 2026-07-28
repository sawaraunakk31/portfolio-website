import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/sawaraunakk31", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/raunak-sawa", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://instagram.com/raunak.sawa", label: "Instagram" },
  { icon: <FaEnvelope />, href: "mailto:sawaraunak31@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[-1] flex h-[45vh] min-h-[380px] flex-col justify-end border-t border-amber-200/20 bg-zinc-950 pb-8 overflow-hidden">
      
      {/* Massive Repeating Background Typography */}
      <div className="pointer-events-none absolute bottom-[-5%] left-0 w-full flex flex-col items-center select-none overflow-hidden mix-blend-screen">
        <h1 className="text-[16vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent font-display whitespace-nowrap opacity-[0.02]" style={{ WebkitTextStroke: '2px rgba(255,255,255,1)' }}>
          Raunak Sawa
        </h1>
        <h1 className="text-[16vw] font-black uppercase leading-[0.8] tracking-tighter text-white font-display whitespace-nowrap opacity-[0.04]">
          Raunak Sawa
        </h1>
        <h1 className="text-[16vw] font-black uppercase leading-[0.8] tracking-tighter text-white font-display whitespace-nowrap opacity-[0.1]">
          Raunak Sawa
        </h1>
      </div>

      <div className="section-container relative z-10 backdrop-blur-sm rounded-3xl p-4">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-300"
          >
            <p className="font-display text-2xl font-semibold text-white">Raunak Sawa</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-400">
              Copyright {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="interactive-pill inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-lg text-zinc-100 transition hover:border-amber-200/60 hover:text-amber-100 hover:bg-amber-200/10"
              >
                {social.icon}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="interactive-pill inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/45 bg-amber-200/10 text-lg text-amber-100 transition hover:bg-amber-200/20 ml-2"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
