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
    link: "https://protonpdf-2.onrender.com",
  },
  {
    title: "BookHavan",
    image: project1,
    description:
      "Platform for engineering students to access and download books.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://drive.google.com/file/d/1uBs4GQd4ArM8JOP3oE9IMbYS_gYo8z6M/view",
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
    title: "Cloud Computing",
    description: "NPTEL certification on cloud architecture.",
    technologies: ["Cloud"],
    link: "#",
    image: cloudImg,
  },
  {
    title: "Full Stack Development",
    description: "MERN stack course completion.",
    technologies: ["MERN"],
    link: "#",
    image: fullstackImg,
  },
  {
    title: "Python Programming",
    description: "Python fundamentals certification.",
    technologies: ["Python"],
    link: "#",
    image: pythonImg,
  },
];

// ACHIEVEMENTS
export const ACHIEVEMENTS = [
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
];

// CONTACT
export const CONTACT = {
  email: "kumarikhushbu7199@gmail.com",
};