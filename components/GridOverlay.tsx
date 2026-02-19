export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-0 h-full w-full opacity-[0.06]">
      <div className="border-r border-neutral-400 h-full"></div>
      <div className="border-r border-neutral-400 h-full hidden md:block"></div>
      <div className="border-r border-neutral-400 h-full"></div>
      <div className="border-r border-neutral-400 h-full hidden lg:block"></div>
      <div className="border-r border-neutral-400 h-full"></div>
      <div className="border-r border-neutral-400 h-full hidden md:block"></div>
      <div className="border-r border-neutral-400 h-full"></div>
      <div className="border-r border-neutral-400 h-full hidden lg:block"></div>
      <div className="border-r border-neutral-400 h-full"></div>
      <div className="border-r border-neutral-400 h-full hidden md:block"></div>
      <div className="border-r border-neutral-400 h-full"></div>
      <div className="border-r border-neutral-400 h-full"></div>
    </div>
  );
}
