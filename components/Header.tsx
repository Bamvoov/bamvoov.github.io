"use client";

import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-1/95 border-b border-bg-3/40 px-4 sm:px-6 py-3 flex justify-between items-center font-mono text-xs tracking-tight uppercase">
      {/* LEFT: Logo */}
      <a href="#hero" className="flex items-center gap-1.5 text-muted hover:text-text-color transition-colors">
        <span className="text-bg-3">/</span>
        <span className="text-text-color font-bold">satvik_srivastava</span>
      </a>

      {/* CENTER: Osaka GIF */}
      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2">
        <Image
          src="/osaka-ayumu.gif"
          alt="Osaka logo icon"
          width={22}
          height={22}
          className="object-contain rounded-sm"
        />
      </div>

      {/* RIGHT: Nav Links */}
      <nav className="flex items-center gap-2 sm:gap-4 text-muted">
        <a href="#about" className="hover:text-text-color transition-colors">[ about ]</a>
        <a href="#projects" className="hover:text-text-color transition-colors">[ projects ]</a>
        <a href="#contact" className="hover:text-text-color transition-colors">[ contact ]</a>
      </nav>
    </header>
  );
}
