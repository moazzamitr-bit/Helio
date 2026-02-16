
import React, { useEffect, useState } from 'react';
import { Service } from '../types';
import { GoogleGenAI } from "@google/genai";

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const generateServiceVisual = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `Generate a high-end, professional marketing agency visual for the service: ${service.title}. Concept: ${service.imagePrompt}` }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          setGeneratedImage(imageUrl);
          break;
        }
      }
    } catch (error) {
      console.error("Image generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const RequestConsultationCTA = () => (
    <button 
      onClick={() => scrollToSection('service-form')}
      className="group/cta px-10 py-5 bg-orange-500 text-white font-black rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-orange-900/30 flex items-center gap-3 w-fit"
    >
      Request a Consultation
      <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </button>
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </button>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 group/header">
          <div className="w-24 h-24 md:w-32 md:h-32 transition-all duration-500 group-hover/header:scale-110 group-hover/header:rotate-6 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)] cursor-default flex items-center justify-center">
            {service.icon}
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            {service.title}
          </h1>
        </div>

        {/* Dynamic Visual Section */}
        <section className="mb-20">
          <div className="relative aspect-[16/7] w-full rounded-[3rem] overflow-hidden glass group">
            {generatedImage ? (
              <img 
                src={generatedImage} 
                alt={service.title} 
                className="w-full h-full object-cover animate-in zoom-in-95 duration-1000"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
                <div className="relative z-10 text-center px-6">
                  <div className="w-24 h-24 mx-auto mb-6 opacity-20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-400 mb-4 italic">No visual provided for this capability.</h3>
                  <button 
                    onClick={generateServiceVisual}
                    disabled={isGenerating}
                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50"
                  >
                    {isGenerating ? "Consulting AI Artist..." : "Generate HELIO Imagine Visual"}
                  </button>
                </div>
              </div>
            )}
            
            {generatedImage && (
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={generateServiceVisual}
                  disabled={isGenerating}
                  className="px-4 py-2 glass rounded-full text-xs font-bold hover:bg-white/10"
                >
                  {isGenerating ? "Regenerating..." : "Regenerate Visual"}
                </button>
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start">
          <div className="lg:col-span-8 space-y-24">
            {/* Overview Section */}
            <section>
              <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed font-light mb-12">
                {service.fullDescription}
              </p>

              <div id="core-features" className="scroll-mt-32 space-y-8 mb-16">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-orange-500"></span>
                  Core Features
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className={`group cursor-pointer overflow-hidden transition-all duration-300 rounded-2xl border ${activeFeatureIndex === i ? 'bg-orange-500/10 border-orange-500/50' : 'glass border-white/5 hover:border-white/20'}`}
                        onClick={() => setActiveFeatureIndex(activeFeatureIndex === i ? null : i)}
                      >
                        <div className="p-4 flex items-center justify-between">
                          <span className={`text-sm font-bold transition-colors ${activeFeatureIndex === i ? 'text-orange-400' : 'text-gray-300'}`}>
                            {feature}
                          </span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${activeFeatureIndex === i ? 'rotate-180 text-orange-400' : 'text-gray-600'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        
                        <div className={`transition-all duration-300 ease-in-out ${activeFeatureIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="px-4 pb-4 pt-1">
                            <p className="text-xs text-gray-500 leading-relaxed italic">
                              Our expertise in {feature.toLowerCase()} ensures your brand maintains a competitive edge through technical excellence and strategic alignment in the UAE market.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center h-full">
                    <div className="bg-gradient-to-br from-orange-600/20 to-transparent p-10 rounded-[2rem] border border-orange-500/20 relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                      <h4 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Strategic Benefit</h4>
                      <p className="text-2xl font-serif italic text-white/90">"{service.benefits}"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* End of Description CTA */}
              <div className="pt-8 border-t border-white/5">
                <RequestConsultationCTA />
              </div>
            </section>

            {/* Case Study Section */}
            {service.caseStudy ? (
              <div className="space-y-12">
                <section className="bg-zinc-950/50 rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Case Study</span>
                      <h3 className="text-2xl font-bold">{service.caseStudy.client}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      <div className="space-y-4">
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">The Challenge</h4>
                        <p className="text-gray-400 leading-relaxed">{service.caseStudy.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-[10px]">The HELIO Solution</h4>
                        <p className="text-gray-400 leading-relaxed">{service.caseStudy.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {service.caseStudy.results.map((result, i) => (
                        <div key={i} className="text-center p-6 glass rounded-2xl">
                          <div className="text-3xl md:text-4xl font-black text-white mb-2">{result.value}</div>
                          <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                
                {/* Below Case Study CTA */}
                <div className="flex justify-center">
                  <RequestConsultationCTA />
                </div>
              </div>
            ) : null}

            {/* Social Proof / Testimonials Section */}
            <section className="space-y-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-yellow-500"></span>
                  Voices of Success
                </h3>
                <p className="text-sm text-gray-400 max-w-lg">Don't just take our word for it. Hear from the leaders we've partnered with across the region.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.testimonials?.map((testimonial, i) => (
                  <div key={i} className="glass p-8 rounded-3xl flex flex-col justify-between hover:bg-white/[0.05] transition-colors border-t-2 border-t-zinc-800">
                    <div className="text-4xl text-orange-500/30 mb-6 font-serif">“</div>
                    <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-[10px] font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h5 className="font-bold text-sm">{testimonial.author}</h5>
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{testimonial.role} • {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-white/5 opacity-50">
                <p className="text-[10px] font-bold tracking-widest uppercase text-center mb-8 text-gray-600">Powering Excellence for</p>
                <div className="flex justify-around items-center gap-8 flex-wrap grayscale contrast-125">
                   <span className="text-xl font-black italic">EMAAR</span>
                   <span className="text-xl font-black italic">ALDAR</span>
                   <span className="text-xl font-black italic">MERAAS</span>
                   <span className="text-xl font-black italic">NAKHEEL</span>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div id="service-form" className="glass p-8 rounded-[2.5rem] space-y-8 shadow-2xl scroll-mt-32">
              <div>
                <h4 className="text-xl font-bold mb-2">Elevate Your Strategy</h4>
                <p className="text-sm text-gray-500 mb-6">Connect with our regional experts to craft your brand's success narrative in the UAE.</p>
                
                <button 
                  onClick={() => scrollToSection('core-features')}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-colors py-2 px-1 border-b border-orange-500/20 w-fit"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  Jump to Core Features
                </button>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase px-2">Your Name</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-all placeholder-zinc-700" placeholder="e.g. Sultan Al-Maktoum" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase px-2">Work Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-all placeholder-zinc-700" placeholder="sultan@enterprise.ae" />
                </div>
                <button type="submit" className="w-full py-4 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all transform active:scale-95 shadow-xl shadow-orange-900/20">
                  Secure Strategy Call
                </button>
              </form>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} 
                          alt="Reviewer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">Join 50+ UAE brands <br/>scaling with HELIO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
