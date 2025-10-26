import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200/70 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold tracking-tight">Vogue Naturale</h4>
            <p className="mt-2 text-sm text-neutral-600 max-w-sm">
              Contemporary silhouettes. Responsible materials. Elevated everyday style.
            </p>
          </div>
          <div className="text-sm text-neutral-700">
            <p>
              WhatsApp: <a className="underline" href="https://wa.me/0000000000" target="_blank" rel="noreferrer">+00 000 000 000</a>
            </p>
            <p className="mt-1">Email: hello@voguenaturale.com</p>
            <p className="mt-1">Shipping worldwide</p>
          </div>
          <div className="text-sm text-neutral-700">
            <p>Returns within 30 days</p>
            <p className="mt-1">Secure checkout</p>
            <p className="mt-1">Plastic-free packaging</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Vogue Naturale. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
