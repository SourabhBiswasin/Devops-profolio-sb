"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Encrobytes",
      location: "Faridabad. Haryana, India",
      date: "2022 - Present",
      type: "work",
      description: [
        "Led development of 5+ major web applications using React and Node.js",
        "Mentored junior developers and established coding standards",
        "Improved application performance by 40% through optimization",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      achievements: [
        "Team Lead for 8 developers",
        "40% performance improvement",
        "5+ major projects delivered",
      ],
      technologies: ["React", "Node.js", "Javascript", "Express.js", "MongoDB"],
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "Digital Innovations Ltd",
    //   location: "New York, NY",
    //   date: "2020 - 2022",
    //   type: "work",
    //   description: [
    //     "Developed and maintained 10+ client projects",
    //     "Implemented responsive designs with 98% cross-browser compatibility",
    //     "Built RESTful APIs serving 100K+ daily requests",
    //     "Reduced bug reports by 60% through comprehensive testing",
    //   ],
    //   achievements: [
    //     "10+ client projects",
    //     "98% browser compatibility",
    //     "100K+ daily API requests",
    //   ],
    //   technologies: ["Vue.js", "Express", "PostgreSQL", "Docker", "Redis"],
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "StartupXYZ",
    //   location: "Austin, TX",
    //   date: "2019 - 2020",
    //   type: "work",
    //   description: [
    //     "Created user-friendly interfaces for mobile and web platforms",
    //     "Collaborated with UX designers to implement pixel-perfect designs",
    //     "Optimized applications for speed and scalability",
    //     "Contributed to open-source projects and company blog",
    //   ],
    //   achievements: [
    //     "Mobile-first approach",
    //     "Pixel-perfect designs",
    //     "Open-source contributor",
    //   ],
    //   technologies: ["React", "JavaScript", "Sass", "Webpack", "Jest"],
    // },
    {
      title: "Bachelor of Computer Science",
      company: "J.C. Bose University of Science and Technology, YMCA",
      location: "Faridabad, Haryana, India",
      date: "2021 - 2025",
      type: "education",
      description: [
        "Specialized in Software Engineering and Web Technologies",
        "Participant in Open-Source club with 20+ members",
      ],
      achievements: [
        "Full Stack Proficiency",
        "20+ club members",
        "Published research",
      ],
      technologies: ["C++", "Javascript", "Database Design", "Framework"],
    },
    {
      title: "MERN Stack Development Course",
      company: "CodeHelp",
      location: "Online",
      date: "2023",
      type: "certification",
      description: [
        "Achieved professional-level MERN Stack certification",
        "Demonstrated expertise in Frontend and Backend architecture",
        "Designed scalable and cost-effective solutions",
        "Applied  best practices in production environments",
      ],
      achievements: [
        "Professional certification",
        "MVC architecture expert",
        "Production deployments",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Javascript",
      ],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-6 h-6" />;
      case "education":
        return <GraduationCap className="w-6 h-6" />;
      case "certification":
        return <Award className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const getIconStyle = (type: string, isActive: boolean) => {
    const baseStyle = {
      boxShadow: isActive
        ? "0 0 20px rgba(59, 130, 246, 0.6)"
        : "0 3px 10px rgba(0, 0, 0, 0.1)",
      transform: isActive ? "scale(1.2)" : "scale(1)",
      transition: "all 0.3s ease",
    };

    switch (type) {
      case "work":
        return {
          ...baseStyle,
          background: isActive
            ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        };
      case "education":
        return {
          ...baseStyle,
          background: isActive
            ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
            : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        };
      case "certification":
        return {
          ...baseStyle,
          background: isActive
            ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
            : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        };
      default:
        return baseStyle;
    }
  };

  const getContentStyle = (isActive: boolean) => ({
    background: isActive
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)"
      : "rgb(255, 255, 255)",
    boxShadow: isActive
      ? "0 20px 40px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)"
      : "0 10px 25px rgba(0, 0, 0, 0.1)",
    border: isActive
      ? "2px solid rgba(59, 130, 246, 0.2)"
      : "1px solid rgba(59, 130, 246, 0.1)",
    borderRadius: "16px",
    transform: isActive ? "scale(1.02)" : "scale(1)",
    transition: "all 0.3s ease",
  });

  return (
    <section
      id="experience"
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
            My Professional Journey
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A timeline of my professional growth, achievements, and milestones
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <VerticalTimeline lineColor="rgb(59, 130, 246)">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={getContentStyle(activeIndex === index)}
                contentArrowStyle={{
                  borderRight:
                    activeIndex === index
                      ? "7px solid rgba(59, 130, 246, 0.2)"
                      : "7px solid rgb(255, 255, 255)",
                }}
                date={experience.date}
                dateClassName="text-slate-600 dark:text-slate-400 font-semibold"
                iconStyle={getIconStyle(experience.type, activeIndex === index)}
                icon={getIcon(experience.type)}
                onTimelineElementClick={() => setActiveIndex(index)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {experience.company}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.date}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-slate-600 flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Achievements
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {experience.achievements.map(
                          (achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: achIndex * 0.1,
                              }}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium text-center"
                            >
                              {achievement}
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-2">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
}
