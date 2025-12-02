import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Experience</h2>
            <div className="relative border-l border-gray-800 ml-4 md:ml-0 space-y-12">
                
                <div className="md:pl-12 relative group">
                    <span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-brand-primary group-hover:scale-125 transition-transform"></span>
                    <div className="bg-brand-card p-6 rounded-xl border border-white/5 hover:border-brand-primary/40 transition-all">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">MERN Stack Intern</h3>
                            <span className="text-sm text-brand-muted font-mono">June 2025 – July 2025</span>
                        </div>
                        <p className="text-brand-primary text-sm mb-4">NextPak Agile Solutions Pvt. Ltd.</p>
                        <ul className="list-disc list-inside text-brand-muted text-sm space-y-1">
                            <li>Developed secure backend systems using Node.js and Express.js.</li>
                            <li>Integrated MongoDB with scalable schemas.</li>
                            <li>Implemented JWT-based authentication.</li>
                        </ul>
                    </div>
                </div>

                <div className="md:pl-12 relative group">
                    <span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-brand-primary transition-colors"></span>
                    <div className="bg-brand-card p-6 rounded-xl border border-white/5 hover:border-brand-primary/40 transition-all">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
                            <span className="text-sm text-brand-muted font-mono">June 2024 – July 2024</span>
                        </div>
                        <p className="text-brand-primary text-sm mb-4">NextPak Agile Solutions Pvt. Ltd.</p>
                        <p className="text-brand-muted text-sm">Improved UI/UX performance by 30% using React and Tailwind.</p>
                    </div>
                </div>

                 <div className="md:pl-12 relative group">
                    <span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-brand-primary transition-colors"></span>
                    <div className="bg-brand-card p-6 rounded-xl border border-white/5 hover:border-brand-primary/40 transition-all">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">Senior Executive (Core Ops)</h3>
                            <span className="text-sm text-brand-muted font-mono">2025 – 2026</span>
                        </div>
                        <p className="text-brand-primary text-sm mb-4">MLSA — Microsoft Learn Student Ambassadors</p>
                        <p className="text-brand-muted text-sm">Leading technical workshops and community operations at UET Taxila.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Experience;