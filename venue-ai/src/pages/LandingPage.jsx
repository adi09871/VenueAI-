import React, { useState, useEffect } from "react";
import { MessageCircle, Instagram, Info } from "lucide-react";

// ── Design Tokens — PRD v2.0 Standards ─────────────────────────
const T = {
  bg: '#000000',
  bgSec: '#0A0A0A',
  border: '#1F2937',
  text: '#FFFFFF',
  textSub: '#9CA3AF'
};

const HEADING = "'Cormorant Garamond', serif";
const BODY = "'Poppins', sans-serif";

// ── Components ────────────────────────────────────────────────────────────────
const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div style={{ width: 22, height: 22, background: T.text, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 11, height: 11, background: T.bg, borderRadius: 2 }} />
    </div>
    <span style={{ fontFamily: BODY, fontWeight: 700, fontSize: 18, color: T.text, textTransform: 'uppercase', letterSpacing: '1px' }}>Lover AI</span>
  </div>
);

export default function LandingPage({ onNavigate: go }) {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [bgIndex, setBgIndex] = useState(0);
  const images = ['/images/secondimage.png', '/images/firstimage.png'];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    const itv = setInterval(() => setBgIndex((p) => (p + 1) % images.length), 1500);
    return () => { window.removeEventListener('resize', handleResize); clearInterval(itv); };
  }, [images.length]);

  return (
    <div style={{ minHeight: '100vh', background: T.bg, color: T.text, fontFamily: BODY, overflowX: 'hidden' }}>

      {/* 1. Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: isMobile ? '15px 20px' : '15px 64px', borderBottom: `1px solid ${T.border}`, position: 'sticky', top: 0, background: 'rgba(0,0,0,0.95)', zIndex: 100 }}>
        <Logo />
        {!isMobile && <div style={{ fontFamily: HEADING, fontSize: 36, fontStyle: 'italic', position: 'absolute', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>Visualize Your Dream Venue with AI</div>}
        <button onClick={() => go('workspace')} style={{ background: T.text, color: T.bg, padding: '8px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 600 }}>Sign In</button>
      </nav>

      {/* 2. Hero Section */}
      <div style={{ height: '75vh', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 60 }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: bgIndex === idx ? 0.9 : 0, transition: 'opacity 0.8s', zIndex: 0 }} />
        ))}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 15, width: isMobile ? '85%' : 'auto' }}>
          <button onClick={() => go('workspace')} style={{ background: T.text, color: T.bg, padding: '16px 40px', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>Get Started Free</button>
          <button onClick={() => go('workspace')} style={{ background: 'transparent', color: T.text, padding: '16px 40px', border: `1px solid ${T.text}`, borderRadius: 10, fontWeight: 700, cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>View Demo</button>
        </div>
      </div>

      {/* 3. Pricing Section — Uniform Dark Packs */}
      <div style={{ padding: '80px 20px', background: T.bg }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontFamily: HEADING, fontSize: isMobile ? 32 : 44, fontStyle: 'italic' }}>Purchase Credit Packs</h2>
          <p style={{ color: T.textSub, marginTop: 10 }}>2 free credits on signup</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24, maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { n: 'Starter', p: '99', c: '10', h: false },
            { n: 'Popular', p: '249', c: '30', h: true },
            { n: 'Pro', p: '499', c: '75', h: false }
          ].map((pkg) => (
            <div key={pkg.n} style={{ border: pkg.h ? `2px solid ${T.text}` : `1px solid ${T.border}`, borderRadius: 20, padding: 40, textAlign: 'center', background: T.bgSec, position: 'relative' }}>
              {pkg.h && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: T.text, color: T.bg, fontSize: 10, fontWeight: 700, padding: '4px 12px', borderRadius: 999 }}>BEST VALUE</div>}
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 10 }}>{pkg.n.toUpperCase()}</div>
              <div style={{ fontFamily: HEADING, fontSize: 44, marginBottom: 5 }}>₹{pkg.p}</div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginBottom: 30 }}>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{pkg.c} Credits</span>
                <span style={{ fontSize: 12, opacity: 0.8 }}>({pkg.c} AI Generations)</span>
                <span style={{ fontSize: 10, color: '#f97316', fontWeight: 600, marginTop: 4, letterSpacing: '0.5px' }}>1 Generation = 1 Credit</span>
              </div>

              <button onClick={() => go('workspace')} style={{ width: '100%', background: pkg.h ? T.text : 'transparent', color: pkg.h ? T.bg : T.text, padding: '12px', border: pkg.h ? 'none' : `1px solid ${T.text}`, borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>Buy Credits</button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Footer */}
      <footer style={{ borderTop: `1px solid ${T.border}`, padding: '40px 20px', background: T.bgSec, textAlign: 'center', fontSize: 13, color: T.textSub }}>

        {/* Style block for link hover effects */}
        <style>
          {`
            .footer-link {
              color: ${T.text};
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 8px;
              font-weight: 500;
              font-size: 15px; /* Increased text size */
              opacity: 0.8;
              transition: opacity 0.2s ease, transform 0.2s ease;
            }
            .footer-link:hover {
              opacity: 1;
              transform: translateY(-2px);
            }
          `}
        </style>

        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? 24 : 40, marginBottom: 28, flexWrap: 'wrap' }}>
          <a href="#" className="footer-link">
            <Info size={20} /> About Us
          </a>
          <a href="https://chat.whatsapp.com/GPqjb5Q6oUQ209aoQTVq6a" target="_blank" rel="noopener noreferrer" className="footer-link">
            <MessageCircle size={20} /> WhatsApp Community
          </a>
          <a href="https://www.instagram.com/theloversai?igsh=MWp6NGphOXZ6aWtkNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer-link">
            <Instagram size={20} /> Instagram
          </a>
        </div>
        <div style={{ marginBottom: 10 }}>
          <span>© {new Date().getFullYear()} Lover AI. All rights reserved.</span>
        </div>
        <div style={{ fontSize: 11, opacity: 0.6 }}>
          <span>Licensed under standard terms.</span>
        </div>
      </footer>
    </div>
  );
}