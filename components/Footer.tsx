'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github } from './icons'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { amount: 0.3, once: false })

  // Enhanced 3D Floating Animation for icons
  const floatingAnimation = {
    y: [0, -25, 0],
    rotateX: [0, 15, -10, 0],
    rotateY: [0, 10, -8, 0],
    rotateZ: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <>
      <motion.footer
        ref={footerRef}
        id="footer"
        className="relative min-h-screen bg-black text-white overflow-hidden"
        style={{
          zIndex: 10,
        }}
      >
        {/* Pure black background - no gradients */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-gray-300 text-sm">Available for work</span>
        </motion.div>

        {/* Left Side - 3D Floating Icons - Larger and More 3D */}
        <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 z-20 space-y-12">
          {/* Plus Icon - Floating - Much Larger */}
          <motion.div
            animate={floatingAnimation}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '2000px',
            }}
            className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
          >
            <div 
              className="text-white text-8xl md:text-9xl font-light" 
              style={{ 
                textShadow: '0 0 40px rgba(255, 255, 255, 0.5), 0 20px 60px rgba(0, 0, 0, 0.8), 0 10px 30px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(255, 255, 255, 0.2)',
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.4)) drop-shadow(0 10px 25px rgba(255, 255, 255, 0.3))',
                transform: 'translateZ(50px) rotateX(15deg) rotateY(-5deg)',
                WebkitTextStroke: '3px rgba(255, 255, 255, 0.3)',
              }}
            >
              +
            </div>
          </motion.div>

          {/* Location Pin - Floating - Much Larger */}
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: {
                ...floatingAnimation.transition,
                delay: 0.5,
              },
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '2000px',
            }}
            className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
          >
            <svg
              className="w-28 h-28 md:w-36 md:h-36 text-white"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))',
                transform: 'translateZ(50px)',
              }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </motion.div>

        </div>

        {/* Central Content */}
        <div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white">
              Let's create something great together.
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              I'm not just here to code; I'm here to connect with people.
            </motion.p>
            <motion.a
              id="lets-talk-button"
              href="#lets-connect"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-purple-glow inline-block px-8 py-4 text-gray-900 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl relative z-50"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              Let's talk!
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://github.com/Meron16"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors border border-gray-700"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Left - Made by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 left-8 z-20"
        >
          <p className="text-gray-400 text-sm">
            Made by <span className="text-white font-semibold">Meron Yeneneh</span>
          </p>
        </motion.div>

        {/* Bottom Right - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 right-8 z-20"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </motion.footer>
    </>
  )
}
