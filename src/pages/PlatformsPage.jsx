import React from "react";
import { motion } from "framer-motion";
import { platforms } from "../data";
import { ArrowRight, Check, Star } from "lucide-react";

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-white text-navy">
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-20 text-center"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-6"
        >
          Our <span className="text-[#E9B64A]">Powerful</span> Platforms
        </motion.h1>
        
        {/* Typing Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#071A33]/80 max-w-2xl mx-auto mb-10 h-14"
        >
          <LoopTyping 
            phrases={[
              "Transforming education in Zimbabwe.",
              "Building digital careers.",
              "Innovating for Zimbabweans."
            ]}
            speed={50}
          />
        </motion.div>
      </motion.section>

      {/* Platforms Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-200"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-5xl mb-4 text-gold"
              >
                {platform.icon}
              </motion.div>
              <h2 className="text-2xl font-bold mb-3">{platform.title}</h2>
              <p className="text-navy/80 mb-6">{platform.desc}</p>
              
              <div className="mb-6">
                {platform.points.map((point, j) => (
                  <motion.div 
                    key={j}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    <Check size={16} className="text-gold" />
                    <span className="text-sm text-navy/80">{point}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a 
                href={platform.link} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg hover:bg-gold hover:text-navy transition"
              >
                {platform.cta} <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-navy text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Tswilele Learning Platform helped me pass my O-Levels!", name: "Sarah M." },
              { text: "The Question Paper Generator saves me hours of work!", name: "Mr. Thompson" },
              { text: "My CV got me 3 job interviews in one week.", name: "David K." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="#E9B64A" color="#E9B64A" />
                  ))}
                </div>
                <p className="mb-4">"{t.text}"</p>
                <p className="font-bold">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

// Typing animation that loops forever
function LoopTyping({ phrases, speed = 50 }) {
  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let delay = isDeleting ? 25 : speed;

    if (!isDeleting && text === current) {
      delay = 1600;
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((p) => (p + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(current.slice(0, text.length + (isDeleting ? -1 : 1)));
      if (!isDeleting && text.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), 1600);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, speed]);

  return (
    <span className="inline-block border-r-2 border-gold animate-pulse">
      {text}
    </span>
  );
}
