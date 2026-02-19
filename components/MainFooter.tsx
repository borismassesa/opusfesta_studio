export default function MainFooter() {
  return (
    <footer id="contact" className="bg-brand-panel border-t-4 border-brand-border relative z-10">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-brand-border">
          <div className="p-12 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-brand-border flex flex-col justify-center min-h-[400px]">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-dark leading-[0.9] mb-8">
              CAPTURE
              <br />
              <span className="text-transparent text-stroke">EVERY MOMENT.</span>
            </h2>
            <a
              href="#"
              className="group inline-flex items-center gap-4 text-brand-dark hover:text-brand-accent transition-colors w-max"
            >
              <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-brand-border group-hover:border-brand-accent pb-1">
                Book Your Date
              </span>
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
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="p-12 lg:p-20 flex flex-col justify-center bg-brand-bg">
            <p className="text-neutral-600 text-lg leading-relaxed max-w-md mb-12 font-light">
              We partner with couples and companies to document stories that matter. Cinematic films and high-end photography for the moments you never want to forget.
            </p>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">
                  New Business
                </p>
                <a
                  href="mailto:hello@opusfesta.com"
                  className="text-2xl md:text-3xl font-bold text-brand-dark hover:text-brand-accent transition-colors tracking-tight"
                >
                  hello@opusfesta.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">
                  Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-brand-border flex items-center justify-center text-brand-dark hover:text-brand-accent hover:border-brand-accent transition-colors bg-brand-bg"
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-brand-border flex items-center justify-center text-brand-dark hover:text-brand-accent hover:border-brand-accent transition-colors bg-brand-bg"
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-brand-border flex items-center justify-center text-brand-dark hover:text-brand-accent hover:border-brand-accent transition-colors bg-brand-bg"
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-brand-border border-b-2 border-brand-border">
          <div className="p-8 lg:p-12">
            <h4 className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-6">Studio</h4>
            <ul className="space-y-3 text-xs font-mono text-neutral-500 uppercase tracking-wide">
              <li>
                <a href="#work" className="hover:text-brand-accent transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="p-8 lg:p-12">
            <h4 className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-3 text-xs font-mono text-neutral-500 uppercase tracking-wide">
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Read.cv
                </a>
              </li>
            </ul>
          </div>
          <div className="p-8 lg:p-12">
            <h4 className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 text-xs font-mono text-neutral-500 uppercase tracking-wide">
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-accent transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-between h-full bg-brand-bg">
            <div className="mb-8">
              <div className="px-4 h-10 border-4 border-brand-dark bg-brand-dark text-white inline-flex items-center justify-center font-black text-sm uppercase tracking-widest mb-4">
                OpusFesta — Studio
              </div>
              <p className="text-[10px] font-bold text-brand-dark uppercase leading-tight tracking-widest">
                OpusFesta — Studio London, UK
              </p>
            </div>
            <p className="text-[10px] text-neutral-400 font-mono">
              © 2024 OpusFesta Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
