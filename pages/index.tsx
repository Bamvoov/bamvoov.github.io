import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { SAMPLE_PROJECTS } from "../data/projects";
import { Project } from "../types";

const Home: NextPage<any> = ({ theme, setTheme }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Satvik Srivastava</title>
        <meta name="description" content="me on this huge ass web" />
        <link rel="icon" href={`${router.basePath || ""}/azumanga-daioh-osaka-helmet.gif`} />
      </Head>

      <div className="min-h-screen">
        <Header theme={theme} setTheme={setTheme} />

        {/* Main Content (light bg) */}
        <main className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <Hero />
          <About />
          <Projects projects={SAMPLE_PROJECTS} />
        </main>

        {/* Contact Section (dark bg - full width) */}
        <Contact />

        {/* Footer */}
        <footer className="bg-contact-bg text-contact-text border-t border-[var(--bg-3)]/10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[var(--muted)]">
            <p>toes reached. </p>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <span>"what to write here ??"</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
