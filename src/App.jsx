import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { HomePlatforms } from "./components/Sections";
import { Featured } from "./components/Sections";
import { Services } from "./components/Sections";
import { Pricing } from "./components/Sections";
import { ProcessAndCTA } from "./components/Sections";
import { Contact } from "./components/Sections";
import PlatformsPage from "./pages/PlatformsPage";
import { Footer } from "./components/Sections";
import { WhatsAppFloat } from "./components/Sections";
import ServicesPage from "./pages/ServicesPage";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-[Inter] pt-[80px]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              {/* Trust bar */}
              <div className="bg-[#F6F8FB] border-b border-slate-200 py-7">
                <div className="max-w-[1200px] mx-auto px-5 flex justify-between flex-wrap gap-5 text-slate-500 font-semibold text-sm">
                  <span>⭐ <b className="text-[#071A33] text-base">4.9 / 5</b> from clients</span>
                  <span>🏫 Schools & Businesses Trust Us</span>
                  <span>📱 100% Mobile Friendly</span>
                  <span>⚡ Fast Loading</span>
                  <span>🔒 Secure & Reliable</span>
                </div>
              </div>
              <HomePlatforms />
              <Featured />
              <Services />
              <Pricing />
              <ProcessAndCTA />
              <Contact />
            </>
          } />
          <Route path="/platforms" element={<PlatformsPage />} />
           <Route path="/services" element={<ServicesPage/>} />
           <Route path="/pricing" element={<Pricing/>} />
           <Route path="/process" element={<ProcessAndCTA/>} />
           <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}