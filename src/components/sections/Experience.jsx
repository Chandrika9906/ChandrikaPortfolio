import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
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
      role: 'Design & Development Lead',
      company: 'Tech Innovators Inc',
      date: 'Dec 2025 – Present',
      logo: 'https://via.placeholder.com/60/3B82F6/FFFFFF?text=TI',
      responsibilities: [
        'Leading a team of 5 designers and developers in creating innovative web solutions',
        'Architecting scalable frontend systems using React and modern web technologies',
        'Collaborating with stakeholders to define product vision and roadmap'
      ],
      skills: ['Team Leadership', 'UI/UX Design', 'Web Development', 'Project Management', 'Strategic Planning']
    },
    {
      role: 'Sales and Marketing Intern',
      company: 'Digital Solutions Co',
      date: 'Jun 2024 – Nov 2024',
      logo: 'https://via.placeholder.com/60/8B5CF6/FFFFFF?text=DS',
      responsibilities: [
        'Developed marketing strategies that increased lead generation by 40%',
        'Created compelling presentations and sales materials for client pitches',
        'Analyzed market trends and competitor strategies to inform business decisions'
      ],
      skills: ['Marketing Strategy', 'Sales', 'Data Analysis', 'Client Relations']
    },
    {
      role: 'Web Design and Development Intern',
      company: 'Creative Studios',
      date: 'Jan 2024 – May 2024',
      logo: 'https://via.placeholder.com/60/10B981/FFFFFF?text=CS',
      responsibilities: [
        'Designed and developed responsive websites for 10+ clients',
        'Implemented modern UI/UX principles to enhance user experience',
        'Collaborated with senior developers to learn best practices and coding standards'
      ],
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Figma', 'Responsive Design']
    },
    {
      role: 'Freelance Designer',
      company: 'Self-Employed',
      date: 'Sep 2023 – Dec 2023',
      logo: 'https://via.placeholder.com/60/F59E0B/FFFFFF?text=FD',
      responsibilities: [
        'Delivered custom design solutions for small businesses and startups',
        'Created brand identities, logos, and marketing materials',
        'Managed client relationships and project timelines independently'
      ],
      skills: ['Graphic Design', 'Branding', 'Client Management', 'Adobe Suite']
    }
  ]

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16">
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
            <h2 className="text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            </div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              From classrooms to codebases — applying knowledge where it matters most 👨‍💻
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5 shadow-lg shadow-blue-500/50">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group-hover:-translate-y-1">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <img 
                            src={exp.logo} 
                            alt={exp.company}
                            className="w-14 h-14 rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.role}
                            </h3>
                            <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">
                              {exp.company}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-slate-400">
                              {exp.date}
                            </p>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-2 mb-4">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Callout */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-radial from-blue-500/40 via-purple-500/30 to-transparent rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 dark:border-blue-400/30 rounded-xl p-6 text-center">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
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
