"use client";

import { Sun, Moon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
type HeaderProps = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  activeTab: "about" | "projects" | "contact";
  setActiveTab: (tab: "about" | "projects" | "contact") => void;
};

export default function Header({ theme, setTheme, activeTab, setActiveTab }: HeaderProps) {
  const navLinks = [
    { name: "about" },
    { name: "projects" },
    { name: "contact" },
  ];

  const activeIndex = navLinks.findIndex((link) => link.name === activeTab);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-bg-1/95 border-b border-bg-3/40 px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap sm:flex-nowrap justify-between items-center gap-y-2.5 font-mono text-sm tracking-tight"
    >
      {/* LOGO */}
      <div
        className="order-1 min-w-0 flex items-center gap-2 cursor-pointer text-accent hover:text-accent-secondary transition-colors"
        onClick={() => setActiveTab("about")}
      >
        <Image
          src="/osaka-ayumu.gif"
          alt="Osaka logo icon"
          width={24}
          height={24}
          className="object-contain rounded-sm shrink-0"
        />
        <span className="font-bold truncate min-w-0">satvik@cachyos:~</span>
        <span className="animate-ping inline-block w-1.5 h-3 bg-accent ml-0.5 shrink-0" />
      </div>

      {/* NAVIGATION */}
      <nav className="order-3 sm:order-2 w-max max-w-full mx-auto sm:mx-0 relative flex items-center bg-bg-2 border border-bg-3/40 rounded-sm p-1">
        {/* Sliding Pill */}
        <div
          className="absolute top-1 bottom-1 left-1 rounded-sm bg-accent/10 border border-accent/25 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] w-16 sm:w-20"
          style={{
            transform: `translateX(calc(${activeIndex} * 100%))`,
          }}
        />
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => setActiveTab(link.name as any)}
            className={`w-16 sm:w-20 h-7 text-center z-10 transition-colors duration-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${activeTab === link.name
              ? "text-accent font-bold"
              : "text-muted hover:text-text-color"
              }`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* ACTIONS */}
      <div className="order-2 sm:order-3 shrink-0 flex items-center gap-3 sm:gap-4">
        <Link
          href="/static"
          className="px-2.5 py-1.5 rounded-sm border border-bg-3/40 bg-bg-2 text-muted hover:text-accent hover:border-accent transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
          title="Static"
        >
          <span>html</span>
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-2.5 py-1.5 rounded-sm border border-bg-3/40 bg-bg-2 text-muted hover:text-accent hover:border-accent transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
          title="Toggle Theme (Flashbang!)"
        >
          <span>flashbang</span>
        </button>
      </div>
    </header>
  );
}
