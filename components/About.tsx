'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="min-h-screen flex items-center py-16 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto w-full h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full h-full">
          {/* Left Section - Profile Image - Black and White with Halftone */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full flex items-center"
          >
            <div className="relative w-full rounded-3xl overflow-hidden bg-gray-100" style={{ aspectRatio: '3/4', maxHeight: '600px', height: '100%' }}>
              <Image
                src="/mer.jpg"
                alt="Meron Yeneneh"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center"
                priority
                style={{
                  filter: 'grayscale(100%) contrast(1.2)',
                }}
              />
              {/* Halftone/dotted overlay effect for black and white look */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1.5px, transparent 0)
                  `,
                  backgroundSize: '5px 5px',
                  mixBlendMode: 'multiply',
                  opacity: 0.7,
                }}
              />
            </div>
          </motion.div>

          {/* Right Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 h-full flex flex-col justify-center"
          >
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white leading-tight"
            >
              I'm Meron Yeneneh
            </motion.h1>

            {/* Bio text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              a Full Stack Developer and Backend Engineer passionate about crafting intuitive and visually compelling digital experiences. I enjoy myself by reading books, listening to podcasts, and exploring new technologies. And I'm a big believer in doing small things regularly rather than one big thing in a small frame of time.
            </motion.p>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 pt-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                Tools I use to make sure We create the best experience
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* VS Code */}
                <div className="w-14 h-14 rounded-lg bg-gray-800 dark:bg-gray-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.16 2.26L10.84 0.13C10.3 -0.04 9.7 -0.04 9.16 0.13L2.84 2.26C1.8 2.63 1 3.57 1 4.66V19.34C1 20.43 1.8 21.37 2.84 21.74L9.16 23.87C9.7 24.04 10.3 24.04 10.84 23.87L17.16 21.74C18.2 21.37 19 20.43 19 19.34V4.66C19 3.57 18.2 2.63 17.16 2.26ZM9.5 16.5L6.5 13.5L5.5 14.5L9.5 18.5L18.5 9.5L17.5 8.5L9.5 16.5Z"/>
                  </svg>
                </div>
                {/* Docker */}
                <div className="w-14 h-14 rounded-lg bg-gray-800 dark:bg-gray-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.983 11.103h2.119a.186.186 0 0 0 .186-.186V8.798a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186zm-2.848 0h2.119a.186.186 0 0 0 .186-.186V8.798a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186zm-2.848 0h2.119c.102 0 .186-.084.186-.186V8.798a.186.186 0 0 0-.186-.186H8.287a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186zm-2.849 0h2.119c.102 0 .186-.084.186-.186V8.798a.186.186 0 0 0-.186-.186H5.438a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186zm-2.848 0h2.119c.102 0 .186-.084.186-.186V8.798a.186.186 0 0 0-.186-.186H2.59a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186zm14.395-2.848h-2.119a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186h2.119a.186.186 0 0 0 .186-.186V8.441a.186.186 0 0 0-.186-.186zm-2.848 0H9.362a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186h2.119a.186.186 0 0 0 .186-.186V8.441a.186.186 0 0 0-.186-.186zm-2.849 0H6.514a.186.186 0 0 0-.186.186v2.119c0 .102.084.186.186.186h2.119a.186.186 0 0 0 .186-.186V8.441a.186.186 0 0 0-.186-.186zM2.59 6.51h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H2.59a.186.186 0 0 1-.186-.186V6.696a.186.186 0 0 1 .186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H5.438a.186.186 0 0 1-.186-.186V6.696a.186.186 0 0 1 .186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H8.287a.186.186 0 0 1-.186-.186V6.696a.186.186 0 0 1 .186-.186zm2.849 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V6.696c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V6.696c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V6.696c0-.102.084-.186.186-.186zM.186 11.103h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H.186A.186.186 0 0 1 0 13.408v-2.119c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H3.034a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H5.882a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm2.849 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H8.73a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zM0 8.798h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H0a.186.186 0 0 1-.186-.186V8.984c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H2.848a.186.186 0 0 1-.186-.186V8.984c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H5.696a.186.186 0 0 1-.186-.186V8.984c0-.102.084-.186.186-.186zm2.849 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186H8.545a.186.186 0 0 1-.186-.186V8.984c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.984c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.984c0-.102.084-.186.186-.186zm2.848 0h2.119c.102 0 .186.084.186.186v2.119a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.984c0-.102.084-.186.186-.186z"/>
                  </svg>
                </div>
                {/* GitHub */}
                <div className="w-14 h-14 rounded-lg bg-gray-800 dark:bg-gray-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                {/* Postman */}
                <div className="w-14 h-14 rounded-lg bg-gray-800 dark:bg-gray-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-11h-4v2h1.5v5H10v2h4v-2h-1.5V9H14V8z"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <motion.a
                href="https://drive.google.com/file/d/17UPXZ_NKjNBilfFOoZBsqgYiT6O6QI_z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-purple-glow inline-block px-8 py-3.5 text-gray-900 dark:text-gray-900 rounded-lg font-semibold transition-colors duration-200 text-base relative"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                Download My CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
