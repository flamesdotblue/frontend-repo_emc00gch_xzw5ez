import React from 'react';
import ProductCard from './ProductCard.jsx';

const products = [
  {
    id: 1,
    name: 'Linen Blend Overshirt',
    price: 89,
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
    colors: ['#111111', '#6b7280', '#e5e7eb'],
  },
  {
    id: 2,
    name: 'Minimal Leather Tote',
    price: 149,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
    colors: ['#1f2937', '#92400e', '#f59e0b'],
  },
  {
    id: 3,
    name: 'Organic Cotton Tee',
    price: 39,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
    colors: ['#111111', '#6b7280', '#e5e7eb'],
  },
  {
    id: 4,
    name: 'Relaxed Fit Trousers',
    price: 99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
    colors: ['#111827', '#f3f4f6', '#9ca3af'],
  },
  {
    id: 5,
    name: 'Satin Slip Dress',
    price: 129,
    image: 'https://images.unsplash.com/photo-1704957869647-e26556190a89?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXRpbiUyMFNsaXAlMjBEcmVzc3xlbnwwfDB8fHwxNzYxNTA1NjE0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 5,
    colors: ['#111111', '#eab308', '#f59e0b'],
  },
  {
    id: 6,
    name: 'Crochet Bucket Hat',
    price: 59,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
    colors: ['#222222', '#6b7280', '#e5e7eb'],
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
