"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Star,
  Eye,
  GitBranch,
} from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time notifications.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      github: "https://github.com",
      live: "https://demo.com",
      features: [
        "User authentication and authorization",
        "Shopping cart and wishlist functionality",
        "Payment gateway integration",
        "Admin dashboard for inventory management",
        "Real-time order tracking",
      ],
      stats: {
        stars: 124,
        forks: 45,
        views: "2.3k",
      },
      category: "Full Stack",
      status: "Live",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, file sharing, and team communication features. Built with modern web technologies for optimal performance.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "WebSocket",
      ],
      github: "https://github.com",
      live: "https://demo.com",
      features: [
        "Real-time collaboration",
        "File upload and sharing",
        "Project timeline visualization",
        "Team chat integration",
        "Mobile-responsive design",
      ],
      stats: {
        stars: 89,
        forks: 23,
        views: "1.8k",
      },
      category: "SaaS",
      status: "Live",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "An interactive weather analytics dashboard with data visualization, historical trends, and predictive analytics. Features beautiful charts and real-time weather data.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Express", "Weather API", "Chart.js"],
      github: "https://github.com",
      live: "https://demo.com",
      features: [
        "Interactive data visualizations",
        "Historical weather analysis",
        "Location-based forecasting",
        "Customizable dashboard widgets",
        "Export functionality",
      ],
      stats: {
        stars: 67,
        forks: 18,
        views: "1.2k",
      },
      category: "Data Viz",
      status: "Live",
    },
    {
      title: "Social Media Platform",
      description:
        "A modern social media platform with real-time messaging, content sharing, and social features. Built with scalability and user experience in mind.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Node.js", "Redis", "AWS S3", "Socket.io"],
      github: "https://github.com",
      live: "https://demo.com",
      features: [
        "Real-time messaging system",
        "Content creation and sharing",
        "User profiles and connections",
        "News feed algorithm",
        "Media upload and optimization",
      ],
      stats: {
        stars: 156,
        forks: 72,
        views: "3.1k",
      },
      category: "Social",
      status: "Beta",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I love working
            with
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Project Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-12"
            >
              {/* Project Image */}
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  onHoverStart={() => setHoveredProject(activeProject)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === activeProject ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  />

                  {/* Project Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === activeProject ? 1 : 0,
                      y: hoveredProject === activeProject ? 0 : 20,
                    }}
                    className="absolute top-4 left-4 right-4"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            projects[activeProject].status === "Live"
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                          }`}
                        >
                          {projects[activeProject].status}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-medium">
                          {projects[activeProject].category}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === activeProject ? 1 : 0,
                      y: hoveredProject === activeProject ? 0 : 20,
                    }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={projects[activeProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        href={projects[activeProject].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <motion.h3
                    className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {projects[activeProject].title}
                  </motion.h3>

                  {/* GitHub Stats */}
                  <motion.div
                    className="flex items-center gap-6 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {projects[activeProject].stats.stars}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <GitBranch className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {projects[activeProject].stats.forks}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {projects[activeProject].stats.views}
                      </span>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {projects[activeProject].description}
                  </motion.p>
                </div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {projects[activeProject].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-center text-slate-600 dark:text-slate-400"
                      >
                        <motion.span
                          className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={projects[activeProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <motion.button
              onClick={prevProject}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.button>

            {/* Project Indicators */}
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    index === activeProject
                      ? "w-12 h-3 bg-blue-600 dark:bg-blue-400"
                      : "w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  } rounded-full`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === activeProject && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={{ x: "-100%" }}
                      animate={{ x: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextProject}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Project Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                  index === activeProject
                    ? "ring-2 ring-blue-500 shadow-lg"
                    : "hover:shadow-lg"
                }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveProject(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white font-semibold text-sm truncate">
                    {project.title}
                  </h4>
                  <p className="text-white/80 text-xs">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
