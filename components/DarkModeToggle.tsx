'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-blue-500/30 hover:scale-105 active:scale-95"
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={isDark}
    >
      {/* Track - Light gray pill shape with subtle shadow */}
      <motion.div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600'
            : 'bg-gray-200'
        }`}
        style={{
          boxShadow: isDark
            ? 'inset 0 2px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)'
            : 'inset 0 2px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        }}
        animate={{
          scale: isDark ? 1 : 1,
        }}
      />

      {/* Thumb/Knob - Circular button with beautiful shadow */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 35,
        }}
        style={{
          boxShadow: isDark
            ? '0 3px 10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 3px 8px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        }}
      >
        {/* Inner highlight on thumb */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.25), transparent 65%)'
              : 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.8) 100%)',
          }}
        />
      </motion.div>
    </button>
  )
}

