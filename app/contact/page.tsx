'use strict';
'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const whatsappNumber = '250780563094';
  const welcomeMessage = 'Welcome to shema shoes store';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject) {
      alert('Please fill out all required fields.');
      return;
    }

    const compiledText = `${welcomeMessage}

I am reaching out through the website contact form:

👤 Name: ${formData.name}
✉️ Email: ${formData.email}
📌 Subject: ${formData.subject}
💬 Message: ${formData.message || 'None provided.'}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(compiledText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const workingHours = [
    { day: 'Monday', hours: '10:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Tuesday', hours: '10:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Wednesday', hours: '10:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Thursday', hours: '10:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Friday', hours: '10:00 AM - 10:30 PM', status: 'Extended' },
    { day: 'Saturday', hours: '10:00 AM - 10:30 PM', status: 'Weekend' },
    { day: 'Sunday', hours: '11:00 AM - 5:00 PM', status: 'Weekend' },
  ];

  return (
    <div className="bg-[#003366] text-[#F5DEB3] min-h-screen py-16 px-4 selection:bg-[#F5DEB3]/30 selection:text-[#003366]">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        <div className="bg-white border border-white/60 rounded-2xl p-8 md:p-10 shadow-[0_25px_60px_rgba(0,51,102,0.35)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#003366]" />

          <div className="flex items-center gap-3 mb-10 text-[#003366]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h1 className="text-xl font-black uppercase tracking-widest text-[#003366]">Contact Business</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="relative group">
              <label className="block text-xs font-black text-[#003366] uppercase tracking-widest mb-1">Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-[#003366] focus:border-[#F5DEB3] py-2 outline-none text-[#003366] transition-colors text-base font-black placeholder-neutral-400"
              />
            </div>

            <div className="relative group">
              <label className="block text-xs font-black text-[#003366] uppercase tracking-widest mb-1">Your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-[#003366] focus:border-[#F5DEB3] py-2 outline-none text-[#003366] transition-colors text-base font-black placeholder-neutral-400"
              />
            </div>

            <div className="relative group">
              <label className="block text-xs font-black text-[#003366] uppercase tracking-widest mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-[#003366] focus:border-[#F5DEB3] py-2 outline-none text-[#003366] transition-colors text-base font-black placeholder-neutral-400"
              />
            </div>

            <div className="relative group">
              <label className="block text-xs font-black text-[#003366] uppercase tracking-widest mb-1">Your message (optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b-2 border-[#003366] focus:border-[#F5DEB3] py-2 outline-none text-[#003366] transition-colors text-base font-black resize-none placeholder-neutral-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#003366] hover:text-[#25D366] text-white font-black uppercase tracking-widest py-4 rounded-xl border-2 border-transparent hover:border-[#003366] transition-all duration-300 transform active:scale-[0.98] text-xs shadow-md mt-4 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.414 0 9.815-4.401 9.818-9.813.002-2.622-1.012-5.087-2.856-6.934-1.844-1.848-4.31-2.862-6.932-2.865-5.423 0-9.823 4.401-9.826 9.813-.001 2.022.528 3.998 1.534 5.751L1.816 22.2l4.831-1.266z"/>
              </svg>
              Send Message via WhatsApp
            </button>

          </form>
        </div>

        <div className="bg-white border border-white/60 rounded-2xl p-8 md:p-10 shadow-[0_25px_60px_rgba(0,51,102,0.35)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#003366]" />

          <div className="text-center md:text-left mb-8">
            <div className="flex items-center justify-center md:justify-start gap-3 text-[#003366] mb-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#003366]">Working Hours</h2>
            </div>
            <p className="text-[#003366] font-black text-xs tracking-wider uppercase">Plan your next luxury visit to Shema Shoes</p>
          </div>
          <div className="overflow-hidden border-2 border-[#003366] rounded-xl bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#003366] bg-[#F5DEB3]/30 text-[#003366] uppercase tracking-widest font-black text-[11px]">
                  <th className="px-6 py-4">Day</th>
                  <th className="px-6 py-4">Operating Hours</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-neutral-100 font-black text-[#003366]">
                {workingHours.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 font-black text-[#003366] tracking-wide">{row.day}</td>
                    <td className="px-6 py-4 font-black text-[#003366]">{row.hours}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-block px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 ${
                        row.status === 'Open'
                          ? 'bg-white text-[#003366] border-[#003366]'
                          : row.status === 'Extended'
                          ? 'bg-emerald-500 text-white border-[#003366]'
                          : 'bg-neutral-200 text-[#003366] border-[#003366]'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
