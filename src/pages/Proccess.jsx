import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { waLink } from "../data";

export default function ProcessAndCTA() {
  const steps = [
    { n: "1", t: "Tell Us Your Idea", d: "WhatsApp us what you need. We listen, advise and give you a free quote." },
    { n: "2", t: "We Design", d: "You see a preview design. We change it until you love it." },
    { n: "3", t: "We Build", d: "We develop, test on mobile & desktop, and add your content." },
    { n: "4", t: "You Go Live 🚀", d: "We launch, give you training & support. Your business is online!" },
  ];

  return (
    <>
      <section id="process" className="py-[90px] bg-blue-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-gold font-extrabold tracking-[2px] uppercase text-xs">How It Works</p>
          <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-navy mt-3">
            From Idea To Live In <span className="text-gold">4 Simple Steps.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="text-center p-6 bg-white border border-slate-200 rounded-[20px] hover:border-gold"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-14 h-14 rounded-full bg-linear-to-br from-[#FFD97A] to-gold grid place-items-center font-black text-xl mx-auto mb-3 shadow-lg shadow-yellow-500/30"
                >
                  {s.n}
                </motion.div>
                <h4 className="font-bold text-[#071A33]">{s.t}</h4>
                <p className="text-[13.5px] text-slate-500 mt-1">{s.d}</p>
              </motion.div>
            ))}
            {/* Timeline connectors */}
            <div className="hidden lg:flex absolute top-1/2 left-1/4 w-[50%] h-1 bg-gold/20 -translate-y-1/2">
              <motion.div
                className="h-full bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-navy to-navy-dark text-white text-center py-[90px]">
        <div className="max-w-[1200px] mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold">Let's Build Your Online Presence!</h2>
            <p className="text-mut-grey max-w-[600px] mx-auto my-4">
              Get in touch today for a website that takes your business to the next level. Free consultation — no pressure.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <motion.a
                href={waLink()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-linear-to-br from-gold-2 to-gold text-navy"
              >
                💬 WhatsApp Now <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="mailto:nmutimbanyoka07@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold border-2 border-white hover:bg-white/10"
              >
                ✉️ Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
