"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Simple responsive header with mobile menu
export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Company Logo" className="h-7" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          {/* <Button
            size="sm"
            className="bg-amber-500 text-neutral-950 hover:bg-amber-600"
          >
            Get Started
          </Button> */}
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      <div
        className={cn(
          "md:hidden transition-[max-height] overflow-hidden bg-neutral-950",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
            >
              {l.label}
            </a>
          ))}
          {/* <Button
            size="sm"
            className="mt-1 w-fit bg-amber-500 text-neutral-950 hover:bg-amber-600"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Button> */}
        </nav>
      </div>
    </header>
  );
}
