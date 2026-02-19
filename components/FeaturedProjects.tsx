export default function FeaturedProjects() {
  const projects = [
    {
      id: '01',
      category: 'Wedding Film',
      title: 'A Highland Romance',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9df63a50-60c8-434f-b5f3-fc24be587c03_3840w.webp',
    },
    {
      id: '02',
      category: 'Event Photography',
      title: 'Gala Night 2024',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b098c29a-9a00-4e0f-ae2c-2d810567550e_3840w.webp',
    },
    {
      id: '03',
      category: 'Corporate Film',
      title: 'Vision 2030 Summit',
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c669426e-538c-46a9-b426-c5223887e80f_3840w.webp',
    },
  ];

  return (
    <section className="border-b-4 border-brand-border bg-brand-bg relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-border border-b-2 border-brand-border">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden"
          >
            <div
              className="bg-center transition-transform duration-700 group-hover:scale-105 opacity-100 bg-cover absolute top-0 right-0 bottom-0 left-0"
              style={{ backgroundImage: `url('${project.image}')` }}
            ></div>
            <div className="bg-gradient-to-t from-white/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

            <div className="absolute top-6 left-6 z-20">
              <span className="text-xs font-mono text-brand-dark border-2 border-brand-border px-2 py-1 bg-brand-bg">
                {project.id}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold text-brand-dark uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              <button className="flex items-center gap-2 text-xs font-bold text-brand-dark uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                View Case Study
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
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
