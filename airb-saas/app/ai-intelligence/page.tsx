'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AIIntelligence() {
  const [url, setUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!url) return;
    
    setAnalyzing(true);
    
    // Simulate API call and AI analysis
    await new Promise(resolve => setTimeout(resolve, 2800));
    
    // Mock result
    setResult({
      overallScore: 78,
      seoScore: 82,
      titleScore: 65,
      descriptionScore: 91,
      appealScore: 74,
      bookingPotential: "High",
      strengths: ["Excellent location", "Modern amenities", "Great photos"],
      weaknesses: ["Suboptimal title", "Missing key keywords"],
      missingAmenities: ["Air conditioning", "Workspace"],
      suggestedTitle: "Stunning Central Apartment with Balcony | Free Parking",
      suggestedDescription: "Experience Tbilisi like a local in this beautifully renovated apartment...",
      pricingSuggestions: "Increase base price by 12% during peak season",
      actionPlan: "Update title and description. Add missing amenities photos."
    });
    
    setAnalyzing(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8">
        <ArrowLeft size={18} /> Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold tracking-tighter mb-4">AI Intelligence</h1>
        <p className="text-2xl text-white/70">Get instant, expert-level optimization for your Airbnb listing</p>
      </div>

      {!result ? (
        <div className="max-w-2xl mx-auto">
          <div className="glass p-12 rounded-3xl">
            <div className="text-center mb-10">
              <div className="mx-auto w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h2 className="text-3xl font-semibold mb-3">Analyze Your Listing</h2>
              <p className="text-white/60">Paste your Airbnb listing URL below</p>
            </div>
            
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.airbnb.com/rooms/123456789..."
              className="w-full bg-white/5 border border-white/20 focus:border-blue-500 rounded-2xl px-6 py-4 text-lg placeholder:text-white/40 outline-none mb-6"
            />
            
            <button 
              onClick={handleAnalyze}
              disabled={!url || analyzing}
              className="w-full py-5 bg-white hover:bg-white/90 text-black font-semibold rounded-2xl text-xl disabled:opacity-50 transition-all flex items-center justify-center gap-3"
            >
              {analyzing ? "Analyzing with AI..." : "Analyze Listing"}
            </button>
            
            <p className="text-center text-xs text-white/50 mt-8">Takes ~30 seconds. Powered by advanced models.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Scores */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Overall", value: result.overallScore, color: "blue" },
              { label: "SEO", value: result.seoScore },
              { label: "Title", value: result.titleScore },
              { label: "Description", value: result.descriptionScore },
              { label: "Guest Appeal", value: result.appealScore }
            ].map((score, i) => (
              <div key={i} className="glass p-8 rounded-3xl text-center">
                <div className="text-5xl font-bold text-blue-400 mb-1">{score.value}</div>
                <div className="uppercase text-xs tracking-widest text-white/60">{score.label}</div>
              </div>
            ))}
          </div>

          <div className="glass p-12 rounded-3xl">
            <h3 className="text-3xl mb-8">AI Recommendations</h3>
            
            <div className="space-y-10">
              <div>
                <h4 className="uppercase tracking-widest text-xs mb-4 text-white/60">Suggested Title</h4>
                <p className="text-2xl font-medium leading-tight">{result.suggestedTitle}</p>
              </div>
              
              <div>
                <h4 className="uppercase tracking-widest text-xs mb-4 text-white/60">Key Action Plan</h4>
                <p className="text-lg text-white/80">{result.actionPlan}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => window.print()} 
              className="flex-1 py-4 border border-white/30 flex items-center justify-center gap-3 rounded-2xl hover:bg-white/5"
            >
              ↓ Download Full PDF Report
            </button>
            <button className="flex-1 py-4 bg-blue-600 flex items-center justify-center gap-3 rounded-2xl hover:bg-blue-500">
              💬 Continue in AI Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
