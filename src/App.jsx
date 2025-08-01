import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="bg-black text-white font-space-grotesk h-screen flex flex-col">
          <CustomCursor />
          <Navbar />

          {/* Scrollable snapping content */}
          <div className="flex-1 overflow-y-auto scroll-smooth snap-y snap-mandatory scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent">
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#111',
                  color: '#0ff',
                  border: '1px solid #0ff',
                  padding: '12px 16px',
                  fontFamily: '"Space Grotesk", sans-serif',
                  boxShadow: '0 0 20px rgba(0,255,255,0.2)',
                },
                success: {
                  iconTheme: {
                    primary: '#0ff',
                    secondary: '#000',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#f00',
                    secondary: '#000',
                  },
                },
              }}
            />
            <main>
              <section id="hero" className="snap-start h-screen">
                <Hero />
              </section>
              <section id="about" className="snap-center h-screen">
                <About />
              </section>
              <section id="skills" className="snap-center h-screen">
                <Skills />
              </section>
              <section id="projects" className="snap-center min-h-screen">
                <Projects />
              </section>
              <section id="contact" className="snap-start">
                <Contact />
              </section>
              <section id="footer" className="snap-end">
                <Footer />
              </section>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
