
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Performance from './components/Performance';
import AIStrategist from './components/AIStrategist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Methodology from './components/Methodology';
import Sectors from './components/Sectors';
import About from './components/About';
import { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };

  const handleGoHome = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar onGoHome={handleGoHome} />
      
      <main className="transition-all duration-500">
        {selectedService ? (
          <ServiceDetail 
            service={selectedService} 
            onBack={handleGoHome} 
          />
        ) : (
          <>
            <Hero />
            
            {/* Trusted By Section */}
            <div className="py-12 border-y border-zinc-900 bg-zinc-950/50">
              <div className="max-w-7xl mx-auto px-6 overflow-hidden">
                <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-8">Driving Growth for Regional Leaders</p>
                <div className="flex justify-around items-center opacity-30 grayscale gap-12 flex-wrap">
                  <span className="text-2xl font-black italic">EMAAR</span>
                  <span className="text-2xl font-black italic">ALDAR</span>
                  <span className="text-2xl font-black italic">DAMAC</span>
                  <span className="text-2xl font-black italic">MERAAS</span>
                  <span className="text-2xl font-black italic">NAKHEEL</span>
                </div>
              </div>
            </div>

            <Services onSelectService={handleSelectService} />
            <Methodology />
            <Sectors />
            <About />
            <Performance />
            <AIStrategist />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
