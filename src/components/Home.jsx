import React, { useEffect, useState } from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/khushbu.jpeg"
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiMongodb, SiExpress } from "react-icons/si"

// ---------------- TYPING EFFECT ----------------
const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Problem Solver",
  "REST API Developer",
]

const useTypingEffect = () => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const speed = deleting ? 50 : 100

    const timer = setTimeout(() => {
      setText(prev =>
        deleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      )

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200)
      } else if (deleting && text === "") {
        setDeleting(false)
        setIndex(prev => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return text
}

// ---------------- ANIMATION ----------------
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

const Hero = () => {
  const animatedRole = useTypingEffect()

  return (
    <section className="relative border-b border-neutral-800 pb-20 pt-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.2),transparent_60%)]" />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          {/* Name */}
          <motion.h1
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-4"
          >
            Khushbu Kumari
          </motion.h1>

          {/* Animated Role */}
          <motion.h2
            custom={0.2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {animatedRole}
            </span>
            <span className="animate-pulse text-purple-400"> |</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={0.4}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={0.6}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition"
            >
              Download Resume
            </a>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 left-0 text-purple-400 text-2xl"
            >
              <FaReact />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 right-0 text-green-400 text-2xl"
            >
              <FaNodeJs />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute top-10 -right-6 text-green-500 text-2xl"
            >
              <SiMongodb />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-10 -left-6 text-gray-400 text-2xl"
            >
              <SiExpress />
            </motion.div>

            {/* Image */}
            <img
              src={profilePic}
              alt="Khushbu Kumari"
              className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-[320px] lg:h-[320px] object-cover rounded-2xl border border-neutral-800 shadow-xl hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero