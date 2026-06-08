import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Motion values for core position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for buttery smooth movement
  const springConfig = { damping: 25, stiffness: 400, restDelta: 0.001 }
  const trailConfig = { damping: 30, stiffness: 200, restDelta: 0.001 }

  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  
  const trailX = useSpring(mouseX, trailConfig)
  const trailY = useSpring(mouseY, trailConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"]')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseleave', () => setIsVisible(false))
    window.addEventListener('mouseenter', () => setIsVisible(true))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible, mouseX, mouseY])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Shadow Glow Trail */}
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-blue-500/20 blur-xl"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1
        }}
      />

      {/* Main Cursor Ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.8 : 1
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 0.5 : 1
        }}
      />
    </div>
  )
}

export default CustomCursor