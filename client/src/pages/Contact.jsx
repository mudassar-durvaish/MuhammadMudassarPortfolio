import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false); // New state to track error type

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsError(false);
    setStatus('Sending...');
    
    try {
      // Pointing to your local backend (change URL when deploying)
      await axios.post('https://muhammadmudassarportfoliobackend.onrender.com/api/contact/send', {
          name: formData.name,
          email: formData.email,
          message: formData.message
      });

      setStatus('Message Sent! Thank you for reaching out.');
      setIsError(false);

      // Reset form after 3 seconds
      setTimeout(() => {
          setStatus('');
          setFormData({ name: '', email: '', message: '' });
          setIsSending(false);
      }, 2000);

    } catch (error) {
      console.error(error);
      setIsSending(false);
      setIsError(true);

      // CHECK FOR 429 STATUS (Rate Limit)
      if (error.response && error.response.status === 429) {
        setStatus('You have sent 3 emails in 15 minutes. Please wait before sending another.');
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-brand-dark relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Let's Work Together</h2>
            <p className="text-brand-muted text-center mb-10">Have a project in mind or want to discuss AI? Send me a message.</p>
            
            <form onSubmit={handleSubmit} className="bg-brand-card p-8 rounded-2xl border border-white/5 shadow-2xl">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm text-brand-muted mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          className="w-full bg-[#050505] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-brand-muted mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          className="w-full bg-[#050505] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-brand-muted mb-2">Message</label>
                        <textarea 
                          id="message" 
                          rows="4" 
                          value={formData.message} 
                          onChange={handleChange} 
                          required 
                          className="w-full bg-[#050505] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                        ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSending} 
                      className={`w-full font-bold py-3.5 rounded-lg transition-all transform hover:scale-[1.01] 
                        ${isSending ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-brand-primary text-black hover:bg-brand-accent'}`
                      }
                    >
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>

            {/* ERROR / SUCCESS MESSAGE DISPLAY */}
            {status && (
              <div className={`mt-6 text-center text-sm font-medium p-3 rounded-lg border ${isError ? 'bg-red-900/20 text-red-400 border-red-900/50' : 'bg-green-900/20 text-brand-primary border-brand-primary/20'}`}>
                {status}
              </div>
            )}
        </div>
    </section>
  );
};

export default Contact;