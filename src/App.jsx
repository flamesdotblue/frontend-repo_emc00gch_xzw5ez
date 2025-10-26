import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">New Arrivals</h2>
              <p className="text-neutral-600 mt-1">Curated eco-luxe essentials designed for everyday elegance.</p>
            </div>
            <a href="#products" className="hidden sm:inline-flex text-sm font-medium text-neutral-700 hover:text-black">View all</a>
          </div>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}
