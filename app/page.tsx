'use strict';
'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const heroVideos = ['v1.mp4', 'v2.mp4', 'v3.mp4', 'v4.mp4', 'v5.mp4'];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const whatsappNumber = '250708563094';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroVideos.length]);

  const trendingShoes = [
    { id: 1, name: 'Premium Elite Sneaker v1', price: '40k Rwf', img: 's1', tag: 'BEST SELLER', size: 'large' },
    { id: 2, name: 'Urban Elite Streetwear', price: '35k Rwf', img: 'sn1', tag: 'NEW DROP', size: 'small' },
    { id: 3, name: 'Rugged All-Weather Combat', price: '45 Rwf', img: 'b1', tag: 'LIMITED', size: 'small' },
    { id: 4, name: 'Volt Speed Track Runner', price: '33k Rwf', img: 'r1', tag: 'HOT', size: 'small' },
    { id: 5, name: 'Classic Premium Oxford', price: '42k Rwf', img: 'f2', tag: 'ELEGANCE', size: 'large' },
    { id: 6, name: 'Aero Comfort Summer Slide', price: '25k Rwf', img: 's2', tag: 'TRENDING', size: 'small' },
    { id: 7, name: 'Hyper-Light Active Runner', price: '33k Rwf', img: 'r2', tag: '50% OFF', size: 'small' },
    { id: 8, name: 'Sleek Executive Derby Leather', price: '42k Rwf', img: 'f1', tag: 'EXCLUSIVE', size: 'large' },
    { id: 9, name: 'Street Culture Court Mid', price: '35k Rwf', img: 'sn2', tag: 'POPULAR', size: 'small' },
    { id: 10, name: 'Vanguard All-Terrain Boot', price: '38k Rwf ', img: 'b2', tag: 'WINTER CHIC', size: 'small' },
  ];

  const categories = [
    { id: 'sneakers', name: 'Sneakers', img: 's1' },
    { id: 'formal', name: 'Sandals', img: 's2' },
    { id: 'boots', name: 'Boots', img: 's3' },
    { id: 'running', name: 'Running', img: 's4' },
    { id: 'sandals', name: 'Formal', img: 's5' },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#C5A04F]/30 selection:text-white">
      <section className="relative h-[calc(100vh-80px)] w-full bg-[#C5A04F] overflow-hidden border-b border-[#B39243] flex items-center justify-center">
        {heroVideos.map((videoPath, idx) => {
          let transformStyle = "scale-85 opacity-0 pointer-events-none"; 
          if (idx === currentIndex) transformStyle = "scale-100 opacity-95 z-10"; 
          else if (idx === (currentIndex - 1 + heroVideos.length) % heroVideos.length) transformStyle = "scale-105 opacity-0 z-0 pointer-events-none"; 

          return (
            <div key={idx} className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-[1400ms] ease-out-quint ${transformStyle}`}>
              <video src={`/${videoPath}`} autoPlay muted loop playsInline className="w-[240vw] h-[200vh] object-contain" />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-[#C5A04F]/10 via-transparent to-[#C5A04F]/5 z-15 pointer-events-none" />

        <div className="relative z-20 text-center bg-black/60 px-10 py-12 rounded-xl backdrop-blur-md border border-[#B39243]/30 max-w-xl mx-4 shadow-2xl pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-black text-[#B39243] tracking-widest uppercase mb-4">SHEMA SHOES</h1>
          <div className="w-24 h-1 bg-[#B39243] mx-auto mb-6"></div>
          <p className="text-gray-200 text-lg md:text-xl font-light uppercase tracking-wider">Luxury Footwear Experience</p>
        </div>
        <div className="absolute bottom-6 flex gap-3 z-30">
          {heroVideos.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentIndex(idx)} className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#B39243]' : 'w-2.5 bg-gray-600'}`} />
          ))}
        </div>
      </section>

      <section className="bg-[#C5A04F] text-black py-24 px-6 border-b border-neutral-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-neutral-950 font-black tracking-widest text-xs uppercase block mb-3">// EXCLUSIVE SELECTION</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-neutral-950">
              Trending <span className="text-white">Collections</span>
            </h2>
            <div className="w-16 h-1.5 bg-neutral-950 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trendingShoes.map((shoe) => {
              const message = encodeURIComponent(`Hello Shema Shoes! I want to order the featured item "${shoe.name}" directly from the homepage lookbook.`);
              const orderLink = `https://wa.me{whatsappNumber}?text=${message}`;

              return (
                <div 
                  key={shoe.id}
                  className={`bg-white border border-white/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:border-neutral-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] group relative ${
                    shoe.size === 'large' ? 'md:col-span-2 row-span-1' : 'col-span-1'
                  }`}
                >

                  <span className="absolute top-4 left-4 z-20 bg-neutral-950 text-[#C5A04F] font-black px-3 py-1 rounded text-[10px] tracking-widest uppercase">
                    {shoe.tag}
                  </span>

                  <div className={`w-full flex items-center justify-center bg-neutral-100 relative overflow-hidden border-b border-neutral-200 ${
                    shoe.size === 'large' ? 'h-80 md:h-96' : 'h-72'
                  }`}>
                    <img 
                      src={`/${shoe.img}.png`} 
                      alt={shoe.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placeholder.com{shoe.img.toUpperCase()}`;
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 bg-white">
                    <div className="text-left">
                      <h3 className="font-bold text-neutral-950 text-base tracking-wide transition-colors">
                        {shoe.name}
                      </h3>
                      <p className="text-neutral-500 text-xs tracking-wider uppercase mt-0.5 font-medium">Premium Build Quality</p>
                    </div>
                    
                    <div className="flex items-center gap-4 shrink-0 justify-between sm:justify-end w-full sm:w-auto">
                      <span className="text-neutral-950 font-black text-3xl tracking-tight bg-neutral-100 border border-neutral-200 py-1.5 px-4 rounded-xl min-w-[85px] text-center">
                        {shoe.price}
                      </span>

                      <a 
                        href={orderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-[#C5A04F] font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-all duration-300 text-[11px] shadow-sm text-center"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#C5A04F] py-24 px-4 border-t border-neutral-900/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-center text-neutral-950 uppercase tracking-widest">
              Shop By <span className="text-white">Category</span>
            </h2>
            <div className="w-16 h-1.5 bg-neutral-950 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/category/${cat.id}`}
                className="group block bg-white border border-white/60 hover:border-neutral-950 rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 text-center shadow-xl"
              >
                <div className="h-48 bg-neutral-100 flex items-center justify-center p-6 border-b border-neutral-200">
                  <img
                    src={`/${cat.img}.png`}
                    alt={cat.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placeholder.com' + cat.name;
                    }}
                  />
                </div>

                <div className="p-5 bg-white transition-colors duration-300 group-hover:bg-neutral-50/80">
                  <h3 className="font-black text-xl md:text-2xl text-neutral-950 tracking-widest uppercase transition-transform duration-300 group-hover:scale-105">
                    {cat.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>


      <style jsx global>{`
        .ease-out-quint {
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </div>
  );
}
