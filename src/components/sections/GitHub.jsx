import React from 'react'
import { motion } from 'framer-motion'
import { useGithubData } from '../../hooks/useGithubData'

const GitHub = () => {
  const { profile, loading } = useGithubData()

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
      name: 'AI-Resume-Screening',
      description: 'An AI-powered system for automated resume screening and ranking using machine learning techniques.',
      language: 'JavaScript',
      stars: 57,
      forks: 0,
      url: 'https://github.com/Chandrika9906/AI-Resume-Screening'
    },
    {
      name: 'Seat-Selector',
      description: 'A modern, interactive seat selection interface for theaters or venues built with clean HTML/CSS.',
      language: 'HTML',
      stars: 0,
      forks: 1,
      url: 'https://github.com/Chandrika9906/Seat-Selector'
    },
    {
      name: 'Tic-Tac-Toe',
      description: 'A responsive Tic-Tac-Toe game with a smooth UI and intelligent logic.',
      language: 'JavaScript',
      stars: 0,
      forks: 1,
      url: 'https://github.com/Chandrika9906/Tic-Tac-Toe'
    }
  ]

  const languageColors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    shell: '#89e051',
    Markdown: '#083fa1'
  }

  return (
    <section id="github" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              GitHub Contributions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto flex items-center justify-center gap-2">
              Code that lives, breathes, and contributes — open source and beyond 👾
            </p>
          </motion.div>

          {/* Stats Cards Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div 
              variants={itemVariants} 
              className="relative group cursor-default"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-white dark:bg-[#0d1117] backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 h-full min-h-[220px] flex flex-col justify-center hover:border-blue-500/30 transition-all">
                {loading ? (
                  <div className="flex flex-col gap-4 animate-pulse">
                    <div className="h-6 w-1/2 bg-gray-700/50 rounded"></div>
                    <div className="flex gap-8">
                       <div className="h-12 w-20 bg-gray-700/50 rounded"></div>
                       <div className="h-12 w-20 bg-gray-700/50 rounded"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row items-center gap-8 px-4">
                    <div className="flex-1">
                      <h4 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        {profile?.login || 'Chandrika9906'}
                        <span className="text-gray-500 text-sm font-normal">({profile?.name || 'Chandrika M'})</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <div className="flex flex-col group/stat">
                          <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Total Repos</span>
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">{profile?.public_repos || '--'}</span>
                        </div>
                        <div className="flex flex-col group/stat">
                          <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider group-hover/stat:text-blue-400 transition-colors">Followers</span>
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">{profile?.followers || '--'}</span>
                        </div>
                        <div className="flex flex-col col-span-2">
                          <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">Joined GitHub</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : '--'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 w-full mt-4 md:mt-0 overflow-hidden rounded-xl border border-white/5 group-hover:border-white/10 transition-colors pointer-events-none select-none">
                       <img 
                          src="https://github-readme-activity-graph.vercel.app/graph?username=Chandrika9906&theme=react-dark&bg_color=0d1117&color=4ade80&line=4ade80&point=4ade80&area=true&hide_border=true" 
                          alt="GitHub Activity Graph"
                          className="w-full h-auto object-contain scale-110 group-hover:scale-115 transition-transform duration-700"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="text-gray-500 p-4 text-center text-xs">Activity graph currently loading...</div>';
                          }}
                       />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden h-full flex items-center justify-center hover:border-blue-500/30 transition-all">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Chandrika9906&theme=transparent&hide_border=true&stroke=3b82f6&ring=3b82f6&fire=ef4444&currStreakNum=3b82f6&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8&currStreakLabel=3b82f6" 
                  alt="GitHub Streak"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-gray-500 p-8 text-center">GitHub Streak stats currently unavailable. Visit profile to see more.</div>';
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Repository Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {repositories.map((repo) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Magnetic Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative flex-1 bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl p-6 flex flex-col hover:border-blue-500/50 dark:hover:border-blue-400/30 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      <h3 className="text-lg font-bold text-blue-500 dark:text-blue-400 truncate group-hover:translate-x-1 transition-transform">
                        {repo.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-slate-200 transition-colors">
                    {repo.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-slate-500">
                         <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: languageColors[repo.language] || '#888' }}></span>
                         <span>{repo.language}</span>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500/80 group-hover:text-yellow-500 transition-colors transform group-hover:scale-110">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-slate-300 transition-colors transform group-hover:scale-110">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15 5c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zM5 19V7c0-1.105.895-2 2-2s2 .895 2 2v1h6V7c0-1.105.895-2 2-2s2 .895 2 2v12c0 1.105-.895 2-2 2s-2-.895-2-2v-5H9v5c0 1.105-.895 2-2 2s-2-.895-2-2z"/></svg>
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* GitHub Profile Strip */}
          <motion.div 
            variants={itemVariants} 
            className="relative group"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 md:p-6 overflow-hidden hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative group/avatar">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500"></div>
                    <img
                      src="https://github.com/Chandrika9906.png"
                      alt="Chandrika M"
                      className="relative w-16 h-16 rounded-full border-2 border-white/20 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Chandrika M</h3>
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] font-bold rounded-full uppercase tracking-wider">Pro</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-slate-400">@Chandrika9906</p>
                    <p className="text-xs text-gray-500 dark:text-slate-500 mt-1">Somewhere between DESIGN and DEVELOPMENT • Building Smart SOLUTIONS for FUTURE</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="hidden sm:flex gap-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 group/item">
                      <svg className="w-5 h-5 text-purple-500 group-hover/item:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      <div className="flex flex-col">
                         <span className="text-lg font-bold text-gray-900 dark:text-white leading-none">3</span>
                        <span className="text-[10px] uppercase tracking-tighter opacity-60">Followers</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 group/item">
                      <svg className="w-5 h-5 text-orange-500 group-hover/item:scale-110 transition-transform" fill="currentColor" viewBox="0 0 16 16"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z"/></svg>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900 dark:text-white leading-none">22</span>
                        <span className="text-[10px] uppercase tracking-tighter opacity-60">Repos</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Chandrika9906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
