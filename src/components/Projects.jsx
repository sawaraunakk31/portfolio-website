import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import futurepreneursImg from "../assets/projects/futurepreneurs.jpg";
import medibotImg from "../assets/projects/medibot.jpg";
import esummitImg from "../assets/projects/esummit.jpg";
import newsresearchImg from "../assets/projects/news_research_tool.jpg";

const projects = [
  {
    title: "FuturePreneurs",
    image: futurepreneursImg,
    summary:
      "Registration and quiz platform used by 2200+ students in a university-scale business simulation event.",
    tools: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    impact: "2200+ students onboarded",
    live: "https://future-preneurs-24-eta.vercel.app/",
    github: "https://github.com/sawaraunakk31/FuturePreneurs-24",
    accent: "from-amber-400/55 via-amber-100/16 to-transparent",
  },
  {
    title: "MediBot",
    image: medibotImg,
    summary:
      "AI-driven medical support assistant with authentication and dashboard workflows for better patient support.",
    tools: ["React", "FastAPI", "LangChain", "MongoDB"],
    impact: "AI triage and support flow",
    live: "",
    github: "https://github.com/sawaraunakk31/MediBot",
    accent: "from-white/45 via-zinc-100/16 to-transparent",
  },
  {
    title: "E-Summit",
    image: esummitImg,
    summary:
      "Dynamic digital event experience for VIT's flagship entrepreneurship summit with multi-page interactions.",
    tools: ["React", "Node.js", "MongoDB", "Next.js"],
    impact: "Event-first UX for participants",
    live: "https://esummit25-wgv2.vercel.app/",
    github: "https://github.com/sawaraunakk31/Esummit25",
    accent: "from-amber-300/50 via-yellow-100/20 to-transparent",
  },
  {
    title: "News Research LLM Tool",
    image: newsresearchImg,
    summary:
      "Research assistant that parses articles and summarizes insights using language models and retrieval flows.",
    tools: ["Python", "LangChain", "Streamlit"],
    impact: "Faster insight extraction",
    live: "",
    github: "https://github.com/sawaraunakk31/NewsResearch-LLM-Tool",
    accent: "from-zinc-200/45 via-zinc-400/20 to-transparent",
  },
];

const Projects = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="eyebrow">Projects</span>
        <h2 className="gradient-title text-4xl font-semibold sm:text-5xl">Selected builds</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          Real products designed for event scale, AI workflows, and smooth user interaction.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="min-w-0"
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              glareBorderRadius="28px"
              perspective={1100}
              scale={1}
              transitionSpeed={1800}
              className="h-full overflow-hidden rounded-[1.75rem]"
            >
              <article className="glass-panel interactive-lift group h-full w-full min-w-0 overflow-hidden p-5 sm:p-6">
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${project.accent}`} />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-amber-100">{project.impact}</p>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-pill inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] text-zinc-100 transition hover:border-amber-200/60 hover:text-amber-100"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub />
                  </a>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag-pill interactive-pill">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-link inline-flex items-center gap-2 text-sm font-semibold text-amber-100 transition hover:text-white"
                    >
                      Open Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  ) : (
                    <span className="text-xs uppercase tracking-[0.15em] text-zinc-400">Repository only</span>
                  )}
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;