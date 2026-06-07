import React from 'react'
import { motion } from 'framer-motion'

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
    { name: 'GitHub', icon: '💻', url: 'https://github.com/dineshit27', color: '#6B7280' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/m-dinesh-d30', color: '#0A66C2' },
    { name: 'Twitter', icon: '🐦', url: 'https://x.com/mr_dinesh_io', color: '#1DA1F2' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/_dinx_pvt_430', color: '#E4405F' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/918122129450', color: '#25D366' },
    { name: 'Pinterest', icon: '📌', url: 'https://pinterest.com', color: '#E60023' },
    { name: 'Skillrack', icon: '🎯', url: 'https://skillrack.com', color: '#FF6B6B' },
    { name: 'LeetCode', icon: '⚡', url: 'https://leetcode.com/Dinesh_coder30', color: '#FFA116' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
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
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-xl hover:border-blue-500 transition-all"
                whileHover={{ y: -3 }}
                style={{ 
                  boxShadow: '0 0 0 rgba(59, 130, 246, 0)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(59, 130, 246, 0)'
                }}
              >
                <span style={{ color: social.color }}>{social.icon}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500">
              © 2026 M Dinesh. All rights reserved.
            </p>
          </div>

          {/* Tech Stack Credit */}
          <div className="text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              Built with
              <span className="inline-flex items-center gap-1">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React"
                  className="w-4 h-4"
                />
                <span className="text-blue-400">React</span>
              </span>
              using
              <span className="inline-flex items-center gap-1">
                <img 
                  src="https://vitejs.dev/logo.svg" 
                  alt="Vite"
                  className="w-4 h-4"
                />
                <span className="text-purple-400">Vite</span>
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border-2 border-blue-500 flex items-center justify-center text-blue-400 hover:bg-slate-700 transition-all z-50 shadow-lg shadow-blue-500/30"
        whileHover={{ y: -3 }}
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
