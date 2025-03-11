import Head from 'next/head'
import NavBar from '@/components/NavBar'
import TechStack from '@/components/TechStack'

export default function Home() {
    return (
        <>
            <Head>
                <title>Hunter Harris | Computer Scientist</title>
                <meta name="description" content="Welcome to my portfolio website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main key="main" id="main">
                {/* panel 1 */}
                <div className="landing panel" id="home">
                    <div className="panel-content" style={{ alignItems: 'center' }}>
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
                        <img
                            src="/headshot-scaled.png"
                            alt="headshot"
                            style={{
                                height: '25rem',
                                borderRadius: '50%',
                                boxShadow: '0 0rem 4rem rgba(0, 0, 0, 0.1)',
                                backgroundColor: "white"
                            }}
                        />
                    </div>
                </div>
                <NavBar />
                {/* panel 2 */}
                <div className="panel">
                    <a className="anchor" id="about"></a>
                    <div className="panel-title">About</div>
                    <div className="panel-content">
                        <div key="description" style={{ width: '35%' }} className="pane">
                            <h2 className="panel-header">Who I Am</h2>
                            <p style={{ textAlign: 'justify' }}>An engineer, a creative, and a passionate believer in the mantra 'learn by doing'; I'm the kind of person who loves tackling problems head on. A large portion of my technical experience lies in web development, but I've also worked with embedded systems, graphic libraries, and game development. Outside the office I enjoy reading, hiking, snowboarding and making music. Ask me about my most recent album!</p>
                        </div>
                        <div key="skills" style={{ width: '35%' }} className="pane">
                            <h2 className="panel-header">What I Do</h2>
                            <TechStack icons={['/icons/nextjs-icon.svg', '/icons/react-js-icon.svg', '/icons/typescript-icon.svg', '/icons/python-icon.svg', '/icons/microsoft-dot-net-icon.svg', '/icons/sql-icon.svg']} />
                            <h2 className="panel-header" style={{ margin: '2rem 0rem' }}>
                                What I Use
                            </h2>
                            <TechStack icons={['/icons/git-icon.svg', '/icons/docker-icon.svg', '/icons/jest-js-icon.svg']} />
                        </div>
                    </div>
                </div>
                {/* panel 3 */}
                <div className="panel">
                    <a className="anchor" id="projects"></a>
                    <div className="panel-title">Projects</div>
                    <div className="panel-content">
                        <div key="projects" style={{ width: '50%', textAlign: 'center' }} className="pane">
                            coming soon...
                        </div>
                    </div>
                </div>
                {/* panel 4 */}
                <div className="panel">
                    <a className="anchor" id="contact"></a>
                    <div className="panel-title">Contact</div>
                    <div className="panel-content">
                        <div key="connect" style={{ width: '50%' }} className="pane">
                            <h2 className="panel-header">Let's Connect</h2>
                            <p>You can find me on any of the following platforms:</p>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '2rem',
                                }}>
                                <a href="https://www.linkedin.com/in/hunterharris56/" target="_blank">
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
                    <a href="#home" className='panel-header' style={{marginBottom: "1rem"}}>Home</a>
                    <p>© 2025 Hunter Harris</p>
                </div>
            </main>
        </>
    )
}
