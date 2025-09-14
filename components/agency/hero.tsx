"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
  "Simplifying complex problems with powerful, user-friendly applications.",
  "Empowering your business with smart digital solutions.",
  "Delivering innovation for your growth and success.",
  "Building software that makes your life easier.",
];

export default function Hero() {
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [showSentences, setShowSentences] = useState(true); // Show sentences immediately for testing

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showSentences) {
      interval = setInterval(() => {
        setSentenceIdx((idx) => (idx + 1) % sentences.length);
      }, 3500); // Slow speed for rolling effect
    }
    return () => clearInterval(interval);
  }, [showSentences]);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/business-professional-hero-background.png')",
        }}
        aria-hidden
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-950/50" aria-hidden />

      <div className="relative z-10 mx-auto w-4/5 px-4 py-28 text-center md:text-left">
        <p className="text-xs font-medium uppercase tracking-widest text-amber-500 mb-6">
          Smart Applications Hub
        </p>
        <div className="flex items-center justify-start h-24 w-full mb-6">
          <h2
            id="hero-title"
            className="text-left text-balance text-4xl font-semibold text-white sm:text-5xl md:text-6xl"
          >
            <Typewriter
              words={["Transforming Businesses with Smart Software Solutions"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={35}
              onLoopDone={() => setShowSentences(true)}
            />
          </h2>
        </div>
        <div className="min-h-[48px] max-w-2xl">
          <AnimatePresence mode="wait">
            {showSentences && (
              <motion.p
                key={sentenceIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="mt-2 text-pretty text-neutral-200"
              >
                {sentences[sentenceIdx]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
          <Button className="bg-amber-500 text-neutral-950 hover:bg-amber-600">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
