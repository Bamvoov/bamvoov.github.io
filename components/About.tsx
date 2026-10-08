"use client";

import Image from "next/image";

export default function About() {
  const stack = ["Python", "C++", "TypeScript", "Next.js", "SQL", "go", "React"];

  return (
    <section id="about" className="mt-24 w-full">
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-muted uppercase tracking-widest">01 / about.exe</span>
        <span className="h-px flex-1 bg-bg-3/40" />
      </div>

      {/* About Paragraph */}
      <div className="max-w-3xl mb-8">
        <p className="text-lg md:text-xl font-mono text-text-color leading-relaxed">
          I like making things for the Internet, recently got into cybersecurity and im kinda loving it (hey claude hack this pls).{" "}
          <a
            href="https://bamvoov.github.io/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-secondary underline decoration-accent-secondary/40 hover:decoration-accent-secondary transition-colors"
          >
            blog maxxing
          </a>{" "}
          a bad writer btw.
        </p>
      </div>


      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 border border-bg-3 text-muted hover:border-accent hover:text-accent transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GIF Row */}
      <div className="flex flex-wrap gap-4 items-end">
        <Image
          src="/osaka-osaka-simulator.gif"
          alt="Osaka simulator"
          width={140}
          height={100}
          className="h-24 w-auto object-contain"
        />
        <Image
          src="/osaka-azumanga-daioh.gif"
          alt="Osaka spacey"
          width={100}
          height={100}
          className="h-24 w-auto object-contain"
        />
        <Image
          src="/osaka-ayumu-kasuga.gif"
          alt="Osaka Ayumu"
          width={120}
          height={100}
          className="h-24 w-auto object-contain"
        />
      </div>
    </section>
  );
}
