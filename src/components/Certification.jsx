import React from 'react'
import { CERTIFICATIONS } from '../constants'
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

// Stagger animation
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const Certifications = () => {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      className="py-20 border-b border-neutral-800"
    >

      {/* Heading */}
      <motion.h1
        variants={fadeInUp}
        className="text-center text-3xl font-semibold mb-4"
      >
        Certifications 
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeInUp}
        className="text-center text-sm text-neutral-400 mb-12"
      >
        Verified learning, achievements, and professional growth
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={container}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >

        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="group relative bg-neutral-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-neutral-800 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition"
          >

            {/* Image Section */}
            <div className="relative overflow-hidden">

              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-36 object-cover group-hover:scale-110 transition duration-500 ease-out"
              />

              {/* 🔥 Gradient Overlay (MAIN FIX) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 text-xs bg-purple-600 rounded-md hover:bg-purple-700 transition"
                >
                  View
                </a>
              </div>

            </div>

            {/* Content */}
            <div className="p-4">

              {/* Title */}
              <h3 className="text-sm font-semibold mb-1 group-hover:text-purple-400 transition">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-400 mb-3 leading-relaxed line-clamp-2">
                {cert.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {cert.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-[2px] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* 🔥 Glow border effect */}
            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 border border-purple-500/20"></div>

          </motion.div>
        ))}

      </motion.div>
    </motion.section>
  )
}

export default Certifications