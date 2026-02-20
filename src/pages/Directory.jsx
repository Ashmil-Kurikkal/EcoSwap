import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

export default function Directory() {
  const [search, setSearch] = useState('');
  
  // High-end editorial data
  const materials = [
    { id: 1, bad: 'Virgin Polyester', good: 'Tencel / Lyocell', impact: 'Eliminates microplastic shedding and uses closed-loop water systems.', tag: 'Synthetics' },
    { id: 2, bad: 'Conventional Cotton', good: 'Organic Hemp', impact: 'Uses 1/20th the water of cotton and regenerates soil health.', tag: 'Natural Fibers' },
    { id: 3, bad: 'Nylon', good: 'ECONYL (Recycled)', impact: 'Rescues abandoned fishing nets from oceans to create infinitely recyclable yarn.', tag: 'Activewear' },
    { id: 4, bad: 'Acrylic', good: 'Responsibly Sourced Wool', impact: 'Biodegradable alternative that doesn\'t sit in landfills for 200 years.', tag: 'Knitwear' },
    { id: 5, bad: 'Viscose / Rayon', good: 'EcoVero', impact: 'Prevents ancient and endangered forest deforestation.', tag: 'Cellulose' },
    { id: 6, bad: 'Polyester Fleece', good: 'Recycled Cotton', impact: 'Diverts textile waste from landfills while reducing energy use by 75%.', tag: 'Outerwear' },
    { id: 7, bad: 'Conventional Leather', good: 'Piñatex (Pineapple)', impact: 'Transforms agricultural waste into durable, vegan leather without animal harm.', tag: 'Accessories' },
    { id: 8, bad: 'Spandex/Elastane', good: 'ROICA V550 (Recycled)', impact: 'Made from post-consumer plastic bottles, fully recyclable at end-of-life.', tag: 'Activewear' },
    { id: 9, bad: 'PVC (Polyvinyl Chloride)', good: 'Natural Rubber', impact: 'Biodegradable option that avoids toxic chemical production and microplastic pollution.', tag: 'Footwear' },
    { id: 10, bad: 'Fast Fashion Denim', good: 'Regenerative Organic Cotton', impact: 'Restores soil biodiversity and sequesters carbon while using 90% less water.', tag: 'Denim' },
    { id: 11, bad: 'Modal (Non-Certified)', good: 'TENCEL™ Modal', impact: 'Closed-loop production uses sustainable wood sources and 99% water recycling.', tag: 'Intimates' },
    { id: 12, bad: 'PU Leather', good: 'Desserto (Cactus)', impact: 'Grows with minimal water in arid regions, fully biodegradable in months.', tag: 'Bags' },
    { id: 13, bad: 'Polyamide', good: 'SeaCell', impact: 'Made from seaweed and wood pulp, naturally antimicrobial and skin-nourishing.', tag: 'Loungewear' },
    { id: 14, bad: 'Sheep Wool (Non-Ethical)', good: 'Alpaca', impact: 'Requires no shearing chemicals, grows slower for stronger fibers, carbon neutral.', tag: 'Winter Wear' }
  ];
  
  const filtered = materials.filter(m => 
    m.bad.toLowerCase().includes(search.toLowerCase()) || 
    m.good.toLowerCase().includes(search.toLowerCase())
  );

  // Framer Motion variants for the staggered grid
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-zinc-900 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-xs tracking-[0.2em] text-zinc-500 uppercase font-medium mb-4"
          >
            The Index
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif tracking-tight text-zinc-900 mb-8"
          >
            Material Intelligence.
          </motion.h2>
          
          {/* Minimalist Search Bar */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="relative max-w-xl border-b border-zinc-300 pb-2"
          >
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by fabric (e.g. Polyester)..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-transparent text-lg focus:outline-none placeholder-zinc-400" 
            />
          </motion.div>
        </div>

        {/* Staggered Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {filtered.map(mat => (
            <motion.div key={mat.id} variants={item} className="group cursor-default">
              <div className="pb-6 border-b border-zinc-200 hover:border-zinc-900 transition-colors duration-500">
                <span className="text-xs tracking-widest uppercase text-zinc-400 mb-4 block">
                  {mat.tag}
                </span>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                  <h3 className="text-2xl font-serif text-zinc-400 line-through decoration-1">
                    {mat.bad}
                  </h3>
                  <ArrowRight className="hidden md:block text-zinc-300" size={20} />
                  <h3 className="text-2xl font-serif text-zinc-900">
                    {mat.good}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  <strong className="font-medium text-zinc-700">The Impact:</strong> {mat.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filtered.length === 0 && (
          <p className="text-zinc-500 font-light mt-10">No materials found. Try another search.</p>
        )}
      </div>
    </div>
  );
}