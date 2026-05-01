import React from 'react'
import { EXPERIENCES } from '../constants'
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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const Experience = () => {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      className="py-16 border-b border-neutral-800"
    >

      {/* Heading */}
      <motion.h2
        variants={fadeInUp}
        className="text-center text-3xl font-semibold mb-4"
      >
        Work <span className="text-purple-400">Experience</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={fadeInUp}
        className="text-center text-sm text-neutral-400 mb-10"
      >
        My professional journey and hands-on experience
      </motion.p>

      {/* Timeline Container */}
      <motion.div
        variants={container}
        className="relative max-w-3xl mx-auto"
      >

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 w-[2px] h-full bg-neutral-800"></div>

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative pl-12 mb-10 group"
          >

            {/* Dot */}
            <div className="absolute left-[6px] top-2 w-3 h-3 bg-purple-500 rounded-full group-hover:scale-125 transition"></div>

            {/* Card */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-purple-500/40 transition">

              {/* Date */}
              <p className="text-xs text-neutral-400 mb-1">{exp.year}</p>

              {/* Role */}
              <h3 className="text-sm font-semibold mb-1">
                <a
                  href={exp.roleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {exp.role}
                </a>
                {" "}at{" "}
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  {exp.company}
                </a>
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
                {exp.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-[2px] rounded"
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

export default Experience