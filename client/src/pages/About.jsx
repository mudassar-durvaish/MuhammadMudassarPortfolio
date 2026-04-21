import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-brand-primary"></span> Driving Commercial Value Through Code
            </h2>
            
            <div className="bg-brand-card border border-white/5 rounded-2xl p-8 md:p-12 hover:border-brand-primary/30 transition-all duration-500 flex flex-col md:flex-row gap-10 items-center">
                
                <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-white/10 group shadow-lg">
                        <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img src="/profile.png" alt="Muhammad Mudassar" className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-500" />
                    </div>
                </div>

                <div className="w-full md:w-2/3 order-2 md:order-1">
                    <p className="text-brand-muted text-lg leading-relaxed mb-6">
                        I am a Bachelor of Science in Software Engineering student at <strong className="text-white">UET Taxila</strong> (CGPA: 3.44/4.00). I am passionate about leveraging data-driven strategies and modern web technologies to build high-performing, user-centric applications from the ground up.
                    </p>
                    <p className="text-brand-muted text-lg leading-relaxed mb-6">
                        My expertise spans across full-stack web development, Data Science, and Cloud Computing. Whether I am integrating advanced Artificial Intelligence and Machine Learning models to extract insights or deploying robust cloud-based solutions, my focus is always on creating scalable architectures that deliver operational efficiency.
                    </p>
                </div>

            </div>
        </div>
    </section>
  );
};

export default About;