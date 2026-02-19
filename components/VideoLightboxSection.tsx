'use client';

export default function VideoLightboxSection() {
  return (
    <section className="relative py-32 bg-brand-dark border-y-4 border-brand-border">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <button
          id="playVideo"
          className="group w-28 h-28 bg-transparent border-4 border-white text-white flex items-center justify-center mx-auto hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
          </svg>
        </button>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          IMMERSIVE
          <br />
          <span className="text-stroke-light text-transparent">STUDIO REEL</span>
        </h2>
        <p className="text-white/60 max-w-lg mx-auto leading-relaxed">
          A cinematic showcase of weddings, events, and milestone moments we&apos;ve had the privilege to capture and craft.
        </p>
      </div>
    </section>
  );
}
