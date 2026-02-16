
import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Our Core Capabilities</h2>
        <p className="text-gray-400 max-w-xl mx-auto">We don't just provide services; we engineer solutions that dominate the market landscape.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group glass p-10 rounded-3xl hover:border-orange-500/50 transition-all duration-500 flex flex-col items-start"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{service.description}</p>
            
            <button 
              onClick={() => onSelectService(service)}
              className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center gap-2 group/btn"
            >
              Explore Service
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
