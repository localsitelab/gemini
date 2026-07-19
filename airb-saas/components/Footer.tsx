export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-16 text-white/70 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="AiRB" className="h-8 w-auto" />
            <span className="font-bold text-xl text-white">AiRB</span>
          </div>
          <p className="text-xs leading-relaxed">Intelligent Aerospace Solutions for premium hosting.</p>
        </div>
        
        <div>
          <div className="font-semibold text-white mb-4">Product</div>
          <div className="space-y-2 text-sm">
            <a href="/ai-intelligence" className="block hover:text-white">AI Intelligence</a>
            <a href="#" className="block hover:text-white">AI Co-Host</a>
            <a href="/human-experts" className="block hover:text-white">Human Experts</a>
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-white mb-4">Company</div>
          <div className="space-y-2 text-sm">
            <a href="#" className="block hover:text-white">About</a>
            <a href="#" className="block hover:text-white">Blog</a>
            <a href="#" className="block hover:text-white">Contact</a>
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-white mb-4">Legal</div>
          <div className="space-y-2 text-sm">
            <a href="#" className="block hover:text-white">Privacy</a>
            <a href="#" className="block hover:text-white">Terms</a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs">
        © {new Date().getFullYear()} AiRB. All rights reserved.
      </div>
    </footer>
  );
}
