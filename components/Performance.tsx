
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PERFORMANCE_DATA } from '../constants';

type MetricType = 'organic' | 'paid' | 'both';

const Performance: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('both');

  return (
    <section id="performance" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The <span className="gradient-text">HELIO</span> Effect</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We leverage real-time data to pivot and optimize. This chart represents the average growth our clients witness within the first six months of partnership.
            </p>
            
            {/* Interactive Toggle */}
            <div className="mb-10 inline-flex p-1 glass rounded-2xl">
              <button 
                onClick={() => setActiveMetric('organic')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeMetric === 'organic' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Organic
              </button>
              <button 
                onClick={() => setActiveMetric('paid')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeMetric === 'paid' ? 'bg-yellow-500 text-black shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Paid
              </button>
              <button 
                onClick={() => setActiveMetric('both')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeMetric === 'both' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Both
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-xl text-orange-500 font-bold">89%</div>
                <div>
                  <h4 className="font-bold">Avg. Retention</h4>
                  <p className="text-sm text-gray-500">Long-term partnerships.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-xl text-yellow-500 font-bold">4.2x</div>
                <div>
                  <h4 className="font-bold">ROI Multiplier</h4>
                  <p className="text-sm text-gray-500">Measured across all sectors.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 w-full glass p-8 rounded-[2rem] helios-glow">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Quarterly Growth Analytics</h3>
              <div className="flex gap-4">
                {(activeMetric === 'organic' || activeMetric === 'both') && (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Organic Traffic</span>
                  </div>
                )}
                {(activeMetric === 'paid' || activeMetric === 'both') && (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Paid Acquisition</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PERFORMANCE_DATA}>
                  <defs>
                    <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#444" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                  />
                  <YAxis 
                    stroke="#444" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dx={-10}
                  />
                  <Tooltip 
                    cursor={{ stroke: '#444', strokeWidth: 1 }}
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    labelStyle={{ color: '#888', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase' }}
                  />
                  
                  {(activeMetric === 'organic' || activeMetric === 'both') && (
                    <Area 
                      type="monotone" 
                      dataKey="organic" 
                      stroke="#f97316" 
                      fillOpacity={1} 
                      fill="url(#colorOrganic)" 
                      strokeWidth={3}
                      animationDuration={1500}
                    />
                  )}
                  {(activeMetric === 'paid' || activeMetric === 'both') && (
                    <Area 
                      type="monotone" 
                      dataKey="paid" 
                      stroke="#fbbf24" 
                      fillOpacity={1} 
                      fill="url(#colorPaid)" 
                      strokeWidth={3}
                      animationDuration={1500}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
