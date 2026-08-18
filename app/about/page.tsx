'use strict';
'use client';

import React from 'react';

export default function AboutPage() {
  const salesTeam = [
    { id: 1, name: 'Lead Sales Executive', img: 'about1', role: 'Kigali Showroom' },
    { id: 2, name: 'Customer Experience Manager', img: 'about2', role: 'Global Support' },
    { id: 3, name: 'Store Operations Director', img: 'about3', role: 'Rwanda Logistical Core' },
  ];

  return (

    <div className="bg-[#C5A04F] text-black min-h-screen py-16 px-4 selection:bg-black/20 selection:text-black">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        <div className="bg-white border border-white/60 rounded-2xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-black" />
 
          <div className="flex items-center gap-4 mb-8 text-[#C5A04F]">
            <svg xmlns="http://w3.org" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <h1 className="text-2xl font-black uppercase tracking-widest text-[#C5A04F]">
              Our Vision
            </h1>
          </div>

          <div className="border-l-4 border-[#C5A04F] pl-6 md:pl-8 my-4">
            <p className="text-xl md:text-2xl font-black italic text-black leading-relaxed tracking-wide">
              "At Shema Shoes, our vision is simple: deliver high-quality, affordable footwear for every moment of your life. Whether you shop online on the go or visit our storefront, we promise a royal experience. We don’t just sell shoes; we dress you like royalty from the ground up. Your confidence and your smile are our ultimate reward."
            </p>
          </div>
        </div>

        <div className="bg-white border border-white/60 rounded-2xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-black" />

          <div className="flex items-center gap-4 mb-8 text-[#C5A04F]">
            <svg xmlns="http://w3.org" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 22"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <h1 className="text-2xl font-black uppercase tracking-widest text-[#C5A04F]">
              Our Mission
            </h1>
          </div>
          <div className="border-l-4 border-[#C5A04F] pl-6 md:pl-8 my-4">
            <p className="text-xl md:text-2xl font-black italic text-black leading-relaxed tracking-wide">
              "Our Mission: To empower the people of Kigali and beyond by providing durable, stylish, and affordable footwear for every walk of life. We are committed to delivering an exceptional, royal shopping experience both online and in our storefront, ensuring that premium style and confidence are accessible to everyone in Rwanda."
            </p>
          </div>
        </div>
        <div className="bg-white border border-white/60 rounded-2xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-black" />
          
          <div className="flex items-center gap-4 mb-10 text-[#C5A04F]">
            <svg xmlns="http://w3.org" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h1 className="text-2xl font-black uppercase tracking-widest text-[#C5A04F]">
              Our Sales Team
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {salesTeam.map((member) => (
              <div 
                key={member.id} 
                className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden group shadow-md hover:border-black transition-all"
              >
                <div className="h-64 w-full bg-neutral-200 overflow-hidden relative border-b border-neutral-300">
                  <img 
                    src={`/${member.img}.png`} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placeholder.com{member.img.toUpperCase()}`;
                    }}
                  />
                </div>

                <div className="p-4 text-center bg-white">
                  <h3 className="font-black text-sm text-black uppercase tracking-wider mb-1">
                    {member.name}
                  </h3>
                  <p className="text-neutral-600 font-bold text-xs tracking-widest uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-neutral-100 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-neutral-400">
            <span>Shema Shoes Professional Network</span>
            <span>Kigali, Rwanda</span>
          </div>

        </div>

      </div>
    </div>
  );
}
