import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const certData = [
  {
    title: "Meta Front-End Developer",
    provider: "Meta (via Coursera & Credly)",
    link: "https://www.credly.com/badges/b392c39d-b8c0-44a5-aca3-9042e196cef7/public_url"
  },
  {
    title: "Generative AI Application Developer (Top Performance)",
    provider: "Pakistan Engineering Council (PEC)",
    link: "https://quiz.ideagist.com/ideagist-certificate?cert_hash=fb1531bc732f027b" // UPDATED HERE
  },
  {
    title: "Oracle Certified Foundations Associate",
    provider: "Oracle University",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DDB95AF5D6D476B3354B21F9FDFA6EAFECF6D715F4CE5AB3957A8426B3ADA5C2"
  },
  {
    title: "Oracle DevOps Professional 2025",
    provider: "Oracle University",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DDB95AF5D6D476B3354B21F9FDFA6EAF6CA996DD9013608311ADE2391832497C"
  },
  {
    title: "AI For Everyone",
    provider: "DeepLearning.AI",
    link: "https://coursera.org/share/539c8c812a20aac4733a442092127afe"
  },
  {
    title: "Postman API Fundamentals",
    provider: "Canvas Credentials",
    link: "https://badgr.com/public/assertions/U7AxwfwQSji9M-9emibuDQ"
  },
  {
    title: "AI Agents and Agentic AI",
    provider: "Vanderbilt University",
    link: "https://coursera.org/share/3057e65e382f3f192ceb2dc90286544d"
  },
  {
    title: "Career Essentials in Software Dev",
    provider: "Microsoft & LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/eb616da4245a510c2da75321c159a6871a0db908e9b30809bf65e413c9de8aa5"
  },
  {
    title: "Programming Foundations: Beyond Fundamentals",
    provider: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/bc828c6fc0c7b48c3c2620a96f7c19bfc40d86f90092d851ae2cb5df3a2532f5"
  },
  {
    title: "Intro to Career Skills in Software Dev",
    provider: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/471737614887b90da3c07cdf62cb93f176d9ec04e4508f3157c87283287d428b"
  },
  {
    title: "Getting Started with Cisco Packet Tracer",
    provider: "Cisco Networking Academy",
    link: ""
  }
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Show first 6 initially, or all if toggled
  const displayedCerts = showAll ? certData : certData.slice(0, 6);

  return (
    <div className="py-24 bg-background px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Certifications & <span className="text-primary">Awards</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout"> 
            {displayedCerts.map((cert, index) => (
              <motion.div
                layout
                key={cert.title} // Changed key to title for better animation tracking
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-card p-6 rounded-xl border border-gray-800 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <FaAward className="text-2xl text-textMuted group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-sm text-textMuted">{cert.provider}</p>
                </div>
                
                {cert.link ? (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline opacity-80 hover:opacity-100"
                  >
                    Verify Credential <FaExternalLinkAlt className="text-xs" />
                  </a>
                ) : (
                   <span className="mt-6 inline-block text-sm text-gray-600 cursor-not-allowed">
                     Credential Offline
                   </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More / Show Less Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
          >
            {showAll ? 'Show Less' : `See More (${certData.length - 6} more)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;