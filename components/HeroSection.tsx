'use client';

import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden border-b-4 border-brand-border bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 right-0 w-full h-full object-cover opacity-90"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark from-0% via-brand-dark/80 via-30% to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="lg:px-12 grid grid-cols-1 lg:grid-cols-12 w-full h-full max-w-[1920px] z-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-8 gap-y-8 items-center">
        <div className="lg:col-span-8">
          <span className="inline-block py-1 px-3 border border-brand-accent/60 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Now Booking Weddings & Events 2025
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-bold tracking-tighter text-white mb-8">
            <span className="inline-block hover:text-brand-accent hover:-translate-y-1 transition-all duration-300 cursor-default">CINEMATIC</span>
            <br />
            <span className="text-stroke-light text-transparent hover:text-brand-accent hover:-translate-y-1 transition-all duration-300 cursor-default inline-block">VISUAL</span>{' '}
            <span className="text-stroke-light text-transparent hover:text-brand-accent hover:-translate-y-1 transition-all duration-300 cursor-default inline-block">STORIES</span>
          </h1>
          <div className="w-24 h-1 bg-brand-accent mb-8"></div>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed font-light">
            We capture the raw emotion of weddings, the energy of live events, and the professional essence of corporate milestones. Timeless photography and cinematic film—all crafted with a signature edge.
          </p>
          <div className="mt-12 flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 ease-out border-2 border-brand-accent shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              Explore Portfolio
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center uppercase hover:border-brand-accent hover:text-brand-accent transition-all duration-200 text-xs font-bold text-white tracking-widest border-2 border-white/40 px-8 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              View Pricing
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-2 pr-4">
          <div className="text-right">
            <div className="text-5xl font-bold text-white/10 font-mono">01</div>
            <div className="text-xs text-brand-accent uppercase tracking-widest mt-2">
              Featured Case
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
