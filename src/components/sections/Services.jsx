import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
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

  const services = [
    {
      title: "Graphic Design",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      glowColor: "bg-gradient-radial from-pink-500/50 via-rose-500/30 to-transparent",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      tags: ["Logo Design", "Poster Design", "Print Design", "Packaging Design", "Brand Identity Design", "E-Book Creation", "Social Media Graphics"]
    },
    {
      title: "Web Development",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      glowColor: "bg-gradient-radial from-green-500/50 via-emerald-500/30 to-transparent",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      tags: ["Web Design & Development", "Business Website", "E-commerce Website", "Website Rework", "Backend Integration", "3D Animation Website", "App Development"]
    },
    {
      title: "UI / UX Design",
      icon: "✨",
      color: "from-purple-500 to-indigo-500",
      glowColor: "bg-gradient-radial from-blue-500/50 via-cyan-500/30 to-transparent",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
      tags: ["Wireframing", "Prototyping", "User Research", "Figma", "Mobile App Design", "Web App Design", "Design Systems"]
    }
  ]

  return (
    <section id="services" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 flex items-center">
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
              Freelance Services
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
              What I Offering to my clients <span className="text-red-500">❤️</span>
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="relative group">
                <div className={`absolute -inset-4 ${service.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>
                <motion.div
                  variants={itemVariants}
                  className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-gray-300 dark:border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700/70 transition-all duration-300 h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Icon and Title */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-950 dark:group-hover:text-gray-50 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="px-6 pb-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-slate-700/50 rounded-md hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
