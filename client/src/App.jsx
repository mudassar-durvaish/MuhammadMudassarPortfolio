import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

function App() {
  useEffect(() => {
    // Track visit when the app loads
    const trackVisit = async () => {
      try {
        await axios.post('http://localhost:5000/api/visit');
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };
    trackVisit();
  }, []);

  return (
    <div className="bg-brand-dark text-white font-sans antialiased selection:bg-brand-primary selection:text-black">
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      <footer className="py-8 bg-black text-center border-t border-gray-900">
        <p className="text-brand-muted text-sm">© 2025 Muhammad Mudassar.</p>
      </footer>
    </div>
  );
}

export default App;