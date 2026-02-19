'use client';

interface HeaderProps {
  onMenuToggle: () => void;
  onCartToggle: () => void;
}

export default function Header({ onMenuToggle, onCartToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg border-b-4 border-brand-border">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={onMenuToggle}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16M4 12h16M4 19h16"></path>
            </svg>
            <span className="hidden sm:inline">Menu</span>
          </button>

          <a
            href="#"
            className="px-4 h-12 border-2 border-brand-border flex items-center justify-center font-bold text-brand-dark text-sm tracking-tight hover:border-brand-accent hover:text-brand-accent transition-colors whitespace-nowrap"
          >
            OpusFesta Studio
          </a>

          <div className="flex items-center gap-6">
            <button className="text-brand-dark hover:text-brand-accent transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21 21l-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </button>
            <button className="text-brand-dark hover:text-brand-accent transition-colors hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18M3 15h18M9 3v18m6-18v18"></path>
              </svg>
            </button>
            <button
              onClick={onCartToggle}
              className="relative text-brand-dark hover:text-brand-accent transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="-top-3 -right-2 text-brand-dark text-[10px] flex items-center justify-center font-bold w-4 h-4 absolute">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
