import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <i className="fas fa-code text-4xl text-brand-muted group-hover:text-brand-primary transition-colors"></i>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">AI-Powered Python Code Review Editor</h3>
                        <p className="text-brand-muted text-sm mb-4 line-clamp-4">
                            An intelligent web-based Python code editor that integrates Machine Learning and real-time collaboration to enhance code quality. Detects syntax errors, logic issues, and PEP8 violations using a hybrid ML model while providing contextual Python help via a lightweight LLM.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['MERN', 'ML', 'JWT', 'Socket.IO'].map(tag => (
                                <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">{tag}</span>
                            ))}
                        </div>
                        <a href="#" className="text-sm font-semibold text-brand-primary hover:underline">Coming Soon -&gt;</a>
                    </div>
                </div>

                <div className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <i className="fas fa-tooth text-4xl text-brand-muted group-hover:text-brand-primary transition-colors"></i>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Dental Cavity Detection System</h3>
                        <p className="text-brand-muted text-sm mb-4 line-clamp-4">
                            A deep learning medical imaging system utilizing advanced image segmentation to identify dental cavities with high accuracy.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Python', 'PyTorch', 'Torch Vision'].map(tag => (
                                <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">{tag}</span>
                            ))}
                        </div>
                        <a href="https://github.com/mudassar-durvaish/Cavity-Detection-System" className="text-sm font-semibold text-brand-primary hover:underline">View Source -&gt;</a>
                    </div>
                </div>

                <div className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <i className="fas fa-school text-4xl text-brand-muted group-hover:text-brand-primary transition-colors"></i>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Enterprise School Management System</h3>
                        <p className="text-brand-muted text-sm mb-4 line-clamp-4">
                            Developed an internal administrative application featuring complex relational data schemas for operational reporting and enterprise data tracking.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Java', 'JavaFX', 'Oracle DB'].map(tag => (
                                <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">{tag}</span>
                            ))}
                        </div>
                        <a href="https://github.com/mudassar-durvaish/School-Management-System" className="text-sm font-semibold text-brand-primary hover:underline">View Source -&gt;</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Projects;