import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

function formatCurrency(value) {
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  } catch {
    return `$${value}`;
  }
}

export default function ProductCard({ product }) {
  const {
    name,
    price,
    image,
    rating = 5,
    colors = ["#111111", "#b45309", "#e5e7eb"],
  } = product;

  const whatsappText = encodeURIComponent(
    `Hi! I'm interested in the ${name}. Could you tell me more about sizes and availability?`
  );
  const whatsappLink = `https://wa.me/0000000000?text=${whatsappText}`;

  return (
    <div className="group rounded-3xl border border-neutral-200/80 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-700">
          New
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium tracking-tight text-neutral-900 line-clamp-1">{name}</h3>
          <span className="text-sm font-semibold text-neutral-900">{formatCurrency(price)}</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? 'fill-current' : 'fill-transparent stroke-amber-500'}`} />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          {colors.map((c, idx) => (
            <span
              key={idx}
              className="h-5 w-5 rounded-full border border-neutral-300"
              style={{ backgroundColor: c }}
              aria-label={`Color ${idx + 1}`}
            />
          ))}
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
