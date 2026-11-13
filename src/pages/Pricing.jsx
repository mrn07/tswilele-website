import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing, waLink } from "../data";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-[90px]">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <p className="text-gold font-extrabold tracking-[2px] uppercase text-xs">Affordable Packages</p>
        <h2 className="text-[clamp(30px,4.5vw,48px)] font-extrabold text-navy mt-3">
          Pricing That <span className="text-gold">Makes Sense.</span>
        </h2>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mt-6">
          <span className={`text-sm ${!isAnnual ? "font-bold text-navy" : "text-slate-500"}`}>Monthly</span>
          <motion.button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-navy"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="inline-block h-4 w-4 transform rounded-full bg-white"
              animate={{ x: isAnnual ? 6 : 0 }}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />
          </motion.button>
          <span className={`text-sm ${isAnnual ? "font-bold text-navy" : "text-slate-500"}`}>
            Annual <span className="text-gold">(Save 20%)</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-9 text-left items-stretch">
          {pricing.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-[24px] p-7 relative ${
                p.popular
                  ? "bg-navy text-white scale-[1.03] shadow-2xl"
                  : "bg-white border-2 border-slate-200"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 right-5 bg-gold text-navy text-xs font-black px-3 py-1.5 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h4 className="text-lg font-bold">{p.name}</h4>
              <p className={`text-[13px] ${p.popular ? "text-mut-grey" : "text-slate-500"}`}>
                {p.desc}
              </p>
              <motion.div
                key={isAnnual ? "annual" : "monthly"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[42px] font-black my-3"
              >
                {isAnnual ? p.priceAnnual : p.priceMonthly}{" "}
                <small className="text-sm font-semibold opacity-70">
                  {isAnnual ? "/ year" : "/ month"}
                </small>
              </motion.div>
              <ul className="my-4">
                {p.features.map((f, j) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.05 }}
                    className="flex gap-2.5 py-2 text-sm"
                  >
                    <Check size={16} className={p.popular ? "text-gold" : "text-emerald-500"} /> {f}
                  </motion.li>
                ))}
              </ul>
              <a
                href={waLink(`I want ${p.name}`)}
                className={`block text-center py-3.5 rounded-full font-bold ${
                  p.popular
                    ? "bg-linear-to-br from-gold-2 to-gold text-navy"
                    : "bg-navy text-white"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-5 text-[13px] text-slate-500">
          Prices in USD. Payment plans available. Chat to us for exact quote.
        </p>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-2 text-left">Features</th>
                {pricing.map((p) => (
                  <th key={p.name} className="px-4 py-2 text-center">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Support", "Updates", "Customization"].map((feature) => (
                <tr key={feature} className="border-b border-slate-200">
                  <td className="px-4 py-2">{feature}</td>
                  {pricing.map((p) => (
                    <motion.td
                      key={p.name}
                      className="px-4 py-2 text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      {p.features.includes(feature) ? (
                        <Check size={16} className="inline text-gold" />
                      ) : (
                        "—"
                      )}
                    </motion.td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
