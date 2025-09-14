import Image from "next/image"

const TESTIMONIALS = [
  {
    name: "Client Name",
    role: "Product Lead",
    quote: "Their team delivered a beautiful, performant website that lifted conversions immediately.",
  },
  {
    name: "Client Name",
    role: "VP Marketing",
    quote: "Clear process, great collaboration, and an outcome we’re proud to show customers.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">What Clients Say</p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Clients Say About Our Services</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <article key={idx} className="rounded-md border border-neutral-200 bg-white p-6">
              <p className="text-neutral-700 leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={`/diverse-group-avatars.png?height=48&width=48&query=avatar%20${encodeURIComponent(t.name)}`}
                  alt={`${t.name} avatar`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-neutral-600">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
