import FadeInText from '../ui/FadeInText';
import { motion } from 'framer-motion';

export default function ImpactData() {
  const luxuryEasing = [0.16, 1, 0.3, 1];

  return (
    <>
      {/* Carbon Section with Editorial Image Grid */}
      <section className="w-full bg-[#FAFAFA] py-32 px-6 lg:px-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[50vh] md:h-[70vh] overflow-hidden rounded-sm">
            {/* Subtle slow-zoom effect on the image */}
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: luxuryEasing }}
              viewport={{ once: true }}
              src="./textilewaste.jpg" 
              alt="Industrial Textile Waste"
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <FadeInText><span className="block text-sm tracking-[0.2em] uppercase text-zinc-400 mb-6">The Carbon Weight</span></FadeInText>
            <FadeInText delay={0.1}><h2 className="text-[15vw] md:text-[8vw] font-black leading-none tracking-tighter text-zinc-900 mb-6">10%</h2></FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-xl md:text-2xl font-serif text-zinc-600 leading-snug">
                The fashion industry is responsible for 10% of annual global carbon emissions. <span className="text-zinc-900 italic">That is more than all international flights and maritime shipping combined.</span>
              </p>
            </FadeInText>
          </div>

        </div>
      </section>

      {/* Synthetic Sea with Parallax Background Image */}
      <section className="relative w-full py-40 px-6 lg:px-12 overflow-hidden bg-zinc-950 text-[#FAFAFA]">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1621451537084-482c73073e0f?q=80&w=2000&auto=format&fit=crop" 
            alt="Dark Ocean Plastic"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient to blend the image perfectly into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950"></div>
        </div>

        {/* Content Layer */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <FadeInText><h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-8 text-zinc-100">The Synthetic Sea.</h2></FadeInText>
            <FadeInText delay={0.1}>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Over 60% of today's clothing is made from synthetic fibers like polyester. Every time you wash them, they shed millions of microplastics that slip through water treatment plants directly into our oceans.
              </p>
            </FadeInText>
          </div>
          <div className="flex justify-start md:justify-end">
             <FadeInText delay={0.2}>
              <div className="text-left md:text-right">
                <span className="block text-[5rem] md:text-[8rem] font-black leading-none tracking-tighter text-zinc-100">500K</span>
                <span className="block text-xl tracking-[0.2em] uppercase text-zinc-400 mt-4">Tons of Microfibers</span>
                <span className="block text-md text-zinc-500 mt-2">dumped into the ocean annually.</span>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>
    </>
  );
}