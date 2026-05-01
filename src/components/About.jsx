import React, { useEffect } from 'react'
import aboutImage from '../assets/aboutimg3.jpeg'
import { motion } from 'framer-motion'

const About = () => {

  // 🔥 Preload image (important fix)
  useEffect(() => {
    const img = new Image()
    img.src = aboutImage
  }, [])

  return (
    <section id="about" className="py-20 border-b border-neutral-800">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-semibold mb-16"
      >
        About <span className="text-purple-400">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} // 🔥 slight delay sync
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-2xl">

            {/* Blur placeholder */}
            <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>

            <img
              src={aboutImage}
              alt="about"
              loading="eager" // 🔥 important
              className="relative rounded-2xl w-[280px] sm:w-[320px] lg:w-[380px] shadow-lg hover:scale-105 transition duration-300"
            />

          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            MERN Stack Developer
          </h2>

          <p className="text-neutral-400 leading-relaxed mb-6">
            I am a passionate and dedicated MERN stack developer with a strong focus on building scalable, high-performance web applications. I enjoy transforming ideas into real-world solutions using clean, efficient code and modern technologies.
          </p>

          <p className="text-neutral-400 leading-relaxed mb-6">
            My expertise includes crafting intuitive user interfaces with React and developing robust backend systems using Node.js and Express. I also have experience working with MongoDB and integrating third-party APIs.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 hover:shadow-purple-500/20 hover:shadow-lg transition">
              <h3 className="text-purple-400 font-semibold">Frontend</h3>
              <p className="text-sm text-neutral-400">React, Tailwind, UI/UX</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 hover:shadow-purple-500/20 hover:shadow-lg transition">
              <h3 className="text-purple-400 font-semibold">Backend</h3>
              <p className="text-sm text-neutral-400">Node, Express, APIs</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 hover:shadow-purple-500/20 hover:shadow-lg transition">
              <h3 className="text-purple-400 font-semibold">Database</h3>
              <p className="text-sm text-neutral-400">MongoDB</p>
            </div>

            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 hover:shadow-purple-500/20 hover:shadow-lg transition">
              <h3 className="text-purple-400 font-semibold">Tools</h3>
              <p className="text-sm text-neutral-400">Git, Postman</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block px-6 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              View Projects →
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default About