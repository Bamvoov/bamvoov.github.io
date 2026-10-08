"use client";

import Image from "next/image";
import { Project } from "../types";

// Map project IDs to GIF images
const projectGifs: Record<string, { src: string; alt: string }> = {
  p1: { src: "/osaka-yum.gif", alt: "Osaka yum" },
  p2: { src: "/osaka-azumanga-daioh.-lightning.gif", alt: "Osaka lightning" },
  p3: { src: "/osaka-azumanga-daioh-walter.gif", alt: "Osaka walter" },
  p4: { src: "/i-have-two-sides-osaka.gif", alt: "Osaka two sides" },
};

type ProjectsProps = {
  projects?: Project[];
};

export default function Projects({ projects = [] }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="mt-32 w-full">
      {/* Section Header: "things i made" in display serif */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <h2 className="font-display text-6xl md:text-8xl leading-[0.95] text-text-color italic">
          things<br />i made
        </h2>
        <div className="mt-4 md:mt-0 text-right font-mono text-xs text-muted uppercase tracking-widest">
          <p>02 # projects</p>
          <p className="mt-1">ls -la/l_responsibly</p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-0">
        {projects.map((project, index) => {
          const gif = projectGifs[project.id];
          const num = String(index + 1).padStart(2, "0");

          return (
            <div
              key={project.id}
              className="group grid grid-cols-[auto_1fr_auto] gap-4 md:gap-8 py-8 border-t border-bg-3/60"
            >
              {/* Number */}
              <span className="font-mono text-3xl md:text-4xl font-bold text-bg-3 group-hover:text-accent transition-colors leading-none mt-1">
                {num}
              </span>

              {/* Details */}
              <div className="min-w-0">
                <h3 className="font-mono text-base md:text-lg font-bold text-text-color mb-1.5 lowercase">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed mb-3 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] font-semibold text-accent-secondary"
                    >
                      #{t.toLowerCase().replace(/\s+/g, "_")}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 font-mono text-xs text-muted">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors flex items-center gap-1"
                    >
                      <span>[source]</span>
                      <span className="text-bg-3">&gt;</span>
                      <span className="text-text-color underline decoration-bg-3">
                        {project.repo.replace("https://", "").replace(" ", "")}
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* GIF */}
              {gif && (
                <div className="hidden sm:flex items-center justify-end shrink-0">
                  <Image
                    src={gif.src}
                    alt={gif.alt}
                    width={120}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Meme */}
      <div className="mt-8 pt-8 border-t border-bg-3/60 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image
          src="/azumanga-daiho-azumanga.gif"
          alt="Azumanga meme"
          width={80}
          height={80}
          className="h-16 w-auto object-contain"
        />
        <p className="font-mono text-sm text-muted text-right">
          more to come soon<br />(hopefully)
        </p>
      </div>
    </section>
  );
}
