import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleSystem from '../ui/ParticleSystem'
import profileImg from '../../assets/Profile.png'
import skillrackImg from '../../assets/image.png'
import leetcodeImg from '../../assets/image1.png'
import resumeFile from '../../assets/ChandrikaResume-M.pdf'

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  
  const titles = [
    "Building Scalable Web Apps",
    "Full-Stack Developer", 
    "Open Source Contributor"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }



  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Chandrika9906', color: '#7c3aed', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chandrika-m-31554a295/', color: '#0077b5', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { name: 'Skillrack', url: 'https://www.skillrack.com/faces/ui/profile.xhtml', color: '#FF6B35', icon: <img src={skillrackImg} alt="Skillrack" className="w-5 h-5 object-contain" /> },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Chandrika9906/', color: '#FFA116', icon: <img src={leetcodeImg} alt="LeetCode" className="w-5 h-5 object-contain" /> }
  ]

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-16">
      <ParticleSystem />
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 min-h-screen flex items-center justify-center">
        <motion.div 
          className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">👋</span>
                <span className="gradient-text-hey font-semibold">Hey! I'm</span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-2 flex items-center gap-3">
                <span className="gradient-text-name">Chandrika M</span>
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="h-16">
              <motion.h2 
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl lg:text-3xl font-semibold gradient-text"
              >
                {titles[currentTitle]}
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <a href="mailto:chandrika992006@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>chandrika992006@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>9042200974</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-slate-300">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Semmancheri, Chennai</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => window.open(resumeFile, '_blank')}
                className="glow-btn px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Resume
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-300 dark:border-slate-700 rounded-lg font-semibold text-gray-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-white transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg backdrop-blur-sm border border-gray-300 dark:border-slate-700 flex items-center justify-center text-xl transition-all cursor-pointer"
                  style={{ backgroundColor: `${social.color}15` }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    backgroundColor: social.color,
                    borderColor: social.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                >
                  <div style={{ color: social.color }}>
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="relative flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden group">
                  <div className="w-[440px] h-[440px] rounded-full overflow-hidden relative">
                    <img
                      src={profileImg}
                      alt="Chandrika M"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💻
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                🚀
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-500 dark:text-slate-500 text-xs">Scroll</span>
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero