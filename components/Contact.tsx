"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleCopyEmail = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("satvikxyz33@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full bg-contact-bg text-contact-text py-16 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Big Title */}
        <h2 className="text-5xl md:text-7xl font-extrabold font-mono leading-[0.9] mb-6">
          say<br />hi:3
        </h2>

        {/* Subtitle */}
        <p className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-10 max-w-xl">
          03 / contact me gng ---
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12">
          {/* Left: Terminal Commands */}
          <div className="space-y-4 font-mono text-sm">
            {/* GitHub */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 group">
              <span className="text-[var(--accent-secondary)]"> </span>
              <a
                href="https://github.com/Bamvoov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-text hover:text-[var(--accent)] font-semibold flex items-center gap-2"
              >
                git follow bamvoov
                <span className="text-xs text-[var(--muted)] font-normal group-hover:translate-x-1 transition-transform">→ github</span>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 group">
              <span className="text-[var(--accent-secondary)]"></span>
              <a
                href="https://www.linkedin.com/in/satvik-srivastava-5163012a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-text hover:text-[var(--accent)] font-semibold flex items-center gap-2"
              >
                ln -s linkedin/satvik
                <span className="text-xs text-[var(--muted)] font-normal group-hover:translate-x-1 transition-transform">→ linkedin</span>
              </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 group">
              <span className="text-[var(--accent-secondary)]"></span>
              <a
                href="https://www.instagram.com/satvik_.s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contact-text hover:text-[var(--accent)] font-semibold flex items-center gap-2"
              >
                open instagram/satvik_.s
                <span className="text-xs text-[var(--muted)] font-normal group-hover:translate-x-1 transition-transform">→ instagram</span>
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 group">
              <span className="text-[var(--accent-secondary)]"></span>
              <button
                onClick={handleCopyEmail}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(e); }}
                className="text-left text-contact-text hover:text-[var(--accent)] font-semibold flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 focus:outline-none font-mono text-sm"
              >
                mailto satvikxyz33@gmail.com
                {copied ? (
                  <span className="text-xs text-[var(--accent-secondary)] font-normal flex items-center gap-1">
                    <Check size={12} /> copied!
                  </span>
                ) : (
                  <span className="text-xs text-[var(--muted)] font-normal group-hover:translate-x-1 transition-transform">→ click to copy</span>
                )}
              </button>
            </div>
          </div>

          {/* Center: Penguin GIF */}
          <div className="hidden md:flex items-end justify-center">
            <Image
              src="/pengu chio.gif"
              alt="Linux Pengu dancing"
              width={140}
              height={140}
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Right: Availability Info */}
          <div className="font-mono text-sm space-y-4">
            <div className="grid grid-cols-[90px_1fr] gap-y-2.5">
              <span className="text-[var(--accent)] font-semibold text-xs uppercase">timezone:</span>
              <span className="text-contact-text">Asia/Kolkata (IST - UTC+5:30)</span>

              <span className="text-[var(--accent)] font-semibold text-xs uppercase">response:</span>
              <span className="text-contact-text">(usually instant)</span>

              <span className="text-[var(--accent)] font-semibold text-xs uppercase">open to:</span>
              <span className="text-contact-text">hackathons / collabs / tech chats</span>
            </div>

            {/* Resume */}
            <div className="mt-6 pt-4 border-t border-[var(--bg-3)]/20">
              <p className="text-xs text-[var(--muted)] mb-2">
                <span className="text-[var(--accent-secondary)]">wget</span> satvik.dev/resume-3.pdf
              </p>
              <a
                href={`${router.basePath || ""}/resume-3.pdf`}
                download
                className="inline-block px-3 py-1.5 border border-[var(--accent)] text-[var(--accent)] font-mono text-xs tracking-wide hover:bg-[var(--accent)]/20 transition-colors"
              >
                download_resume.pdf
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Penguin */}
        <div className="flex md:hidden justify-center mt-8">
          <Image
            src="/pengu chio.gif"
            alt="Linux Pengu dancing"
            width={100}
            height={100}
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
