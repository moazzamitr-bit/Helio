
import React from 'react';

const SECTORS = [
  {
    title: 'Real Estate',
    desc: 'Dominating off-plan and luxury resale markets in Dubai & Abu Dhabi.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000' // نمای خیره‌کننده از دبی در غروب
  },
  {
    title: 'Hospitality',
    desc: 'Creating immersive digital experiences for 5-star hotels and fine dining.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000' // هتل و استراحتگاه لوکس مدرن
  },
  {
    title: 'Technology',
    desc: 'Scaling SaaS and FinTech startups across the GCC with data-driven PR.',
    image: 'https://images.unsplash.com/photo-1634712382125-99d60510620c?auto=format&fit=crop&q=80&w=1000' // معماری آینده‌نگرانه و دیجیتال
  }
];

const Sectors: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px]">Our Verticals</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">Masters of the UAE Landscape</h2>
        </div>
        <p className="text-gray-500 max-w-sm text-sm">Deep domain expertise in the industries that power the regional economy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SECTORS.map((sector, i) => (
          <div key={i} className="group relative h-[450px] rounded-[3rem] overflow-hidden cursor-pointer">
            <img 
              src={sector.image} 
              alt={sector.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            {/* Glowing accent on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)]"></div>

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <h3 className="text-3xl font-black mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{sector.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                {sector.desc}
              </p>
              <div className="mt-6 w-12 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
