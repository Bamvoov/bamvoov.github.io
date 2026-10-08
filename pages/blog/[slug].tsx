import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { marked } from "marked";
import Header from "../../components/Header";
import { getAllPostSlugs, getPostData, PostData } from "../../lib/posts";

type PostProps = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  postData: PostData & { htmlContent: string };
};

export default function Post({ theme, setTheme, postData }: PostProps) {
  return (
    <>
      <Head>
        <title>{postData.title} | Satvik Srivastava</title>
        <meta name="description" content={postData.description || postData.title} />
      </Head>

      <div className="min-h-screen bg-bg-1 text-text-color">
        <Header theme={theme} setTheme={setTheme} />

        <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
          <Link href="/blog" className="font-mono text-xs text-muted uppercase tracking-widest hover:text-accent transition-colors mb-10 inline-block">
            ← back to writings
          </Link>

          <article>
            <h1 className="text-3xl md:text-4xl font-bold font-mono text-text-color mb-3">
              {postData.title}
            </h1>
            <div className="font-mono text-xs text-muted mb-10 pb-6 border-b border-bg-3/40">
              {postData.date}
            </div>
            
            <div 
              className="prose prose-stone max-w-none font-sans text-text-color leading-relaxed
                prose-headings:font-mono prose-headings:text-text-color
                prose-a:text-accent-secondary prose-a:underline prose-a:decoration-accent-secondary/40 hover:prose-a:decoration-accent-secondary
                prose-strong:text-text-color prose-strong:font-semibold
                prose-code:text-accent prose-code:bg-bg-2 prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono
                prose-pre:bg-bg-2 prose-pre:border prose-pre:border-bg-3/40
                prose-li:marker:text-accent"
              dangerouslySetInnerHTML={{ __html: postData.htmlContent }} 
            />
          </article>
        </main>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  const htmlContent = await marked(postData.content);
  return {
    props: {
      postData: {
        ...postData,
        htmlContent,
      },
    },
  };
};
