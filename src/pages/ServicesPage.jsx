import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Zap, Users, BookOpen, Globe, GraduationCap, FileText } from "lucide-react";
import React, { useState, useEffect } from "react";
import { services as servicesFromData, waLink } from "../data";

// Fallback if data.js is empty - so it NEVER crashes
const fallbackServices = [
  { icon: "📚", title: "E-Learning Platform", desc: "Interactive courses for Zimbabwean students.", points: ["O-Level Support", "A-Level Resources", "Teacher Training"], cta: "Explore" },
  { icon: "⚡", title: "Question Generator", desc: "Automated papers for teachers & institutions.", points: ["Customizable", "Time-saving", "Exam-standard"], cta: "Try Now" },
  { icon: "👥", title: "Career Tools", desc: "CV builders & job matching for Zimbabweans.", points: ["Professional Templates", "Job Alerts", "Interview Prep"], cta: "Get Started" },
];

const heroPhrases = [
  "Transforming education and careers in Zimbabwe.",
  "We build websites, platforms & digital tools.",
  "Fast. Beautiful. Built for Zimbabwe.",
];

export default function ServicesPage() {
  // Use data.js if it exists, otherwise fallback - and ALWAYS add points/cta
  const services = (servicesFromData?.length ? servicesFromData : fallbackServices).map((s, i) => ({
    ...fallbackServices[i % fallbackServices.length],
    ...s,
    points: s.points || fallbackServices[i % fallbackServices.length].points,
    cta: s.cta || "Learn More",
  }));

  return (
    <div className="min-h-screen bg-white text-[#071A33] overflow-x-hidden">

      {/* ============ 1. HERO ============ */}
      <section className="relative bg-[#071A33] text-white py-24 overflow-hidden">
        {/* Rotating gold rings - always on */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border-[30px] border-[#E9B64A]/10" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full border-[20px] border-white/5" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[#E9B64A] font-extrabold tracking-[3px] uppercase text-xs">
            What We Do
          </motion.p>

          <motion.h1 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-[clamp(36px,6vw,60px)] leading-[1.05] font-extrabold mt-4">
            Our <span className="text-[#E9B64A]">Services</span>
          </motion.h1>

          {/* Typing - LOOPS FOREVER */}
          <div className="h-[56px] mt-5 flex items-center justify-center">
            <LoopTyping phrases={heroPhrases} speed={45} />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="#services" className="bg-[#E9B64A] text-[#071A33] px-7 py-3.5 rounded-full font-bold hover:bg-white transition">Explore Services →</a>
            <a href={waLink("Hi! I need a website / platform")} className="border border-white/30 px-7 py-3.5 rounded-full font-bold hover:bg-white hover:text-[#071A33] transition">Get a Quote</a>
          </motion.div>
        </div>
      </section>

      {/* ============ 2. MAIN SERVICES GRID ============ */}
      <section id="services" className="max-w-[1200px] mx-auto px-5 py-[90px]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto">
          <p className="text-[#B88A1E] font-extrabold tracking-[2px] uppercase text-xs">Main Platforms</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold mt-3">Everything You Need, <span className="text-[#E9B64A]">In One Place.</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.slice(0, 3).map((service, i) => (
            <motion.div key={service.title + i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-[22px] p-6 shadow-sm hover:shadow-[0_20px_50px_rgba(7,26,51,0.12)] transition-shadow"
            >
              {/* Rotating icon badge - always on */}
              <div className="relative w-[64px] h-[64px] mb-4">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-2xl border-2 border-dashed border-[#E9B64A]" />
                <div className="absolute inset-[8px] bg-[#071A33] rounded-xl flex items-center justify-center text-[28px] text-white">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-[14px] text-slate-500 mt-1 leading-relaxed">{service.desc}</p>

              <div className="mt-5 space-y-2">
                {(service.points || []).map((point, j) => (
                  <motion.div key={j} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + j * 0.08 }} className="flex items-center gap-2 text-[13.5px] text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-[#E9B64A]/20 flex items-center justify-center shrink-0"><Check size={13} className="text-[#071A33]" /></span>
                    {point}
                  </motion.div>
                ))}
              </div>

              <motion.a href={waLink(`Hi! I want ${service.title}`)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-6 inline-flex items-center gap-2 bg-[#071A33] text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-[#E9B64A] hover:text-[#071A33] transition">
                {service.cta} <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ 3. WHAT ELSE WE DO ============ */}
      <section className="py-[90px] bg-[#F8FAFD]">
        <div className="max-w-[1200px] mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#B88A1E] font-extrabold tracking-[2px] uppercase text-xs">What Else We Do</p>
            <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold mt-3">We Build <span className="text-[#E9B64A]">Everything Online.</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {services.map((s, i) => (
              <motion.div key={s.title + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, rotate: -0.5 }}
                className="bg-white border border-slate-200 rounded-[18px] p-5 hover:shadow-xl transition"
              >
                <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }} className="text-2xl mb-3">{s.icon}</motion.div>
                <h4 className="font-bold">{s.title}</h4>
                <p className="text-[13.5px] text-slate-500 mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={waLink("Hi! I need a website / domain / hosting")} className="inline-flex items-center gap-2 bg-[#071A33] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#E9B64A] hover:text-[#071A33] transition">
              I Need A Website — Get Quote <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ 4. TESTIMONIALS ============ */}
      <section className="bg-[#071A33] text-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold text-center mb-2">What Users Say</motion.h2>
          <div className="text-center mb-10 h-6"><LoopTyping phrases={["Loved by students.", "Trusted by teachers.", "Built for Zimbabwe."]} speed={60} small /></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Tswilele Learning Platform helped me pass my O-Levels!", name: "Sarah M." },
              { text: "The Question Paper Generator saves me hours of work!", name: "Mr. Thompson" },
              { text: "My CV got me 3 job interviews in one week.", name: "David K." },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: i * 0.12, duration: 0.5 }} whileHover={{ y: -5 }} className="bg-white/10 border border-white/10 p-6 rounded-2xl">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => (<Star key={j} size={16} fill="#E9B64A" color="#E9B64A" />))}</div>
                <p className="text-white/90">"{t.text}"</p>
                <p className="font-bold mt-4 text-[#E9B64A]">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== TYPING THAT LOOPS FOREVER: type -> pause -> delete -> next phrase =====
function LoopTyping({ phrases, speed = 50, small = false }) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let delay = isDeleting ? 25 : speed;

    if (!isDeleting && text === current) {
      delay = 1600; // pause when full
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((p) => (p + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(current.slice(0, text.length + (isDeleting ? -1 : 1)));
      if (!isDeleting && text.length + 1 === current.length) {
        // will pause next tick, then start deleting
        setTimeout(() => setIsDeleting(true), 1600);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, speed]);

  return (
    <span className={`${small ? "text-[#E9B64A] text-sm" : "text-slate-300 text-[18px] md:text-[20px]"} font-medium`}>
      {text}
      <span className="inline-block w-[2px] h-[1.1em] bg-[#E9B64A] ml-1 animate-pulse align-middle" />
    </span>
  );
}