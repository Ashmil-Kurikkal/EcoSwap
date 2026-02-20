import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInText from '../ui/FadeInText';

export default function Calculator() {
  const [jeans, setJeans] = useState(0);
  const [shirts, setShirts] = useState(0);

  // The brutal math
  const waterUsed = jeans * 2000; // Gallons
  const microplastics = shirts * 1900; // Microfibers per wash per synthetic shirt

  return (
    <section className="w-full bg-zinc-900 text-[#FAFAFA] py-32 px-6 lg:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The Inputs */}
        <div>
          <FadeInText>
            <span className="block text-sm tracking-[0.2em] uppercase text-zinc-400 mb-4">
              The Personal Audit
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">
              What is the weight of your wardrobe?
            </h2>
          </FadeInText>
          
          <FadeInText delay={0.1}>
            <div className="space-y-8 max-w-md">
              
              {/* Slider 1: Jeans */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <label className="text-lg text-zinc-300">Pairs of Denim Jeans</label>
                  <span className="text-2xl font-serif">{jeans}</span>
                </div>
                <input 
                  type="range" min="0" max="20" value={jeans} 
                  onChange={(e) => setJeans(parseInt(e.target.value))}
                  className="w-full accent-zinc-100 bg-zinc-700 h-1 rounded-full appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: Synthetic Shirts */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <label className="text-lg text-zinc-300">Synthetic Shirts (Polyester/Nylon)</label>
                  <span className="text-2xl font-serif">{shirts}</span>
                </div>
                <input 
                  type="range" min="0" max="50" value={shirts} 
                  onChange={(e) => setShirts(parseInt(e.target.value))}
                  className="w-full accent-zinc-100 bg-zinc-700 h-1 rounded-full appearance-none cursor-pointer"
                />
              </div>

            </div>
          </FadeInText>
        </div>

        {/* Right Side: The Dynamic Output */}
        <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 rounded-sm relative overflow-hidden">
          {/* Subtle animated background gradient based on interaction */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 z-0"
            animate={{ opacity: (jeans + shirts) > 0 ? 1 : 0.5 }}
          />
          
          <div className="relative z-10">
            <h3 className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-8 border-b border-zinc-800 pb-4">
              Your Estimated Debt
            </h3>
            
            <div className="mb-8">
              <motion.span 
                key={waterUsed}
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="block text-5xl md:text-7xl font-black tracking-tighter text-white"
              >
                {waterUsed.toLocaleString()}
              </motion.span>
              <span className="text-zinc-400 uppercase tracking-widest text-sm mt-2 block">
                Gallons of Water Consumed
              </span>
            </div>

            <div>
              <motion.span 
                key={microplastics}
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="block text-5xl md:text-7xl font-black tracking-tighter text-white"
              >
                {microplastics.toLocaleString()}
              </motion.span>
              <span className="text-zinc-400 uppercase tracking-widest text-sm mt-2 block">
                Microplastics shed per wash cycle
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}