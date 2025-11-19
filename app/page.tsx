"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="text-3xl font-extrabold tracking-tight">ZAI Chat</div>

        <div className="hidden md:flex gap-10 text-lg font-medium">
          <a href="#features" className="hover:text-orange-500 transition">Features</a>
          <a href="#automation" className="hover:text-orange-500 transition">Automation</a>
          <a href="#pricing" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
        </div>

        <a
          href="/login"
          className="px-6 py-3 rounded-xl bg-[#0A1A2F] text-white font-semibold hover:bg-[#112544] transition shadow-md"
        >
          Sign Up
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="px-8 md:px-24 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-60" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
        >
          The Future of WhatsApp Automation
          <br />
          <span className="text-orange-500">Powered by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
        >
          ZAI Chat helps businesses automate conversations, close more sales, and offer
          24/7 customer support — smarter and faster than ever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6 mt-6"
        >
          <a
            href="/login"
            className="px-10 py-4 bg-[#0A1A2F] text-white rounded-2xl text-xl font-semibold hover:bg-[#112544] transition shadow-lg"
          >
            Get Started Free
          </a>

          <a
            href="#features"
            className="px-10 py-4 border border-gray-400 text-gray-700 rounded-2xl text-xl font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </motion.div>
      </header>

      {/* FEATURES */}
      <section id="features" className="px-8 md:px-24 py-28 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-20">Why Businesses Choose ZAI Chat</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "AI Chatbot Builder",
              text: "Create intelligent chatbots that answer instantly, personalize conversations, and boost conversions.",
            },
            {
              title: "WhatsApp Automation",
              text: "Automate replies, broadcast messages, trigger workflows, and scale customer communication.",
            },
            {
              title: "Knowledge Base Engine",
              text: "Upload documents and FAQs — your assistant will deliver fast and accurate answers.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 bg-white rounded-3xl shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-500">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AUTOMATION SECTION */}
      <section id="automation" className="px-8 md:px-24 py-28">
        <h2 className="text-4xl font-bold text-center mb-20">A Complete WhatsApp Automation Suite</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-gray-700">
            <p>✓ Smart auto‑replies based on intent</p>
            <p>✓ Product replies with dynamic pricing</p>
            <p>✓ Lead qualification & segmentation</p>
            <p>✓ Drip campaigns, follow‑ups & retargeting</p>
            <p>✓ Multi‑agent inbox with AI message suggestions</p>
          </div>

          <div className="bg-[#FFF6E9] h-80 rounded-3xl shadow-inner flex items-center justify-center text-orange-400 font-semibold text-xl">
            (Dashboard Preview Coming Soon)
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-24 py-32 text-center bg-[#0A1A2F] text-white rounded-t-3xl shadow-inner">
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
      <footer className="px-8 md:px-24 py-10 text-center text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} ZAI Chat — All Rights Reserved.
      </footer>
    </div>
  );
}
