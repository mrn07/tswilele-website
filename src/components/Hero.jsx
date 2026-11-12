import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Check, FileText, GraduationCap, PenLine, IdCard } from "lucide-react";

const words = ["We Design. We Develop.", "Learning Platform 📚", "Question Paper Generator ✍️", "CV Generator That Gets You Hired 💼", "Websites That Sell 🚀", "Domain + Hosting, All In One 🌐"];
const marqueeItems = ["LEARNING PLATFORM", "CV GENERATOR", "QUESTION PAPER GENERATOR", "BUSINESS WEBSITES", "E-COMMERCE", "DOMAIN REGISTRATION", "HOSTING", "WEB APPLICATIONS"];

function useTyping() {
  const [text, setText] = useState("");
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false, timer;
    const tick = () => {
      const w = words[wi];
      if (!deleting) { ci++; setText(w.slice(0, ci)); if (ci === w.length) { deleting = true; timer = setTimeout(tick, 1600); return; } }
      else { ci--; setText(w.slice(0, ci)); if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; } }
      timer = setTimeout(tick, deleting ? 35 : 65);
    }; tick(); return () => clearTimeout(timer);
  }, []);
  return text;
}

function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let cur = 0; const iv = setInterval(() => { cur += Math.ceil(target / 40); if (cur >= target) { cur = target; clearInterval(iv); } setVal(cur); }, 30);
    return () => clearInterval(iv);
  }, [target]);
  return <b className="text-2xl block text-white">{val}{suffix}</b>;
}

export default function Hero() {
  const typing = useTyping();
  return (
    <section className="bg-[radial-gradient(900px_500px_at_85%_10%,rgba(233,182,74,.28),transparent_60%),radial-gradient(700px_400px_at_10%_90%,rgba(0,140,255,.25),transparent_60%),linear-gradient(135deg,#071A33_0%,#0B2C4A_55%,#0A1F3F_100%)] text-white pt-[150px] pb-[60px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:.7}}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#FFE9B0] px-3.5 py-2 rounded-full text-[13px] font-semibold"><Zap size={14} className="text-[#E9B64A]"/> Trusted in Zimbabwe • Fast • Affordable • Professional</span>
            <h1 className="text-[clamp(38px,5.5vw,62px)] font-black leading-[1.05] mt-4">Your Business Deserves A <span className="text-shine">Professional Website!</span></h1>
            <div className="text-[#FFD97A] min-h-[36px] text-[22px] font-bold mt-3">{typing}<span className="animate-pulse">|</span></div>
            <p className="text-[#C3CFDD] text-[17px] max-w-[560px] mt-2">We Design. We Develop. We Bring Your Ideas to Life. From learning platforms to CVs, question papers to full web applications — Tswilele builds it all for you.</p>
            <div className="flex gap-3.5 mt-6 flex-wrap">
              <a href="#platforms" className="inline-flex items-center gap-2.5 px-7 py-[15px] rounded-full font-bold bg-gradient-to-br from-[#FFD97A] to-[#E9B64A] text-[#071A33] shadow-xl shadow-yellow-500/30 hover:-translate-y-1 hover:scale-[1.02] transition">Explore Platforms <ArrowRight size={18}/></a>
              <a href="https://wa.me/263778658230" className="inline-flex items-center gap-2 px-7 py-[15px] rounded-full font-bold border-2 border-white text-white bg-white/10 hover:bg-white hover:text-[#071A33] transition">Get A Free Quote</a>
            </div>
            <div className="flex gap-4 mt-7 flex-wrap">
              <div className="glass px-4 py-3.5 rounded-2xl min-w-[135px]"><Counter target={120} suffix="+"/><span className="text-[13px] text-[#B9C6D8]">Projects Done</span></div>
              <div className="glass px-4 py-3.5 rounded-2xl min-w-[135px]"><Counter target={98} suffix="%"/><span className="text-[13px] text-[#B9C6D8]">Happy Clients</span></div>
              <div className="glass px-4 py-3.5 rounded-2xl min-w-[135px]"><b className="text-2xl block">24/7</b><span className="text-[13px] text-[#B9C6D8]">Support</span></div>
              <div className="glass px-4 py-3.5 rounded-2xl min-w-[135px]"><b className="text-2xl block">3 Days</b><span className="text-[13px] text-[#B9C6D8]">Avg. Delivery</span></div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:.92}} animate={{opacity:1, scale:1}} transition={{duration:.8, delay:.2}} className="relative">
            <div className="absolute -left-4 bottom-[90px] z-10 bg-white text-[#071A33] rounded-2xl p-3 flex gap-3 items-center shadow-2xl animate-float2"><span className="w-10 h-10 rounded-xl bg-[#00C2A8] grid place-items-center text-white"><FileText size={18}/></span><div><b className="text-[13px] block">CV Created!</b><span className="text-[11px] text-slate-500">Ready to download</span></div></div>
            <div className="absolute -right-2 top-8 z-10 bg-white text-[#071A33] rounded-2xl p-3 flex gap-3 items-center shadow-2xl animate-float2"><span className="w-10 h-10 rounded-xl bg-[#E9B64A] grid place-items-center"><Check size={18}/></span><div><b className="text-[13px] block">Website Published</b><span className="text-[11px] text-slate-500">tswilele.co.zw is live</span></div></div>
            <div className="rounded-[20px] overflow-hidden bg-white text-slate-800 shadow-[0_30px_60px_rgba(0,0,0,.4)] animate-float">
              <div className="bg-[#EAF0F7] px-3.5 py-3 flex gap-1.5 items-center"><span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"/><span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"/><span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"/><span className="flex-1 bg-white border border-slate-200 rounded-full px-3 py-1 text-[12px] text-slate-500 ml-2">🔒 https://tswilele.co.zw</span></div>
              <div className="p-5">
                <span className="bg-[#FFF3D0] text-[#8A5A00] text-xs font-bold px-3 py-1.5 rounded-full">✨ NEW: Learning Platform Live</span>
                <h3 className="text-[22px] font-bold text-[#071A33] mt-3">Grow Your Business<br/>Online With Us</h3>
                <p className="text-[13px] text-slate-500 my-2">Modern, mobile-friendly websites that bring customers to you — even while you sleep.</p>
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl p-3.5 text-white bg-gradient-to-br from-[#0B2C4A] to-[#2A5A9A]"><GraduationCap/><b className="text-[13px] block mt-1">Learning</b><span className="text-[11px] opacity-90">Study anywhere</span></div>
                  <div className="rounded-xl p-3.5 text-white bg-gradient-to-br from-[#E9B64A] to-[#FF8A00]"><PenLine/><b className="text-[13px] block mt-1">Exam Papers</b><span className="text-[11px] opacity-90">Auto generator</span></div>
                  <div className="rounded-xl p-3.5 text-white bg-gradient-to-br from-[#00C2A8] to-[#0088CC]"><IdCard/><b className="text-[13px] block mt-1">CV Maker</b><span className="text-[11px] opacity-90">Pro CV in minutes</span></div>
                </div>
              </div>
            </div>
            <div className="absolute right-5 -bottom-4 bg-[#071A33] text-[#FFD97A] px-3.5 py-2.5 rounded-xl font-mono text-xs shadow-xl animate-float2">&lt;h1&gt; Hello Future &lt;/h1&gt; • CSS • JS • React</div>
          </motion.div>
        </div>
        <div className="mt-10 overflow-hidden whitespace-nowrap border-t border-white/15 pt-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="inline-flex gap-9 animate-marquee font-bold tracking-wide text-[#D9E2EE] text-sm">{[...marqueeItems, ...marqueeItems].map((t,i)=><span key={i} className="flex gap-9"><span>{t}</span><span className="text-[#FFD97A]">•</span></span>)}</div>
        </div>
      </div>
    </section>
  );
}