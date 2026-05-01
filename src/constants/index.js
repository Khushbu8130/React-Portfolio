import project1 from "../assets/Projects/project1.jpg";
import project8 from "../assets/Projects/project8.webp";
import project5 from "../assets/Projects/project5.png";
import project6 from "../assets/Projects/project6.jpg";
import project3 from "../assets/Projects/project3.jpg";

import cloudImg from "../assets/certificates/cloudImg.jpg";
import fullstackImg from "../assets/certificates/fullstackImg.webp";
import pythonImg from "../assets/certificates/pythonImg.jpg";

// HERO
export const HERO_CONTENT = `I am a passionate MERN stack developer focused on building scalable and user-friendly web applications. I enjoy solving real-world problems and creating efficient solutions.`;

// ABOUT
export const ABOUT_TEXT = `Hi, I’m Khushbu Kumari, a MERN stack developer who loves building dynamic and scalable web applications. I specialize in React for frontend and Node.js/Express with MongoDB for backend development.`;

// EXPERIENCE
export const EXPERIENCES = [
  {
    year: "May 2025 - June 2025",
    role: "Software Developer Intern",
    company: "SIKHARTHY INFOTECH PVT. LTD.",
    description:
      "Worked on responsive UI and backend APIs. Improved performance and gained full-stack development experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    roleLink:
      "https://drive.google.com/file/d/1SYEJZlKPkEhjvsgVZ9ELstoeEq9wDKro/view",
    companyLink: "https://siplhub.com/",
  },
];

// PROJECTS
export const PROJECTS = [
  {
    title: "GitHub Project Analyzer",
    image: project8,
    description:
      "Full-stack app to analyze GitHub repositories and generate insights using APIs.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    link: "https://github-project-analyzer-2.onrender.com/",
  },
  {
    title: "ProtonPDF",
    image: project5,
    description:
      "File management tool for PDF compression, conversion, and merging.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://protonpdf.onrender.com/",
  },
  {
    title: "BookHavan",
    image: project1,
    description:
      "Platform for engineering students to access and download books.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://bookhavenn.onrender.com/",
  },
  {
    title: "Recruitment System",
    image: project6,
    description:
      "Salesforce-based system for recruitment and candidate tracking.",
    technologies: ["Salesforce"],
    link: "#",
  },
  {
    title: "Task Tracker",
    image: project3,
    description:
      "Salesforce app for managing tasks with automation and roles.",
    technologies: ["Salesforce"],
    link: "#",
  },
];

// CERTIFICATIONS
export const CERTIFICATIONS = [
    {
    title: "Cloud Computing – NPTEL (IIT Kharagpur)",
    description:
      "Elite certification covering cloud architecture, XaaS models, data management, and cloud security.",
    technologies: ["Cloud", "XaaS", "Security"],
    image: cloudImg,
    link: "https://drive.google.com/file/d/1L22l4cwqEwf55vy83e3Z_0U2O6JtloNz/view",
  },
  {
    title: "Full Stack Web Development",
    description:
      "Completed full-stack development course covering modern frontend and backend technologies including MERN stack.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: fullstackImg,
    link: "https://drive.google.com/file/d/1u64QXCjiY_akUElwYmiLMitqAtM5DdX4/view",
  },
  {
    title: "Programming for Everybody (Python)",
    description:
      "Completed Python fundamentals course by University of Michigan, focusing on programming basics and problem-solving.",
    technologies: ["Python"],
    image: pythonImg,
    link: "https://drive.google.com/file/d/1X4PClhVLKQKF-hlGUsXs_Wad2UDvThv1/view",
  },
];

// ACHIEVEMENTS
export const ACHIEVEMENTS = [
   {
    title: "Special Recognition – Agentic AI Project",
    description:
      "Recognized for building an innovative Agentic AI project under FFE-TiE Entrepreneurship Program (2025).",
    technologies: ["AI", "Innovation"],
  },
  {
    title: "DSA Problem Solving",
    description: "Solved 600+ problems on coding platforms.",
    technologies: ["DSA", "LeetCode", "CodeChef"],
  },
  {
    title: "Open Source",
    description: "Contributed in Hacktoberfest & GSSoC.",
    technologies: ["GitHub", "Open Source", "Community"],
  },
    {
    title: "Amazon Future Engineer (AFE)",
    description:
      "Selected among top 500 out of 8000+ applicants.",
    technologies: ["Competitive"],
  },
  {
    title: "FFE Star Mentee",
    description:
      "Recognized for consistent academic performance (2024–25).",
    technologies: ["Leadership"],
  },
  {
    title: "Tech Lead – Final Year Project",
    description:
      "Led development of a MERN stack application managing frontend, backend, and APIs.",
    technologies: ["Leadership", "MERN"],
  },
];

// CONTACT
export const CONTACT = {
  email: "kumarikhushbu7199@gmail.com",
};