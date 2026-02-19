'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

export default function ProcessSection() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const refs = useRef<Map<string, HTMLElement>>(new Map());

  const setRef = useCallback((id: string) => (el: HTMLElement | null) => {
    if (el) refs.current.set(id, el);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Array.from(refs.current.entries()).find(
              ([, el]) => el === entry.target
            )?.[0];
            if (id) setVisibleItems((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    refs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'ENQUIRY',
      description: 'Tell us about your event, your vision, and the moments that matter most. We respond within 24 hours.',
      detail: 'Free consultation call',
    },
    {
      id: 'step-2',
      number: '02',
      title: 'PLANNING',
      description: 'We build a custom timeline and shot list tailored to your day. Every angle, every detail, mapped out in advance.',
      detail: 'Bespoke creative brief',
    },
    {
      id: 'step-3',
      number: '03',
      title: 'SHOOT DAY',
      description: 'Our team arrives early, captures everything — the quiet moments, the big reveals, the in-betweens nobody else notices.',
      detail: 'Full-day coverage',
    },
    {
      id: 'step-4',
      number: '04',
      title: 'DELIVERY',
      description: 'Cinematic edits, colour-graded photos, and a private online gallery — delivered within 4–6 weeks.',
      detail: 'Private gallery access',
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-brand-panel border-y-4 border-brand-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={setRef('process-header')}
          className={`mb-16 transition-all duration-700 ${
            visibleItems.has('process-header')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-4 border-brand-border pb-8">
            <div>
              <span className="text-xs font-bold text-brand-accent tracking-widest uppercase font-mono mb-6 block">
                How It Works
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-dark leading-[0.9]">
                OUR<br />
                <span className="text-stroke">PROCESS.</span>
              </h2>
            </div>
            <p className="text-neutral-500 text-lg max-w-sm leading-relaxed font-light md:text-right">
              From first contact to final delivery. Four clear steps, zero surprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={setRef(step.id)}
              className={`relative p-6 sm:p-8 lg:p-10 border-4 border-brand-border bg-brand-bg transition-all duration-700 group hover:bg-brand-dark hover:border-brand-dark ${
                visibleItems.has(step.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="text-6xl sm:text-7xl font-bold text-neutral-100 font-mono leading-none block mb-6 group-hover:text-white/10 transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-light mb-6 group-hover:text-white/50 transition-colors duration-300">
                {step.description}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-2 h-2 bg-brand-accent"></div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest group-hover:text-brand-accent transition-colors duration-300">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
