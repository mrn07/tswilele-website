import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Globe, MapPin, Clock, ShieldCheck, Zap, Check, AlertCircle, Send } from "lucide-react";
import { waLink } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", service: "Business Website", budget: "$50 - $120", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.msg.trim()) e.msg = "Tell us a little about your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const text = `Hi Tswilele! I'm ${form.name}. I need: ${form.service}. Budget: ${form.budget}. Message: ${form.msg}`;
    setTimeout(() => {
      window.open(waLink(text), "_blank");
      setIsSubmitting(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  const inputCls = "w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl outline-none bg-[#FBFCFE] focus:border-[#E9B64A] focus:ring-4 focus:ring-yellow-500/10 text-sm transition";

  const contactCards = [
    { icon: <MessageCircle />, title: "WhatsApp", sub: "+263 778 658 230 — Fastest way", href: waLink() },
    { icon: <Mail />, title: "Email", sub: "nmutimbanyoka07@gmail.com", href: "mailto:nmutimbanyoka07@gmail.com" },
    { icon: <Globe />, title: "Website", sub: "https://tswilele.co.zw", href: "https://tswilele.co.zw" },
    { icon: <MapPin />, title: "Location", sub: "Harare, Zimbabwe • Working Worldwide", href: null },
  ];

  return (
    <section id="contact" className="py-[90px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">

        {/* LEFT - INFO */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-dark-gold font-extrabold tracking-[2px] uppercase text-xs">Get In Touch</p>
          <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-[#071A33] mt-3 leading-[1.1]">
            Tell Us What<br />You Want To <span className="text-gold">Build.</span>
          </h2>
          <p className="text-slate-500 my-4">Reply within a few hours on WhatsApp. Based in Harare, working worldwide.</p>

          {/* Trust badges - always animating */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { icon: <Zap size={14} />, label: "Reply in ~2 hrs" },
              { icon: <ShieldCheck size={14} />, label: "No Spam, Ever" },
              { icon: <Clock size={14} />, label: "Mon - Sat • 8am - 8pm" },
            ].map((b, i) => (
              <motion.span key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="inline-flex items-center gap-1.5 bg-off-white border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-navy">
                <span className="text-gold">{b.icon}</span> {b.label}
              </motion.span>
            ))}
          </div>

          <div className="grid gap-3">
            {contactCards.map((c, i) => {
              const inner = (
                <>
                  <motion.span whileHover={{ rotate: 10, scale: 1.05 }} className="w-12 h-12 rounded-xl bg-navy text-gold-2 grid place-items-center shrink-0">{c.icon}</motion.span>
                  <div><b className="block text-navy text-sm">{c.title}</b><span className="text-sm text-slate-600">{c.sub}</span></div>
                </>
              );
              return c.href ? (
                <motion.a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} whileHover={{ x: 8, scale: 1.01 }} className="flex gap-3.5 bg-off-white rounded-2xl p-4 items-center border border-transparent hover:border-gold transition">{inner}</motion.a>
              ) : (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex gap-3.5 bg-off-white rounded-2xl p-4 items-center">{inner}</motion.div>
              );
            })}
          </div>

          {/* Mini FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 bg-[#071A33] text-white rounded-2xl p-5">
            <p className="font-bold text-gold text-sm">Quick Answers</p>
            <ul className="mt-3 space-y-2 text-[13.5px] text-[#C3CFDD]">
              <li className="flex gap-2"><Check size={16} className="text-gold shrink-0 mt-0.5" /> How fast? Most websites live in 3-7 days.</li>
              <li className="flex gap-2"><Check size={16} className="text-gold shrink-0 mt-0.5" /> Do you need deposit? Yes, 50% to start, rest on launch.</li>
              <li className="flex gap-2"><Check size={16} className="text-gold shrink-0 mt-0.5" /> Payment? EcoCash, InnBucks, Bank Transfer & USD Cash.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 30, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }} className="bg-white border border-slate-200 rounded-[22px] p-6 shadow-[0_18px_40px_rgba(0,0,0,.07)] relative overflow-hidden">
          {/* Rotating gold ring - always on */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 w-32 h-32 rounded-full border-[12px] border-dashed border-gold/30 pointer-events-none" />

          <h3 className="text-navy font-bold text-lg relative">Request A Free Quote 🚀</h3>
          <p className="text-[13.5px] text-slate-500 mb-2 relative">Fill this in — it will open WhatsApp with your message ready.</p>

          <label className="text-[13px] font-bold text-slate-600 block my-2">Your Name *</label>
          <motion.input whileFocus={{ scale: 1.01 }} required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={`${inputCls} ${errors.name ? "border-red-400" : ""}`} placeholder="e.g. Tanaka Moyo" />
          {errors.name && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.name}</p>}

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[13px] font-bold text-slate-600 block my-2">What Do You Need?</label>
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={inputCls}>
                <option>Business Website</option><option>E-Commerce Store</option><option>School Website</option><option>Portfolio Website</option><option>Web Application / System</option><option>Question Paper Generator Access</option><option>CV Generator</option><option>Domain Registration</option><option>Website Hosting</option><option>Learning Platform</option><option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-[13px] font-bold text-slate-600 block my-2">Budget</label>
              <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} className={inputCls}>
                <option>Under $50</option><option>$50 - $120</option><option>$120 - $250</option><option>$250+</option>
              </select>
            </div>
          </div>

          <label className="text-[13px] font-bold text-slate-600 block my-2">Your Message *</label>
          <motion.textarea whileFocus={{ scale: 1.01 }} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} rows={4} className={`${inputCls} resize-none ${errors.msg ? "border-red-400" : ""}`} placeholder="I want a website for my... I need it by..." />
          {errors.msg && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.msg}</p>}

          <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full mt-4 py-3.5 rounded-full font-bold bg-linear-to-br from-gold-2 to-gold text-navy flex justify-center items-center gap-2 disabled:opacity-70">
            {isSubmitting ? <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>⟳</motion.span> : <><Send size={18} /> Send On WhatsApp</>}
            {isSubmitting ? " Opening WhatsApp..." : ""}
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center mt-2.5 text-xs font-bold text-emerald-600 flex items-center justify-center gap-1">
                <Check size={14} /> Message ready in WhatsApp — just press Send!
              </motion.p>
            )}
          </AnimatePresence>
          <p className="text-center mt-2.5 text-xs text-slate-500">No spam. We reply personally.</p>
        </motion.form>
      </div>
    </section>
  );
}