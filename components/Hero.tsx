
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070"
        >
          <source 
            src="https://player.vimeo.com/external/494252666.sd.mp4?s=724948834633d420f135b12f6f4370c8d1033b0e&profile_id=165&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Strategic Gradient Overlays for Depth */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-[5]"></div>

      {/* Background Glows (optimized for depth) */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full animate-pulse-slow z-[1]"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-yellow-600/10 blur-[150px] rounded-full animate-pulse-slow z-[1]"></div>

      <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Subtle Pulsing Logo */}
        <div className="flex items-center gap-3 mb-10 animate-logo-pulse cursor-default select-none">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-400 shadow-xl shadow-orange-500/20"></div>
          <span className="text-4xl font-black tracking-tighter drop-shadow-md">HELIO</span>
        </div>

        <div className="inline-block glass border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
          <span className="text-[10px] font-black tracking-[0.3em] text-orange-400 uppercase">Dubai • Abu Dhabi • Global</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.95] text-white drop-shadow-2xl">
          Illuminating <br/>
          <span className="font-serif italic font-normal text-orange-500">Growth</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
          We blend creative soul with data precision to elevate brands in the world's most dynamic market.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="px-12 py-5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full font-black text-white shadow-2xl shadow-orange-900/40 hover:scale-105 hover:shadow-orange-500/30 transition-all active:scale-95">
            START YOUR JOURNEY
          </button>
          <button className="px-12 py-5 glass border-white/20 rounded-full font-black text-white hover:bg-white/10 backdrop-blur-md transition-all active:scale-95">
            VIEW OUR WORK
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-40 z-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
