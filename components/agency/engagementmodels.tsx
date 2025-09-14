import { Button } from "@/components/ui/button";

const MODELS = [
  {
    name: "Project-Based",
    desc: "Perfect for startups and businesses with a clear scope and timeline. We deliver end-to-end software solutions.",
    highlight: "Best for Fixed Scope",
  },
  {
    name: "Dedicated Team",
    desc: "Scale your team with our skilled developers, designers, and testers who work exclusively on your projects.",
    highlight: "Most Popular",
    featured: true,
  },
  {
    name: "Hourly Consulting",
    desc: "Get expert advice, technical guidance, and on-demand support for your product whenever you need it.",
    highlight: "Flexible Option",
  },
];

export default function EngagementModels() {
  return (
    <section id="models" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold md:text-3xl mb-10">
        Engagement Models We Offer
      </h2>

      <div className="grid items-start gap-8 md:grid-cols-3">
        {MODELS.map((m) => (
          <article
            key={m.name}
            className={`rounded-md border border-neutral-200 p-6 transition-transform hover:scale-105 hover:shadow-md ${
              m.featured ? "border-amber-500 shadow-lg" : ""
            }`}
            aria-labelledby={`model-${m.name}`}
          >
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${
                m.featured ? "text-amber-500" : "text-neutral-500"
              }`}
            >
              {m.highlight}
            </span>
            <h3 id={`model-${m.name}`} className="mt-2 text-xl font-semibold">
              {m.name}
            </h3>
            <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
              {m.desc}
            </p>
            <Button
              className={`mt-6 w-full ${
                m.featured
                  ? "bg-amber-500 text-neutral-950 hover:bg-amber-600"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              }`}
            >
              Get Started
            </Button>
          </article>
        ))}

        <article
          className="rounded-md border border-neutral-200 p-6 transition-transform hover:scale-105 hover:shadow-md"
          aria-labelledby="model-custom"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Custom Plans
          </span>
          <h3 id="model-custom" className="mt-2 text-xl font-semibold">
            Tailored Solutions for Your Business
          </h3>
          <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
            Every business is unique. Let’s design a custom plan that fits your
            goals, budget, and timeline.
          </p>
          <Button className="mt-6 bg-amber-500 text-neutral-950 hover:bg-amber-600 w-full">
            Contact Us
          </Button>
        </article>
      </div>
    </section>
  );
}
