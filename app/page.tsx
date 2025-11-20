"use client";

declare global {
  interface Window {
    chatbase?: any;
  }
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const ref = useRef(null);

  // ⭐ Chatbase Script Injection FIXED
  useEffect(() => {
    (function () {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args: any[]) => {
          if (!window.chatbase!.q) window.chatbase!.q = [];
          window.chatbase!.q.push(args);
        };

        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") return target.q;
            return (...args: any[]) => target(prop, ...args);
          },
        });
      }

      const onLoad = function () {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "bXROXpbQOh4ncl6f6r6JX"; // BOT ID
        (script as any).domain = "www.chatbase.co"; // FIXED
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    })();
  }, []);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Pricing Plans
  const plans = [
    {
      name: "Basic",
      monthlyPrice: 600,
      description: "Perfect for small & growing businesses.",
      features: [
        "1 WhatsApp number",
        "6,000 messages/month",
        "Product catalog",
        "Basic CRM",
        "Basic analytics",
        "2 languages",
        "Shopify, WooCommerce, Sheets",
        "5 days history",
        "Email support",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      description: "For large companies with custom needs.",
      features: [
        "Unlimited WhatsApp numbers",
        "Unlimited messages",
        "Unlimited automations",
        "Advanced AI",
        "Advanced analytics",
        "Full CRM",
        "Team inbox",
        "Custom onboarding",
        "Dedicated manager",
        "API access",
        "Unlimited languages",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-gray-900 font-sans">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 bg-[#FFF3E5]/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight">ZAI Chat</div>

        <div className="hidden md:flex gap-10 text-lg font-medium">
          <a href="#features" className="hover:text-orange-500 transition">Features</a>
          <a href="#automation" className="hover:text-orange-500 transition">Automation</a>
          <a href="#pricing" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
        </div>

        <a
          href="https://zaichat.net/"
          className="px-5 py-3 rounded-xl bg-[#0A1A2F] text-white font-semibold hover:bg-[#112544] transition shadow-md"
        >
          Sign Up
        </a>
      </nav>

      {/* HERO */}
      <header
        ref={ref}
        className="relative w-full h-[60vh] md:h-[80vh] lg:h-[100vh] overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-[length:100%_auto] md:bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner.png')",
            y,
            scale,
          }}
        />
      </header>

      {/* FEATURES */}
      <section id="features" className="px-6 md:px-24 py-40 bg-[#FFF3E5]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-24"
        >
          Why Businesses <span className="text-orange-500">Choose ZAI Chat</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          <div className="space-y-10">

            {/* CARDS */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-[#0A1A2F] hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-3">AI Chatbot Builder</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Build intelligent chatbots that respond instantly, personalize conversations, 
                and increase conversions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-[#0A1A2F] hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-3">WhatsApp Automation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Automate replies, broadcasts, workflows, and manage customer communication on autopilot.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-[#0A1A2F] hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-3">Knowledge Base Engine</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Upload your documents and FAQs — let the AI instantly deliver accurate answers.
              </p>
            </motion.div>

          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
          >
            <img
              src="/32.png"
              alt="WhatsApp Automation Preview"
              className="w-full max-w-[1600px] h-[550px] md:h-[650px] lg:h-[750px] object-cover rounded-3xl"
            />
          </motion.div>

        </div>
      </section>

      {/* AUTOMATION */}
      <section id="automation" className="px-6 md:px-24 py-28 bg-[#FFF9F3]">
        <h2 className="text-4xl font-bold text-center mb-20">A Complete WhatsApp Automation Suite</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-gray-700">
            <p>✓ Smart auto-replies based on intent</p>
            <p>✓ Product replies with dynamic pricing</p>
            <p>✓ Lead qualification & segmentation</p>
            <p>✓ Drip campaigns, follow-ups & retargeting</p>
            <p>✓ Multi-agent inbox with AI message suggestions</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF3E5] rounded-3xl shadow-inner flex items-center justify-center p-6"
          >
            <img
              src="/12.png"
              alt="Dashboard Preview"
              className="rounded-2xl w-full h-auto object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 md:px-24 py-40 bg-[#FFF3E5]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Flexible <span className="text-orange-500">Pricing Plans</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl shadow-lg p-10 border border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <div className="mb-7">
                <span className="text-5xl font-extrabold block mt-2">
                  {typeof plan.monthlyPrice === "number"
                    ? plan.monthlyPrice
                    : "Custom"}
                </span>
                <p className="text-gray-500 text-sm">
                  {typeof plan.monthlyPrice === "number" && "SAR / month"}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-orange-500 text-lg">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://zaichat.net/"
                target="_blank"
                className="block text-center w-full py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                Go to Subscribe →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REPLACE EMPLOYEES */}
      <section className="relative px-6 md:px-24 py-40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl shadow-2xl"
          style={{ backgroundImage: "url('/banner1.png')" }}
        />
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />

        <div className="relative max-w-6xl mx-auto text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-20"
          >
            Replace <span className="text-orange-400">5 Employees</span> for Only{" "}
            <span className="text-orange-400">600 SAR</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-md text-[#0A1A2F] border border-white rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Without ZAI Chat</h3>
              <ul className="space-y-4 text-lg">
                <li>3 support agents needed</li>
                <li>5-minute response delays</li>
                <li>No customer tracking</li>
                <li>High operational costs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0A1A2F]/90 backdrop-blur-md text-white border border-gray-700 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">With ZAI Chat</h3>
              <ul className="space-y-4 text-lg">
                <li>✔ AI Bot available 24/7</li>
                <li>✔ Instant automated replies</li>
                <li>✔ Smart dashboard & analytics</li>
                <li>✔ Only 600 SAR per month</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-24 py-32 text-center bg-[#0A1A2F] text-white rounded-t-3xl shadow-inner">
        <h2 className="text-5xl font-extrabold mb-6">
          Start Automating Your Business Today
        </h2>
        <p className="text-xl text-[#FFE8C7] mb-10 max-w-2xl mx-auto">
          Sign up in minutes. Launch your WhatsApp AI assistant instantly.
        </p>

        <a
          href="https://zaichat.net/"
          className="px-14 py-5 bg-white text-orange-500 rounded-2xl text-xl font-bold hover:bg-[#FFF6E9] transition shadow-xl"
        >
          Create Your Bot
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-24 py-10 text-center text-gray-600 text-sm border-t border-gray-300">
        © {new Date().getFullYear()} ZAI Chat — All Rights Reserved.
      </footer>

    </div>
  );
}
