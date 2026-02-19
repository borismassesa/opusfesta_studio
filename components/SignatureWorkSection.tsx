import Image from 'next/image';

export default function SignatureWorkSection() {
  return (
    <section className="z-10 pt-24 pb-24 relative bg-brand-bg">
      <div className="lg:px-12 max-w-[1920px] mr-auto ml-auto pr-6 pl-6">
        <div className="flex border-brand-border border-b-2 mb-12 pb-8 items-end justify-between">
          <h2 className="text-4xl font-bold tracking-tighter text-brand-dark">
            SIGNATURE
            <span className="text-brand-accent">WORK</span>
          </h2>
          <div className="flex gap-6 gap-x-8 gap-y-8 items-center">
            <div className="w-full md:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center uppercase hover:border-brand-accent transition-colors text-xs font-bold text-brand-dark tracking-widest border-brand-border border-2 px-8 py-4"
              >
                <span className="uppercase group-hover:text-brand-accent transition-colors text-xs font-bold text-brand-dark tracking-widest">
                  View all projects
                </span>
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
                  <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brand-border border-2 border-brand-border">
          <div className="grid grid-cols-2 gap-px bg-brand-border">
            <div className="group bg-brand-bg p-6 hover:bg-brand-panel transition-colors">
              <div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/792defd4-d702-4f36-b352-ba625129dfb5_3840w.webp"
                  alt="Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-mono mb-1">Case 005</p>
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide">
                    Coded Light Identity
                  </h3>
                </div>
                <p className="text-sm font-mono font-bold text-brand-accent">Brand &amp; Web</p>
              </div>
            </div>

            <div className="group bg-brand-bg p-6 hover:bg-brand-panel transition-colors">
              <div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2607b57-3a19-48e4-8ad4-bdcf6e69b207_3840w.webp"
                  alt="Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-mono mb-1">Case 006</p>
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide">
                    Studio Launch Film
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono font-bold text-brand-accent">Motion</p>
                  <p className="text-[10px] font-mono text-neutral-400 line-through">Concept Only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-brand-panel flex items-end p-12 overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcced374-a515-4136-bef9-e31a8cd1c18f_1600w.jpg)',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-panel to-transparent opacity-90"></div>

            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-1 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest">
                  Flagship Project
                </span>
              </div>
              <h3 className="text-4xl font-bold text-brand-dark tracking-tighter leading-none mb-4">
                WARP INTERFACE LAUNCH EXPERIENCE
              </h3>
              <a
                href="#"
                className="inline-block mt-4 text-xs font-bold text-brand-dark border-b-2 border-brand-border pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
              >
                Open Case Study
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brand-border border-x-2 border-b-2 border-brand-border">
          <div className="relative bg-brand-panel flex items-end p-12 overflow-hidden group order-2 lg:order-1">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffd0641a-688d-4761-a530-60fec416aab1_1600w.webp)',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-panel to-transparent opacity-90"></div>

            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2 py-1 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest">
                  New Series
                </span>
              </div>
              <h3 className="text-4xl font-bold text-brand-dark tracking-tighter leading-none mb-4">
                PORTRAITS OF CREATIVE SYSTEMS
              </h3>
              <a
                href="#"
                className="inline-block mt-4 text-xs font-bold text-brand-dark border-b-2 border-brand-border pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
              >
                View Collection
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-brand-border order-1 lg:order-2">
            <div className="group bg-brand-bg p-6 hover:bg-brand-panel transition-colors">
              <div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc8eb4cc-9875-4ac8-9d41-ce4604fb2ae9_800w.webp"
                  alt="Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-mono mb-1">Case 007</p>
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide">
                    Dark Mode System
                  </h3>
                </div>
                <p className="text-sm font-mono font-bold text-brand-accent">Product</p>
              </div>
            </div>

            <div className="group bg-brand-bg p-6 hover:bg-brand-panel transition-colors">
              <div className="aspect-[3/4] bg-brand-panel relative mb-4 overflow-hidden">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3eba3b9c-9fcf-4da6-9371-116a96e97133_3840w.jpg"
                  alt="Project"
                  fill
                  className="group-hover:scale-105 transition-transform duration-500 object-cover"
                />
                <button className="absolute bottom-4 left-4 z-20 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-mono mb-1">Case 008</p>
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wide">
                    Event Visual System
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono font-bold text-brand-accent">Campaign</p>
                  <p className="text-[10px] font-mono text-neutral-400 line-through">Concept Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
