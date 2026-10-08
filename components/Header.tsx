"use client";

import Link from "next/link";

type HeaderProps = {
  theme?: "light" | "dark";
  setTheme?: (t: "light" | "dark") => void;
};

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-1/95 border-b border-bg-3/40 px-4 sm:px-6 py-3 flex justify-between items-center font-mono text-xs tracking-tight uppercase">
      {/* LEFT: Logo */}
      <Link href="/" className="flex items-center gap-1.5 text-muted hover:text-text-color transition-colors z-10">
        <span className="text-bg-3">/</span>
        <span className="text-text-color font-bold hidden sm:inline">satvik_srivastava</span>
        <span className="text-text-color font-bold sm:hidden">satvik</span>
      </Link>

      {/* CENTER: Nav Links */}
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-3 md:gap-4 text-muted text-[10px] sm:text-xs whitespace-nowrap">
        <Link href="/#about" className="hover:text-text-color transition-colors">[ about ]</Link>
        <Link href="/#projects" className="hover:text-text-color transition-colors">[ projects ]</Link>
        <Link href="/blog" className="hover:text-text-color transition-colors">[ blog ]</Link>
        <Link href="/static" className="hover:text-text-color transition-colors">[ static ]</Link>
        <Link href="/#contact" className="hover:text-text-color transition-colors">[ contact ]</Link>
      </nav>

      {/* RIGHT: Theme Toggle */}
      <div className="flex items-center z-10">
        {setTheme && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted hover:text-text-color transition-colors"
            aria-label="Toggle Dark Mode"
          >
            [ {theme === "dark" ? "light" : "dark"} ]
          </button>
        )}
      </div>
    </header>
  );
}
