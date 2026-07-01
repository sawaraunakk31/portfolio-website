import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaFilePdf, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-36% 0px -52% 0px",
        threshold: 0.01,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[110]">
      <div className="mx-auto mt-3 w-[95%] max-w-6xl rounded-2xl border border-white/10 bg-zinc-950/75 shadow-[0_16px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <nav className="flex items-center justify-between px-5 py-3 sm:px-7">
          <a href="#hero" className="interactive-pill flex items-end gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-white">Raunak</span>
            <span className="font-signature text-xl text-amber-300">Sawa</span>
          </a>

          <ul className="hidden items-center gap-4 lg:gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = link.id === activeId;

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative text-sm font-medium tracking-wide transition ${
                      isActive ? "text-amber-100" : "text-zinc-200 hover:text-amber-100"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-amber-200 to-yellow-100 transition-all ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume-viewer.html"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-pill inline-flex items-center gap-2 rounded-full border border-amber-200/45 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-100 transition hover:bg-amber-200/20"
            >
              <FaFilePdf />
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="interactive-pill rounded-full border border-white/20 p-2 text-zinc-100 transition hover:border-amber-200/70 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 w-[95%] max-w-6xl rounded-2xl border border-white/10 bg-zinc-950/95 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="interactive-lift block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-200/55 hover:text-amber-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="/resume-viewer.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="interactive-pill mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-200/45 bg-amber-200/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-amber-100"
            >
              <FaFilePdf />
              Open Latest Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
