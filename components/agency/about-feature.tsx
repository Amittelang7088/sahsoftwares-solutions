"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for staggered feature cards
const featuresContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const featureItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutFeature() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image with scroll + hover animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -100 }} // Fade out, scale down, slide left on exit
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-neutral-200 shadow-lg transform transition duration-500"
          >
            <Image
              src="/innovation-image1.png"
              alt="Consultant working at a desk"
              width={640}
              height={480}
              className="w-full object-cover"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Innovators in Smart Software Solutions
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed text-lg">
              We are SAH Softwares — a team of developers and designers building
              scalable software solutions to help businesses thrive in the
              digital age. Our mission is to simplify complex problems and
              empower companies with technology that drives growth and
              efficiency.
            </p>

            <motion.div
              variants={featuresContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <Feature
                title="Our Office"
                value="Street No 4, Avanti Nagar, Pune Naka Solapur"
                variants={featureItem}
              />
              <Feature
                title="Email"
                value="info@sahsoftwares.com"
                variants={featureItem}
              />
              <Feature
                title="Call Us"
                value="+917391853939"
                variants={featureItem}
              />
              <Feature
                title="Hours"
                value="Mon - Fri, 9am - 6pm"
                variants={featureItem}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Feature({
  title,
  value,
  variants,
}: {
  title: string;
  value: string;
  variants?: any;
}) {
  return (
    <motion.div
      variants={variants}
      className="rounded-2xl border border-neutral-200 p-5 bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <p className="text-xs uppercase tracking-wider text-neutral-500">
        {title}
      </p>
      <p className="mt-1 text-sm font-medium text-neutral-900">{value}</p>
    </motion.div>
  );
}
