import FadeInText from '../ui/FadeInText';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';

export default function JournalSection() {
  const articles = [
    {
      id: 1,
      category: 'Investigation',
      title: 'The Myth of Circular Fashion.',
      time: '8 Min Read',
      img: './myth.avif',
      link: 'https://fashionunited.uk/news/fashion/the-myth-of-circular-fashion-economics-a-450-billion-dollar-miscalculation/2025033180832'
    },
    {
      id: 2,
      category: 'Exposé',
      title: 'Greenwashing and sustainable fashion industry.',
      time: '12 Min Read',
      img: './greenwashing.jpeg',
      link: 'https://www.sciencedirect.com/science/article/pii/S2452223622001225'
    },
    {
      id: 3,
      category: 'Supply Chain',
      title: 'Dyeing to Wear It: The Toxic Leather Trade.',
      time: '15 Min Read',
      img: './dyeing.jpg',
      link: 'https://www.sciencedirect.com/science/article/pii/S2452072119300413'
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-32 px-6 lg:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeInText>
              <span className="block text-sm tracking-[0.2em] uppercase text-zinc-400 mb-4">
                Curated Media
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-zinc-900">
                Required Reading.
              </h2>
            </FadeInText>
          </div>
          <FadeInText delay={0.2}>
            <p className="text-lg text-zinc-500 font-light max-w-sm">
              Deep dives, documentaries, and investigative reports exploring the true cost of the fashion industry.
            </p>
          </FadeInText>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Featured Video (Left Side - spans 7 cols) */}
          <div className="lg:col-span-7 group cursor-pointer">
            <FadeInText delay={0.2}>
              
              {/* Changed this from a <div> to an <a> tag to make the whole card clickable! */}
              <a 
                href="https://www.youtube.com/watch?v=OaGp5_Sfbss" // <-- Put your YouTube link here
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative w-full h-[400px] md:h-[600px] overflow-hidden bg-zinc-900 rounded-sm"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  // Put your thumbnail image link here. 
                  // Pro-tip: You can use YouTube's auto-generated thumbnail using this URL format:
                  src="https://img.youtube.com/vi/OaGp5_Sfbss/maxresdefault.jpg" 
                  alt="Documentary Thumbnail"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                    <Play className="text-white group-hover:text-zinc-900 ml-1" size={24} fill="currentColor" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-zinc-900 to-transparent">
                  <span className="text-xs tracking-widest uppercase text-white/70 mb-2 block">Featured Documentary</span>
                  <h3 className="text-3xl font-serif text-white">The True Cost</h3>
                </div>
              </a>

            </FadeInText>
          </div>

          {/* Article List (Right Side - spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {articles.map((article, index) => (
              <FadeInText key={article.id} delay={0.3 + (index * 0.1)}>
                <a href={article.link} className="group flex items-center gap-6 pb-8 border-b border-zinc-200 hover:border-zinc-900 transition-colors duration-500 block">
                  
                  {/* Thumbnail */}
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-sm bg-zinc-200">
                    <img 
                      src={article.img} 
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>

                  {/* Article Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs tracking-widest uppercase text-zinc-400">
                        {article.category}
                      </span>
                      <ArrowUpRight className="text-zinc-300 group-hover:text-zinc-900 transition-colors duration-300" size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-zinc-900 leading-tight mb-2 group-hover:text-zinc-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <span className="text-sm text-zinc-500 font-light">
                      {article.time}
                    </span>
                  </div>

                </a>
              </FadeInText>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}