
import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Ignite',
    desc: 'Deep-dive discovery and data auditing to find your brand\'s hidden potential.',
    icon: '🔥'
  },
  {
    num: '02',
    title: 'Sculpt',
    desc: 'Crafting bespoke creative narratives and high-performance technical frameworks.',
    icon: '💎'
  },
  {
    num: '03',
    title: 'Radiate',
    desc: 'Multi-channel deployment using precision targeting to reach the right UAE audience.',
    icon: '☀️'
  },
  {
    num: '04',
    title: 'Evolve',
    desc: 'Continuous optimization through real-time analytics to ensure sustained growth.',
    icon: '🚀'
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px]">How We Deliver</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4">The HELIO Framework</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="relative group">
              <div className="glass p-10 rounded-[2.5rem] h-full border-t-4 border-t-orange-500/20 hover:border-t-orange-500 transition-all duration-500">
                <span className="text-5xl font-black text-white/5 absolute top-6 right-8 group-hover:text-orange-500/10 transition-colors">{step.num}</span>
                <div className="text-3xl mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-orange-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
