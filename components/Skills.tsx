"use client";

import React from "react";
import { motion } from "framer-motion";

// Define TypeScript interface for tech stack items
interface TechItem {
  name: string;
  icon: string | React.ReactNode; // Allow both URL strings and JSX elements
  color: string;
}

export default function Skills() {
  const techStack: TechItem[] = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },
    // {
    //   name: "TypeScript",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    //   color: "#3178C6",
    // },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    // {
    //   name: "PostgreSQL",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    //   color: "#336791",
    // },
    // {
    //   name: "Python",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    //   color: "#3776AB",
    // },
    // {
    //   name: "Docker",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    //   color: "#2496ED",
    // },
    // {
    //   name: "AWS",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    //   color: "#FF9900",
    // },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 73.29"
          className="h-16 w-auto text-black dark:text-white"
          aria-labelledby="tailwind-css-title"
        >
          <title id="tailwind-css-title">Tailwind CSS Logo</title>
          <path
            className="fill-cyan-500 dark:fill-cyan-400"
            fillRule="evenodd"
            d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
          />
        </svg>
      ),
      color: "#06B6D4",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "#764ABC",
    },
    {
      name: "Ant Design",
      icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      color: "#E10098",
    },
    {
      name: "Framer Motion",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-labelledby="framer-motion-title"
        >
          <path
            d="M12 12l-8 -8v16l16 -16v16l-4 -4"
            stroke="#6366F1"
            fill="none"
          />
          <path d="M20 12l-8 8l-4 -4" stroke="#8B5CF6" fill="none" />
          <circle cx="12" cy="12" r="2" fill="#EC4899" />
        </svg>
      ),
      color: "#FFCA28",
    },
    // {
    //   name: "Figma",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    //   color: "#F24E1E",
    // },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "#007ACC",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={`${tech.name} logo`}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                        style={{
                          filter: `drop-shadow(0 0 8px ${tech.color}40)`,
                        }}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://via.placeholder.com/48?text=Error";
                        }}
                      />
                    ) : (
                      tech.icon
                    )}
                  </motion.div>

                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: tech.color,
                    boxShadow: `0 0 20px ${tech.color}40`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{
                      x: `${Math.random() * 100}%`,
                      y: `${Math.random() * 100}%`,
                      scale: 0,
                    }}
                    whileHover={{
                      scale: [0, 1, 0],
                      y: [null, -20, -40],
                      transition: {
                        duration: 1,
                        delay: i * 0.2,
                        repeat: Infinity,
                      },
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Other Technologies & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Webpack",
              "Jest",
              "Cypress",
              "Prisma",
              "Socket.io",
              "Sass",
              "Material-UI",
              "Framer Motion",
              "Vercel",
              "Netlify",
              "Supabase",
              "Stripe",
            ].map((tech, index) => (
              <motion.span
                key={`${tech}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(59, 130, 246)",
                  color: "white",
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium cursor-default transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
