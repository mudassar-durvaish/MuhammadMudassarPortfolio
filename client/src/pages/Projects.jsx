import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <i className="fas fa-tooth text-4xl text-brand-muted group-hover:text-brand-primary transition-colors"></i>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Dental Cavity Detection</h3>
                        <p className="text-brand-muted text-sm mb-4 line-clamp-3">
                            A Deep Learning medical imaging system using U-Net CNN for cavity identification with high Dice coefficient accuracy.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">Python</span>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">PyTorch</span>
                        </div>
                        <a href="https://github.com/mudassar-durvaish/Cavity-Detection-System" className="text-sm font-semibold text-brand-primary hover:underline">View Source -&gt;</a>
                    </div>
                </div>

                <div className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <i className="fas fa-code text-4xl text-brand-muted group-hover:text-brand-primary transition-colors"></i>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">AI Code Review Editor</h3>
                        <p className="text-brand-muted text-sm mb-4 line-clamp-3">
                            (Final Year Project) A MERN based editor that uses ML to analyze Python code quality automatically.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">MERN</span>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">NLP</span>
                        </div>
                        <a href="#" className="text-sm font-semibold text-brand-primary hover:underline">Coming Soon -&gt;</a>
                    </div>
                </div>

                <div className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <i className="fas fa-utensils text-4xl text-brand-muted group-hover:text-brand-primary transition-colors"></i>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Restaurant App</h3>
                        <p className="text-brand-muted text-sm mb-4 line-clamp-3">
                            Full-stack reservation system enabling real-time table booking and user authentication.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">React</span>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-blue-300">Node</span>
                        </div>
                        <a href="https://github.com/mudassar-durvaish/Restaurant-Application" className="text-sm font-semibold text-brand-primary hover:underline">View Source -&gt;</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Projects;