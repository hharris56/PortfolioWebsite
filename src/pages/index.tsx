import Head from 'next/head'
import NavBar from '@/components/Navbar/NavBar'
import TechStack from '@/components/TechStack/TechStack'
import Background from '@/components/Background/Background'
import ExternalLink from '@/components/ExternalLink'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunter Harris | Computer Scientist</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <main key="main" id="main">
        {/* panel 1 */}
        <div className="landing panel" id="home">
          <div className="panel-content landing-panel-content">
            <div>
              <p className="landing-title">
                Hello, I'm{' '}
                <span
                  style={{
                    color: 'var(--accent-color)',
                    fontWeight: '700',
                  }}>
                  Hunter
                </span>
              </p>
              <p className="landing-subtitle">a full stack engineer</p>
            </div>
            <div className="headshot-bg">
              <img
                src="/headshot-scaled.png"
                alt="headshot"
                className="headshot-img"
              />
            </div>
          </div>
        </div>
        <NavBar />
        {/* panel 2 */}
        <div className="panel">
          <a className="anchor" id="about"></a>
          <div className="panel-title">About</div>
          <div className="panel-content">
            <div key="description" style={{ width: '30rem' }} className="pane">
              <h2 className="pane-header">Who I Am</h2>
              <p style={{ textAlign: 'justify' }}>
                An engineer, a creative, and a passionate believer in the mantra
                'learn by doing'; I'm the kind of person who loves tackling
                problems head on. A large portion of my technical experience
                lies in web development, but I also work on computer
                graphics, embedded systems, and game development. Outside the
                office I enjoy reading, hiking, snow sports and making music.
                Ask me about my most recent album!
              </p>
            </div>
            <div key="skills" style={{ width: '30rem' }} className="pane">
              <h2 className="pane-header">What I Do</h2>
              <TechStack
                icons={[
                  '/icons/nextjs-icon.svg',
                  '/icons/react-js-icon.svg',
                  '/icons/typescript-icon.svg',
                  '/icons/python-icon.svg',
                  '/icons/microsoft-dot-net-icon.svg',
                  '/icons/sql-icon.svg',
                ]}
              />
              <h2 className="pane-header" style={{ margin: '2rem 0rem' }}>
                What I Use
              </h2>
              <TechStack
                icons={[
                  '/icons/git-icon.svg',
                  '/icons/docker-icon.svg',
                  '/icons/jest-js-icon.svg',
                ]}
              />
            </div>
          </div>
        </div>
        {/* panel 3 */}
        <div className="panel">
          <a className="anchor" id="projects"></a>
          <div className="panel-title">Projects</div>
          <div className="panel-content vertical-panel-content">
          <div
              key="jwt-decoded"
              style={{ width: '60rem', textAlign: 'center', marginBottom: '2rem' }}
              className="pane">
              <div className="project-info">
                <div style={{ marginBottom: '0.5rem' }}>
                  <h1>JWT Decoded</h1>
                  <i>April 2025</i>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '12rem',
                    maxWidth: '100%',
                  }}>
                  <ExternalLink
                    text="repo"
                    href="https://github.com/hharris56/jwt-decoder"
                  />
                  <ExternalLink
                    text="website"
                    href="https://jwt-decoder-snowy.vercel.app"
                  />
                </div>
              </div>
              <div className="project-content">
                <iframe
                  src="https://jwt-decoder-snowy.vercel.app"
                  style={{
                    width: '20rem',
                    maxWidth: '100%',
                    aspectRatio: '1 / 1',
                    marginBottom: '1rem',
                  }}
                />
                <p style={{ width: '30rem', maxWidth: '100%' }}>
                  A super bare bones JWT decoder build using SvelteKit and Tailwind CSS. I often use online tools like this during API development to verify my token contents, however I dislike the lack of syntax highlighting found on <a href='https://www.jwt.ms/' target='_blank'><u>jwt.ms</u></a> and the over-zealous branding of <a href='https://www.jwt.io/'><u>jwt.io</u></a> so I decided to write my own.
                </p>
              </div>
              <div className="project-tool-container">
                <div className="project-tool">SvelteKit</div>
                <div className="project-tool">TailwindCSS</div>
              </div>
            </div>
            <div
              key="mini-pixel"
              style={{ width: '60rem', textAlign: 'center' }}
              className="pane">
              <div className="project-info">
                <div style={{ marginBottom: '0.5rem' }}>
                  <h1>Mini Pixel</h1>
                  <i>March 2025</i>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '12rem',
                    maxWidth: '100%',
                  }}>
                  <ExternalLink
                    text="repo"
                    href="https://github.com/hharris56/MiniPixel"
                  />
                  <ExternalLink
                    text="website"
                    href="https://mini-pixel.vercel.app"
                  />
                </div>
              </div>
              <div className="project-content">
                <iframe
                  src="https://mini-pixel.vercel.app"
                  style={{
                    width: '20rem',
                    maxWidth: '100%',
                    aspectRatio: '1 / 1',
                    marginBottom: '1rem',
                  }}
                />
                <p style={{ width: '30rem', maxWidth: '100%' }}>
                  A rudimentary pixel editor that supports canvas size from 3x3 to 20x20 with full color control. Pixels are dynamically scaled and rendered which was an excellent way to learn the ins and outs of tailwind CSS. Developed with vanilla typscript for minimal overhead.
                </p>
              </div>
              <div className="project-tool-container">
                <div className="project-tool">TypeScript</div>
                <div className="project-tool">TailwindCSS</div>
              </div>
            </div>
          </div>
        </div>
        {/* panel 4 */}
        <div className="panel">
          <a className="anchor" id="contact"></a>
          <div className="panel-title">Contact</div>
          <div className="panel-content">
            <div key="connect" style={{ width: '40rem' }} className="pane">
              <h2 className="pane-header">Let's Connect</h2>
              <p>You can find me on any of the following platforms:</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '2rem',
                }}>
                <a
                  href="https://www.linkedin.com/in/hunterharris56/"
                  target="_blank">
                  <img
                    src="/icons/linkedin-icon.svg"
                    alt="linkedin"
                    style={{
                      height: '3rem',
                      margin: '0rem 0.5rem',
                    }}
                  />
                </a>
                <a href="https://github.com/hharris56" target="_blank">
                  <img
                    src="/icons/github-icon.svg"
                    alt="github"
                    style={{
                      height: '3rem',
                      margin: '0rem 0.5rem',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div key="footer" className="footer">
          <a
            href="#home"
            className="pane-header"
            style={{ marginBottom: '1rem' }}>
            Home
          </a>
          <p>© 2025 Hunter Harris</p>
        </div>
      </main>
    </>
  )
}
