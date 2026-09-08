import type { NextPage } from "next";

import Head from "next/head";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";

import Hero from "../components/Hero";

import About from "../components/About";

import Projects from "../components/Projects";

import Contact from "../components/Contact";

import { SAMPLE_PROJECTS } from "../data/projects";

import { Project } from "../types";

type TabType = "about" | "projects" | "contact";

const Home: NextPage<any> = ({ theme, setTheme }) => {
  const [projects] = useState<Project[]>(SAMPLE_PROJECTS);
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const router = useRouter();

  // Listen to hash changes in the URL to dynamically select active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "about" || hash === "projects" || hash === "contact") {
        setActiveTab(hash);
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Intercept all hash clicks page-wide to route them smoothly to workspaces
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          const tab = href.replace("#", "");
          if (tab === "about" || tab === "projects" || tab === "contact") {
            e.preventDefault();
            handleTabChange(tab as TabType);
          }
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.history.pushState(null, "", `#${tab}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Satvik Srivastava</title>

        <meta name="description" content="me on this huge ass web" />

        <link rel="icon" href={`${router.basePath || ""}/Squirtle.png`} />
      </Head>

      {/* GRADIENT + VIGNETTE WRAPPER */}

      <div className="relative overflow-hidden min-h-screen">
        <Header theme={theme} setTheme={setTheme} activeTab={activeTab} setActiveTab={handleTabChange} />

        <main className="max-w-5xl mx-auto px-6 py-12 pb-12 mt-16 relative min-h-[60vh]">
          {/* About / Home Tab */}
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeTab === "about"
                ? "opacity-100 translate-y-0 relative pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none absolute top-0 left-0 right-0"
              }`}
          >
            <Hero />
            <About />
          </div>

          {/* Projects Tab */}
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeTab === "projects"
                ? "opacity-100 translate-y-0 relative pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none absolute top-0 left-0 right-0"
              }`}
          >
            <Projects projects={projects} />
          </div>

          {/* Contact Tab */}
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeTab === "contact"
                ? "opacity-100 translate-y-0 relative pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none absolute top-0 left-0 right-0"
              }`}
          >
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

