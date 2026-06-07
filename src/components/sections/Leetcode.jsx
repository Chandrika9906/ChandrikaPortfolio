import React from 'react'
import { motion } from 'framer-motion'

const Leetcode = () => {
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

  const recentActivities = [
    { date: 'Dec 15', status: 'AC', language: 'Java', problem: 'Generate Parentheses' },
    { date: 'Dec 14', status: 'AC', language: 'Java', problem: 'Balanced Binary Tree' },
    { date: 'Dec 13', status: 'AC', language: 'Java', problem: 'Valid Palindrome' },
    { date: 'Dec 12', status: 'AC', language: 'Java', problem: 'Merge Two Sorted Lists' }
  ]

  return (
    <section id="leetcode" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

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
              Leetcode Progress
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              Coding isn't just practice — it's how I sharpen problem-solving daily 🚀
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - LeetCode Stats Card */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
                {/* Username and Ranking */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Dinesh_coder30
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-slate-400">
                    #93305
                  </span>
                </div>

                {/* Total Solved Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200 dark:text-slate-700"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="351.86"
                        strokeDashoffset="88"
                        className="text-blue-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">662</span>
                      <span className="text-xs text-gray-600 dark:text-slate-400">Solved</span>
                    </div>
                  </div>
                </div>

                {/* Difficulty Breakdown */}
                <div className="space-y-4 mb-6">
                  {/* Easy */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">Easy</span>
                      <span className="text-xs text-gray-600 dark:text-slate-400">230 / 925</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>

                  {/* Medium */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Medium</span>
                      <span className="text-xs text-gray-600 dark:text-slate-400">341 / 2005</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '17%' }}></div>
                    </div>
                  </div>

                  {/* Hard */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-red-600 dark:text-red-400">Hard</span>
                      <span className="text-xs text-gray-600 dark:text-slate-400">91 / 907</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Recent Activities
                  </h4>
                  <div className="space-y-2">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 text-xs">
                        <span className="text-gray-500 dark:text-slate-500 w-12">{activity.date}</span>
                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-medium">
                          {activity.status}
                        </span>
                        <span className="text-gray-600 dark:text-slate-400">{activity.language}</span>
                        <span className="text-gray-700 dark:text-slate-300 truncate flex-1">{activity.problem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  My Leetcode Journey
                </h3>
                <p className="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed">
                  Solving problems on Leetcode has helped me strengthen my Data Structures and Algorithms skills. I enjoy tackling challenges that push my problem-solving abilities and prepare me for technical interviews.
                </p>
                <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed">
                  I've completed hundreds of problems across a variety of topics, including arrays, trees, graphs, and dynamic programming. My goal is to keep improving and stay consistent in learning and solving new problems daily.
                </p>
              </div>

              <a
                href="https://leetcode.com/Dinesh_coder30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                View Profile
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leetcode
