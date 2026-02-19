'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "They didn't just ship visuals, they helped us rewrite how we talk about our product. The team feels proud to send people to our site now.",
      author: 'Jamie Collins',
      role: 'HEAD OF DESIGN, ORBITAL',
      avatar:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df748c19-7840-497b-84a2-85f34b0da910_320w.webp',
    },
    {
      quote:
        'Opusfesta Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded all our expectations.',
      author: 'Sarah Mitchell',
      role: 'CEO, NEXUS TECH',
      avatar:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6ec4622-d827-4c9e-9744-0c24c81f9515_320w.webp',
    },
    {
      quote:
        'Working with them felt like having an extension of our own team. They understood our vision from day one and delivered beyond imagination.',
      author: 'Marcus Chen',
      role: 'CREATIVE DIRECTOR, PULSE',
      avatar:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8e30b9a-d4b3-47aa-9b4c-9f7d54f25460_320w.webp',
    },
    {
      quote:
        'The motion work they created for our launch was absolutely stunning. Our engagement metrics doubled within the first week.',
      author: 'Elena Rodriguez',
      role: 'FOUNDER, LUMINARE',
      avatar:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c1f53d0-cc07-4bcf-8a06-9a7cf61f4757_320w.webp',
    },
    {
      quote:
        'Professional, creative, and incredibly responsive. They made the entire design process feel effortless and enjoyable.',
      author: 'David Park',
      role: 'VP MARKETING, HORIZON',
      avatar:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e6a3c0b-6b9e-4eb4-8fe1-9182d0819de9_320w.webp',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-32 relative border-t-4 border-brand-border bg-brand-bg z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto text-neutral-300 mb-8"
        >
          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
        </svg>

        <div className="relative h-40 md:h-32 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentTestimonial === index ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <p className="text-2xl md:text-3xl font-light text-neutral-700 leading-relaxed tracking-tight">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>

        <div className="h-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                currentTestimonial === index ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <h4 className="text-sm font-semibold text-brand-dark uppercase tracking-widest">
                {testimonial.author}
              </h4>
              <p className="text-xs text-neutral-500 font-mono mt-2">{testimonial.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 md:gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-12 h-12 border-2 overflow-hidden transition-all duration-300 ${
                currentTestimonial === index
                  ? 'border-brand-accent'
                  : 'border-neutral-300 grayscale'
              }`}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
