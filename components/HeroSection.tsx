export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden border-b-4 border-brand-border">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-panel"></div>
        <div
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/626b9891-8e97-414f-a0f1-7c1a223f78de_3840w.webp')",
            maskImage: 'linear-gradient(to right, transparent, black 40%, black)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%, black)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-panel via-brand-panel/90 via-40% to-transparent pointer-events-none"></div>
      </div>

      <div className="lg:px-12 grid grid-cols-1 lg:grid-cols-12 w-full h-full max-w-[1920px] z-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-8 gap-y-8 items-center">
        <div className="lg:col-span-8">
          <span className="inline-block py-1 px-3 border-2 border-brand-accent bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Now Booking Weddings & Events 2025
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-bold tracking-tighter text-brand-dark mb-8">
            CINEMATIC
            <br />
            <span className="text-stroke text-transparent">VISUAL STORIES</span>
          </h1>
          <div className="w-24 h-1 bg-brand-accent mb-8"></div>
          <p className="text-neutral-600 text-lg max-w-lg leading-relaxed font-light">
            We capture the raw emotion of weddings, the energy of live events, and the professional essence of corporate milestones. Timeless photography and cinematic film—all crafted with a signature edge.
          </p>
          <div className="mt-12 flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 ease-out hover:bg-brand-accent hover:-translate-y-1"
            >
              Explore Portfolio
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center uppercase hover:border-brand-accent transition-colors text-xs font-bold text-brand-dark tracking-widest border-brand-border border-2 px-8 py-4"
            >
              View Pricing
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-2 pr-4">
          <div className="text-right">
            <div className="text-5xl font-bold text-brand-dark/10 font-mono">01</div>
            <div className="text-xs text-brand-accent uppercase tracking-widest mt-2">
              Featured Case
            </div>
          </div>
          <div className="bg-brand-bg border-2 border-brand-border max-w-xs mt-12 pt-6 pr-6 pb-6 pl-6">
            <div className="flex justify-between items-center mb-4">
              <span className="uppercase text-xs text-neutral-600">Studio Status</span>
              <span className="w-2 h-2 bg-brand-accent"></span>
            </div>
            <p className="text-sm text-brand-dark font-mono">
              ACCEPTING PROJECTS
              <br />
              Q1–Q2 2025 BOOKING
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
