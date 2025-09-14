"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const TEAM = [
  {
    name: "Pruthviraj Chavan",
    role: "Software Developer",
    image: "/team/pruthviraj-chavan.jpeg",
  },
  {
    name: "Prakash Bodge",
    role: "Head of Marketing & Growth",
    image: "/team/prakash-bodge.png",
  },
  {
    name: "Komal Burrawar",
    role: "Project Manager",
    image: "/team/komal-burrawar.jpeg",
  },
  {
    name: "Divya Burra",
    role: "HR manager",
    image: "/team/divya-burra.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
          Our Team
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Meet Experts Behind the Work
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {TEAM.map((m, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-md border border-neutral-200 bg-white p-4 shadow-sm"
            >
              <Image
                src={m.image}
                alt={`${m.name} headshot`}
                width={360}
                height={240}
                className="h-auto w-full rounded object-cover"
              />
              <h3 className="mt-3 text-base font-semibold">{m.name}</h3>
              <p className="text-sm text-neutral-600">{m.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
