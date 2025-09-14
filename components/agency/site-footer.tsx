export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">
            SAH Softwares
          </h3>
          <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
            Simplifying complex problems with powerful, user-friendly
            applications.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="inline-block rounded-full bg-neutral-200 p-2 hover:bg-amber-500 transition"
            >
              {/* LinkedIn SVG */}
              <svg
                className="h-6 w-6 text-neutral-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              className="inline-block rounded-full bg-neutral-200 p-2 hover:bg-amber-500 transition"
            >
              {/* Twitter SVG */}
              <svg
                className="h-6 w-6 text-neutral-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="inline-block rounded-full bg-neutral-200 p-2 hover:bg-amber-500 transition"
            >
              {/* Facebook SVG */}
              <svg
                className="h-6 w-6 text-neutral-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.124v-3.622h3.124v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.593 1.322-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z" />
              </svg>
            </a>
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          links={["Home", "About", "Services", "Pricing", "Contact Us"]}
        />
        <FooterCol
          title="Popular Links"
          links={["Blog", "Case Studies", "Careers", "FAQs", "Support"]}
        />
        <div>
          <h4 className="text-base font-semibold text-neutral-900">
            Get in Touch
          </h4>
          <ul className="mt-3 grid gap-2 text-sm text-neutral-700">
            <li>Street No 4, Avanti Nagar, Pune Naka, Solapur</li>
            <li>info@sahsoftwares.com</li>
            <li>+91 7391853939</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-neutral-600">
          <p>
            © {new Date().getFullYear()} SAH Softwares. All Rights Reserved.
          </p>
          <a
            href="#contact"
            className="rounded bg-amber-500 px-3 py-1 font-medium text-neutral-950 hover:bg-amber-600 transition"
          >
            Get Quote
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-base font-semibold text-neutral-900">{title}</h4>
      <ul className="mt-3 grid gap-2 text-sm text-neutral-700">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-amber-500 transition">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
