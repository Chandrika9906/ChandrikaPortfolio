import React from 'react'
import { motion } from 'framer-motion'

const Location = () => {
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

  return (
    <section id="location" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16">
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
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-8 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Location
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mb-4 mx-auto md:mx-0"></div>
          </motion.div>

          {/* Map Container */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl overflow-hidden shadow-lg relative h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15558.123456789!2d80.21123456789!3d12.87123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c7890abcdef%3A0x123456789abcdef!2sSemmancheri%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717850000000!5m2!1sen!2sin&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="w-full absolute inset-0"
              ></iframe>

              {/* Constant Location Card Overlay */}
              <div className="absolute top-4 left-4 z-20">
                <a
                  href="https://www.google.com/maps/place/Semmancheri,+Chennai,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200 group/maplink"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Semmancheri, Chennai</span>
                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                      Open in Maps
                      <svg className="w-3 h-3 group-hover/maplink:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
