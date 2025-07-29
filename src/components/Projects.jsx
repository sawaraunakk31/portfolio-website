import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'FuturePreneurs 10.0',
    description: 'Built a registration portal and quiz platform for 2200+ students using Next.js and MongoDB.',
    tech: ['Next.js', 'MongoDB', 'HTML', 'CSS'],
    link: 'https://github.com/sawaraunakk31/FuturePreneurs-24',
  },
  {
    title: 'MediBot AI',
    description: 'Medical chatbot powered by FastAPI + LangChain + HuggingFace, with a React + Express frontend.',
    tech: ['React', 'Express', 'MongoDB', 'LangChain'],
    link: 'https://medi-bot-theta.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio made with React, Tailwind CSS, and Framer Motion for seamless animation.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-space-grotesk"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} glareEnable={true} glareMaxOpacity={0.25} transitionSpeed={1000}>
            <motion.div
              className="bg-[#111] rounded-2xl p-6 shadow-xl border border-white/10 hover:shadow-cyan-400/30 transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-sm text-white/70 mb-4">
                {project.tech.map((tech, i) => (
                  <li key={i} className="bg-cyan-900 px-2 py-1 rounded-md text-xs">
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-medium text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
