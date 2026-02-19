import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      id: '01',
      title: 'Wedding Cinema',
      description:
        'Full-day coverage capturing every emotion, from the quiet preparations to the last dance. Delivered as a cinematic short film and full ceremony edit.',
      price: 'From £2,500',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/048e0a68-a97c-46dd-aed4-734f98009a4c_3840w.webp',
      includes: ['Cinematic Highlight Film', 'Full Ceremony Edit', 'Drone Coverage'],
    },
    {
      id: '02',
      title: 'Event Photography',
      description:
        'High-energy event coverage that captures the atmosphere, the people, and the moments in between. Perfect for galas, launches, and private celebrations.',
      price: 'From £1,200',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad97e439-6931-4e5e-bcf3-b69be4018905_3840w.webp',
      includes: ['300+ Edited Photos', 'Same-Day Previews', 'Online Gallery'],
    },
    {
      id: '03',
      title: 'Corporate Milestones',
      description:
        'Professional documentation of your company\'s key moments — conferences, team retreats, product launches, and annual celebrations.',
      price: 'From £3,000',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52b4be58-0ae9-4f19-88ed-d742fc1abef3_3840w.jpg',
      includes: ['Photo & Video Package', 'Brand-Ready Edits', 'Social Media Cuts'],
    },
    {
      id: '04',
      title: 'Commercial Ads',
      description:
        'Concept-to-delivery commercial production for brands that want to stand out. We handle creative direction, filming, and post-production.',
      price: 'From £5,000',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71087bc3-4cb0-48eb-b49a-6a1587f575d7_3840w.jpg',
      includes: ['Creative Direction', '4K Production', 'Colour Grading'],
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-brand-bg">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 border-b-4 border-brand-border pb-8">
          <div>
            <span className="text-xs font-bold text-brand-accent tracking-widest uppercase font-mono mb-4 block">
              What We Do
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-dark">
              SERVICES
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-xs font-bold text-brand-dark uppercase tracking-widest border-b-2 border-brand-border pb-2 hover:border-brand-accent hover:text-brand-accent transition-colors"
          >
            View All Services
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
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14m-7-7l7 7l-7 7"></path>
            </svg>
          </a>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group grid grid-cols-1 lg:grid-cols-2 border-4 border-brand-border ${
                index > 0 ? '-mt-1' : ''
              }`}
            >
              <div
                className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[450px] overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-7xl lg:text-8xl font-bold text-white/20 font-mono leading-none">
                    {service.id}
                  </span>
                </div>
              </div>

              <div
                className={`flex flex-col justify-center p-10 lg:p-16 bg-brand-bg group-hover:bg-brand-panel transition-colors ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-[2px] bg-brand-accent"></span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    Service {service.id}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-5xl font-bold text-brand-dark uppercase tracking-tighter mb-6 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-8 max-w-md font-light">
                  {service.description}
                </p>

                <div className="mb-10">
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.includes.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono text-brand-dark border-2 border-brand-border px-3 py-1.5 uppercase tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-brand-dark font-mono tracking-tight">
                    {service.price}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
                  >
                    Enquire
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
                      <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
