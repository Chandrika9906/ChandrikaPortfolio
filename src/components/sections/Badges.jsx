import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Asset Imports
import pullshark from '../../assets/pullshark.png'
import starstruk from '../../assets/starstruk.png'
import codechef from '../../assets/CodeChefBadge.png'
import leetcode75 from '../../assets/LeetCode_75.png'
import mongodb from '../../assets/mongodb.png'
import oracle from '../../assets/oracle.png'
import metaFrontEnd from '../../assets/meta-front-end-developer-certificate.png'
import badge8 from '../../assets/lg2550.png'

const Badges = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const badges = [
    { title: 'Pull Shark', provider: 'GitHub', image: pullshark, isRound: true },
    { title: 'Starstruck', provider: 'GitHub', image: starstruk, isRound: true },
    { title: 'CodeChef Badge', provider: 'CodeChef', image: codechef, isRound: false },
    { title: 'LeetCode 75', provider: 'LeetCode', image: leetcode75, isRound: true },
    { title: 'MongoDB Certified', provider: 'MongoDB', image: mongodb, isRound: false },
    { title: 'Oracle Certified', provider: 'Oracle', image: oracle, isRound: false },
    { title: 'Meta Front-End', provider: 'Meta', image: metaFrontEnd, isRound: false },
    { title: 'LeetCode 50 Days', provider: 'LeetCode', image: badge8, isRound: false }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : badges.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < badges.length - 1 ? prev + 1 : 0))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="badges" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Achieved Badges
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              Milestones that reflect the journey of continuous growth and mastery 🏆
            </p>
          </motion.div>

          {/* Badges Carousel */}
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="overflow-hidden py-12">
              <motion.div 
                className="flex gap-12"
                animate={{ x: `-${currentIndex * (100 / 3)}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {badges.concat(badges.slice(0, 3)).map((badge, index) => ( 
                  <motion.div
                    key={index}
                    className="relative group flex-shrink-0 w-[calc(33.333%-32px)]"
                  >
                    {/* Glowing Aura Behind Card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Individual Badge Card */}
                    <div className="relative bg-white/5 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/30 dark:border-white/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 group-hover:-translate-y-4 flex flex-col items-center shadow-2xl">
                      {/* Badge Image */}
                      <div className="w-44 h-44 mb-8 flex items-center justify-center relative">
                        <motion.img 
                          src={badge.image} 
                          alt={badge.title}
                          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                          animate={badge.isRound ? { rotateY: [0, -360, -360] } : {}}
                          transition={badge.isRound ? { 
                            duration: 4, 
                            repeat: Infinity, 
                            times: [0, 0.75, 1],
                            ease: "easeInOut" 
                          } : {}}
                        />
                      </div>
                      
                      {/* Text Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                          {badge.title}
                        </h3>
                        <p className="text-xs text-blue-500 uppercase tracking-[0.25em] font-bold opacity-90">
                          {badge.provider}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Simple Navigation Buttons */}
            <div className="flex items-center justify-center gap-16 mt-8">
              <button
                onClick={handlePrev}
                className="text-4xl text-gray-400 hover:text-white transition-all hover:scale-125 hover:-translate-x-2 active:scale-95 px-4"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="text-4xl text-gray-400 hover:text-white transition-all hover:scale-125 hover:translate-x-2 active:scale-95 px-4"
              >
                &gt;
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Badges
