import React from 'react'
import { motion } from 'framer-motion'
import leetcodeImg from '../../assets/image1.png'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Leetcode', href: '#leetcode' },
    { name: 'Badges', href: '#badges' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Chandrika9906',
      color: '#181717',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 0 1 3.004-.404 11.52 11.52 0 0 1 3.004.404c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/chandrika-m',
      color: '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Chandrika9906/',
      color: '#FFA116',
      icon: (
        <img src={leetcodeImg} alt="LeetCode" className="w-6 h-6 object-contain" />
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919042200974',
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      )
    },
    {
      name: 'Gmail',
      url: 'mailto:chandrika992006@gmail.com',
      color: '#EA4335',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      )
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="relative overflow-hidden bg-gray-50 dark:bg-slate-950 py-10 border-t border-gray-200 dark:border-white/5">
        <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-gray-300 dark:text-gray-700">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                style={{ color: (social.name === 'GitHub') ? undefined : social.color }}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  const color = social.name === 'GitHub' ? (document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000') : social.color
                  e.currentTarget.style.boxShadow = `0 8px 15px ${color}20`
                  e.currentTarget.style.borderColor = `${color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = ''
                }}
              >
                <div className={social.name === 'GitHub' ? 'text-gray-900 dark:text-white' : ''}>
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

          {/* Copyright */}
          <div className="text-center mb-3">
            <p className="text-sm text-gray-500">
              © 2026 <span className="text-gray-400 font-medium">Chandrika M</span>. All rights reserved.
            </p>
          </div>

          {/* Tech Stack Credit */}
          <div className="text-center">
            <p className="text-xs text-gray-600 flex items-center justify-center gap-2">
              Built with
              <span className="inline-flex items-center gap-1">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React"
                  className="w-3.5 h-3.5"
                />
                <span className="text-blue-500">React</span>
              </span>
              +
              <span className="inline-flex items-center gap-1">
                <img 
                  src="https://vitejs.dev/logo.svg" 
                  alt="Vite"
                  className="w-3.5 h-3.5"
                />
                <span className="text-purple-500">Vite</span>
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all z-50"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </>
  )
}

export default Footer
