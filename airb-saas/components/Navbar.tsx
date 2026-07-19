'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a111f]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="AiRB Logo" 
            width={140} 
            height={50} 
            className="h-10 w-auto"
          />
          <div className="text-2xl font-bold tracking-tighter text-white">AiRB</div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-white/80">
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/ai-intelligence" className="hover:text-white transition-colors">AI Intelligence</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="px-6 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition-all"
          >
            Get Started
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a111f] border-t border-white/10 py-6">
          {/* Add mobile links */}
        </div>
      )}
    </nav>
  );
}
