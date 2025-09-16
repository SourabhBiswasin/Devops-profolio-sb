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
        "Dedicated to delivering high-quality solutions with attention to detail and a commitment to excellence.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "Skilled at tackling complex challenges and delivering innovative, effective solutions.",
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
            Certified DevOps Engineer | 4+ years of experience | 
            Cloud Specialist using AWS & Azure | 
            Specializing in DevOps tools like Terraform (IaC), Jenkins, GitLab, GitHub Actions, Docker, Kubernetes, ArgoCD, EFK, Grafana & Prometheus. 
            SRE & Monitoring Specialist
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
