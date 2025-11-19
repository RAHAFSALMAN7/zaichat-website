"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {

  const ref = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight">ZAI Chat</div>

        <div className="hidden md:flex gap-10 text-lg font-medium">
          <a href="#features" className="hover:text-orange-500 transition">Features</a>
          <a href="#automation" className="hover:text-orange-500 transition">Automation</a>
          <a href="#pricing" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
        </div>

        <a
          href="/login"
          className="px-5 py-3 rounded-xl bg-[#0A1A2F] text-white font-semibold hover:bg-[#112544] transition shadow-md"
        >
          Sign Up
        </a>
      </nav>

      {/* HERO PARALLAX IMAGE */}
      <header
        ref={ref}
        className="
          relative w-full 
          h-[60vh] 
          md:h-[80vh] 
          lg:h-[100vh] 
          overflow-hidden
        "
      >
        <motion.div
          className="
            absolute inset-0 
            bg-no-repeat 
            bg-[length:100%_auto]
            md:bg-cover 
            bg-center
          "
          style={{
            backgroundImage: "url('/banner.png')",
            y,
            scale,
          }}
        />
      </header>

{/* FEATURES – Redesigned (New Premium Look) */}
<section id="features" className="px-6 md:px-24 py-40 bg-white">

  {/* TITLE */}
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-extrabold text-center mb-24"
  >
    Why Businesses <span className="text-orange-500">Choose ZAI Chat</span>
  </motion.h2>

  {/* NEW GRID CARDS */}
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {/* CARD 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        bg-white 
        p-10 
        rounded-3xl 
        shadow-lg 
        hover:shadow-2xl 
        border border-gray-100
        transition-all 
        hover:-translate-y-2
      "
    >
      <div className="text-5xl mb-4">🤖</div>
      <h3 className="text-2xl font-bold mb-3">AI Chatbot Builder</h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        Build intelligent chatbots that respond instantly, personalize conversations, and increase conversions.
      </p>
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        bg-white 
        p-10 
        rounded-3xl 
        shadow-lg 
        hover:shadow-2xl 
        border border-gray-100
        transition-all 
        hover:-translate-y-2
      "
    >
      <div className="text-5xl mb-4">⚡</div>
      <h3 className="text-2xl font-bold mb-3">WhatsApp Automation</h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        Automate replies, broadcasts, workflows, and manage customer communication on autopilot.
      </p>
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        bg-white 
        p-10 
        rounded-3xl 
        shadow-lg 
        hover:shadow-2xl 
        border border-gray-100
        transition-all 
        hover:-translate-y-2
      "
    >
      <div className="text-5xl mb-4">📘</div>
      <h3 className="text-2xl font-bold mb-3">Knowledge Base Engine</h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        Upload your documents and FAQs — let the AI instantly deliver accurate answers.
      </p>
    </motion.div>

  </div>
</section>

      {/* AUTOMATION SECTION */}
      <section id="automation" className="px-6 md:px-24 py-28">
        <h2 className="text-4xl font-bold text-center mb-20">A Complete WhatsApp Automation Suite</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-gray-700">
            <p>✓ Smart auto-replies based on intent</p>
            <p>✓ Product replies with dynamic pricing</p>
            <p>✓ Lead qualification & segmentation</p>
            <p>✓ Drip campaigns, follow-ups & retargeting</p>
            <p>✓ Multi-agent inbox with AI message suggestions</p>
          </div>

          <div className="bg-[#FFF6E9] h-80 rounded-3xl shadow-inner flex items-center justify-center text-orange-400 font-semibold text-xl">
            (Dashboard Preview Coming Soon)
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-24 py-32 text-center bg-[#0A1A2F] text-white rounded-t-3xl shadow-inner">
        <h2 className="text-5xl font-extrabold mb-6">Start Automating Your Business Today</h2>
        <p className="text-xl text-[#FFE8C7] mb-10 max-w-2xl mx-auto">
          Sign up in minutes. Launch your WhatsApp AI assistant instantly.
        </p>

        <a
          href="/login"
          className="px-14 py-5 bg-white text-orange-500 rounded-2xl text-xl font-bold hover:bg-[#FFF6E9] transition shadow-xl"
        >
          Create Your Bot
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-24 py-10 text-center text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} ZAI Chat — All Rights Reserved.
      </footer>
    </div>
  );
}
