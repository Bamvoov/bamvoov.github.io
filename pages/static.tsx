import Head from 'next/head';
import Link from 'next/link';
import { SAMPLE_PROJECTS } from '../data/projects';

export default function StaticSite() {
  return (
    <>
      <Head>
        <title>Satvik Srivastava - Static HTML</title>
        <meta name="description" content="Plain HTML version of the site" />
        <style>{`
          :root {
            --bg: #ffffff;
            --text: #000000;
            --link: #0000ee;
            --border: #cccccc;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #111111;
              --text: #e0e0e0;
              --link: #8ab4f8;
              --border: #444444;
            }
          }
          body {
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 0;
          }
          a {
            color: var(--link);
          }
          hr {
            border: 0;
            border-top: 1px solid var(--border);
          }
          .border-box {
            border: 1px solid var(--border);
            padding: 15px;
            margin-bottom: 20px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          table, th, td {
            border: 1px solid var(--border);
          }
          th, td {
            padding: 10px;
            text-align: left;
          }
        `}</style>
      </Head>

      <main style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'monospace', padding: '20px', lineHeight: '1.6' }}>
        <header>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>satvik@cachyos:~ </h1>
            <Link href="/" style={{ textDecoration: 'underline' }}>[revert]</Link>
          </div>
          <hr />
        </header>

        <section id="hero" style={{ marginBottom: '40px' }}>
          <img src="/azumanga-daioh-chiyo-chan.gif" alt="Waving sticker" width={112} />
          <h2>Hiiie:3</h2>
          <p>I am <strong>Satvik</strong> (sleep-deprived even after sleeping 10 hours).</p>

          <ul>
            <li>Somehow my code works xD</li>
            <li>I love tech in general</li>
            <li>Larping all the time</li>
            <li>Second year CS student with 120 browser tabs open</li>
            <li>I love building random stuff</li>
          </ul>

          <img src="/osaka-ayumu-kasuga.gif" alt="Satvik Srivastava profile photo" width={300} style={{ display: 'block', margin: '20px 0' }} />

          <div className="border-box" style={{ display: 'inline-block' }}>
            <p style={{ margin: '0 0 10px 0' }}>part of backdoors webring</p>
            <a href="https://webring-vit.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/button-88x31-shimmer.gif" alt="VIT Webring" width={120} />
            </a>
            <p style={{ fontSize: '12px', margin: '10px 0 0 0' }}>
              <a href="https://webring-vit.vercel.app/redirect?from=satvik&dir=prev">← previous site</a> |
              <a href="https://webring-vit.vercel.app/random">random site</a> |
              <a href="https://webring-vit.vercel.app/redirect?from=satvik&dir=next">next site →</a>
            </p>
          </div>
        </section>

        <hr />

        <section id="about" style={{ marginBottom: '40px' }}>
          <h2># 01 About</h2>
          <div className="border-box">
            <h3>system_info.sh</h3>
            <p><strong>os:</strong> <a href="https://cachyos.org/">cachyos(btw)</a></p>
            <p><strong>host:</strong> bamvoov</p>
            <p><strong>desktop manager:</strong> <a href="https://github.com/niri-wm/niri">niri</a></p>
            <p><strong>uptime:</strong> 8 hours, 14 mins</p>
            <p><strong>shell:</strong> /usr/bin/zsh</p>
            <p><strong>terminal:</strong> kitty</p>
          </div>

          <div className="border-box">
            <h3>pacman -Q (Installed Tech)</h3>
            <p>Python, C++, TypeScript, Next.js, SQL, go, React</p>
          </div>

          <div className="border-box">
            <h3>status_log.log</h3>
            <ul>
              <li>trying to learn <strong>go</strong></li>
              <li>part of backdoors webring!</li>
            </ul>
            <img src="/osaka-azumanga-daioh.gif" alt="Osaka spacey" width={96} />
          </div>
        </section>

        <hr />

        <section id="projects" style={{ marginBottom: '40px' }}>
          <h2># 02 Projects</h2>
          <p><em>bamvoov@cachyos ~ $ ls -la ~/projects</em></p>

          <div style={{ marginBottom: '20px' }}>
          </div>

          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Tech Stack</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_PROJECTS.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.title}</strong></td>
                  <td>{p.description}</td>
                  <td>{p.tech.join(', ')}</td>
                  <td>
                    {p.repo && <a href={p.repo} style={{ display: 'block' }}>[Source]</a>}
                    {p.demo && p.demo !== '#' && <a href={p.demo} style={{ display: 'block' }}>[Demo]</a>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <p>more to come soon (hopefully)</p>
        </section>

        <hr />

        <section id="contact" style={{ marginBottom: '40px' }}>
          <h2># 03 Contact</h2>

          <div className="border-box">
            <h3>connect.sh</h3>
            <ul>
              <li>GitHub: <a href="https://github.com/Bamvoov">bamvoov</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/satvik-srivastava-5163012a5/">satvik</a></li>
              <li>Instagram: <a href="https://www.instagram.com/satvik_.s/">satvik_.s</a></li>
              <li>X: <a href="https://x.com/satvik_sriv">satvik_sriv</a></li>
              <li>Email: <a href="mailto:satvikxyz33@gmail.com">satvikxyz33@gmail.com</a></li>
            </ul>
            <img src="/pengu chio.gif" alt="Linux Pengu dancing" width={150} />
          </div>

          <div className="border-box">
            <h3>availability.sh</h3>
            <p><strong>timezone:</strong> Asia/Kolkata (IST - UTC+5:30)</p>
            <p><strong>response:</strong> (usually instant)</p>
            <p><strong>open to:</strong> hackathons / collabs / tech chats</p>

            <p><strong>resume download:</strong></p>
            <p><a href="/resume-3.pdf" download>[download_resume.pdf]</a></p>
          </div>
        </section>
      </main>
    </>
  );
}
