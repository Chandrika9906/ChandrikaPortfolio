import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import image certificates
import mongodbImg from '../../assets/MONGODBC.png'
import metaImg from '../../assets/meta.png'
import oracleImg from '../../assets/oracle (2).png'
import tcsnqtImg from '../../assets/tcsnqt.png'
import awsImg from '../../assets/aws.png'
import ciscoImg from '../../assets/cisco.png'
import cambridgeImg from '../../assets/cambridge.png'
import nptel1Img from '../../assets/nptel1.png'
import nptel2Img from '../../assets/nptel2.png'
import nptel3Img from '../../assets/nptel3.png'
import nptel4Img from '../../assets/nptel4.png'

const AUTO_PLAY_INTERVAL = 6000 // Slower pace

const certifications = [
  { title: 'MongoDB Associate Developer', issuer: 'MongoDB University',          source: mongodbImg  },
  { title: 'Meta Front-End Developer',  issuer: 'Meta (Coursera)',              source: metaImg     },
  { title: 'Oracle Certification',      issuer: 'Oracle',                       source: oracleImg   },
  { title: 'Cloud AWS Certification',   issuer: 'Amazon Web Services',          source: awsImg      },
  { title: 'TCS NQT Result',            issuer: 'Tata Consultancy Services',    source: tcsnqtImg   },
  { title: 'Networking Basics',         issuer: 'Cisco / Coursera',             source: ciscoImg    },
  { title: 'Cambridge English',         issuer: 'Cambridge Assessment',         source: cambridgeImg},
  { title: 'Python for Data Science',   issuer: 'NPTEL / Coursera',             source: nptel1Img   },
  { title: 'Data Structures in Java',   issuer: 'NPTEL / Coursera',             source: nptel2Img   },
  { title: 'Database Management System',issuer: 'NPTEL / Coursera',             source: nptel3Img   },
  { title: 'Design Thinking',           issuer: 'NPTEL / Coursera',             source: nptel4Img   },
]

const TOTAL = certifications.length
const DISPLAY_COUNT = 3

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TOTAL - DISPLAY_COUNT))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TOTAL - DISPLAY_COUNT ? prev + 1 : 0))
  }

  const goToSlide = (i) => {
    setCurrentIndex(Math.min(i, TOTAL - DISPLAY_COUNT))
  }

  // Auto-play logic
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      handleNext()
    }, AUTO_PLAY_INTERVAL)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, currentIndex])

  return (
    <section id="certifications" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Certifications
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto italic">
            "Credentials that back up the skills I apply in real-world scenarios" 📄
          </p>
        </motion.div>

        {/* Sliding Carousel */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden py-8">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / DISPLAY_COUNT)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="w-[calc(33.333%-16px)] flex-shrink-0"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative group/card h-full bg-white dark:bg-slate-900/40 backdrop-blur-sm border border-gray-200 dark:border-slate-800 rounded-3xl p-5 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                    {/* Perspective Background Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    {/* Certificate Image Container */}
                    <div className="relative aspect-[4/3] bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden mb-5 shadow-inner border border-gray-100 dark:border-slate-700/50">
                      <img 
                        src={cert.source} 
                        alt={cert.title}
                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-2">
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 opacity-80">
                        {cert.issuer}
                      </p>
                      <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-tight line-clamp-2" title={cert.title}>
                        {cert.title}
                      </h3>
                    </div>

                    {/* Bottom Decorative Element */}
                    <div className="absolute bottom-0 right-0 p-3 opacity-0 group-hover/card:opacity-20 transition-opacity duration-300 translate-x-1 translate-y-1">
                       <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3z"/></svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows (visible on hover) */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white dark:bg-slate-800 w-12 h-12 rounded-full border border-gray-200 dark:border-slate-700 shadow-xl flex items-center justify-center hover:scale-110 z-20"
          >
            <span className="text-2xl text-blue-500">‹</span>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 group-hover:-translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white dark:bg-slate-800 w-12 h-12 rounded-full border border-gray-200 dark:border-slate-700 shadow-xl flex items-center justify-center hover:scale-110 z-20"
          >
            <span className="text-2xl text-blue-500">›</span>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {Array.from({ length: TOTAL - DISPLAY_COUNT + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i 
                  ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'w-2 bg-gray-300 dark:bg-slate-700 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

