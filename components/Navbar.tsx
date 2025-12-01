'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#lets-connect' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div className="flex items-center gap-4">
        {/* Floating Logo - Just beside the navbar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Link
            href="#home"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md hover:bg-white/90 dark:hover:bg-black/90 transition-colors duration-200 border-2 border-[#F4BBFF]/60 dark:border-[#F4BBFF]/60 shadow-lg overflow-hidden"
            style={{
              boxShadow: '0 4px 25px rgba(244, 187, 255, 0.4), 0 0 0 1px rgba(244, 187, 255, 0.3) inset, 0 0 30px rgba(244, 187, 255, 0.2)',
            }}
          >
            {/* Outer glow effect */}
            <div 
              className="absolute -inset-2 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(244, 187, 255, 0.3) 0%, transparent 70%)',
                filter: 'blur(10px)',
              }}
            />
            {/* Shiny edge effect - rotating gradient */}
            <motion.div 
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'conic-gradient(from 0deg, rgba(244, 187, 255, 0.6) 0%, rgba(232, 168, 255, 0.4) 25%, rgba(244, 187, 255, 0.6) 50%, rgba(232, 168, 255, 0.4) 75%, rgba(244, 187, 255, 0.6) 100%)',
                borderRadius: '50%',
                opacity: 0.7,
              }}
            />
            {/* Animated shine sweep */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
              animate={{
                backgroundPosition: ['-200% 0%', '200% 0%'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
              }}
            />
            {/* Floating animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-8 h-8 relative z-10"
              animate={{
                filter: [
                  'drop-shadow(0 0 15px rgba(244, 187, 255, 1)) drop-shadow(0 0 10px rgba(232, 168, 255, 0.8)) drop-shadow(0 0 5px rgba(244, 187, 255, 0.6))',
                  'drop-shadow(0 0 20px rgba(244, 187, 255, 1.2)) drop-shadow(0 0 12px rgba(232, 168, 255, 1)) drop-shadow(0 0 6px rgba(244, 187, 255, 0.8))',
                  'drop-shadow(0 0 15px rgba(244, 187, 255, 1)) drop-shadow(0 0 10px rgba(232, 168, 255, 0.8)) drop-shadow(0 0 5px rgba(244, 187, 255, 0.6))',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Glowing background layer */}
              <path
                d="M0.9556642857142857 0.2115857142857143C1.4280857142857144 0.06810714285714285 1.9390035714285712 0.25007857142857143 2.211957142857143 0.6630107142857142L8 9.341574999999999 13.788042857142857 0.6595107142857143c0.2729535714285714 -0.40943214285714286 0.7838714285714286 -0.5949035714285714 1.256292857142857 -0.451425s0.7943678571428571 0.5809035714285714 0.7943678571428571 1.0743214285714284v13.43777857142857c0 0.6193964285714285 -0.5004178571428571 1.1198142857142857 -1.1198142857142857 1.1198142857142857s-1.1198142857142857 -0.5004178571428571 -1.1198142857142857 -1.1198142857142857V4.9812964285714285L8.930846428571428 11.983639285714284c-0.20646785714285715 0.3114464285714285 -0.5564071428571428 0.49691785714285713 -0.9308464285714285 0.49691785714285713s-0.7243821428571428 -0.18547142857142856 -0.9308464285714285 -0.49691785714285713L2.4009249999999995 4.9812964285714285v9.738889285714285c0 0.6193964285714285 -0.5004178571428571 1.1198142857142857 -1.1198142857142857 1.1198142857142857S0.16129642857142856 15.339582142857143 0.16129642857142856 14.720185714285714V1.2824071428571429c0 -0.49341785714285713 0.3219464285714286 -0.9273464285714285 0.7943678571428571 -1.0708214285714286Z"
                fill="#F4BBFF"
                opacity="0.3"
                style={{
                  filter: 'blur(4px)',
                }}
              />
              {/* Main M logo */}
              <path
                d="M0.9556642857142857 0.2115857142857143C1.4280857142857144 0.06810714285714285 1.9390035714285712 0.25007857142857143 2.211957142857143 0.6630107142857142L8 9.341574999999999 13.788042857142857 0.6595107142857143c0.2729535714285714 -0.40943214285714286 0.7838714285714286 -0.5949035714285714 1.256292857142857 -0.451425s0.7943678571428571 0.5809035714285714 0.7943678571428571 1.0743214285714284v13.43777857142857c0 0.6193964285714285 -0.5004178571428571 1.1198142857142857 -1.1198142857142857 1.1198142857142857s-1.1198142857142857 -0.5004178571428571 -1.1198142857142857 -1.1198142857142857V4.9812964285714285L8.930846428571428 11.983639285714284c-0.20646785714285715 0.3114464285714285 -0.5564071428571428 0.49691785714285713 -0.9308464285714285 0.49691785714285713s-0.7243821428571428 -0.18547142857142856 -0.9308464285714285 -0.49691785714285713L2.4009249999999995 4.9812964285714285v9.738889285714285c0 0.6193964285714285 -0.5004178571428571 1.1198142857142857 -1.1198142857142857 1.1198142857142857S0.16129642857142856 15.339582142857143 0.16129642857142856 14.720185714285714V1.2824071428571429c0 -0.49341785714285713 0.3219464285714286 -0.9273464285714285 0.7943678571428571 -1.0708214285714286Z"
                fill="#000000"
                strokeWidth="0.0357"
              />
            </motion.svg>
            </motion.div>
          </Link>
        </motion.div>

        {/* Single Rounded Container - Transparent with backdrop blur matching background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 px-3 py-2 rounded-full backdrop-blur-md bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 dark:from-slate-800/90 dark:via-slate-700/90 dark:to-slate-800/90 border border-white/30 dark:border-slate-600/50 shadow-lg transition-colors duration-300"
          style={{
            borderRadius: '9999px',
          }}
        >

        {/* Navigation Links - Light Gray Buttons Inside Container */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            >
              <Link
                href={link.href}
                className="px-4 py-2 rounded-full bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm text-[#1c1c1c] dark:text-slate-100 text-xs font-semibold uppercase tracking-wide hover:bg-white/90 dark:hover:bg-slate-600/90 transition-colors duration-200 border border-white/40 dark:border-slate-500/40"
                style={{
                  color: 'rgb(28, 28, 28)',
                  fontFamily: 'sans-serif',
                }}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm flex items-center justify-center hover:bg-white/90 dark:hover:bg-slate-600/90 transition-colors duration-200 flex-shrink-0 border border-white/40 dark:border-slate-500/40"
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 rounded-full bg-[#1c1c1c] dark:bg-slate-100"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-2 left-0 w-full h-0.5 rounded-full bg-[#1c1c1c] dark:bg-slate-100"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-4 left-0 w-full h-0.5 rounded-full bg-[#1c1c1c] dark:bg-slate-100"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 rounded-2xl backdrop-blur-md bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 dark:from-slate-800/90 dark:via-slate-700/90 dark:to-slate-800/90 border border-white/30 dark:border-slate-600/50 overflow-hidden transition-colors duration-300"
          >
            <div className="p-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-full bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm text-[#1c1c1c] dark:text-slate-100 text-xs font-semibold uppercase tracking-wide hover:bg-white/90 dark:hover:bg-slate-600/90 transition-colors border border-white/40 dark:border-slate-500/40"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
