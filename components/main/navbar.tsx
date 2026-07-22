import Link from "next/link";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        {/* Left: logo + wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            aria-hidden="true"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            className="block"
            style={{ filter: "drop-shadow(0 0 10px rgba(255,120,120,.6))" }}
          >
            <defs>
              <linearGradient id="nailart-nav-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff5f6d" />
                <stop offset="1" stopColor="#ffc371" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l2.4 6.1L21 10l-6 3.4L12 22l-3-8.6L3 10l6.6-1.9L12 2z"
              fill="url(#nailart-nav-grad)"
            />
          </svg>
          <span
            className="text-lg font-bold tracking-tight"
            style={{
              fontFamily:
                "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            NailArt AI
          </span>
        </Link>

        {/* Center: nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <Link
          href="/auth"
          className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.28)] backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
