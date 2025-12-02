import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10"></div>

        <div className="text-center max-w-4xl animate-slide-up">
            <span className="text-brand-primary font-medium tracking-wide uppercase text-sm mb-4 block">Based in Pakistan</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                Full Stack <span className="gradient-text">MERN Developer</span> <br />
                & AI Practitioner.
            </h1>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                I am <span className="text-white">Muhammad Mudassar</span>. I build scalable web applications and intelligent AI systems that solve real-world problems.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href="#projects" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    View My Work
                </a>
                <a href="#contact" className="px-8 py-3.5 bg-transparent border border-gray-700 text-white font-semibold rounded-full hover:border-brand-primary hover:text-brand-primary transition-all">
                    Contact Me
                </a>
            </div>

            <div className="mt-12 flex gap-6 justify-center text-2xl text-brand-muted">
                <a href="https://github.com/mudassar-durvaish" target="_blank" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/muhammad-mudassar3" target="_blank" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:mudassardurvaish@gmail.com" className="hover:text-white transition-colors"><i className="fas fa-envelope"></i></a>
            </div>
        </div>
    </section>
  );
};

export default Hero;