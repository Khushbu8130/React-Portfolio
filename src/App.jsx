import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'   // ✅ using Hero (no rename)
import About from './components/About'
import Technology from './components/Technology'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certification from './components/Certification'
import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import Achievements from './components/Achievements'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>

      {/* Loader */}
      {loading && <Loader />}

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Background */}
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Navbar - Full Width */}
      <Navbar />

      {!loading && (
        <div className="container mx-auto px-6 lg:px-8 pt-20">

          {/* ✅ Hero used as Home */}
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="technology">
            <Technology />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="achievements">
            <Achievements />
          </section>

          <section id="certifications">
            <Certification />
          </section>

          <section id="contact">
            <Contact />
          </section>

        </div>
      )}

    </div>
  )
}

export default App