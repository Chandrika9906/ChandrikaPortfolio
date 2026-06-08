import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clgLogo from '../../assets/clglogo.jpeg'
import schlLogo from '../../assets/school.png'

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(1) // Start at school (bottom)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationTimeoutRef = useRef(null)

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

  const educationData = [
    {
      degree: 'B.Tech in Information Technology',
      institution: "St. Joseph's Institute of Technology, OMR",
      duration: '2023 – 2027',
      score: '8.94 CGPA',
      logo: clgLogo
    },
    {
      degree: 'Senior Secondary (XII)',
      institution: 'Government Girls Higher Secondary School',
      duration: '2022 – 2023',
      score: '88.5%',
      logo: schlLogo
    }
  ]

  const handleNodeHover = (index) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(index)
    // Clear any existing timeout to avoid race conditions
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }
    animationTimeoutRef.current = setTimeout(() => setIsAnimating(false), 800)
  }

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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Education
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              A solid academic foundation fueling my passion for tech innovation 🏫
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
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

            {/* Education Cards */}
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-8"
                  onMouseEnter={() => handleNodeHover(index)}
                >
                  {/* Timeline Node - Hover activated */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className={`w-16 h-16 rounded-full p-0.5 shadow-lg cursor-pointer ${
                        activeIndex === index 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-blue-500/50' 
                          : 'bg-gradient-to-br from-gray-500 to-gray-600 shadow-gray-500/30'
                      }`}
                      animate={activeIndex === index ? { 
                        boxShadow: [
                          '0 0 20px rgba(59, 130, 246, 0.5)',
                          '0 0 30px rgba(59, 130, 246, 0.7)',
                          '0 0 20px rgba(59, 130, 246, 0.5)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <div className={`w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 ${
                        activeIndex === index ? 'bg-white dark:bg-slate-900 border border-blue-500/20' : 'bg-gray-100 dark:bg-slate-800'
                      }`}>
                        <motion.div 
                          className={`rounded-full ${
                            activeIndex === index 
                              ? 'w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400' 
                              : 'w-2 h-2 bg-gray-500'
                          }`}
                          animate={activeIndex === index ? { scale: [1, 1.3, 1] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Education Card */}
                  <motion.div 
                    className="flex-1 group"
                    animate={activeIndex === index ? { scale: 1, opacity: 1 } : { scale: 0.97, opacity: 0.6 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <div className="relative">
                      <div className={`absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl transition-opacity duration-500 -z-10 ${
                        activeIndex === index ? 'opacity-60' : 'opacity-0 group-hover:opacity-40'
                      }`}></div>
                      <div className={`relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 group-hover:-translate-y-1 ${
                        activeIndex === index 
                          ? 'border-blue-500 dark:border-blue-400' 
                          : 'border-gray-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400'
                      }`}>
                        <div className="flex items-start gap-6">
                          {/* Institution Logo */}
                          <img 
                            src={edu.logo} 
                            alt={edu.institution}
                            className="w-20 h-20 rounded-lg flex-shrink-0 object-cover"
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
                  </motion.div>
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

