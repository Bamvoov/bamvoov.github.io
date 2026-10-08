import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Header from "../../components/Header";
import { getSortedPostsData, PostData } from "../../lib/posts";

type BlogProps = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  allPostsData: Omit<PostData, "content">[];
};

export default function Blog({ theme, setTheme, allPostsData }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog | Satvik Srivastava</title>
        <meta name="description" content="My thoughts and writings" />
      </Head>

      <div className="min-h-screen bg-bg-1 text-text-color">
        <Header theme={theme} setTheme={setTheme} />

        <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="font-mono text-xs text-muted uppercase tracking-widest hover:text-accent transition-colors mb-6 inline-block">
              ← back to home
            </Link>
            <h1 className="font-display text-5xl md:text-7xl italic text-text-color leading-[0.95]">
              writings
            </h1>
          </div>

          {/* Post List */}
          <div className="space-y-0">
            {allPostsData.map(({ slug, date, title, description }) => (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group block py-8 border-t border-bg-3/60"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h2 className="font-mono text-lg font-bold text-text-color group-hover:text-accent transition-colors lowercase">
                    {title}
                  </h2>
                  <time className="font-mono text-xs text-muted mt-1 md:mt-0">
                    {date}
                  </time>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {description}
                </p>
                <div className="mt-3 font-mono text-xs text-accent font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>read post</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
