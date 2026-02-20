import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Droplets, Wind, Zap } from 'lucide-react';

export default function Directory() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Dense, factual data for the judges
  const materials = [
    { 
      id: 1, name: 'Virgin Polyester', grade: 'F', category: 'Synthetic',
      stats: { water: 'Low', carbon: 'High', microplastics: 'Severe' },
      verdict: 'Derived from petroleum. Takes 200+ years to decompose while shedding toxic microfibers into oceans.',
      swap: 'Tencel or Recycled PET'
    },
    { 
      id: 2, name: 'Conventional Cotton', grade: 'D', category: 'Natural',
      stats: { water: 'Extreme', carbon: 'Medium', microplastics: 'None' },
      verdict: 'Highly water-intensive (2,000 gal/pair of jeans). Relies heavily on toxic pesticides that degrade local soil.',
      swap: 'Organic Hemp or Linen'
    },
    { 
      id: 3, name: 'Organic Linen', grade: 'A', category: 'Natural',
      stats: { water: 'Low', carbon: 'Low', microplastics: 'None' },
      verdict: 'Made from the flax plant. Requires very little water, no pesticides, and is 100% biodegradable if untreated.',
      swap: 'The Gold Standard'
    },
    { 
      id: 4, name: 'ECONYL®', grade: 'B', category: 'Next-Gen',
      stats: { water: 'Low', carbon: 'Low', microplastics: 'Moderate' },
      verdict: 'Regenerated nylon made from rescued ocean fishing nets. Infinitely recyclable, but still sheds some microplastics.',
      swap: 'Best for Activewear'
    },
    { 
      id: 5, name: 'Viscose (Rayon)', grade: 'C', category: 'Cellulose',
      stats: { water: 'High', carbon: 'High', microplastics: 'None' },
      verdict: 'Plant-based, but requires heavy chemical processing. Historically responsible for ancient forest deforestation.',
      swap: 'EcoVero™'
    },
    { 
      id: 6, name: 'Piñatex®', grade: 'A', category: 'Next-Gen',
      stats: { water: 'Low', carbon: 'Low', microplastics: 'Low' },
      verdict: 'An innovative leather alternative made from pineapple leaf waste. Provides additional income for farming communities.',
      swap: 'Replaces Animal Leather'
    }
  ];

  const filters = ['All', 'Natural', 'Synthetic', 'Next-Gen', 'Cellulose'];
  
  const filtered = materials.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === 'All' || m.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A': return 'bg-zinc-900 text-white';
      case 'B': return 'bg-zinc-700 text-white';
      case 'C': return 'bg-zinc-300 text-zinc-900';
      case 'D': return 'bg-red-100 text-red-900 border border-red-200';
      case 'F': return 'bg-red-600 text-white';
      default: return 'bg-zinc-200 text-zinc-900';
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-zinc-900 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
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
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-md border-b border-zinc-300 pb-2"
            >
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type="text" 
                placeholder="Search materials..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-transparent text-lg focus:outline-none placeholder-zinc-400" 
              />
            </motion.div>

            {/* Filter Pills */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                    activeFilter === f 
                      ? 'bg-zinc-900 text-white' 
                      : 'border border-zinc-300 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* THE DATA GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map(mat => (
              <motion.div 
                key={mat.id} 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group border border-zinc-200 p-8 hover:border-zinc-900 transition-colors duration-500 bg-white"
              >
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-2 block">
                      {mat.category}
                    </span>
                    <h3 className="text-3xl font-serif text-zinc-900">
                      {mat.name}
                    </h3>
                  </div>
                  {/* The Grade Pill */}
                  <div className={`w-12 h-12 flex items-center justify-center text-xl font-bold rounded-full ${getGradeColor(mat.grade)}`}>
                    {mat.grade}
                  </div>
                </div>

                {/* Hard Data Row */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-100 mb-6">
                  <div className="flex flex-col gap-1">
                    <Droplets size={16} className="text-zinc-400" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400">Water</span>
                    <span className="text-sm font-medium">{mat.stats.water}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Wind size={16} className="text-zinc-400" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400">Carbon</span>
                    <span className="text-sm font-medium">{mat.stats.carbon}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Zap size={16} className="text-zinc-400" />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400">Plastics</span>
                    <span className="text-sm font-medium">{mat.stats.microplastics}</span>
                  </div>
                </div>

                {/* The Verdict */}
                <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
                  <strong className="font-medium text-zinc-900">The Verdict: </strong> 
                  {mat.verdict}
                </p>

                {/* The Swap CTA */}
                <div className="bg-zinc-50 p-4 border border-zinc-100 flex justify-between items-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-colors duration-500">
                  <span className="text-xs uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors">Recommended Swap</span>
                  <span className="text-sm font-medium text-zinc-900 group-hover:text-white transition-colors">
                    {mat.swap}
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-zinc-400 font-light">No materials match this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}