export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold tracking-tighter">Simple, transparent pricing</h1>
        <p className="text-xl text-white/70 mt-4">Choose what works best for your hosting business</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Intelligence Plan */}
        <div className="glass rounded-3xl p-12 relative overflow-hidden">
          <div className="uppercase tracking-[4px] text-xs mb-6 text-blue-400">MOST POPULAR</div>
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-6xl font-semibold tracking-tighter">AiRB Intelligence</div>
              <div className="text-4xl text-white/60 line-through">$70</div>
            </div>
            <div className="text-right">
              <div className="text-7xl font-bold">$25</div>
              <div className="text-sm uppercase">/month</div>
            </div>
          </div>
          
          <ul className="space-y-4 mb-12 text-lg">
            <li className="flex gap-3">✅ Unlimited AI Analyses</li>
            <li className="flex gap-3">✅ Detailed Reports & PDFs</li>
            <li className="flex gap-3">✅ Competitor Insights</li>
          </ul>
          
          <button className="w-full py-5 bg-white text-black rounded-2xl font-semibold text-lg">Subscribe Now</button>
        </div>

        {/* Human Experts */}
        <div className="glass rounded-3xl p-12">
          <div className="uppercase tracking-[4px] text-xs mb-6">PREMIUM SUPPORT</div>
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-6xl font-semibold tracking-tighter">Human Experts</div>
              <div className="text-4xl text-white/60 line-through">$90</div>
            </div>
            <div className="text-right">
              <div className="text-7xl font-bold">$67</div>
              <div className="text-sm uppercase">/month</div>
            </div>
          </div>
          
          <ul className="space-y-4 mb-12 text-lg">
            <li className="flex gap-3">✅ Full Co-Hosting</li>
            <li className="flex gap-3">✅ Priority Support</li>
            <li className="flex gap-3">✅ Revenue Optimization</li>
          </ul>
          
          <button className="w-full py-5 border border-white/40 hover:bg-white/5 rounded-2xl font-semibold text-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}
