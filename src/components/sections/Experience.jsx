import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import signals from '../../assets/zuntra.jpeg'
import infosysLogo from '../../assets/infosys.png'
import zuntraLogo from '../../assets/zuntra.jpeg'

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-detect direction of travel for the dot
  const handleNodeHover = (index) => {
    if (index !== activeIndex) {
      setIsAnimating(true)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

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

  const experiences = [
    {
      role: 'Frontend & UI/UX Intern',
      company: 'ZUNTRA Digital',
      date: 'Jul 2025 – Sep 2025',
      logo: zuntraLogo,
      responsibilities: [
        'Developed a responsive HRMS system for 50+ users, improving accessibility and dashboard usability.',
        'Designed intuitive UI/UX solutions and built reusable React components for efficient frontend development.'
      ],
      skills: ['Frontend', 'React.js', 'UI/UX Design', 'JavaScript', 'Problem Solving']
    },
    {
      role: 'AI/ML Intern',
      company: 'Infosys Springboard Virtual Internship 6.0',
      date: 'Feb 2026 – Apr 2026',
      logo: infosysLogo,
      responsibilities: [
        'Developed an AI-powered platform processing 5,000+ reviews using NLP and sentiment analysis.',
        'Built an interactive Streamlit dashboard for real-time filtering, keyword extraction, and trend visualization.'
      ],
      skills: ['AI/ML', 'NLP', 'Sentiment Analysis', 'Streamlit', 'Python', 'Data Analytics']
    }
  ]

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 text-center">
      <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-10"></div>
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Experience
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto italic">
              "From classrooms to codebases — applying knowledge where it matters most" 👨‍💻
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative text-left">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30"></div>

            {/* Animated travel dot */}
            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  className="absolute left-[26px] w-4 h-4 rounded-full bg-blue-400 z-30"
                  style={{ filter: 'blur(1px)', boxShadow: '0 0 12px rgba(59,130,246,0.8)' }}
                  initial={{ top: activeIndex === 0 ? 'calc(100% - 40px)' : '40px' }}
                  animate={{ top: activeIndex === 0 ? '40px' : 'calc(100% - 40px)' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              )}
            </AnimatePresence>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-8"
                  onMouseEnter={() => handleNodeHover(index)}
                  onClick={() => handleNodeHover(index)}
                >
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 mt-2">
                    <motion.div 
                      className={`w-16 h-16 rounded-full p-0.5 shadow-lg cursor-pointer transition-all duration-300 ${
                        activeIndex === index 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-blue-500/50' 
                          : 'bg-gradient-to-br from-gray-300 dark:from-gray-700 to-gray-400 dark:to-gray-800'
                      }`}
                      animate={activeIndex === index ? { 
                        boxShadow: [
                          '0 0 15px rgba(59, 130, 246, 0.4)',
                          '0 0 25px rgba(59, 130, 246, 0.6)',
                          '0 0 15px rgba(59, 130, 246, 0.4)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 ${
                        activeIndex === index ? 'bg-white dark:bg-slate-900' : 'bg-gray-100 dark:bg-slate-800'
                      }`}>
                        <motion.div 
                          className={`rounded-full ${
                            activeIndex === index 
                              ? 'w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400' 
                              : 'w-2 h-2 bg-gray-400 dark:bg-gray-600'
                          }`}
                          animate={activeIndex === index ? { scale: [1, 1.3, 1] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <motion.div 
                    className="flex-1 group"
                    animate={activeIndex === index ? { scale: 1.02, opacity: 1 } : { scale: 1, opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className={`absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl transition-opacity duration-500 -z-10 ${
                        activeIndex === index ? 'opacity-60' : 'opacity-0'
                      }`}></div>
                      <div className={`relative bg-white dark:bg-slate-800/40 backdrop-blur-md border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                        activeIndex === index ? 'border-blue-500 shadow-lg' : 'border-gray-200 dark:border-slate-700/50'
                      }`}>
                        {/* Header */}
                        <div className="flex items-center gap-5 mb-6">
                          <div className={`w-14 h-14 bg-white rounded-xl shadow-sm border p-2 flex items-center justify-center overflow-hidden flex-shrink-0 transition-colors duration-300 ${
                            activeIndex === index ? 'border-blue-200' : 'border-gray-100'
                          }`}>
                            <img 
                              src={exp.logo} 
                              alt={exp.company}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                              activeIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                            }`}>
                              {exp.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                              <p className={`font-semibold text-sm transition-colors duration-300 ${
                                activeIndex === index ? 'text-blue-500' : 'text-gray-600 dark:text-slate-400'
                              }`}>
                                {exp.company}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-slate-500 font-medium">
                                {exp.date}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-3 mb-6 ml-1">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                              <span className="text-blue-500 flex-shrink-0 mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border transition-all duration-300 ${
                                activeIndex === index 
                                  ? 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' 
                                  : 'text-gray-600 dark:text-slate-400 bg-gray-50 dark:bg-slate-700/30 border-gray-100 dark:border-slate-700'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Callout */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-radial from-blue-500/20 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-blue-500/10 dark:border-blue-400/10 rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  🚀 Open to new opportunities and exciting challenges!!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
