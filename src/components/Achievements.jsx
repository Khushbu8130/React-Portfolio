import React from 'react'
import { ACHIEVEMENTS } from '../constants'
import { motion } from 'framer-motion'

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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const Achievements = () => {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      className="py-16 border-b border-neutral-800"
    >

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-center text-3xl font-semibold mb-4"
      >
        Achievements <span className="text-purple-400">& Recognition</span>
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-center text-sm text-neutral-400 mb-10"
      >
        Highlights of my accomplishments and milestones
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={container}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group bg-neutral-900 rounded-lg border border-neutral-800 hover:border-purple-500/40 transition p-4"
          >
            <h3 className="text-sm font-semibold mb-2 group-hover:text-purple-400 transition">
              {item.title}
            </h3>

            <p className="text-xs text-neutral-400 mb-3">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-[9px] bg-purple-500/10 text-purple-400 px-2 py-[1px] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>

    </motion.section>
  )
}

export default Achievements