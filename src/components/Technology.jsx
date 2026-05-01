import React from 'react'
import { motion } from 'framer-motion'
import {
  DiHtml5,
  DiJava,
  DiPython,
} from "react-icons/di"
import {
  IoLogoCss3,
} from "react-icons/io5"
import {
  RiReactjsLine,
} from "react-icons/ri"
import {
  SiMongodb,
} from "react-icons/si"
import {
  FaNodeJs,
  FaSalesforce,
} from "react-icons/fa"
import { TbCloudComputing } from "react-icons/tb"

// Smooth animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Stagger container
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Tech list
const techStack = [
  { icon: <DiHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <IoLogoCss3 />, name: "CSS", color: "text-blue-400" },
  { icon: <RiReactjsLine />, name: "React", color: "text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <DiJava />, name: "Java", color: "text-orange-400" },
  { icon: <DiPython />, name: "Python", color: "text-yellow-400" },
  { icon: <TbCloudComputing />, name: "Cloud", color: "text-sky-400" },
  { icon: <FaSalesforce />, name: "Salesforce", color: "text-blue-500" },
]

const Technology = () => {
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
        My <span className="text-purple-400">Tech Stack</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeInUp}
        className="text-center text-sm text-neutral-400 mb-10"
      >
        Technologies I use to build scalable and modern applications
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 max-w-4xl mx-auto"
      >

        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.05 }}
            className="group flex flex-col items-center justify-center bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-purple-500/40 transition"
          >

            {/* Icon */}
            <div className={`text-4xl ${tech.color} mb-2 group-hover:scale-110 transition`}>
              {tech.icon}
            </div>

            {/* Name */}
            <p className="text-xs text-neutral-400 group-hover:text-purple-400 transition">
              {tech.name}
            </p>

          </motion.div>
        ))}

      </motion.div>

    </motion.section>
  )
}

export default Technology