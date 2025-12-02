import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-brand-primary"></span> About Me
            </h2>
            <div className="bg-brand-card border border-white/5 rounded-2xl p-8 md:p-12 hover:border-brand-primary/30 transition-all duration-500">
                <p className="text-brand-muted text-lg leading-relaxed mb-6">
                    I am a final-year Software Engineering student at <strong className="text-white">UET Taxila</strong>, passionate about bridging the gap between web development and artificial intelligence.
                </p>
                <p className="text-brand-muted text-lg leading-relaxed mb-6">
                    With a strong foundation in the <strong className="text-white">MERN Stack</strong>, I have expanded my expertise into <strong className="text-white">Machine Learning, NLP, and Deep Learning</strong>. My goal is to pursue a Master's degree in China to further specialize in intelligent systems.
                </p>
                
                <div className="mt-8">
                    <h3 className="text-white font-semibold mb-4">Research Interests</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-brand-primary">Deep Learning</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-brand-primary">NLP</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-brand-primary">Computer Vision</span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-brand-primary">Generative AI</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;