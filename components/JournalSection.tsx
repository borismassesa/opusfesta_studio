import Image from 'next/image';

export default function JournalSection() {
  const articles = [
    {
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74ce626d-5eba-470d-a4e4-159b9c6cad3c_3840w.webp',
      date: 'July 11, 2025',
      title: "Designing Systems That Don't Feel Systematic",
      author: 'Opusfesta Studio',
      category: 'Process',
    },
    {
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79b36b7a-a9b2-4eb8-a45d-27fe69423a98_3840w.jpg',
      date: 'June 03, 2025',
      title: 'Behind the Scenes of Our Latest Product Film',
      author: 'Opusfesta Studio',
      category: 'Motion',
    },
    {
      image:
        'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb37e13b-1cf2-4a1f-ad35-d5499d2a18a2_3840w.webp',
      date: 'May 19, 2025',
      title: 'Why We Treat Every Brief Like a Short Film',
      author: 'Opusfesta Studio',
      category: 'Culture',
    },
  ];

  return (
    <section className="py-24 border-t border-slate-800 bg-[#0f1218] relative z-10">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Studio Journal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-video bg-slate-800 overflow-hidden mb-6 border border-slate-800 relative">
                <div className="group-hover:bg-brand-accent/10 transition-colors z-10 absolute top-0 right-0 bottom-0 left-0"></div>
                <Image
                  src={article.image}
                  alt="Journal"
                  fill
                  className="group-hover:scale-105 transition-transform duration-700 opacity-80 object-cover z-10 grayscale"
                />
                <div className="text-[10px] text-brand-accent uppercase border-brand-accent/20 font-mono bg-black/80 border pt-1 pr-2 pb-1 pl-2 absolute top-4 left-4">
                  {article.date}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  By <span className="text-white">{article.author}</span> / {article.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
