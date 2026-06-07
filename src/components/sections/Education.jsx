import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Sri Sairam Institution of Technology, Chennai',
      duration: '2023 – 2027',
      score: '78%',
      logo: 'https://via.placeholder.com/80/3B82F6/FFFFFF?text=SSIT'
    },
    {
      degree: 'Senior Secondary (XII)',
      institution: 'St. Mary Matriculation Higher Secondary School',
      duration: '2022 – 2023',
      score: '74%',
      logo: 'https://via.placeholder.com/80/8B5CF6/FFFFFF?text=SM'
    },
    {
      degree: 'Secondary (X)',
      institution: 'New Prince Matriculation Higher Secondary School',
      duration: '2020 – 2021',
      score: '100%',
      logo: 'https://via.placeholder.com/80/10B981/FFFFFF?text=NP'
    }
  ]

  return (
    <section id="education" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            </div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              A solid academic foundation fueling my passion for tech innovation 🏫
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30"></div>

            {/* Education Cards */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5 shadow-lg shadow-blue-500/50"
                      animate={{ 
                        boxShadow: [
                          '0 0 20px rgba(59, 130, 246, 0.5)',
                          '0 0 30px rgba(59, 130, 246, 0.7)',
                          '0 0 20px rgba(59, 130, 246, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Education Card */}
                  <div className="flex-1 group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="flex items-start gap-6">
                          {/* Institution Logo */}
                          <img 
                            src={edu.logo} 
                            alt={edu.institution}
                            className="w-20 h-20 rounded-lg flex-shrink-0"
                          />

                          {/* Education Details */}
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {edu.degree}
                            </h3>
                            <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">
                              {edu.institution}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
                                <span>📅</span>
                                <span>{edu.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
                                <span>🎯</span>
                                <span>Score: {edu.score}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
