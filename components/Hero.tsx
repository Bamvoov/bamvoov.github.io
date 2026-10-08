import React from "react";
import Image from "next/image";

export default function Hero() {
  const bioPoints = [
    "Somehow my code works xD",
    "I love tech in general",
    "We live we love we larp",
    "Second year CS student with 50+ browser tabs open(maybe more)",
    "I love building random stuff",
  ];

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start py-8 mt-8 w-full"
    >
      {/* LEFT COLUMN */}
      <div className="flex flex-col max-w-xl w-full">
        {/* Subtitle */}
        <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
          MOM LOOK I ON THE INTERNET (˶˃ ᵕ ˂˶)

        </p>

        {/* Large Title */}
        <h1 className="text-7xl md:text-[8rem] font-sans font-black leading-[0.85] tracking-tighter text-[#111]">
          <span
            className="block text-[#ccff00] mb-1 md:mb-2"
            style={{
              WebkitTextStroke: "2px #111",
              textShadow: "4px 4px 0px #111"
            }}
          >
            Hiiie:3
          </span>
          <span className="block whitespace-nowrap">I&apos;m Satvik</span>
        </h1>

        {/* Bio Line */}
        <div className="mt-8 flex items-start gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-accent mt-1 shrink-0" />
          <p className="font-mono text-sm text-text-color leading-relaxed">
            Second year CS student. Tech enjoyer. larp larp larp sahur.<br />
            <span className="text-muted underline decoration-bg-3">This page looks ass on phone and im aware of it.</span>
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 border border-bg-3 text-muted">open to hackathons</span>
          <span className="px-2.5 py-1 bg-accent-secondary text-white font-bold">cachyos btw!</span>
          <span className="px-2.5 py-1 border border-bg-3 text-muted">hey claude pls help</span>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col items-center gap-6 w-full md:w-auto">
        {/* Chiyo-chan GIF */}
        <Image
          src="/azumanga-daioh-chiyo-chan.gif"
          alt="Waving sticker"
          width={140}
          height={160}
          className="object-contain"
        />

        {/* Handwritten-style notes */}
        <div className="text-center font-mono text-xs text-muted italic leading-relaxed max-w-[200px]">
          <p>sleep-deprived even after sleeping 10 hours</p>
          <p className="mt-3">currently: trying to learn <span className="text-accent-secondary font-bold not-italic">go</span></p>
        </div>

        {/* Webring */}
        <div className="flex flex-col items-center gap-2 mt-2 text-center">
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">part of backdoors webring</span>
          <a
            href="https://webring-vit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/button-88x31-shimmer.gif"
              alt="VIT Webring"
              width={88}
              height={31}
              className="object-contain"
            />
          </a>
          <div className="flex items-center gap-3 font-mono text-[10px] text-muted uppercase tracking-widest">
            <a
              href="https://webring-vit.vercel.app/redirect?from=satvik&dir=prev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              ← prev
            </a>
            <span className="opacity-30">•</span>
            <a
              href="https://webring-vit.vercel.app/random"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-secondary transition-colors"
            >
              random
            </a>
            <span className="opacity-30">•</span>
            <a
              href="https://webring-vit.vercel.app/redirect?from=satvik&dir=next"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              next →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
