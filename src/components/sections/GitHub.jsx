import React from 'react'
import { motion } from 'framer-motion'

const GitHub = () => {
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

  const repositories = [
    {
      name: 'Makos Infotech-Internship',
      description: 'Internship projects and learning materials from Makos Infotech',
      language: 'CSS',
      stars: 2,
      forks: 0,
      url: 'https://github.com/Chandrika9906/Makos-Infotech-Internship'
    },
    {
      name: 'Linux Cheatsheet',
      description: 'Comprehensive Linux commands and shortcuts reference guide',
      language: 'Shell',
      stars: 5,
      forks: 1,
      url: 'https://github.com/Chandrika9906/Linux-Cheatsheet'
    },
    {
      name: 'Become a full stack dev',
      description: 'Complete roadmap and resources to become a full stack developer',
      language: 'Markdown',
      stars: 8,
      forks: 2,
      url: 'https://github.com/Chandrika9906/Become-a-full-stack-dev'
    }
  ]

  const languageColors = {
    CSS: '#563d7c',
    Shell: '#89e051',
    Markdown: '#083fa1'
  }

  return (
    <section id="github" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
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
              GitHub Contributions
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              Code that lives, breathes, and contributes — open source and beyond 👾
            </p>
          </motion.div>

          {/* Repository Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {repositories.map((repo) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="relative group block"
              >
                <div className="absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-gray-500 dark:text-slate-400" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                    </svg>
                    <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-slate-400 mb-4 flex-grow line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-500">
                    <div className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: languageColors[repo.language] || '#ccc' }}></span>
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                      </svg>
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"/>
                      </svg>
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* GitHub Profile Strip */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src="https://github.com/Chandrika9906.png"
                    alt="Chandrika M"
                    className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-slate-600"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chandrika M</h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400">@Chandrika9906</p>
                    <p className="text-xs text-gray-500 dark:text-slate-500 mt-1">Somewhere between DESIGN and DEVELOPMENT</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600 dark:text-slate-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <span className="font-medium text-gray-900 dark:text-white">Followers</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-slate-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z"/>
                      </svg>
                      <span className="font-medium text-gray-900 dark:text-white">Repositories</span>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Chandrika9906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default GitHub
