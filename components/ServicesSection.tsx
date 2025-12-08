import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      id: '001',
      title: 'Brand Systems',
      price: 'From £4,000',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/048e0a68-a97c-46dd-aed4-734f98009a4c_3840w.webp',
    },
    {
      id: '002',
      title: 'Product Storytelling',
      price: 'From £6,500',
      oldPrice: '£7,500',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad97e439-6931-4e5e-bcf3-b69be4018905_3840w.webp',
    },
    {
      id: '003',
      title: 'Studio Retainers',
      price: 'From £3,000/mo',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52b4be58-0ae9-4f19-88ed-d742fc1abef3_3840w.jpg',
    },
    {
      id: '004',
      title: 'Web Experiences',
      price: 'From £8,500',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71087bc3-4cb0-48eb-b49a-6a1587f575d7_3840w.jpg',
    },
  ];

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
    </svg>
  );

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(125,211,252,0.5)]"></span>
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase font-mono">
                Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              FEATURED SERVICES
            </h2>
          </div>
          <div className="w-full md:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 uppercase hover:border-white transition-colors text-xs font-bold text-white tracking-widest border-slate-700 border px-8 py-4"
            >
              <span className="text-xs font-bold text-white tracking-widest uppercase group-hover:text-brand-accent transition-colors">
                View Full Services
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-brand-dark p-6 hover:bg-slate-900/50 transition-colors relative"
            >
              <div className="aspect-[3/4] bg-brand-panel overflow-hidden relative mb-6">
                <div className="z-20 flex flex-col gap-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 opacity-0 absolute top-3 right-3 translate-x-2">
                  <button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-brand-dark text-white border border-slate-700 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"></path>
                    </svg>
                  </button>
                </div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-80 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Service {service.id}
                  </span>
                  <div className="flex gap-0.5 text-brand-accent">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-2 items-baseline">
                    <p
                      className={`text-sm font-mono font-bold ${
                        service.oldPrice ? 'text-brand-accent' : 'text-slate-400'
                      }`}
                    >
                      {service.price}
                    </p>
                    {service.oldPrice && (
                      <p className="text-xs font-mono text-slate-600 line-through">
                        {service.oldPrice}
                      </p>
                    )}
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-brand-accent pb-0.5 hover:text-brand-accent transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
