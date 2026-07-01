import React from "react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaBrain,
  FaCalculator,
  FaChartLine,
  FaCloud,
  FaCode,
  FaCogs,
  FaDatabase,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiRender,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Data Engineering and Analytics",
    summary: "Designing intelligent analytics systems from ingestion to insight delivery.",
    items: [
      { name: "Azure Synapse", icon: <FaCloud /> },
      { name: "Microsoft Fabric", icon: <FaCloud /> },
      { name: "Data Pipelines", icon: <FaProjectDiagram /> },
      { name: "Power BI", icon: <FaChartLine /> },
      { name: "Power BI Activator", icon: <FaBell /> },
      { name: "Power Query M", icon: <FaCogs /> },
      { name: "DAX Modeling", icon: <FaCalculator /> },
      { name: "Automation Workflows", icon: <FaCogs /> },
    ],
    accent: "from-amber-300/20 to-yellow-100/10",
  },
  {
    title: "Data Science and AI",
    summary: "Applying machine intelligence and analytics to solve real production problems.",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Statistical Analysis", icon: <FaChartLine /> },
      { name: "Benchmark Analytics", icon: <FaDatabase /> },
      { name: "LangChain", icon: <FaBrain /> },
      { name: "FAISS", icon: <FaDatabase /> },
      { name: "Forecasting and KPIs", icon: <FaCalculator /> },
    ],
    accent: "from-white/12 to-amber-200/8",
  },
  {
    title: "Full Stack Engineering",
    summary: "Building modern products with dependable backend systems and polished frontend UX.",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "APIs and Auth", icon: <FaServer /> },
    ],
    accent: "from-amber-300/18 to-white/8",
  },
  {
    title: "Programming and Tooling",
    summary: "Solid engineering fundamentals with practical deployment and collaboration workflows.",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <FaCode /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Postman and QA", icon: <FaTools /> },
    ],
    accent: "from-zinc-100/12 to-amber-200/8",
  },
];

const tickerTools = [
  "Azure Synapse",
  "Microsoft Fabric",
  "Power BI",
  "Power BI Activator",
  "Data Pipelines",
  "Power Query",
  "DAX",
  "Automation Workflows",
  "Python",
  "LangChain",
  "FAISS",
  "SQL",
  "React",
  "Node.js",
  "MongoDB",
  "Docker",
];

const Skills = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="eyebrow">Skills</span>
        <h2 className="gradient-title text-4xl font-semibold sm:text-5xl">Data and engineering stack</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          Built around analytics excellence, scalable architecture, and modern product delivery.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            className={`glass-panel interactive-lift bg-gradient-to-br ${group.accent} p-5 sm:p-6`}
          >
            <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{group.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="interactive-pill inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/45 px-3 py-2 text-sm text-zinc-100"
                >
                  <span className="text-base text-amber-100">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="glass-panel relative mt-7 overflow-hidden px-0 py-4">
        <div className="marquee-track pointer-events-none absolute left-0 top-1/2 flex w-[200%] -translate-y-1/2 gap-3 whitespace-nowrap">
          {[...tickerTools, ...tickerTools].map((tool, idx) => (
            <span
              key={`${tool}-${idx}`}
              className="tag-pill interactive-pill inline-flex border-amber-200/30 bg-amber-200/10 text-amber-50"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="h-8" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Skills;
