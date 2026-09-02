"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const whatsappNumber = '250780563094';
  const welcomeMessage = 'Welcome to Shema sneakers rw';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(welcomeMessage)}`;

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();

    if (query.includes('sneak')) {
      router.push('/category/sneakers');
    } else if (query.includes('sand') || query.includes('slid')) {
      router.push('/category/sandals');
    } else if (query.includes('boot')) {
      router.push('/category/boots');
    } else if (query.includes('run') || query.includes('sport')) {
      router.push('/category/running');
    } else if (query.includes('form') || query.includes('offic') || query.includes('leath')) {
      router.push('/category/formal');
    } else {
      router.push(`/category/sneakers?search=${encodeURIComponent(query)}`);
    }

    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = pathname === '/';

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#003366] text-[#F5DEB3] flex flex-col min-h-screen font-sans antialiased relative">

        {!isHomePage && (
          <button
            onClick={() => router.back()}
            className="fixed top-24 left-4 z-40 bg-[#003366]/80 hover:bg-[#002a55] text-[#F5DEB3] hover:text-white border-2 border-[#F5DEB3] px-4 py-2 rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2 shadow-2xl backdrop-blur-md"
            title="Go Back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>
        )}

        <header className="sticky top-0 z-50 bg-[#003366]/95 border-b border-[#F5DEB3]/40 backdrop-blur-md shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between relative">
            <a href="/" className="flex items-center gap-2 sm:gap-4 min-w-0 group">
              <img
                src="/logo.png"
                alt="Shema sneakers rw Logo"
                className="h-16 sm:h-18 md:h-22 w-auto object-contain shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-sm sm:text-base md:text-2xl font-black tracking-wider sm:tracking-widest text-[#F5DEB3] uppercase truncate">
                SHEMA SNEAKERS RW
              </span>
            </a>
            <nav className="hidden lg:flex items-center gap-16 font-bold uppercase tracking-widest text-base">
              <a href="/" className="relative py-2 text-[#F5DEB3]/80 hover:text-[#F5DEB3] transition-colors duration-300">Home</a>
              <a href="/about" className="relative py-2 text-[#F5DEB3]/80 hover:text-[#F5DEB3] transition-colors duration-300">About Us</a>
              <a href="/contact" className="relative py-2 text-[#F5DEB3]/80 hover:text-[#F5DEB3] transition-colors duration-300">Contact Us</a>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4" ref={searchRef}>

              <div className="relative flex items-center">
                <form
                  onSubmit={handleSearchSubmit}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 origin-right ${
                    isSearchOpen
                      ? 'w-36 sm:w-64 opacity-100 scale-100 pointer-events-auto pr-10 sm:pr-14'
                      : 'w-0 opacity-0 scale-75 pointer-events-none'
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#002a55] text-[#F5DEB3] placeholder-[#F5DEB3]/50 border border-[#F5DEB3]/60 px-3 py-1.5 rounded-xl text-xs focus:outline-none focus:border-[#F5DEB3]"
                  />
                </form>

                {/* Main Search Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 rounded-full border border-[#F5DEB3]/30 transition-all flex items-center justify-center relative z-10 ${
                    isSearchOpen
                      ? 'bg-[#F5DEB3] text-[#003366] border-[#F5DEB3]'
                      : 'bg-[#002a55] text-[#F5DEB3]'
                  }`}
                  title="Search Catalog"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#20ba5a] transition-all flex items-center justify-center shrink-0"
                title="Order via WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.414 0 9.815-4.401 9.818-9.813.002-2.622-1.012-5.087-2.856-6.934-1.844-1.848-4.31-2.862-6.932-2.865-5.423 0-9.823 4.401-9.826 9.813-.001 2.022.528 3.998 1.534 5.751L1.816 22.2l4.831-1.266z"/>
                </svg>
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl border border-[#F5DEB3]/40 bg-[#002a55] text-[#F5DEB3] transition-all flex items-center justify-center shrink-0"
                title="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden w-full bg-[#002a55] border-t border-[#F5DEB3]/20 px-6 py-6 flex flex-col gap-4 font-black uppercase tracking-widest text-sm animate-fadeIn">
              <a href="/" className="py-2.5 border-b border-[#003366] text-[#F5DEB3]/80 hover:text-[#F5DEB3] transition-colors">Home</a>
              <a href="/about" className="py-2.5 border-b border-[#003366] text-[#F5DEB3]/80 hover:text-[#F5DEB3] transition-colors">About Us</a>
              <a href="/contact" className="py-2.5 text-[#F5DEB3]/80 hover:text-[#F5DEB3] transition-colors">Contact Us</a>
            </div>
          )}
        </header>

        <main className="flex-grow bg-[#003366]">
          {children}
        </main>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat with Shema sneakers rw on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.414 0 9.815-4.401 9.818-9.813.002-2.622-1.012-5.087-2.856-6.934-1.844-1.848-4.31-2.862-6.932-2.865-5.423 0-9.823 4.401-9.826 9.813-.001 2.022.528 3.998 1.534 5.751L1.816 22.2l4.831-1.266z"/>
          </svg>
          <span className="hidden sm:inline font-black uppercase tracking-widest text-xs">Chat on WhatsApp</span>
        </a>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 left-6 z-50 bg-[#F5DEB3] text-[#003366] p-4 rounded-xl shadow-2xl transition-all duration-300 transform ${
            showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>

        <footer className="bg-[#002a55] text-center py-6 border-t border-[#F5DEB3]/20 text-xs text-[#F5DEB3]/70 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Shema sneakers rw. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
