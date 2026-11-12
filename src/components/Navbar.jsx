import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, MessageCircle } from "lucide-react";
import { waLink } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
     { label: "Home", href: "/" },
    { label: "Platforms", href: "/platforms" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-navy/95 backdrop-blur-xl shadow-xl py-2" : "bg-navy py-4"}`}>
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-white font-black text-[24px]">
          <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-2 to-gold grid place-items-center text-navy animate-spin-slow shadow-lg shadow-yellow-500/40">
            <Code2 />
          </span>
          <span>
            TSWILELE
            <small className="block text-[9px] tracking-[2.5px] text-gold-2 font-bold">
              LEARN • BUILD • GROW
            </small>
          </span>
        </a>

        <nav className="hidden lg:flex gap-7 items-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-light-blue font-semibold text-[14.5px] hover:text-white relative after:absolute after:left-0 after:-bottom-1.5 after:h-[3px] after:bg-gold after:w-0 hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            className="bg-white text-navy px-5 py-2.5 rounded-full font-extrabold text-sm hover:scale-105 transition flex items-center gap-2"
          >
            <MessageCircle size={16} /> WhatsApp Us →
          </a>
        </nav>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-3 bg-navy rounded-2xl p-5 flex flex-col gap-4 shadow-2xl border border-white/10"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white font-semibold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink()}
              className="bg-white text-navy px-4 py-3 rounded-full font-bold text-center"
            >
              WhatsApp Us →
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
