'use client';

import Image from 'next/image';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" onClick={onClose}></div>
      <div
        className={`absolute right-0 top-0 bottom-0 w-96 bg-slate-900 border-l border-slate-800 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              Active Projects
            </h3>
            <button onClick={onClose} className="text-slate-500 hover:text-white">
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
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-auto pr-2">
            <div className="space-y-6">
              <div className="flex gap-4 pb-6 border-b border-slate-800">
                <div className="w-20 h-24 bg-slate-800 rounded-sm overflow-hidden relative">
                  <Image
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41438a62-3777-4cae-924c-e588db59dba3_320w.webp"
                    alt="Project Thumbnail"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white uppercase tracking-wide">
                    Neon Interface System
                  </p>
                  <p className="text-[10px] font-mono text-brand-accent mt-1">
                    STATUS: IN PROGRESS
                  </p>
                  <p className="text-sm font-bold text-slate-400 mt-2">Est. £16,000</p>
                </div>
                <button className="text-slate-600 hover:text-red-500 self-start transition-colors">
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
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 mt-4">
            <div className="flex justify-between text-xs font-mono uppercase tracking-widest mb-3">
              <span className="text-slate-500">Retainer</span>
              <span className="font-bold text-white">£2,000/mo</span>
            </div>
            <div className="flex justify-between text-lg mb-8">
              <span className="font-bold text-white tracking-tight">NEXT INVOICE</span>
              <span className="font-bold text-brand-accent font-mono">Dec 28</span>
            </div>
            <button className="w-full py-4 bg-brand-accent text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mb-3">
              View Projects
            </button>
            <button className="w-full py-4 border border-slate-700 text-white text-xs font-bold uppercase tracking-widest hover:border-white transition-colors">
              Book Intro Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
