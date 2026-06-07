import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Certifications = () => {
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

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop'
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
    },
    {
      title: 'IBM Data Science Professional',
      issuer: 'IBM',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Oracle Java Certification',
      issuer: 'Oracle',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop'
    }
  ]

  const cardsToShow = 3
  const maxIndex = certifications.length - cardsToShow

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section id="certifications" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
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
            <h2 className="text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            </div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              Credentials that back up the skills I apply in real-world scenarios 📄
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6"
                animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group flex-shrink-0"
                    style={{ width: `calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 24 / cardsToShow}px)` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
                      {/* Certificate Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Certificate Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">
                          {cert.issuer}
                        </p>
                      </div>
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
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 dark:disabled:hover:border-slate-700"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 dark:disabled:hover:border-slate-700"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default Certifications
