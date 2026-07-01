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
    <footer className="relative z-20 border-t border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="section-container py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-300"
          >
            <p className="font-display text-lg font-semibold text-white">Raunak Sawa</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-400">
              Copyright {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="interactive-pill inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-zinc-100 transition hover:border-amber-200/60 hover:text-amber-100"
              >
                {social.icon}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="interactive-pill inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/45 bg-amber-200/10 text-amber-100 transition hover:bg-amber-200/20"
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
