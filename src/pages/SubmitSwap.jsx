import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SubmitSwap() {
  const luxuryEasing = [0.16, 1, 0.3, 1];

  return (
    <div className="w-full bg-zinc-950 text-[#FAFAFA] min-h-screen pt-32 pb-24 selection:bg-zinc-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: The Manifesto */}
        <div className="flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: luxuryEasing }}
            className="text-xs tracking-[0.2em] text-zinc-500 uppercase font-medium mb-6"
          >
            The Manifesto
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: luxuryEasing }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
          >
            Demand Better.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-lg"
          >
            We cannot recycle our way out of overproduction. The most sustainable garment is the one already in your closet. We invite brands, designers, and consumers to submit new sustainable practices, regenerative materials, or circular initiatives to the Aera index.
          </motion.p>
        </div>

        {/* Right Side: The Editorial Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3, ease: luxuryEasing }}
          className="flex flex-col justify-center"
        >
          <form onSubmit={(e) => { e.preventDefault(); alert('Submission received. Welcome to the movement.'); }} className="space-y-12">
            
            <div className="relative">
              <input 
                type="text" 
                id="name"
                required 
                className="peer w-full bg-transparent border-b border-zinc-700 py-4 text-lg focus:outline-none focus:border-zinc-300 transition-colors placeholder-transparent" 
                placeholder="Name or Brand"
              />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-zinc-400 cursor-text">
                Your Name or Brand
              </label>
            </div>

            <div className="relative">
              <input 
                type="text" 
                id="innovation"
                required 
                className="peer w-full bg-transparent border-b border-zinc-700 py-4 text-lg focus:outline-none focus:border-zinc-300 transition-colors placeholder-transparent" 
                placeholder="The Innovation"
              />
              <label htmlFor="innovation" className="absolute left-0 -top-3.5 text-sm text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-zinc-400 cursor-text">
                The Material or Innovation
              </label>
            </div>

            <button type="submit" className="group flex items-center gap-4 pt-4">
              <span className="text-sm tracking-widest uppercase font-medium group-hover:text-zinc-300 transition-colors">Submit to Index</span>
              <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-zinc-300 group-hover:bg-[#FAFAFA] group-hover:text-zinc-950 transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}