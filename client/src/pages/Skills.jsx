import React from 'react';

const Skills = () => {
  // 1. Define distinct icons and brand colors for each skill
  const cloudSkills = [
    { name: "Oracle Cloud (OCI)", icon: "fas fa-cloud", color: "text-red-500" },
    { name: "AWS Computing", icon: "fab fa-aws", color: "text-orange-500" },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-500" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "Linux", icon: "fab fa-linux", color: "text-yellow-100" },
    { name: "Oracle Database", icon: "fas fa-database", color: "text-red-500" },
    { name: "SQL", icon: "fas fa-table", color: "text-blue-400" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-500" }
  ];

  const aiSkills = [
    { name: "Generative AI", icon: "fas fa-robot", color: "text-purple-400" },
    { name: "Machine Learning", icon: "fas fa-network-wired", color: "text-blue-400" },
    { name: "Deep Learning", icon: "fas fa-brain", color: "text-pink-400" },
    { name: "NLP", icon: "fas fa-language", color: "text-indigo-400" },
    { name: "PyTorch", icon: "fas fa-fire", color: "text-orange-600" },
    { name: "TensorFlow", icon: "fas fa-cubes", color: "text-orange-400" },
    { name: "Scikit-learn", icon: "fas fa-chart-line", color: "text-yellow-500" },
    { name: "Pandas", icon: "fas fa-table", color: "text-blue-300" }
  ];

  const mernSkills = [
    { name: "React.js", icon: "fab fa-react", color: "text-cyan-400" },
    { name: "Node.js", icon: "fab fa-node", color: "text-green-500" },
    { name: "Express.js", icon: "fas fa-server", color: "text-gray-300" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-500" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400" },
    { name: "TailwindCSS", icon: "fas fa-wind", color: "text-teal-400" },
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "REST APIs", icon: "fas fa-exchange-alt", color: "text-blue-400" }
  ];

  const otherSkills = [
    { name: "Python", icon: "fab fa-python", color: "text-blue-500" },
    { name: "C++", icon: "fab fa-cuttlefish", color: "text-blue-600" },
    { name: "Java", icon: "fab fa-java", color: "text-red-500" },
    { name: "Dart", icon: "fas fa-bullseye", color: "text-cyan-500" }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">Technical Arsenal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Category 1: Cloud */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-brand-primary pl-4">Cloud, DevOps & Databases</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {cloudSkills.map((skill, index) => (
                            <div key={index} className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                                <i className={`${skill.icon} ${skill.color} text-xl w-6 text-center`}></i> 
                                <span className="text-gray-300 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category 2: AI */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-purple-500 pl-4">AI & Data Science</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {aiSkills.map((skill, index) => (
                            <div key={index} className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                                <i className={`${skill.icon} ${skill.color} text-xl w-6 text-center`}></i> 
                                <span className="text-gray-300 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category 3: MERN */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-green-500 pl-4">Full-Stack Web (MERN)</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {mernSkills.map((skill, index) => (
                            <div key={index} className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                                <i className={`${skill.icon} ${skill.color} text-xl w-6 text-center`}></i> 
                                <span className="text-gray-300 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category 4: Others */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-yellow-500 pl-4">Other Languages</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {otherSkills.map((skill, index) => (
                            <div key={index} className="p-4 bg-brand-card rounded-lg border border-white/5 flex items-center gap-3">
                                <i className={`${skill.icon} ${skill.color} text-xl w-6 text-center`}></i> 
                                <span className="text-gray-300 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Skills;