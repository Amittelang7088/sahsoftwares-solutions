import { PenTool, Smartphone, Rocket, Wifi, BarChart3 } from "lucide-react";

const ITEMS = [
  {
    icon: PenTool,
    title: "Web Application Development",
    copy: "We build scalable, secure, and high-performance web applications tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps (Android & iOS)",
    copy: "Custom Android and iOS app development with seamless UI/UX, performance, and cross-platform compatibility.",
  },
  {
    icon: Wifi,
    title: "IoT Integrated Projects",
    copy: "Smart IoT solutions that connect devices, streamline operations, and bring intelligence to everyday systems.",
  },
  {
    icon: Rocket,
    title: "Startup-Focused Development",
    copy: "As a young and innovative team, we move fast and adapt quickly—helping startups go from idea to launch efficiently.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
          What We Do
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Innovators in Smart Software Solutions
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
          As a passionate startup, we specialize in building impactful digital
          products— from web and mobile apps to IoT-driven solutions. Our
          mission is to help businesses and startups grow through technology,
          creativity, and innovation.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="group rounded-md border border-neutral-200 bg-white p-5 transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-amber-500/60"
            >
              <it.icon
                className="h-6 w-6 text-amber-500 transition-transform duration-300 group-hover:rotate-6"
                aria-hidden
              />
              <h3 className="mt-3 text-base font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                {it.copy}
              </p>
              <a
                href="#"
                className="mt-3 inline-flex text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
              >
                Read More &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
