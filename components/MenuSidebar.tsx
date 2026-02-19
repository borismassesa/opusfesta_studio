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
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              HOME
            </a>
            <a
              href="#"
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              WORK
            </a>
            <a
              href="#"
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              STUDIO
            </a>
            <a
              href="#"
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              PROJECTS
            </a>
            <a
              href="#"
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              JOURNAL
            </a>
            <a
              href="#"
              className="block text-3xl font-bold text-brand-dark hover:text-brand-accent tracking-tight transition-colors"
            >
              CONTACT
            </a>
          </nav>
          <div className="mt-auto pt-8 border-t-2 border-brand-border">
            <div className="flex gap-6">
              <a href="#" className="text-neutral-500 hover:text-brand-accent">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-500 hover:text-brand-accent">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-500 hover:text-brand-accent">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path>
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
