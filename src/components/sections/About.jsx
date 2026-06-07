import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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

  const cards = [
    {
      title: "Who I Am",
      icon: "👤",
      color: "from-blue-500 to-cyan-500",
      glowColor: "bg-gradient-radial from-blue-500/50 via-cyan-500/30 to-transparent",
      points: [
        "A web developer interested in software engineering.",
        "Enjoy solving problems and building scalable applications.",
        "Always learning new technologies."
      ]
    },
    {
      title: "What I Do",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      glowColor: "bg-gradient-radial from-purple-500/50 via-pink-500/30 to-transparent",
      points: [
        "Develop high-performance web applications.",
        "Write clean, efficient, and maintainable code.",
        "Contribute to open-source and follow industry trends."
      ]
    },
    {
      title: "My Goals",
      icon: "🎯",
      color: "from-orange-500 to-red-500",
      glowColor: "bg-gradient-radial from-green-500/50 via-emerald-500/30 to-transparent",
      points: [
        "Build products that solve real-world challenges.",
        "Grow as a full-stack developer.",
        "Contribute to the developer community."
      ]
    },
    {
      title: "My Philosophy",
      icon: "💡",
      color: "from-green-500 to-emerald-500",
      glowColor: "bg-gradient-radial from-orange-500/50 via-amber-500/30 to-transparent",
      points: [
        "Technology should simplify lives.",
        "Great software solves problems, not just writes code.",
        "Continuous learning is key to growth."
      ]
    }
  ]

  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
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
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Passionate developer building innovative solutions and solving real-world problems.
            </p>
          </motion.div>

          {/* Intro Paragraph */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-base text-gray-700 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Hey there! 👋 I'm <span className="gradient-text font-bold text-xl">Chandrika</span>, a Computer Science student passionate about building modern web applications that solve real-world problems.
              I enjoy working with React, JavaScript, Node.js, and cloud technologies, and I'm constantly learning new tools to improve my skills.
              I love solving problems, exploring open-source, and building scalable solutions.
            </p>
          </motion.div>

          {/* Callout Button */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 dark:border-blue-400/30">
              <span className="text-gray-700 dark:text-slate-300 font-medium">
                🚀 I like to build smart solutions for the future
              </span>
            </div>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div key={card.title} className="relative group">
                <div className={`absolute -inset-4 ${card.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>
                <motion.div
                  variants={itemVariants}
                  className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700/70 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-xl`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-950 dark:group-hover:text-gray-50 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-500 transition-colors"></div>
                      <span className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" style={{ lineHeight: '1.6' }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About