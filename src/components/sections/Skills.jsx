import React, { useState } from 'react'
import { motion } from 'framer-motion'
import lovableImg from '../../assets/images.jpeg'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tech')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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

  const techStack = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://docs.oracle.com/en/java/' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://docs.python.org/3/' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev/' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/docs' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/docs/' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/en/docs' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', url: 'https://expressjs.com/', invert: true },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://dev.mysql.com/doc/' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com/docs/' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', url: 'https://firebase.google.com/docs' },
    { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', url: 'https://supabase.com/docs' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', url: 'https://vercel.com/docs', invert: true }
  ]

  const tools = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com/doc' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://docs.github.com', invert: true },
    { name: 'Lovable', logo: lovableImg, url: 'https://lovable.dev' },
    { name: 'Stitch', logo: 'https://www.vectorlogo.zone/logos/stitchdata/stitchdata-icon.svg', url: 'https://www.stitch.tech' },
    { name: 'Excel', logo: 'https://img.icons8.com/color/96/microsoft-excel-2019.png', url: 'https://support.microsoft.com/excel' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com/docs' },
    { name: 'Cursor', logo: 'https://cursor.com/favicon.ico', url: 'https://www.cursor.com' },
    { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', url: 'https://www.canva.com' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', url: 'https://help.figma.com' },
    { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', url: 'https://www.notion.so' }
  ]

  const displaySkills = activeTab === 'tech' ? techStack : tools

  return (
    <section id="skills" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
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
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Skills
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-base text-gray-700 dark:text-slate-300 mb-6">
              Technologies and tools I work with
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex gap-2 p-1.5 bg-gray-200 dark:bg-slate-800 rounded-xl">
              <button
                onClick={() => setActiveTab('tech')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === 'tech'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200'
                }`}
              >
                Tech Stack
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === 'tools'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200'
                }`}
              >
                Tools
              </button>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div key={activeTab} className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {displaySkills.map((skill, index) => (
              <div key={skill.name} className="relative group">
                <div className="absolute -inset-2 bg-gradient-radial from-blue-500/40 via-purple-500/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <motion.a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  onMouseMove={(e) => handleMouseMove(e, skill.name)}
                  onMouseEnter={() => setHoveredCard(skill.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -4 }}
                  className="relative !bg-white dark:!bg-slate-800 border-2 !border-gray-200 dark:!border-slate-700 rounded-xl hover:!border-blue-400 dark:hover:!border-blue-500 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-3 aspect-square overflow-hidden !opacity-100"
                  style={{ minWidth: '90px', minHeight: '90px' }}
                >
                  {/* Ambient Radial Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: hoveredCard === skill.name
                        ? `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.1) 50%, transparent 70%)`
                        : 'none',
                      filter: 'blur(12px)'
                    }}
                  />
                  
                  {/* Glossy Circle Plate */}
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gray-100/30 to-gray-200/20 dark:from-slate-700/20 dark:to-slate-800/10 backdrop-blur-sm border border-gray-200/30 dark:border-slate-600/20 flex items-center justify-center mb-2 z-10 group-hover:border-blue-400/40 dark:group-hover:border-blue-500/30 transition-colors duration-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className={`w-9 h-9 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110 ${skill.invert ? 'dark:invert' : ''}`}
                    />
                  </div>
                  
                  <h3 className="text-[10px] font-medium text-gray-900 dark:text-white text-center leading-tight relative z-10 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </motion.a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
