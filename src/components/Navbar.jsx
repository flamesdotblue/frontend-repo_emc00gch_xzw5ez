import React from 'react';
import { ShoppingBag, Search, Menu, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-neutral-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-black text-white grid place-items-center">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-lg">Vogue Naturale</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#products" className="hover:text-black">Shop</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:border-neutral-400">
            <Search className="h-4 w-4" />
            Search
          </button>
          <a
            href="https://wa.me/0000000000?text=Hi%20Vogue%20Naturale!%20I%20have%20a%20question."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-neutral-900"
          >
            <Phone className="h-4 w-4" /> Chat
          </a>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
