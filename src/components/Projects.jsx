import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa';
import futurepreneursImg from '../assets/projects/futurepreneurs.jpg';
import medibotImg from '../assets/projects/medibot.jpg';
import esummitImg from '../assets/projects/esummit.jpg';
import newsresearchImg from '../assets/projects/news_research_tool.jpg';

const projects = [
  {
    title: 'FuturePreneurs',
    image: futurepreneursImg,
    description: 'Registration & quiz platform for 2200+ students. Built for a university-level business simulation competition.',
    tools: ['Next.js', 'MongoDB', 'Node.js','Tailwind CSS'],
    link: 'https://future-preneurs-24-eta.vercel.app/',
    github: 'https://github.com/sawaraunakk31/FuturePreneurs-24',
  },
  {
    title: 'MediBot',
    image: medibotImg,
    description: 'AI-based medical chatbot with Google login and patient support dashboard.',
    tools: ['React', 'FastAPI', 'Langchain', 'MongoDB'],
    github: 'https://github.com/sawaraunakk31/MediBot',
  },
  {
    title: 'E-Summit',
    image: esummitImg,
    description: 'Dynamic event platform for VIT’s flagship entrepreneurship summit.',
    tools: ['React', 'Node.js', 'MongoDB', 'Next.js'],
    link: 'https://esummit25-wgv2.vercel.app/',
    github: 'https://github.com/sawaraunakk31/Esummit25',
  },
  {
    title: 'News Research LLM Tool',
    image: newsresearchImg,
    description: 'Tool to analyze & summarize news using large language models.',
    tools: ['Python', 'Langchain', 'Streamlit UI'],
    github: 'https://github.com/sawaraunakk31/NewsResearch-LLM-Tool',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-4 py-20 flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {/* Blobs Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-cyan-400 text-center">My Projects</h2>

      <div className="w-full flex flex-wrap justify-center gap-6 px-2 md:px-10 xl:gap-8">
        {projects.map((project, index) => (
          <Tilt key={index} glareEnable={true} glareMaxOpacity={0.3} scale={1.02}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0a0a0a]/80 p-4 rounded-xl border border-cyan-500 w-[280px] shadow-[0_0_20px_2px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.5)] transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div className="w-full h-48 bg-black flex items-center justify-center overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              <p className="text-sm mt-2 text-gray-400">
                <span className="text-cyan-400 font-semibold">Tools:</span> {project.tools.join(', ')}
              </p>
              <div className="mt-4 flex items-center justify-between">
                {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-cyan-400 hover:underline"
    >
      Live Site ↗
    </a>
  )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-white"
                  aria-label="GitHub Repository"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;