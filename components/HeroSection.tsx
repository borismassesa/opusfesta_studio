export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden border-b border-slate-800">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800"></div>
        <div
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-cover bg-center opacity-100 mix-blend-overlay saturate-150 brightness-110"
          style={{
            backgroundImage:
              "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/626b9891-8e97-414f-a0f1-7c1a223f78de_3840w.webp')",
            maskImage: 'linear-gradient(to right, transparent, black 40%, black)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%, black)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-40% to-transparent pointer-events-none"></div>
      </div>

      <div className="lg:px-12 grid grid-cols-1 lg:grid-cols-12 w-full h-full max-w-[1920px] z-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-8 gap-y-8 items-center">
        <div className="lg:col-span-8">
          <span className="inline-block py-1 px-3 border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            New Studio Reel 2024
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-bold tracking-tighter text-white mb-8">
            DIGITAL
            <br />
            <span className="text-stroke text-transparent">CREATIVE STUDIO</span>
          </h1>
          <div className="w-24 h-1 bg-brand-accent mb-8"></div>
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed font-light">
            We design expressive brands, cinematic visuals, and interactive experiences for teams
            building what&apos;s next. Strategy, design, and motion—all under one roof.
          </p>
          <div className="mt-12 flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-dark text-xs font-semibold uppercase tracking-widest transition-all duration-300 ease-out hover:bg-brand-accent hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(125,211,252,0.6)]"
            >
              View Portfolio
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center uppercase hover:border-white transition-colors text-xs font-bold text-white tracking-widest border-slate-700 border px-8 py-4"
            >
              Download Deck
            </a>
          </div>
        </div>

        {/* Side Timeline/Nav */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-2 pr-4">
          <div className="text-right">
            <div className="text-5xl font-bold text-white/10 font-mono">01</div>
            <div className="text-xs text-brand-accent uppercase tracking-widest mt-2">
              Featured Case
            </div>
          </div>
          {/* Abstract Deco */}
          <div className="bg-white/5 max-w-xs border-white/5 border mt-12 pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="uppercase text-xs text-slate-300">Studio Status</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <p className="text-sm text-slate-300 font-mono">
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
