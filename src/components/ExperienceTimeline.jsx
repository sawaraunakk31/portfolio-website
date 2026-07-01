import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaBriefcase, FaBuilding, FaGraduationCap } from "react-icons/fa";

const timelineItems = [
  {
    role: "B.Tech, Computer Science and Engineering",
    org: "VIT Vellore",
    period: "Aug 2023 - Present",
    icon: <FaGraduationCap />,
    highlights: [
      "Focused on systems, product engineering, and practical problem solving.",
      "Built strong foundations in full stack development and analytics.",
    ],
  },
  {
    role: "Senior Technical Executive",
    org: "Entrepreneurship Cell, VIT Vellore",
    period: "Jan 2024 - Mar 2025",
    icon: <FaBriefcase />,
    highlights: [
      "Led flagship events with 6000+ student participation.",
      "Managed technical coordination and end-to-end event execution.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Bluestock Fintech",
    period: "Sep 2025 - Nov 2025",
    icon: <FaBuilding />,
    highlights: [
      "Building fintech product modules and workflow-centric internal tools.",
      "Improving frontend-backend integration for production user journeys.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Microsoft Health & Life Sciences",
    period: "May 2026 - Present",
    icon: <FaBriefcase />,
    highlights: [
      "Built Power BI benchmarking analytics for Dragon Copilot stakeholder reviews.",
      "Automated funnel modeling and replaced repetitive manual spreadsheet analysis.",
    ],
  },
];

const ExperienceTimeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.72", "end 0.24"],
  });

  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  return (
    <div className="section-container" ref={timelineRef}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="eyebrow">Experience</span>
        <h2 className="gradient-title text-4xl font-semibold sm:text-5xl">Timeline of impact</h2>
        <p className="mt-4 text-base text-zinc-300 sm:text-lg">
          Key milestones from leadership, engineering, analytics, and academic journey.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-12 max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-white/0 via-amber-100/30 to-white/0 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-amber-200 via-yellow-200 to-amber-300 shadow-[0_0_14px_rgba(212,175,55,0.6)] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.org}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className={`relative pl-12 md:w-[calc(50%-1.6rem)] md:pl-0 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <span
                className={`absolute left-0 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-200/50 bg-zinc-900 text-amber-100 shadow-[0_0_18px_rgba(212,175,55,0.3)] md:top-6 ${
                  index % 2 === 0 ? "md:left-auto md:right-[-2.65rem]" : "md:left-[-2.65rem] md:right-auto"
                }`}
              >
                {item.icon}
              </span>

              <div className="glass-panel interactive-lift bg-zinc-950/70 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100/90">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="text-sm uppercase tracking-[0.14em] text-zinc-300">{item.org}</p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
