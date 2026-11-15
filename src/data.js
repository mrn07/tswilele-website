export const WHATSAPP = "263778658230";
export const waLink = (text="Hi Tswilele! I want a website") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const platforms = [
  {
    icon: "🎓", title: "Tswilele Learning Platform", badge: "POPULAR", badgeClass: "bg-[#FFF3D0] text-[#8A5A00]",
    desc: "Study notes, quizzes, past papers and lessons — all in one place, on any device.",
    points: ["Notes for O-Level, A-Level & Primary", "Interactive quizzes & instant marking", "Learn on phone, tablet or PC"],
    cta: "Start Learning →", link: "https://learn.tswilele.co.zw"
  },
  {
    icon: "✍️", title: "Question Paper Generator", badge: "TEACHERS LOVE IT", badgeClass: "bg-[#FFE8D0] text-[#8A3B00]",
    desc: "Create professional exam papers in minutes. No more typing from scratch.",
    points: ["Choose subject, topic & marks", "Auto layout & answer guide", "Download & print as PDF"],
    cta: "Generate A Paper →", link: "https://questions.tswilele.co.zw"
  },
  {
    icon: "💼", title: "CV Generator", badge: "GET HIRED FASTER", badgeClass: "bg-[#D0F5E8] text-[#00684A]",
    desc: "Build a beautiful, professional CV that gets you interviews — in under 10 minutes.",
    points: ["Modern templates that stand out", "No design skills needed", "Download as PDF instantly"],
    cta: "Create My CV →", link: "https://cv.tswilele.co.zw"
  },
];

export const services = [
  { icon: "🌐", title: "Business Websites", desc: "Professional websites that make your business look serious and trustworthy." },
  { icon: "🛒", title: "E-Commerce Stores", desc: "Sell online with cart, payments & delivery — your shop open 24/7." },
  { icon: "🏫", title: "School Websites", desc: "School portals, results, admissions & announcements in one place." },
  { icon: "👔", title: "Portfolio Websites", desc: "Show your work beautifully and get more clients and jobs." },
  { icon: "💻", title: "Web Applications", desc: "Custom systems: management, booking, inventory & more." },
  { icon: "📱", title: "Responsive Design", desc: "Perfect on mobile, tablet & desktop. No pinching, no zooming." },
  { icon: "🔄", title: "Redesign & Maintenance", desc: "We refresh old websites and keep them fast & secure." },
  { icon: "🖥️", title: "Domain & Hosting", desc: "We register your .co.zw / .com domain and host it for you." },
];

export const pricing = [
  { name: "Starter", price: "$50", desc: "For small business & personal brand", features: ["1-3 Page Website", "Mobile Friendly", "WhatsApp Button", "Contact Form", "Free Domain Advice"], popular: false, cta: "Choose Starter" },
  { name: "Business Pro", price: "$120", desc: "For growing businesses & schools", features: ["Up to 8 Pages", "Domain + 1 Year Hosting", "Admin Panel / CMS", "SEO Setup", "1 Month Free Support"], popular: true, cta: "Choose Business Pro" },
  { name: "E-Commerce / Custom App", price: "$250", desc: "For online stores & systems", features: ["Online Store / System", "Payments Integration", "Product Management", "Domain + Hosting", "Training + Support"], popular: false, cta: "Get Custom Quote" },
];