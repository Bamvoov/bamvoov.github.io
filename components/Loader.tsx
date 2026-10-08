"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Check if we've already shown the loader in this session
    if (sessionStorage.getItem("loader_shown")) {
      setLoading(false);
      setVisible(false);
      return;
    }

    const bootSequence = [
      "Starting kernel, nah its just a website stop over reacting...",
      "[ OK ] yo you got the internet.",
      "[ OK ] mic check mic check.",
      "[ OK ]  camera check ??!!.",
      "balls checking...",
      "[ OK ] balls detected.",
      "[ OK ] wooosh woosh.",
      "[ OK ] fuck microslop .",
      "starting...",
      "[ OK ] 1",
      "[ OK ] 17...",
      "[ OK ] 37...",
      "[ OK ] 67...",
      "[ OK ] 68...",
      "[ OK ] 72...",
      "[ OK ] 95...",
      "[ OK ] 100...",
      "Loading user profile...",
      "hola!"
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLogs(prev => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setVisible(false), 800); // Start fade out
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("loader_shown", "true");
        }, 1300); // Unmount after fade out
      }
    }, 120); // Fast boot sequence

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[1000] bg-bg-1 text-text-color font-mono text-xs sm:text-sm flex flex-col p-6 sm:p-12 transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-3xl w-full mx-auto flex flex-col gap-1.5 mt-auto sm:mt-0">
        {logs.map((log, i) => {
          if (!log) return null;
          return (
            <div key={i}>
              {log.startsWith("[ OK ]") ? (
                <span><span className="text-accent-secondary font-bold">[ OK ]</span>{log.substring(6)}</span>
              ) : (
                <span className="text-muted">{log}</span>
              )}
            </div>
          );
        })}
        {visible && logs.length < 13 && (
          <div className="w-2.5 h-4 bg-text-color animate-pulse mt-1" />
        )}
      </div>
    </div>
  );
}
