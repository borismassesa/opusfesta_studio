'use client';

export default function NavigationFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="border-t border-slate-800 bg-[#080a0e] px-6 lg:px-12 relative z-10">
      <div className="flex items-center justify-between h-20 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <button className="w-12 h-12 hover:bg-white/5 flex items-center justify-center transition-colors border-r border-slate-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19l-7-7l7-7m7 7H5"></path>
          </svg>
        </button>
        <div className="flex-1 flex justify-center gap-8 md:gap-24">
          <span className="text-brand-accent">01 Home</span>
          <span className="hover:text-white cursor-pointer">02 Work</span>
          <span className="hover:text-white cursor-pointer">03 Services</span>
          <span className="hover:text-white cursor-pointer">04 Contact</span>
        </div>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-slate-800 text-white flex items-center justify-center transition-colors hover:bg-slate-700 border-l border-slate-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12l7-7l7 7m-7 7V5"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
