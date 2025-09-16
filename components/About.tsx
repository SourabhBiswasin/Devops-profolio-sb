"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Coffee, Heart, Users, Award, Lightbulb } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Coffee, label: "Cups of Coffee", value: "50+" },
    { icon: Heart, label: "Happy Clients", value: "15+" },
    { icon: Users, label: "Team Projects", value: "20+" },
  ];

  const qualities = [
    {
      icon: Award,
      title: "Quality Focused",
      description:
        "I believe in writing clean, maintainable code that stands the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "I love tackling complex challenges and finding elegant solutions.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Collaboration and communication are key to successful projects.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating amazing digital
            experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Hello! I'm Jatin Kumar, a passionate full-stack developer with
                over 1 years of experience in creating web applications that
                make a difference. My journey in tech started with curiosity and
                has evolved into a deep love for problem-solving through code.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I specialize in modern JavaScript frameworks like React and
                Node.js, but I'm always eager to learn new technologies. When
                I'm not coding, you'll find me exploring new tech trends,
                contributing to open source, or sharing knowledge with the
                developer community.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                My goal is to create applications that not only function
                flawlessly but also provide exceptional user experiences. I
                believe that great software is built on solid foundations of
                clean code, thoughtful design, and continuous learning.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="space-y-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit group-hover:scale-110 transition-transform duration-300">
                  <quality.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {quality.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {quality.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
