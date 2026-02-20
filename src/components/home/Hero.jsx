import { motion } from 'framer-motion';

export default function Hero() {
  const luxuryEasing = [0.16, 1, 0.3, 1];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[70vh] flex flex-col justify-center">
      <div className="overflow-hidden mb-6">
        <motion.p 
          initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: luxuryEasing }}
          className="text-xs md:text-sm tracking-[0.2em] text-zinc-500 uppercase font-medium"
        >
          The Hidden Cost of Trends
        </motion.p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: luxuryEasing, delay: 0.1 }}
            className="text-[11vw] md:text-[8vw] leading-[0.85] font-serif tracking-tight text-zinc-900"
          >
            The Fabric
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: luxuryEasing, delay: 0.2 }}
            className="text-[11vw] md:text-[8vw] leading-[0.85] font-serif tracking-tight text-zinc-400 italic"
          >
            of Waste.
          </motion.h1>
        </div>
      </div>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.8 }}
        className="mt-12 text-lg md:text-2xl text-zinc-600 leading-relaxed max-w-2xl font-light"
      >
        Fast fashion has democratized style, but at a devastating environmental price. We are wearing the planet dry.
      </motion.p>
    </section>
  );
}