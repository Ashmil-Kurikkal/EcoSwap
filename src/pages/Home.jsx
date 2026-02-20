import Hero from '../components/home/Hero';
import WaterSection from '../components/home/WaterSection';
import ImpactData from '../components/home/ImpactData';
import GsapScroll from '../components/home/GsapScroll';
import JournalSection from '../components/home/JournalSection';

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-300">
      <div className="h-24 md:h-32"></div> {/* Spacer for Navbar */}
      
      <Hero />
      <WaterSection />
      <ImpactData />
      <JournalSection />
      <GsapScroll />
      
    </div>
  );
}