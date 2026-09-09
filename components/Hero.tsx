import React from "react";
import Image from "next/image";

export default function Hero() {
  const bioPoints = [
    "Somehow my code works xD",
    "I love tech in general",
    "Larping all the time",
    "Second year CS student with 120 browser tabs open",
    "I love building random stuff",
  ];

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 mt-8 w-full"
    >
      {/* LEFT: Text & Humorous Bio */}
      <div className="flex flex-col max-w-xl w-full">
        {/* Waving GIF */}
        <div className="mb-4 shrink-0">
          <Image
            src="/azumanga-daioh-chiyo-chan.gif"
            alt="Waving sticker"
            width={104}
            height={136}
            className="rounded-sm"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight font-mono">
          <span className="text-accent block mb-2">Hiiie:3</span>
          <span className="text-text-color text-2xl md:text-3xl normal-case font-sans font-medium tracking-normal block mt-2">
            I am <span className="text-accent font-mono font-extrabold">Satvik</span> (sleep-deprived even after sleeping 10 hours).
          </span>
        </h1>

        <ul className="mt-8 space-y-3 font-mono text-sm text-muted">
          {bioPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent-secondary">❯</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href="#projects"
            className="inline-block px-5 py-2.5 border border-accent text-accent font-mono text-sm tracking-wide rounded-sm hover:bg-accent/40 transition-colors"
          >
            ./list-projects.sh
          </a>
        </div>
      </div>

      {/* RIGHT: Avatar */}
      <div className="w-full flex flex-col items-center md:items-end gap-4">
        <div className="relative aspect-square w-full max-w-sm">
          <Image
            src="/osaka-ayumu-kasuga.gif"
            alt="Satvik Srivastava profile photo"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Separate Webring Box (Larger) */}
        <div className="w-full max-w-sm flex flex-col items-center gap-3 font-mono text-sm text-center py-3">
          <span className="text-muted text-xs sm:text-sm font-medium">part of backdoors webring</span>
          <a
            href="https://webring-vit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity my-1"
          >
            <Image
              src="/button-88x31-shimmer.gif"
              alt="VIT Webring"
              width={120}
              height={42}
              className="object-contain rounded-sm"
            />
          </a>
          <div className="flex items-center gap-3 text-xs sm:text-sm flex-wrap justify-center font-semibold">
            <a
              href="https://webring-vit.vercel.app/redirect?from=satvik&dir=prev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              ← previous site
            </a>
            <span className="text-muted/40">•</span>
            <a
              href="https://webring-vit.vercel.app/random"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-secondary hover:underline"
            >
              random site
            </a>
            <span className="text-muted/40">•</span>
            <a
              href="https://webring-vit.vercel.app/redirect?from=satvik&dir=next"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              next site →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
