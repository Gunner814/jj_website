"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { education, awards } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-cyan-500/20">
                <GraduationCap className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass-card p-6 border-l-4 border-cyan-500"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                  {edu.field && (
                    <p className="text-cyan-400 text-sm mb-1">{edu.field}</p>
                  )}
                  <p className="text-gray-400 text-sm mb-3">{edu.school}</p>
                  <p className="text-gray-500 text-xs">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Trophy className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Awards & Achievements</h3>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-5 flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">
                        {award.year}
                      </span>
                    </div>
                    <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{award.organization}</p>
                    <p className="text-gray-400 text-xs mt-1">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Singapore Red Cross Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20"
            >
              <p className="text-sm text-gray-400">
                <span className="text-red-400 font-medium">10+ years</span> of volunteer service
                with Singapore Red Cross
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
