
import React from 'react';

const VALUES = [
  {
    title: 'Precision',
    desc: 'In the UAE\'s fast-paced market, data is our compass. We don\'t guess; we measure, analyze, and optimize for peak performance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Creative Soul',
    desc: 'Technology drives us, but creativity defines us. We craft narratives that bypass the noise and touch the heart of the consumer.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Local Roots',
    desc: 'We are deeply embedded in the cultural fabric of Dubai and Abu Dhabi, bridging global innovation with local heritage.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square md:aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="HELIO HQ Vision" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-orange-500 font-serif italic text-3xl md:text-4xl">"Illuminating the path to growth."</p>
              </div>
            </div>
            {/* Geometric accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-orange-500/30 rounded-br-[3rem] hidden md:block"></div>
          </div>

          <div className="space-y-12">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px]">Our Narrative</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 leading-tight">The Soul of UAE <br/>Modern Marketing</h2>
              <p className="text-gray-400 text-lg leading-relaxed mt-8">
                Born in the heart of the Emirates, HELIO was founded on a singular vision: to redefine how brands interact with the most dynamic market on earth. We believe that in a world of noise, clarity is power. We don't just execute campaigns; we architect legacies.
              </p>
            </div>

            <div className="space-y-8">
              {VALUES.map((value, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl glass flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 transition-colors group-hover:text-orange-500">{value.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
