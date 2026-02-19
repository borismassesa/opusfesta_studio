'use client';

interface MenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuSidebar({ isOpen, onClose }: MenuSidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-brand-dark/60" onClick={onClose}></div>
      <div
        className={`absolute left-0 top-0 bottom-0 w-80 bg-brand-bg border-r-4 border-brand-border transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-brand-dark mb-12"
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
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
            Close
          </button>
          <nav className="space-y-6">
            <a
              href="#"
              onClick={onClose}
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              HOME
            </a>
            <a
              href="#work"
              onClick={onClose}
              className="block text-3xl font-bold text-neutral-300 hover:text-brand-dark tracking-tight transition-colors"
            >
              PORTFOLIO
            </a>
            <a
              href="#services"
              onClick={onClose}
              className="block text-3xl font-bold text-neutral-300 hover:text-brand-dark tracking-tight transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#process"
              onClick={onClose}
              className="block text-3xl font-bold text-neutral-300 hover:text-brand-dark tracking-tight transition-colors"
            >
              PROCESS
            </a>
            <a
              href="#testimonials"
              onClick={onClose}
              className="block text-3xl font-bold text-neutral-300 hover:text-brand-dark tracking-tight transition-colors"
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="block text-3xl font-bold text-neutral-300 hover:text-brand-dark tracking-tight transition-colors"
            >
              CONTACT
            </a>
          </nav>
          <div className="mt-auto pt-8 border-t-2 border-brand-border">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border-2 border-brand-border flex items-center justify-center text-neutral-500 hover:text-brand-accent hover:border-brand-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-brand-border flex items-center justify-center text-neutral-500 hover:text-brand-accent hover:border-brand-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-brand-border flex items-center justify-center text-neutral-500 hover:text-brand-accent hover:border-brand-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
