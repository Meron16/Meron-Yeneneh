'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  'a Full Stack Web Developer',
  'specialized in Backend',
  'a Machine Learning Developer',
  'a Rive Animation Developer',
]

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 500)
    }, 3000) // Show each role for 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-wrap items-center gap-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
      <span className="whitespace-nowrap">I am</span>
      <div className="relative h-14 sm:h-16 lg:h-20 xl:h-24 flex items-center min-w-[280px] sm:min-w-[350px] lg:min-w-[450px] xl:min-w-[550px]">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute left-0 text-gray-900 whitespace-nowrap"
            >
              {roles[currentIndex]}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

