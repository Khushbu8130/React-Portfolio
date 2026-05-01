import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaDiscord } from "react-icons/fa6";

// Animation
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
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
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
        Get in <span className="text-purple-400">Touch</span>
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-center text-neutral-400 mb-10 text-sm"
      >
        Feel free to reach out for opportunities or collaboration
      </motion.p>

      {/* Card */}
      <motion.div
        variants={fadeInUp}
        className="max-w-xl mx-auto bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-center hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition"
      >
        {/* Info */}
        <p className="text-neutral-400 mb-3">{CONTACT.address || ""}</p>
        <p className="text-neutral-400 mb-3">{CONTACT.phoneNo || ""}</p>

        <a
          href={`mailto:${CONTACT.email}`}
          className="text-purple-400 hover:underline block mb-6"
        >
          {CONTACT.email}
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-neutral-400">
          <a
            href="https://www.linkedin.com/in/khushbu-kumari-b727b525a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Khushbu8130"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="hover:text-purple-400 hover:scale-110 transition"
          >
            <FaDiscord />
          </a>

          <a
            href="#"
            className="hover:text-purple-400 hover:scale-110 transition"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        variants={fadeInUp}
        className="text-center text-xs text-neutral-500 mt-10"
      >
        © {new Date().getFullYear()} Khushbu Kumari. All rights reserved.
      </motion.p>
    </motion.section>
  );
};

export default Contact;