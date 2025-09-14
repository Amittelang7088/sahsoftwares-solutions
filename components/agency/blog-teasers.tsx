import Image from "next/image"
import Link from "next/link"

const POSTS = [
  {
    title: "How to Plan a Brand Refresh in 2025",
    date: "Jan 01",
    excerpt: "A practical framework to evaluate your brand assets and roll out updates without disruption.",
  },
  {
    title: "Design Systems that Scale",
    date: "Jan 01",
    excerpt: "Principles and patterns we use to keep products consistent while moving quickly.",
  },
]

export default function BlogTeasers() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-amber-500">Our Blog</p>
      <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">Latest From Blog</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {POSTS.map((p, idx) => (
          <article key={idx} className="overflow-hidden rounded-md border border-neutral-200">
            <Image
              src="/diverse-team-meeting.png"
              alt="Blog cover"
              width={560}
              height={280}
              className="h-auto w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <span className="inline-flex items-center rounded bg-neutral-100 px-2 py-1 font-medium text-neutral-800">
                  {p.date}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{p.excerpt}</p>
              <Link href="#" className="mt-3 inline-flex text-sm font-medium text-amber-600 hover:text-amber-700">
                Read More &gt;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
