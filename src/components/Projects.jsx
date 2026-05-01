import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

// Smooth animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Stagger container
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const Projects = () => {
  return (
    <motion.section
      id="projects"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }} // ✅ repeat animation
      className="py-16 border-b border-neutral-800"
    >

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-center text-3xl font-semibold mb-4"
      >
        My <span className="text-purple-400">Projects</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeInUp}
        className="text-center text-sm text-neutral-400 mb-10"
      >
        A selection of my recent work showcasing full-stack development
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px" }} // ✅ repeat stagger
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >

        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // ✅ each card re-animates
            whileHover={{
              y: -5,
              scale: 1.01,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="group bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-purple-500/40 transition"
          >

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition duration-500 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 ease-out flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs bg-purple-600 rounded-md hover:bg-purple-700 transition"
                >
                  View
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-base font-semibold mb-1 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              <p className="text-xs text-neutral-400 mb-2 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[9px] bg-purple-500/10 text-purple-400 px-2 py-[1px] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}

      </motion.div>
    </motion.section>
  )
}

export default Projects