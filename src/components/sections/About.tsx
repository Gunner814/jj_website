"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Rocket, Code } from "lucide-react";
import { about, personalInfo } from "@/lib/data";

const traits = [
  { icon: Rocket, text: "Production deployment experience", color: "cyan" },
  { icon: Zap, text: "Strong problem-solver", color: "purple" },
  { icon: Users, text: "Thrives in collaborative environments", color: "blue" },
  { icon: Code, text: "Delivers production-ready solutions", color: "green" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {about.summary}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 mb-8 border-l-4 border-cyan-500"
            >
              <p className="text-lg text-cyan-400 font-medium">
                {about.highlight}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                LinkedIn Profile
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Right - Traits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              const colorClasses: Record<string, string> = {
                cyan: "border-cyan-500/30 hover:border-cyan-500 text-cyan-500",
                purple: "border-purple-500/30 hover:border-purple-500 text-purple-500",
                blue: "border-blue-500/30 hover:border-blue-500 text-blue-500",
                green: "border-emerald-500/30 hover:border-emerald-500 text-emerald-500",
              };

              return (
                <motion.div
                  key={trait.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`glass-card p-6 border ${colorClasses[trait.color]} transition-all duration-300`}
                >
                  <Icon className={`w-8 h-8 mb-4 ${colorClasses[trait.color].split(" ")[2]}`} />
                  <p className="text-gray-300 text-sm">{trait.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 gap-6 mt-16 max-w-md mx-auto"
        >
          {[
            { value: "4+", label: "Major Projects" },
            { value: "10+", label: "Years in Tech" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
