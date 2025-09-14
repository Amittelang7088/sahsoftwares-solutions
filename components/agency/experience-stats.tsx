export default function StartupPitch() {
  const vibes = [
    {
      title: "Innovation at Core",
      desc: "We are driven by fresh ideas and fearless problem-solving to build the next generation of software solutions.",
    },
    {
      title: "Agile & Adaptive",
      desc: "As a startup, we move fast, pivot quickly, and embrace change to deliver exactly what your business needs.",
    },
    {
      title: "Partner, Not Vendor",
      desc: "We work alongside you as collaborators, not just service providers, ensuring your growth is our growth.",
    },
    {
      title: "Future-Focused",
      desc: "We’re not tied to old ways. We leverage modern stacks and scalable architectures built to last.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-left">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
          Who We Are
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl text-left">
          A Fresh Startup with Bold Ambitions
        </h2>
        <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl text-left">
          We’re a young, passionate team building smart, scalable, and impactful
          software solutions. Our startup spirit means we challenge norms,
          embrace creativity, and are always hungry to deliver something
          extraordinary.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {vibes.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition text-left"
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
