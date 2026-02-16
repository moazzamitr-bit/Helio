
import React from 'react';

interface NavbarProps {
  onGoHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGoHome }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-8 py-3">
        <div 
          onClick={onGoHome}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-400 group-hover:scale-110 transition-transform"></div>
          <span className="text-2xl font-black tracking-tighter">HELIO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={onGoHome} className="hover:text-white transition-colors">Home</button>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          <a href="#ai-strategist" className="hover:text-white transition-colors">AI Strategist</a>
        </div>

        <a 
          href="#contact" 
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
