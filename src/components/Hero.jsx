import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Effortless fashion, naturally modern.
            </h1>
            <p className="mt-4 text-neutral-700 text-lg max-w-xl">
              Discover minimal silhouettes crafted with sustainable materials.
              Style that feels as good as it looks.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-neutral-900"
              >
                Shop new arrivals
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/0000000000?text=Hi!%20I%27d%20love%20a%20personal%20styling%20recommendation."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-400"
              >
                Chat with stylist
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-neutral-600">
              <span>Free worldwide shipping</span>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span>Plastic-free packaging</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
                alt="Editorial fashion"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
