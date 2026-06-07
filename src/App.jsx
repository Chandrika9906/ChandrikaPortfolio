import React from 'react'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import GitHub from './components/sections/GitHub'
import Leetcode from './components/sections/Leetcode'
import Badges from './components/sections/Badges'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Location from './components/sections/Location'
import Footer from './components/sections/Footer'
import ThemeToggle from './components/ui/ThemeToggle'
import Navbar from './components/ui/Navbar'
import CustomCursor from './components/ui/CustomCursor'
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0e27] transition-colors duration-500">
      <CustomCursor />
      <Navbar />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <GitHub />
      <Leetcode />
      <Badges />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Location />
      <Footer />
    </div>
  )
}

export default App