import FadeInText from '../ui/FadeInText';
import ThreadKnot from '../ThreadKnot';

export default function WaterSection() {
  return (
    <section className="relative w-full py-32 mt-10 min-h-[80vh] flex items-center border-t border-zinc-200 overflow-hidden">
      
      {/* 1. THE VIDEO BACKGROUND (Renders first, at the very bottom) */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105" 
          src="./waterbg.mp4" 
        />
        {/* FROSTED GLASS OVERLAY */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      {/* 2. THE 3D KNOT (Renders second, sits over the video on the left) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2">
        <ThreadKnot />
      </div>

      {/* 3. THE DATA CONTENT (Renders third, sits on top of everything) */}
      {/* 🚨 Notice we removed "z-20" here. Now the blend-mode can see the video! */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Empty column is on the LEFT to let the 3D thread breathe */}
          <div className="hidden lg:block"></div>
          
          {/* Text is in the SECOND column (Right side) */}
          <div className="pointer-events-auto">
            <FadeInText>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-8 text-white drop-shadow-sm">
                The Thirst for Denim.
              </h2>
            </FadeInText>
            
            <FadeInText delay={0.1}>
              <p className="text-black text-lg leading-relaxed mb-8 max-w-lg bg-[#FAFAFA]/40 backdrop-blur-sm p-6 rounded-2xl border border-zinc-200 shadow-sm">
                The cotton required to produce a single pair of jeans demands immense irrigation. The dyeing and finishing processes poison local waterways with toxic chemicals.
              </p>
            </FadeInText>
            
            <FadeInText delay={0.2}>
              <div className="border-l-2 border-white pl-6 py-2">
                
                {/* 🔥 The mix-blend-difference will now successfully invert the video! */}
                <span className="block text-[5rem] md:text-[7rem] font-black text-white mix-blend-difference leading-none tracking-tighter">
                  2,000
                </span>
                
                <span className="text-white block text-lg tracking-[0.1em] uppercase mt-2">
                  Gallons of water
                </span>
                <span className="text-white block text-sm mt-1 font-medium">
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