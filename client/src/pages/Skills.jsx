import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">Technical Arsenal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-brand-primary pl-4">Web Development</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fab fa-react text-brand-primary text-2xl"></i> <span className="text-gray-300">React.js</span>
                        </div>
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fab fa-node text-green-500 text-2xl"></i> <span className="text-gray-300">Node.js</span>
                        </div>
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fas fa-database text-green-400 text-2xl"></i> <span className="text-gray-300">MongoDB</span>
                        </div>
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fab fa-js text-yellow-400 text-2xl"></i> <span className="text-gray-300">Express.js</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-purple-500 pl-4">AI & Data Science</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fab fa-python text-blue-400 text-2xl"></i> <span className="text-gray-300">Python</span>
                        </div>
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fas fa-brain text-purple-400 text-2xl"></i> <span className="text-gray-300">PyTorch</span>
                        </div>
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fas fa-robot text-orange-400 text-2xl"></i> <span className="text-gray-300">NLP / GenAI</span>
                        </div>
                        <div className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                            <i className="fas fa-chart-line text-blue-200 text-2xl"></i> <span className="text-gray-300">Pandas</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;