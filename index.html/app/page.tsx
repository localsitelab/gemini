'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ka' | 'ru'>('en');

  const translations = {
    en: {
      heroHeadline: "AI That Saves You Time & Gets You More Bookings",
      heroTagline: "Less Work. More Guests.",
      ctaAnalyze: "Start AI Analysis",
      ctaExperts: "Talk to Human Experts",
    },
    ka: {
      heroHeadline: "AI რომელიც დაზოგავს დროს და მოგცემს მეტ დაჯავშნას",
      heroTagline: "ნაკლები სამუშაო. მეტი სტუმარი.",
      ctaAnalyze: "დაიწყე AI ანალიზი",
      ctaExperts: "ესაუბრე ადამიანურ ექსპერტებს",
    },
    ru: {
      heroHeadline: "ИИ, который экономит ваше время и приносит больше бронирований",
      heroTagline: "Меньше работы. Больше гостей.",
      ctaAnalyze: "Начать ИИ-анализ",
      ctaExperts: "Поговорить с экспертами",
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 flex items-center justify-center bg-gradient-to-b from-[#0a111f] via-[#0a111f] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs uppercase tracking-[3px] text-white/80">Powered by AI + Human Expertise</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {t.heroHeadline}
          </h1>

          <p className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto mb-10 font-light">
            {t.heroTagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-intelligence"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-white text-black rounded-2xl font-semibold text-lg hover:bg-white/90 transition-all hover:scale-[1.02]"
            >
              {t.ctaAnalyze}
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            
            <Link 
              href="/human-experts"
              className="group flex items-center justify-center gap-3 px-10 py-4 border border-white/30 hover:border-white/60 text-white rounded-2xl font-semibold text-lg transition-all hover:bg-white/5"
            >
              {t.ctaExperts}
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-12 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a111f] bg-gradient-to-br from-blue-400 to-purple-500"></div>
                ))}
              </div>
              <div>Trusted by 200+ hosts</div>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="text-yellow-400" fill="currentColor" /> 4.98
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline px-4 py-1 bg-white/5 rounded-full text-xs tracking-widest mb-4">POWERFUL FEATURES</div>
            <h2 className="text-5xl font-semibold tracking-tighter">Everything you need to win on Airbnb</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Listing Optimization",
                desc: "Instant analysis and recommendations for title, description, photos and pricing."
              },
              {
                title: "Human Co-Hosting",
                desc: "Premium experts ready to manage your properties end-to-end."
              },
              {
                title: "Competitor Intelligence",
                desc: "Real-time market insights and dynamic pricing suggestions."
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="glass p-10 rounded-3xl group hover:-translate-y-1 transition-all duration-500 glow-blue"
              >
                <div className="text-blue-400 mb-6 text-3xl">✦</div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tighter mb-4">Simple. Powerful. Results.</h2>
            <p className="text-xl text-white/70">From listing URL to higher occupancy in minutes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Paste Listing", desc: "Enter your Airbnb URL" },
              { step: "02", title: "AI Analyzes", desc: "Deep evaluation in seconds" },
              { step: "03", title: "Get Insights", desc: "Actionable report generated" },
              { step: "04", title: "Optimize & Earn", desc: "Implement and watch bookings grow" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-[120px] font-bold text-white/5 absolute -top-12 -left-4">{item.step}</div>
                <div className="glass p-8 rounded-3xl h-full">
                  <div className="text-blue-400 text-6xl font-mono mb-4">{item.step}</div>
                  <h4 className="text-3xl font-semibold mb-4">{item.title}</h4>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-transparent via-white/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-4xl font-light italic text-white/80 mb-12">"AiRB transformed how I manage my properties. My revenue is up 42% and I spend half the time."</div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"></div>
            <div>
              <div className="font-semibold">Mariam K.</div>
              <div className="text-sm text-white/60">Tbilisi, Georgia • 7 listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 border-t border-white/10 text-center">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-5xl tracking-tight font-semibold mb-6">Ready to grow your hosting business?</h2>
          <Link href="/ai-intelligence" className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-xl font-semibold hover:brightness-110 transition">
            Launch AI Analysis Now <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
