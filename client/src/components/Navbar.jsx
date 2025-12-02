import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass top-0 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-display font-bold tracking-tighter">
                M Mudassar<span className="text-brand-primary">.</span>
            </a>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium text-brand-muted">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="px-5 py-2 rounded-full border border-gray-700 hover:border-brand-primary hover:text-brand-primary transition-all">Contact Me</a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;