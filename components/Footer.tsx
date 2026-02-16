
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-orange-500"></div>
          <span className="text-xl font-black">HELIO</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Career</a>
        </div>
        
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} HELIO Marketing UAE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
