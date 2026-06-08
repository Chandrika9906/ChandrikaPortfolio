import React from 'react'
import { motion } from 'framer-motion'
import expenseImg from '../../assets/expense.png'
import civicIntelImg from '../../assets/CivicIntel.png'
import ecommerceImg from '../../assets/ecommerce.png'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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

  const projects = [
    {
      title: 'ExpenseFlow',
      category: 'Full Stack Development',
      description: 'An advanced end-to-end financial ecosystem featuring real-time transaction tracking, data-driven spending analytics, and automated budget management.',
      image: expenseImg,
      github: 'https://github.com/Chandrika9906/EXPENSE-TRACKER-END-to-END',
      demo: 'https://expenseflow-webs.vercel.app/',
      tags: ['Financial Tech', 'Real-time Analytics', 'MERN Stack'],
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      ]
    },
    {
      title: 'Civic Intel',
      category: 'Artificial Intelligence',
      description: 'Revolutionary citizen grievance platform utilizing Natural Language Processing (NLP) to classify, prioritize, and route public complaints autonomously.',
      image: civicIntelImg,
      github: 'https://github.com/Chandrika9906/Citizen_Grievance_AI',
      demo: 'https://github.com/Chandrika9906/Citizen_Grievance_AI',
      tags: ['NLP', 'Machine Learning', 'Public Welfare'],
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
      ]
    },
    {
      title: 'E-Commerce Store',
      category: 'E-Commerce & Retail',
      description: 'A performance-optimized online marketplace with dynamic product filtering, seamless cart transitions, and secure state persistence.',
      image: ecommerceImg,
      github: 'https://github.com/Chandrika9906/ecommerce',
      demo: 'https://github.com/Chandrika9906/ecommerce',
      tags: ['UI/UX Experience', 'State Management', 'React'],
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      ]
    }
  ]

  return (
    <section id="projects" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-24 min-h-screen">
      <div className="absolute inset-0 grid-bg opacity-10 dark:opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              A curated showcase of engineering, design, and problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative h-full flex flex-col"
              >
                <div className="relative flex-1 flex flex-col bg-white dark:bg-slate-900/60 backdrop-blur-sm border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-400/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10 group-hover:-translate-y-1">
                  
                  {/* Image Container - Using contain for screenshots */}
                  <div className="relative h-56 bg-gray-100 dark:bg-slate-800/40 overflow-hidden group/img">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                       <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                       </a>
                       {project.demo !== project.github && (
                         <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                         </a>
                       )}
                    </div>
                    {/* Category Label */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400 border border-gray-100 dark:border-white/10">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3 h-15">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-500 rounded-md border border-gray-200 dark:border-slate-700 font-medium">
                            {tag}
                         </span>
                       ))}
                    </div>

                    {/* Footer - Icons and Links */}
                    <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.tech.map((tech, i) => (
                          <div 
                            key={i}
                            className="w-10 h-10 rounded-lg bg-gray-50/50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 flex items-center justify-center p-2 hover:scale-110 transition-transform"
                            title="Tech Icon"
                          >
                            <img src={tech} alt="tech" className="w-full h-full object-contain" />
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 items-center">
                        <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">Details →</span>
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
