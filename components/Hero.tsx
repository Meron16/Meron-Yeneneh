'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TypingText from './TypingText'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-32 pb-20 bg-white dark:bg-black"
    >
      {/* Subtle geometric pattern in top left */}
      <div className="absolute top-20 left-8 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M0 60L60 0L120 60L60 120Z" stroke="currentColor" strokeWidth="1" />
          <path d="M30 60L60 30L90 60L60 90Z" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="0" x2="60" y2="120" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Typing Animation - Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <TypingText className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white" />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Turning Ideas Into Fully
            <br />
            <span className="inline-flex items-center gap-3 flex-wrap justify-center">
              <span className="relative inline-block px-3">
                <span className="absolute -inset-1 border-2 rounded-full" style={{ borderRadius: '50%', borderColor: '#F4BBFF' }}></span>
                <span className="relative">Functional</span>
              </span>
              <span></span>
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
                <span className="relative">Web Applications</span>
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
         
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Book A Call Button - Dark */}
          <Link
            href="#lets-connect"
            className="button-purple-glow flex items-center gap-2 px-8 py-4 text-gray-900 dark:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg relative"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <span>Book A Call</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gray-900 dark:text-gray-900"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* About Me Button - Black with White Text */}
          <Link
            href="#about"
            className="button-purple-glow flex items-center gap-2 px-8 py-4 text-gray-900 dark:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg relative"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <span>About Me</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gray-900 dark:text-gray-900"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
