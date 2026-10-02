// All the content of the portfolio lives here (matches the resume).
// To update the site, edit this file instead of the components.

export const profile = {
  name: "Peddinti Sai Chakri",
  title: "Final-Year B.Tech Student | Frontend Developer",
  github: "https://github.com/saichakri39",
  linkedin: "https://www.linkedin.com/in/peddinti-sai-chakri-a3a378379",
  resume: "/Peddinti-Sai-Chakri-Resume.pdf",
  email: "peddintisaichakri@gmail.com",
  phone: "+91 7989360615",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "internship", label: "Internship" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering (AI & Data Science)",
    school: "Satya Institute of Technology and Management, Vizianagaram",
    note: "Affiliated to JNTU-GV",
    years: "2023 – 2027",
    score: "Percentage: 71.47%",
  },
  {
    degree: "Intermediate (Class XII)",
    school: "Sri Chaitanya Junior College, Vizianagaram",
    note: "",
    years: "2021 – 2023",
    score: "Percentage: 71.5%",
  },
  {
    degree: "Secondary School Certificate (SSC / Class X)",
    school: "Aim Concept School, Vizianagaram",
    note: "",
    years: "2020 – 2021",
    score: "Percentage: 85.33%",
  },
];

export const certifications = [
  "NPTEL Certification: Cloud Computing",
  "NPTEL Certification: Industry 4.0",
];

export const skillGroups = [
  { title: "Programming Languages", skills: ["Python", "JavaScript"] },
  { title: "Frontend Technologies", skills: ["HTML5", "CSS3"] },
  { title: "Backend", skills: ["Node.js"] },
  { title: "Tools", skills: ["Git", "GitHub"] },
  { title: "Currently Learning", skills: ["React", "Express.js", "MongoDB", "TypeScript (basics)"] },
  { title: "Soft Skills", skills: ["Communication", "Teamwork"] },
  { title: "Languages", skills: ["English", "Telugu", "Hindi"] },
];

// category must be one of: "Frontend", "React", "AI"
// The first four projects are the ones on the resume.
// Delete any project below that you don't want to show.
export const projects = [
  {
    title: "Pizza Booking Application",
    category: "Frontend",
    description:
      "A responsive pizza ordering application with dynamic order customization. Uses JavaScript DOM manipulation and setTimeout() for real-time order status updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "",
  },
  {
    title: "Music Hub",
    category: "Frontend",
    description:
      "A responsive music website with language-based song browsing and a clean, user-friendly interface for easy navigation.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/saichakri39/music-hub",
  },
  {
    title: "E-Commerce Clone",
    category: "Frontend",
    description:
      "A responsive Amazon-inspired e-commerce website with a navigation bar, banners and product sections.",
    tags: ["HTML", "CSS"],
    github: "",
  },
  {
    title: "Medicare AI (internship project)",
    category: "AI",
    description:
      "An AI-powered healthcare platform with a medical chatbot, OCR-based lab report analysis and real-time medication reminders. I contributed to it during my internship at Pixelwind Technologies.",
    tags: ["Python", "LLMs", "OCR"],
    github: "",
  },
  {
    title: "YouTube Clone",
    category: "Frontend",
    description:
      "A frontend project inspired by a video-sharing platform, focused on layout, navigation, video cards and responsive design.",
    tags: ["HTML", "CSS"],
    github: "",
  },
  {
    title: "SCS Parking Zone",
    category: "Frontend",
    description:
      "A parking management project that stores its data in the browser using localStorage.",
    tags: ["JavaScript", "localStorage"],
    github: "",
  },
  {
    title: "Student Profile Card",
    category: "React",
    description:
      "A small React project to practise components, props, destructuring, useState and show/hide functionality.",
    tags: ["React", "Props", "useState"],
    github: "",
  },
  {
    title: "Student Management Form",
    category: "React",
    description:
      "A React app built with useState. You can add students, delete students, search by name and see the total student count.",
    tags: ["React", "useState"],
    github: "",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI",
    description: "A student project that reads a resume and gives basic feedback on it.",
    tags: ["Python", "Generative AI"],
    github: "",
  },
  {
    title: "Fake News Detector",
    category: "AI",
    description: "A student project that tries to tell whether a piece of news is fake or real.",
    tags: ["Python", "AI"],
    github: "",
  },
  {
    title: "AI Career Guidance",
    category: "AI",
    description:
      "A student project that suggests career directions based on a person's skills and interests.",
    tags: ["Python", "Generative AI"],
    github: "",
  },
];

export const projectFilters = ["All", "Frontend", "React", "AI"];

export const internship = {
  role: "Python & Generative AI Intern",
  company: "Pixelwind Technologies",
  period: "Apr 2026 – Jun 2026",
  points: [
    "Worked with Large Language Models (LLMs) and explored Retrieval-Augmented Generation (RAG) concepts.",
    "Integrated LLM APIs using API keys and handled API authentication, requests and responses.",
    "Contributed to Medicare AI, an AI-powered healthcare platform with a medical chatbot, OCR-based lab report analysis and real-time medication reminders.",
  ],
  topics: ["Python", "LLMs", "RAG", "OCR"],
};

// Edit the text so it matches your real timeline.
export const journey = [
  {
    when: "2023",
    title: "Started B.Tech in CSE (AI & DS)",
    text: "Began with programming basics and web fundamentals.",
  },
  {
    when: "Frontend basics",
    title: "HTML, CSS and JavaScript",
    text: "Built the Pizza Booking Application, Music Hub and an Amazon-inspired e-commerce clone.",
  },
  {
    when: "Apr 2026 – Jun 2026",
    title: "Python & Generative AI internship",
    text: "Worked with LLMs, RAG concepts and LLM APIs at Pixelwind Technologies.",
  },
  {
    when: "Going further",
    title: "React and backend",
    text: "Learning React, Node.js, Express.js and MongoDB to build full web applications.",
  },
  {
    when: "Now",
    title: "Preparing for placements",
    text: "Improving my projects, practising problem solving and looking for entry-level Software Developer or Frontend Developer roles.",
  },
];
