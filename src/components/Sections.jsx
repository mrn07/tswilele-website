import { motion } from "framer-motion";
import { Check, ArrowRight, MessageCircle, Mail, Globe, MapPin, BookOpen, Zap, Smartphone } from "lucide-react";
import { platforms, services, pricing, waLink } from "../data";
import { useState } from "react";

const fadeUp = { initial: {opacity:0, y:30}, whileInView: {opacity:1, y:0}, viewport: {once:true, margin:"-80px"}, transition: {duration:.6} };

export function HomePlatforms() {
  return (
    <section id="platforms" className="py-[90px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-[#B88A1E] font-extrabold tracking-[2px] uppercase text-xs flex items-center gap-2"><span className="w-7 h-[3px] bg-[#E9B64A] rounded-full inline-block"/> Our Flagship Platforms</p>
        <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#071A33] mt-3">One Brand. <span className="gold-text">Three Powerful Tools.</span></h2>
        <p className="text-slate-500 max-w-[640px] text-[17px] mt-2">Built by Tswilele for students, teachers, job seekers and businesses across Zimbabwe and beyond.</p>
        <div className="grid md:grid-cols-3 gap-5 mt-9">
          {platforms.map((p,i)=>(
            <motion.article key={p.title} {...fadeUp} transition={{delay:i*0.1, duration:.6}} whileHover={{y:-8}} className="bg-white border border-slate-200 rounded-[22px] p-7 relative overflow-hidden hover:shadow-[0_22px_45px_rgba(7,26,51,.14)] hover:border-[#FFE4A0] transition group">
              <span className={`absolute top-[18px] right-[18px] text-[11px] font-extrabold px-2.5 py-1.5 rounded-full ${p.badgeClass}`}>{p.badge}</span>
              <div className="text-4xl mb-4 group-hover:rotate-[-8deg] group-hover:scale-110 transition">{p.icon}</div>
              <h3 className="text-[20px] font-bold text-[#071A33]">{p.title}</h3>
              <p className="text-slate-500 text-[14.5px] my-3">{p.desc}</p>
              <ul className="mb-4">{p.points.map(pt=><li key={pt} className="flex gap-2 items-center text-[13.5px] py-1.5 text-slate-700"><Check size={16} className="text-emerald-500 shrink-0"/> {pt}</li>)}</ul>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="font-extrabold text-[#071A33] text-sm hover:text-[#B88A1E]">{p.cta}</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Featured() {
  return (
    <section className="bg-[#071A33] text-white py-[90px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp}>
          <p className="text-[#FFD97A] font-extrabold tracking-[2px] uppercase text-xs">Why Tswilele Learning?</p>
          <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold mt-3">Learning Made <span className="gold-text">Simple, Fun & Accessible.</span></h2>
          <p className="text-[#C3CFDD] mt-3 max-w-[560px]">Whether you are a student preparing for exams or a teacher setting them, Tswilele saves you time and helps you succeed.</p>
          <div className="grid gap-3 my-6">
            {[{icon:<BookOpen/>, t:"All Subjects In One Place", d:"Maths, Science, English, Shona, History & more."},{icon:<Zap/>, t:"Instant Results & Feedback", d:"Know your score immediately after each quiz."},{icon:<Smartphone/>, t:"Works On Any Phone", d:"No app needed. Just open tswilele.co.zw"}].map(f=>(
              <div key={f.t} className="flex gap-3.5 bg-white/10 border border-white/10 p-3.5 rounded-2xl hover:translate-x-2 transition"><span className="w-11 h-11 shrink-0 rounded-xl bg-[#E9B64A] text-[#071A33] grid place-items-center">{f.icon}</span><div><b className="block text-[15px]">{f.t}</b><span className="text-[13px] text-[#B9C6D8]">{f.d}</span></div></div>
            ))}
          </div>
          <a href={waLink("Hi! I want to join Tswilele Learning")} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-gradient-to-br from-[#FFD97A] to-[#E9B64A] text-[#071A33]">Join Learning Platform <ArrowRight size={18}/></a>
        </motion.div>
        <motion.div {...fadeUp} transition={{delay:.15}} className="rounded-[20px] overflow-hidden bg-white text-slate-800 shadow-2xl animate-float">
          <div className="bg-[#071A33] text-white px-4 py-3.5 flex justify-between"><span>📚 Tswilele Learning Dashboard</span><span>● ● ●</span></div>
          <div className="p-5"><h4 className="text-lg font-bold text-[#071A33]">Welcome back, Student! 👋</h4><p className="text-[13px] text-slate-500">Keep going — you are 78% to your goal!</p>
            <div className="mt-4"><b className="text-[13px]">Mathematics - Exam Prep</b><div className="h-2.5 bg-slate-100 rounded-full overflow-hidden my-2"><motion.div initial={{width:0}} whileInView={{width:"78%"}} transition={{duration:1.2}} className="h-full bg-gradient-to-r from-[#FFD97A] to-[#E9B64A]"/></div><span className="text-xs text-slate-500">78% Complete</span></div>
            <div className="mt-3"><b className="text-[13px]">English - Comprehension</b><div className="h-2.5 bg-slate-100 rounded-full overflow-hidden my-2"><motion.div initial={{width:0}} whileInView={{width:"65%"}} transition={{duration:1.2, delay:.2}} className="h-full bg-gradient-to-r from-[#FFD97A] to-[#E9B64A]"/></div><span className="text-xs text-slate-500">65% Complete</span></div>
            <div className="grid grid-cols-3 gap-2.5 mt-4">{[["12","Quizzes Done"],["92%","Average Score"],["5","Certificates"]].map(([v,l])=><div key={l} className="bg-[#F6F8FB] rounded-xl p-3 text-center"><b className="text-lg text-[#071A33] block">{v}</b><span className="text-[11px] text-slate-500">{l}</span></div>)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-[90px] bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-[#B88A1E] font-extrabold tracking-[2px] uppercase text-xs">What Else We Do</p>
        <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#071A33] mt-3">We Build <span className="gold-text">Everything Online.</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {services.map((s,i)=>(
            <motion.div key={s.title} {...fadeUp} transition={{delay:(i%4)*0.08}} whileHover={{y:-6, rotate:-0.5}} className="bg-white border border-slate-200 rounded-[18px] p-5 hover:shadow-xl">
              <div className="text-2xl mb-3">{s.icon}</div><h4 className="font-bold text-[#071A33]">{s.title}</h4><p className="text-[13.5px] text-slate-500 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8"><a href={waLink("Hi! I need a website / domain / hosting")} className="inline-flex items-center gap-2 bg-[#071A33] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#E9B64A] hover:text-[#071A33] transition">I Need A Website — Get Quote <ArrowRight size={18}/></a></div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-[90px]">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <p className="text-[#B88A1E] font-extrabold tracking-[2px] uppercase text-xs">Affordable Packages</p>
        <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#071A33] mt-3">Pricing That <span className="gold-text">Makes Sense.</span></h2>
        <div className="grid md:grid-cols-3 gap-5 mt-9 text-left items-stretch">
          {pricing.map((p,i)=>(
            <motion.div key={p.name} {...fadeUp} transition={{delay:i*0.1}} whileHover={{y:-6}} className={`rounded-[24px] p-7 relative ${p.popular ? "bg-[#071A33] text-white scale-[1.03] shadow-2xl" : "bg-white border-2 border-slate-200"}`}>
              {p.popular && <span className="absolute -top-3 right-5 bg-[#E9B64A] text-[#071A33] text-xs font-black px-3 py-1.5 rounded-full">MOST POPULAR</span>}
              <h4 className="text-lg font-bold">{p.name}</h4><p className={`text-[13px] ${p.popular ? "text-[#C3CFDD]" : "text-slate-500"}`}>{p.desc}</p>
              <div className="text-[42px] font-black my-3">{p.price} <small className="text-sm font-semibold opacity-70">from / once-off</small></div>
              <ul className="my-4">{p.features.map(f=><li key={f} className="flex gap-2.5 py-2 text-sm"><Check size={16} className={p.popular ? "text-[#E9B64A]" : "text-emerald-500"} /> {f}</li>)}</ul>
              <a href={waLink(`I want ${p.name}`)} className={`block text-center py-3.5 rounded-full font-bold ${p.popular ? "bg-gradient-to-br from-[#FFD97A] to-[#E9B64A] text-[#071A33]" : "bg-[#071A33] text-white"}`}>{p.cta}</a>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-5 text-[13px] text-slate-500">Prices in USD. Payment plans available. Chat to us for exact quote.</p>
      </div>
    </section>
  );
}

export function ProcessAndCTA() {
  const steps = [
    { n: "1", t: "Tell Us Your Idea", d: "WhatsApp us what you need. We listen, advise and give you a free quote." },
    { n: "2", t: "We Design", d: "You see a preview design. We change it until you love it." },
    { n: "3", t: "We Build", d: "We develop, test on mobile & desktop, and add your content." },
    { n: "4", t: "You Go Live 🚀", d: "We launch, give you training & support. Your business is online!" },
  ];
  return (<>
    <section id="process" className="py-[90px] bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-[#B88A1E] font-extrabold tracking-[2px] uppercase text-xs">How It Works</p>
        <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#071A33] mt-3">From Idea To Live In <span className="gold-text">4 Simple Steps.</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
          {steps.map((s,i)=><motion.div key={s.n} {...fadeUp} transition={{delay:i*0.1}} whileHover={{y:-6}} className="text-center p-6 bg-white border border-slate-200 rounded-[20px] hover:border-[#FFD97A]"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD97A] to-[#E9B64A] grid place-items-center font-black text-xl mx-auto mb-3 shadow-lg shadow-yellow-500/30">{s.n}</div><h4 className="font-bold text-[#071A33]">{s.t}</h4><p className="text-[13.5px] text-slate-500 mt-1">{s.d}</p></motion.div>)}
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-[#071A33] to-[#0B2C4A] text-white text-center py-[90px]">
      <div className="max-w-[1200px] mx-auto px-5"><motion.div {...fadeUp}><h2 className="text-[clamp(28px,4vw,44px)] font-extrabold">Let's Build Your Online Presence!</h2><p className="text-[#C3CFDD] max-w-[600px] mx-auto my-4">Get in touch today for a website that takes your business to the next level. Free consultation — no pressure.</p><div className="flex gap-3.5 justify-center flex-wrap"><a href={waLink()} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-gradient-to-br from-[#FFD97A] to-[#E9B64A] text-[#071A33]">💬 WhatsApp Now</a><a href="mailto:nmutimbanyoka07@gmail.com" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold border-2 border-white">✉️ Email Us</a></div></motion.div></div>
    </section>
  </>);
}

export function Contact() {
  const [form, setForm] = useState({ name: "", service: "Business Website", budget: "$50 - $120", msg: "" });
  const submit = (e) => {
    e.preventDefault();
    const text = `Hi Mr N! I'm ${form.name}. I need: ${form.service}. Budget: ${form.budget}. Message: ${form.msg}`;
    window.open(waLink(text), "_blank");
  };
  const inputCls = "w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl outline-none bg-[#FBFCFE] focus:border-[#E9B64A] focus:ring-4 focus:ring-yellow-500/10 text-sm";
  return (
    <section id="contact" className="py-[90px]">
      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
        <div><p className="text-[#B88A1E] font-extrabold tracking-[2px] uppercase text-xs">Get In Touch</p><h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#071A33] mt-3">Tell Us What<br/>You Want To Build.</h2><p className="text-slate-500 my-4">Reply within a few hours on WhatsApp. Based in Harare, working worldwide.</p>
          <div className="grid gap-3">
            <a href={waLink()} className="flex gap-3.5 bg-[#F6F8FB] rounded-2xl p-4 items-center hover:translate-x-1.5 transition"><span className="w-12 h-12 rounded-xl bg-[#071A33] text-[#FFD97A] grid place-items-center"><MessageCircle/></span><div><b className="block text-[#071A33] text-sm">WhatsApp</b><span className="text-sm text-slate-600">+263 778 658 230 — Fastest way</span></div></a>
            <a href="mailto:nmutimbanyoka07@gmail.com" className="flex gap-3.5 bg-[#F6F8FB] rounded-2xl p-4 items-center hover:translate-x-1.5 transition"><span className="w-12 h-12 rounded-xl bg-[#071A33] text-[#FFD97A] grid place-items-center"><Mail/></span><div><b className="block text-[#071A33] text-sm">Email</b><span className="text-sm text-slate-600">nmutimbanyoka07@gmail.com</span></div></a>
            <a href="https://tswilele.co.zw" className="flex gap-3.5 bg-[#F6F8FB] rounded-2xl p-4 items-center hover:translate-x-1.5 transition"><span className="w-12 h-12 rounded-xl bg-[#071A33] text-[#FFD97A] grid place-items-center"><Globe/></span><div><b className="block text-[#071A33] text-sm">Website</b><span className="text-sm text-slate-600">https://tswilele.co.zw</span></div></a>
            <div className="flex gap-3.5 bg-[#F6F8FB] rounded-2xl p-4 items-center"><span className="w-12 h-12 rounded-xl bg-[#071A33] text-[#FFD97A] grid place-items-center"><MapPin/></span><div><b className="block text-[#071A33] text-sm">Location</b><span className="text-sm text-slate-600">Harare, Zimbabwe • Working Worldwide</span></div></div>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white border border-slate-200 rounded-[22px] p-6 shadow-[0_18px_40px_rgba(0,0,0,.07)]">
          <h3 className="text-[#071A33] font-bold text-lg">Request A Free Quote 🚀</h3><p className="text-[13.5px] text-slate-500 mb-2">Fill this in — it will open WhatsApp with your message ready.</p>
          <label className="text-[13px] font-bold text-slate-600 block my-2">Your Name</label><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className={inputCls} placeholder="e.g. Tanaka Moyo"/>
          <div className="grid sm:grid-cols-2 gap-3"><div><label className="text-[13px] font-bold text-slate-600 block my-2">What Do You Need?</label><select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className={inputCls}><option>Business Website</option><option>E-Commerce Store</option><option>School Website</option><option>Portfolio Website</option><option>Web Application / System</option><option>Question Paper Generator Access</option><option>CV Generator</option><option>Domain Registration</option><option>Website Hosting</option><option>Learning Platform</option><option>Other</option></select></div><div><label className="text-[13px] font-bold text-slate-600 block my-2">Budget</label><select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})} className={inputCls}><option>Under $50</option><option>$50 - $120</option><option>$120 - $250</option><option>$250+</option></select></div></div>
          <label className="text-[13px] font-bold text-slate-600 block my-2">Your Message</label><textarea value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} rows={4} className={inputCls} placeholder="I want a website for my... I need it by..."/>
          <button className="w-full mt-4 py-3.5 rounded-full font-bold bg-gradient-to-br from-[#FFD97A] to-[#E9B64A] text-[#071A33] flex justify-center items-center gap-2">Send On WhatsApp <MessageCircle size={18}/></button>
          <p className="text-center mt-2.5 text-xs text-slate-500">No spam. We reply personally.</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050F21] text-[#A9B7CB] pt-12 pb-5">
      <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-7">
        <div><a href="#" className="text-white font-black text-xl flex items-center gap-2"><span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD97A] to-[#E9B64A] grid place-items-center text-[#071A33]">{"</>"}</span>TSWILELE</a><p className="text-sm mt-3 leading-relaxed">We Design. We Develop. We Bring Your Ideas to Life. Learning, CVs, Exam Papers, Websites & Hosting — all in one place.</p></div>
        <div><h4 className="text-white font-bold mb-3">Platforms</h4><a href="#platforms" className="block text-sm leading-8 hover:text-[#E9B64A]">Learning Platform</a><a href="#platforms" className="block text-sm leading-8 hover:text-[#E9B64A]">Question Paper Generator</a><a href="#platforms" className="block text-sm leading-8 hover:text-[#E9B64A]">CV Generator</a></div>
        <div><h4 className="text-white font-bold mb-3">Services</h4><a href="#services" className="block text-sm leading-8 hover:text-[#E9B64A]">Business Websites</a><a href="#services" className="block text-sm leading-8 hover:text-[#E9B64A]">E-Commerce</a><a href="#services" className="block text-sm leading-8 hover:text-[#E9B64A]">Domain & Hosting</a><a href="#services" className="block text-sm leading-8 hover:text-[#E9B64A]">Web Applications</a></div>
        <div><h4 className="text-white font-bold mb-3">Contact</h4><p className="text-sm leading-7">WhatsApp: +263 778 658 230<br/>Email: nmutimbanyoka07@gmail.com<br/>Web: tswilele.co.zw<br/>Harare, Zimbabwe</p></div>
      </div>
      <div className="max-w-[1200px] mx-auto px-5 border-t border-white/10 mt-8 pt-4 flex justify-between flex-wrap gap-2 text-[13px]"><span>© 2026 Tswilele. All rights reserved. Developed by Nyasha Mutimbanyoka</span><span>Trusted | Innovative | Professional</span></div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return <a href={waLink("Hi Mr N! I want to ask about...")} className="fixed right-[18px] bottom-[18px] z-[999] w-[62px] h-[62px] rounded-full bg-[#25D366] grid place-items-center text-white text-[30px] shadow-xl animate-pulse-ring hover:scale-110 transition">💬</a>;
}