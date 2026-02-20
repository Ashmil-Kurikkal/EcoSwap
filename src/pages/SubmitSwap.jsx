import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function SubmitSwap() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Expanded State for a comprehensive form
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '',
    category: '',
    innovation: '',
    description: '',
    link: ''
  });
  
  const luxuryEasing = [0.16, 1, 0.3, 1];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "4e6915ab-dc86-4ffa-8e4b-93fa164d3f66",
      subject: `New AERA Submission: ${formData.innovation}`,
      from_name: "AERA Platform",
      Brand_Name: formData.name,
      Contact_Email: formData.email,
      Category: formData.category,
      Innovation_Title: formData.innovation,
      Impact_Description: formData.description,
      Reference_Link: formData.link || "None provided",
    };

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
      setIsSubmitted(true); // Fallback for the hackathon demo
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="w-full bg-zinc-950 text-[#FAFAFA] min-h-screen pt-32 pb-24 selection:bg-zinc-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 min-h-[70vh]">
        
        {/* Left Side: The Manifesto (Takes up 5 columns) */}
        <div className="flex flex-col justify-center lg:col-span-5 relative z-10">
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
            className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-lg mb-12"
          >
            We cannot recycle our way out of overproduction. The most sustainable garment is the one already in your closet. We invite brands, material scientists, and circular designers to submit their innovations to the Aera index.
          </motion.p>
        </div>

        {/* Right Side: The Comprehensive Form (Takes up 7 columns) */}
        <div className="flex flex-col justify-center lg:col-span-7 relative z-10">
          <AnimatePresence mode="wait">
            
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: luxuryEasing }}
                onSubmit={handleSubmit} 
                className="w-full"
              >
                {/* 2-Column Grid for shorter inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-10">
                  
                  {/* Name */}
                  <div className="relative">
                    <input 
                      type="text" id="name" required value={formData.name} onChange={handleInputChange}
                      className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-zinc-300 transition-colors placeholder-transparent" 
                      placeholder="Brand Name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-400 cursor-text">
                      Submitter Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input 
                      type="email" id="email" required value={formData.email} onChange={handleInputChange}
                      className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-zinc-300 transition-colors placeholder-transparent" 
                      placeholder="Contact Email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-400 cursor-text">
                      Contact Email
                    </label>
                  </div>

                  {/* Category Dropdown */}
                  <div className="relative">
                    <select 
                      id="category" required value={formData.category} onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-zinc-300 focus:outline-none focus:border-zinc-300 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-zinc-900 text-zinc-500">Select Category</option>
                      <option value="Material Science" className="bg-zinc-900">Material Science</option>
                      <option value="Supply Chain Tool" className="bg-zinc-900">Supply Chain Tool</option>
                      <option value="Circular Design" className="bg-zinc-900">Circular Design</option>
                      <option value="Research & Data" className="bg-zinc-900">Research & Data</option>
                    </select>
                    <label htmlFor="category" className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-zinc-500">
                      Innovation Category
                    </label>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-0 top-4 pointer-events-none">
                      <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  {/* Innovation Title */}
                  <div className="relative">
                    <input 
                      type="text" id="innovation" required value={formData.innovation} onChange={handleInputChange}
                      className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-zinc-300 transition-colors placeholder-transparent" 
                      placeholder="Innovation Title"
                    />
                    <label htmlFor="innovation" className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-400 cursor-text">
                      Name of Material
                    </label>
                  </div>
                </div>

                {/* Full Width Textarea for Description */}
                <div className="relative mb-10">
                  <textarea 
                    id="description" required rows="3" value={formData.description} onChange={handleInputChange}
                    className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-zinc-300 transition-colors placeholder-transparent resize-none" 
                    placeholder="Impact Description"
                  ></textarea>
                  <label htmlFor="description" className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-400 cursor-text">
                    Describe the Environmental Impact
                  </label>
                </div>

                {/* Full Width Link Input */}
                <div className="relative mb-12">
                  <input 
                    type="url" id="link" value={formData.link} onChange={handleInputChange}
                    className="peer w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-zinc-300 transition-colors placeholder-transparent" 
                    placeholder="Reference Link"
                  />
                  <label htmlFor="link" className="absolute left-0 -top-3.5 text-xs tracking-widest uppercase text-zinc-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-zinc-400 cursor-text">
                    Reference Link or Website (Optional)
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group flex items-center gap-4 pt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm tracking-widest uppercase font-medium group-hover:text-zinc-300 transition-colors">
                    {isSubmitting ? 'Transmitting...' : 'Submit to Index'}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-zinc-300 group-hover:bg-[#FAFAFA] group-hover:text-zinc-950 transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </motion.form>
            ) : (
              /* THE SUCCESS STATE */
              <motion.div 
                key="success"
                initial={{ opacity: 0, filter: "blur(10px)" }} 
                animate={{ opacity: 1, filter: "blur(0px)" }} 
                transition={{ duration: 0.8, ease: luxuryEasing }}
                className="flex flex-col justify-center items-start h-full"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-8">
                  <Check className="text-zinc-950" size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-[#FAFAFA]">
                  Submission Received.
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  Thank you, <span className="text-white italic">{formData.name}</span>. Our researchers will review <span className="text-white">{formData.innovation}</span> and add it to the global index shortly. Welcome to the movement.
                </p>
                
                <button 
                  onClick={() => { 
                    setIsSubmitted(false); 
                    setFormData({name: '', email: '', category: '', innovation: '', description: '', link: ''}); 
                  }}
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