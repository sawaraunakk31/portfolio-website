import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white font-space-grotesk scroll-smooth">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Page Sections */}
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent">
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="skills" className="snap-center">
          <Skills />
        </section>

        <section id="projects" className="snap-center">
          <Projects />
        </section>

        <section id="contact" className="snap-end">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
