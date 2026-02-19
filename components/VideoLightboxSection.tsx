'use client';

export default function VideoLightboxSection() {
  return (
    <section className="relative py-40 bg-brand-panel border-y-4 border-brand-border">
      <div className="absolute inset-0 -z-20">
        <div data-us-project="bKN5upvoulAmWvInmHza" className="absolute inset-0"></div>
      </div>

      <div className="absolute inset-0 bg-brand-panel/80 -z-10"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(240,237,232,0.5)_2px,transparent_2px),_linear-gradient(90deg,rgba(240,237,232,0.5)_2px,transparent_2px)] bg-[size:30px_30px] opacity-20 -z-10"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <button
          id="playVideo"
          className="group w-24 h-24 bg-brand-bg border-2 border-brand-border text-brand-dark flex items-center justify-center mx-auto hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all duration-300 mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
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
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-dark mb-6">
          IMMERSIVE
          <br />
          <span className="text-stroke-accent text-transparent">STUDIO REEL</span>
        </h2>
        <p className="text-neutral-600 max-w-lg mx-auto leading-relaxed">
          A fast cut of brand systems, product launches, and motion pieces we crafted for teams in
          tech, culture, and commerce.
        </p>
      </div>
    </section>
  );
}
