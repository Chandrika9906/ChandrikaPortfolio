import React from 'react'
import { motion } from 'framer-motion'
import { useLeetcodeData } from '../../hooks/useLeetcodeData'

const Leetcode = () => {
  const { solved, easy, medium, hard, recent, loading } = useLeetcodeData()

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

  const stats = {
    total: solved,
    easy: easy,
    medium: medium,
    hard: hard,
    rank: '#158,412'
  }

  return (
    <section id="leetcode" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Leetcode Progress
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto flex items-center justify-center gap-2">
              Coding isn't just practice — it's how I sharpen problem-solving daily 🚀
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - LeetCode Stats Card */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all shadow-2xl">
                {/* Username and Ranking */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-lg shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16.105 18.562l-1.352 1.352c-.562.562-1.477.562-2.039 0l-5.637-5.637c-.562-.562-.562-1.477 0-2.039l5.637-5.637c.562-.562 1.477-.562 2.039 0l1.352 1.352c.562.562.562 1.477 0 2.039l-4.285 4.285 4.285 4.285c.562.562.562 1.477 0 2.039zm2.039-11.274l-1.352-1.352c-.562-.562-1.477-.562-2.039 0l-5.637 5.637c-.562.562-.562 1.477 0 2.039l5.637 5.637c.562.562 1.477.562 2.039 0l1.352-1.352c.562-.562.562-1.477 0-2.039l-4.285-4.285 4.285-4.285c.562-.562.562-1.477 0-2.039z"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Chandrika9906
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-slate-400 tabular-nums">
                    {stats.rank}
                  </span>
                </div>

                {/* Total Solved Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-10">
                  <div className="relative w-40 h-40 group-hover:scale-105 transition-transform duration-500">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="currentColor"
                        strokeWidth="10"
                        fill="none"
                        className="text-gray-100 dark:text-slate-800"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="url(#solvedGradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray="439.8"
                        strokeDashoffset={439.8 - (439.8 * stats.total) / 3200}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient id="solvedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-gray-900 dark:text-white">{stats.total}</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full space-y-6">
                    {/* Easy */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-emerald-500">Easy</span>
                        <span className="text-xs font-bold text-gray-500 tabular-nums">{stats.easy} / 815</span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(stats.easy / 815) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="bg-emerald-500 h-full rounded-full"
                        />
                      </div>
                    </div>

                    {/* Medium */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-amber-500">Medium</span>
                        <span className="text-xs font-bold text-gray-500 tabular-nums">{stats.medium} / 1642</span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(stats.medium / 1642) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="bg-amber-500 h-full rounded-full"
                        />
                      </div>
                    </div>

                    {/* Hard */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-rose-500">Hard</span>
                        <span className="text-xs font-bold text-gray-500 tabular-nums">{stats.hard} / 705</span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(stats.hard / 705) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                          className="bg-rose-500 h-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="pt-6 border-t border-gray-100 dark:border-white/10">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest opacity-80">
                    Recent Activities
                  </h4>
                  <div className="space-y-4">
                    {loading ? (
                      [...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-4 animate-pulse">
                          <div className="h-4 w-12 bg-gray-200 dark:bg-slate-800 rounded"></div>
                          <div className="h-4 flex-1 bg-gray-200 dark:bg-slate-800 rounded"></div>
                        </div>
                      ))
                    ) : (
                      recent.slice(0, 5).map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 text-xs group/item">
                          <span className="text-gray-400 dark:text-slate-500 w-16 tabular-nums">{activity.date}</span>
                          <div className="flex items-center gap-2 flex-grow">
                            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded font-bold">
                              {activity.status || 'AC'}
                            </span>
                            <span className="text-gray-500 dark:text-slate-400 font-medium lowercase italic">{activity.language}</span>
                            <span className="text-gray-800 dark:text-slate-200 group-hover/item:text-blue-500 transition-colors font-bold truncate">
                              {activity.problem}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div variants={itemVariants} className="lg:pl-8 space-y-8">
              <div>
                <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                  My Leetcode Journey
                </h3>
                <div className="space-y-4 text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    Solving problems on Leetcode has helped me strengthen my Data Structures and Algorithms skills. I enjoy tackling challenges that push my problem-solving abilities and prepare me for technical interviews.
                  </p>
                  <p>
                    I've completed hundreds of problems across a variety of topics, including arrays, trees, graphs, and dynamic programming. My goal is to keep improving and stay consistent in learning and solving new problems daily.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://leetcode.com/u/Chandrika9906/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M16.105 18.562l-1.352 1.352c-.562.562-1.477.562-2.039 0l-5.637-5.637c-.562-.562-.562-1.477 0-2.039l5.637-5.637c.562-.562 1.477-.562 2.039 0l1.352 1.352c.562.562.562 1.477 0 2.039l-4.285 4.285 4.285 4.285c.562.562.562 1.477 0 2.039zm2.039-11.274l-1.352-1.352c-.562-.562-1.477-.562-2.039 0l-5.637 5.637c-.562.562-.562 1.477 0 2.039l5.637 5.637c.562.562 1.477.562 2.039 0l1.352-1.352c.562-.562.562-1.477 0-2.039l-4.285-4.285 4.285-4.285c.562-.562.562-1.477 0-2.039z"/></svg>
                  View Full Profile
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leetcode
