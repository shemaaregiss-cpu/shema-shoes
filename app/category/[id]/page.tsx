'use strict';
'use client';

import React, { use } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);

  const categoryId = resolvedParams.id?.toLowerCase() || 'sneakers';
  const whatsappNumber = '250780563094';
  const welcomeMessage = 'Welcome to Shema sneakers rw';

  const prices = ['30k Rwf', '35k Rwf', '40k Rwf', '25k Rwf', '45k Rwf', '30k Rwf'];

  const productsDatabase: Record<string, Product[]> = {
    sneakers: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Premium Elite Sneaker v${i + 1}`,
      price: prices[i % prices.length],
      img: `sn${i + 1}`,
    })),
    running: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Volt Speed Runner v${i + 1}`,
      price: prices[i % prices.length],
      img: `r${i + 1}`,
    })),
    formal: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Classic Oxford Leather v${i + 1}`,
      price: prices[i % prices.length],
      img: `f${i + 1}`,
    })),
    boots: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Rugged Terrain Boot v${i + 1}`,
      price: prices[i % prices.length],
      img: `b${i + 1}`,
    })),
    sandals: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Aero Comfort Slide v${i + 1}`,
      price: prices[i % prices.length],
      img: `s${i + 1}`,
    })),
  };

  const categoryProducts = productsDatabase[categoryId] || productsDatabase['sneakers'];

  return (
    <div className="bg-[#003366] text-[#F5DEB3] min-h-screen py-16 px-4 selection:bg-[#F5DEB3]/30 selection:text-[#003366]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#F5DEB3] tracking-widest uppercase mb-3">
            {categoryId} Collection
          </h1>
          <p className="text-[#F5DEB3]/80 font-bold text-sm tracking-widest uppercase mb-4">
            Displaying {categoryProducts.length} Exclusive Footwear Items
          </p>
          <div className="w-20 h-1.5 bg-[#F5DEB3] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {categoryProducts.map((product) => {
            const message = `${welcomeMessage} — I want to order "${product.name}" from the ${categoryId} section.`;
            const orderLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={product.id}
                className="bg-white border border-white/60 rounded-2xl p-0 overflow-hidden flex flex-col justify-between items-center transition-all duration-300 transform hover:-translate-y-2 hover:border-[#003366] hover:shadow-[0_20px_50px_rgba(0,51,102,0.35)] group"
              >
                <div className="h-96 w-full flex items-center justify-center bg-neutral-100 overflow-hidden relative border-b border-neutral-200">
                  <img
                    src={`/${product.img}.png`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placeholder.com${encodeURIComponent(product.img.toUpperCase())}`;
                    }}
                  />
                </div>

                <div className="text-center w-full p-6 flex-grow flex flex-col justify-between bg-white">
                  <div className="mb-4">
                    <h3 className="font-bold text-[#003366] text-base mb-2 tracking-wide transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-[#003366] font-black text-4xl tracking-tight my-2 bg-neutral-100 py-1.5 rounded-lg inline-block w-full border border-neutral-200/60">
                      {product.price}
                    </p>
                  </div>

                  <a
                    href={orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-transparent border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-[#F5DEB3] font-black uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 text-xs shadow-sm"
                  >
                    Order to WhatsApp
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
