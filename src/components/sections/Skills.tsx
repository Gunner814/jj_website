"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layers, Brain, Cloud, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap = {
  Code,
  Layers,
  Brain,
  Cloud,
  Wrench,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through production deployments,
            academic projects, and continuous learning.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([key, category], categoryIndex) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-6 group cursor-default"
                style={{
                  borderColor: `${category.color}20`,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: category.color,
                        color: "#030014",
                      }}
                      className="px-3 py-1.5 text-sm rounded-full border transition-all duration-200"
                      style={{
                        borderColor: `${category.color}40`,
                        color: category.color,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    boxShadow: `0 0 40px ${category.color}20`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Proficient across Windows, macOS, and Linux environments.
            <br />
            Experienced with Agile methodologies and CI/CD pipelines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
