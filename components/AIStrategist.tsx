
import React, { useState } from 'react';
import { getMarketingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStrategist: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const advice = await getMarketingAdvice(input);
    const assistantMessage: ChatMessage = { role: 'assistant', content: advice };
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <section id="ai-strategist" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="glass rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-black mb-4">Meet Our <br/><span className="gradient-text">AI Strategist</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the power of HELIO's intelligence. Tell us about your brand challenge, and our AI will provide a preliminary strategic direction tailored for the UAE market.
            </p>
            <div className="space-y-2">
              <p className="text-xs text-orange-500 font-bold uppercase tracking-widest">Try asking:</p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li className="italic cursor-pointer hover:text-white" onClick={() => setInput("How should I market a luxury hotel in Abu Dhabi?")}>"How should I market a luxury hotel in Abu Dhabi?"</li>
                <li className="italic cursor-pointer hover:text-white" onClick={() => setInput("Best platforms for a tech startup in Dubai?")}>"Best platforms for a tech startup in Dubai?"</li>
              </ul>
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            <div className="bg-black/50 border border-zinc-800 rounded-2xl flex flex-col h-[500px]">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                    <div className="text-4xl mb-4">🤖</div>
                    <p className="text-sm">Ready to analyze your brand's potential.</p>
                  </div>
                )}
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                      m.role === 'user' 
                        ? 'bg-orange-600 text-white rounded-br-none' 
                        : 'bg-zinc-800 text-gray-200 rounded-bl-none'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-none animate-pulse">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <form onSubmit={handleSend} className="p-4 border-t border-zinc-800 flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe your brand goals..."
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl text-sm font-bold transition-colors disabled:opacity-50"
                >
                  Ask
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStrategist;
