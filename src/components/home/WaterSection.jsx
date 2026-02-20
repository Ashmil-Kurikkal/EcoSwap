import FadeInText from '../ui/FadeInText';
import ThreadKnot from '../ThreadKnot';

export default function WaterSection() {
  return (
    <section className="relative w-full py-32 mt-10 min-h-[80vh] flex items-center border-t border-zinc-200 overflow-hidden">
      
      {/* 1. THE VIDEO BACKGROUND */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover scale-105" 
        src="./waterbg.mp4" 
      />
      
      {/* 2. FROSTED GLASS OVERLAY */}
      <div className="absolute inset-0 z-0 bg-white/30"></div>
      
      {/* 3. THE 3D KNOT (Restricted to the LEFT half of the screen on desktop) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-10">
        <ThreadKnot />
      </div>

      {/* 4. THE DATA CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-20 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Empty column is now on the LEFT to let the 3D thread breathe */}
          <div className="hidden lg:block"></div>
          
          {/* Text is now in the SECOND column (Right side) */}
          <div className="pointer-events-auto">
            <FadeInText>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-8 drop-shadow-sm text-white">
                The Thirst for Denim.
              </h2>
            </FadeInText>
            
            <FadeInText delay={0.1}>
              <p className="text-black text-lg leading-relaxed mb-8 max-w-lg bg-[#FAFAFA]/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-200 shadow-sm">
                The cotton required to produce a single pair of jeans demands immense irrigation. The dyeing and finishing processes poison local waterways with toxic chemicals.
              </p>
            </FadeInText>
            
            <FadeInText delay={0.2}>
              <div className="border-l-2 border-zinc-900 pl-6 py-2">
                <span className="block text-[4rem] md:text-[6rem] font-black text-white mix-blend-difference leading-none tracking-tighter text-zinc-900 drop-shadow-sm">
                  2,000
                </span>
                <span className="text-white block text-lg tracking-[0.1em] uppercase text-zinc-500 mt-2">
                  Gallons of water
                </span>
                <span className="text-white block text-sm text-zinc-400 mt-1 font-medium">
                  Consumed for one pair of jeans.
                </span>
              </div>
            </FadeInText>
          </div>
          
        </div>
      </div>
    </section>
  );
}