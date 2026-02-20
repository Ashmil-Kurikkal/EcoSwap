import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function SubmitSwap() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', innovation: '' });
  
  const luxuryEasing = [0.16, 1, 0.3, 1];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send formData to a database here.
    // For the hackathon, we trigger the beautiful success state.
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-zinc-950 text-[#FAFAFA] min-h-screen pt-32 pb-24 selection:bg-zinc-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-[60vh]">
        
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

        {/* Right Side: Dynamic Form Area */}
        <div className="flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            
            {!isSubmitted ? (
              /* THE FORM */
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: luxuryEasing }}
                onSubmit={handleSubmit} 
                className="space-y-12"
              >
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    value={formData.innovation}
                    onChange={(e) => setFormData({...formData, innovation: e.target.value})}
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
              </motion.form>
            ) : (
              /* THE SUCCESS STATE */
              <motion.div 
                key="success"
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }} 
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
                transition={{ duration: 0.8, ease: luxuryEasing }}
                className="flex flex-col justify-center items-start h-full"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8">
                  <Check className="text-zinc-950" size={32} />
                </div>
                <h3 className="text-4xl font-serif tracking-tight mb-4">
                  Submission Received.
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  Thank you, <span className="text-white italic">{formData.name}</span>. Our researchers will review your submission and add it to the global index shortly. Welcome to the movement.
                </p>
                
                <button 
                  onClick={() => { setIsSubmitted(false); setFormData({name: '', innovation: ''}); }}
                  className="mt-12 text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1"
                >
                  Submit Another
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}