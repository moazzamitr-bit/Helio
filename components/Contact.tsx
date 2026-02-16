
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Let's Create <br/><span className="gradient-text">Future Excellence</span>.</h2>
          <p className="text-xl text-gray-400 mb-12">
            Whether you're a startup or a global enterprise, we have the vision and the tools to accelerate your growth in the UAE.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-orange-500 mb-2 uppercase tracking-widest text-xs">Our Hub</h4>
              <p className="text-gray-300">Level 12, Emirates Towers, Sheikh Zayed Rd<br/>Dubai, United Arab Emirates</p>
            </div>
            <div>
              <h4 className="font-bold text-orange-500 mb-2 uppercase tracking-widest text-xs">Reach Out</h4>
              <p className="text-gray-300">hello@helio-agency.ae<br/>+971 4 000 0000</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 glass p-10 rounded-[2.5rem]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors text-gray-400">
                <option>Performance Marketing Inquiry</option>
                <option>Branding & Creative Work</option>
                <option>Social Media Management</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full py-4 bg-white text-black font-black rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
