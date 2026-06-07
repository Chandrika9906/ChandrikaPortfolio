import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Badges = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const badges = [
    {
      title: 'Quickdraw',
      provider: 'GitHub',
      image: 'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png'
    },
    {
      title: 'Galaxy Brain',
      provider: 'GitHub',
      image: 'https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png'
    },
    {
      title: 'GitHub Foundations',
      provider: 'GitHub',
      image: 'https://images.credly.com/size/340x340/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png'
    },
    {
      title: 'Data Analytics Essentials',
      provider: 'IBM',
      image: 'https://images.credly.com/size/340x340/images/a972f054-be07-4845-85c7-95c8d11852f5/image.png'
    }
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < badges.length - 4 ? prev + 1 : prev))
  }

  return (
    <section id="badges" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Achieved Badges
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              Milestones that reflect the journey of continuous growth and mastery 🏆
            </p>
          </motion.div>

          {/* Badges Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6"
                animate={{ x: `-${currentIndex * 25}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group flex-shrink-0 w-[calc(25%-18px)]"
                  >
                    <div className="absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col items-center">
                      {/* Badge Image */}
                      <div className="w-32 h-32 mb-4 flex items-center justify-center">
                        <img 
                          src={badge.image} 
                          alt={badge.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Badge Title */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-2">
                        {badge.title}
                      </h3>

                      {/* Badge Provider */}
                      <p className="text-sm text-gray-600 dark:text-slate-400 text-center">
                        {badge.provider}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= badges.length - 4}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Badges
