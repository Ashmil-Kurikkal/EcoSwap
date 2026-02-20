import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeInText from '../ui/FadeInText';

export default function GsapScroll() {
  const containerRef = useRef(null);
  
  // Track scroll progress strictly within our 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- IMAGE PARALLAX SEQUENCES ---
  // Image 1: The Mountain of Clothes
  const img1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const img1Scale = useTransform(scrollYProgress, [0, 0.33], [1, 1.1]);

  // Image 2: Textile Factory Waste
  const img2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const img2Scale = useTransform(scrollYProgress, [0.25, 0.66], [1, 1.1]);

  // Image 3: The Landfill
  const img3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);
  const img3Scale = useTransform(scrollYProgress, [0.58, 1], [1, 1.1]);

  // --- TYPOGRAPHY SEQUENCES ---
  const text1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.33], [0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [50, 0, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 0.9, 1], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.58, 0.66, 1], [50, 0, -50]);

  return (
    <>
      {/* The 400vh container gives the user enough scrolling room to trigger the sequence */}
      <section ref={containerRef} className="relative w-full h-[400vh] bg-zinc-950">
        
        {/* The sticky div locks to the viewport while the user scrolls through the 400vh */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* FRAME 1 */}
          <motion.img
            style={{ opacity: img1Opacity, scale: img1Scale }}
            src="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=2000&auto=format&fit=crop" 
            alt="Piles of discarded clothing"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          />
          
          {/* FRAME 2 */}
          <motion.img
            style={{ opacity: img2Opacity, scale: img2Scale }}
            src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2000&auto=format&fit=crop" 
            alt="Textile factory waste"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          />

          {/* FRAME 3 */}
          <motion.img
            style={{ opacity: img3Opacity, scale: img3Scale }}
            src="https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=2000&auto=format&fit=crop" 
            alt="Massive Landfill"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          />

          {/* Dark Overlay to guarantee text readability */}
          <div className="absolute inset-0 bg-zinc-950/60 z-10"></div>

          {/* TEXT SEQUENCE CONTAINER */}
          <div className="relative z-20 w-full h-full flex items-center justify-center px-6">
            
            {/* TEXT 1 */}
            <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute flex flex-col justify-center items-center text-center max-w-4xl">
              <h2 className="text-5xl md:text-8xl font-serif tracking-tight text-[#FAFAFA] mb-8 drop-shadow-lg">
                The Afterlife of a Trend.
              </h2>
              <p className="text-xl md:text-3xl font-light text-zinc-300 leading-tight">
                Every single second, the equivalent of one garbage truck full of clothes is burned or dumped in a landfill.
              </p>
            </motion.div>

            {/* TEXT 2 */}
            <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute flex flex-col justify-center items-center text-center max-w-4xl pointer-events-none">
              <h2 className="text-5xl md:text-8xl font-serif tracking-tight text-[#FAFAFA] mb-8 drop-shadow-lg">
                Out of Sight.
              </h2>
              <p className="text-xl md:text-3xl font-light text-zinc-300 leading-tight">
                Fast fashion brands produce 100 billion garments a year. 85% of them will end up decaying in the Global South, completely out of sight.
              </p>
            </motion.div>

            {/* TEXT 3 */}
            <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute flex flex-col justify-center items-center text-center max-w-4xl pointer-events-none">
              <h2 className="text-5xl md:text-8xl font-serif tracking-tight text-[#FAFAFA] mb-8 drop-shadow-lg">
                A Toxic Legacy.
              </h2>
              <p className="text-xl md:text-3xl font-light text-zinc-300 leading-tight">
                Synthetic fabrics do not decompose. They sit in the earth for 200 years, slowly leaching petrochemicals into the groundwater.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OUTRO CTA */}
      <section className="w-full bg-[#FAFAFA] py-32 px-6 lg:px-12 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInText>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-10 text-zinc-900">
              Ignorance is a luxury we can no longer afford.
            </h2>
          </FadeInText>
          <FadeInText delay={0.1}>
            <Link to="/swaps" className="inline-flex items-center gap-4 group">
              <span className="text-xl md:text-2xl font-light text-zinc-600 group-hover:text-zinc-900 transition-colors">
                Explore the Material Index
              </span>
              <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} />
              </div>
            </Link>
          </FadeInText>
        </div>
      </section>
    </>
  );
}