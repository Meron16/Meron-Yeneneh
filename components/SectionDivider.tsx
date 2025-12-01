'use client'

import { useTheme } from '@/contexts/ThemeContext'
import DarkModeToggle from './DarkModeToggle'

export default function SectionDivider() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="relative w-full h-20 flex items-center justify-center pointer-events-none py-4">
      {/* Glassy blur effect - Very transparent and glassy */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(to bottom, 
            transparent 0%,
            ${isDark ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255, 255, 255, 0.2)'} 15%,
            ${isDark ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.4)'} 40%,
            ${isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)'} 70%,
            ${isDark ? 'rgba(15, 23, 42, 0.75)' : 'rgba(255, 255, 255, 0.75)'} 100%
          )`,
          backdropFilter: 'blur(60px) saturate(250%)',
          WebkitBackdropFilter: 'blur(60px) saturate(250%)',
        }}
      />
      
      {/* Dark Mode Toggle in the center with glassy container */}
      <div className="relative z-10 pointer-events-auto">
        <div 
          className="px-6 py-3 rounded-full backdrop-blur-xl"
          style={{
            background: isDark
              ? 'rgba(15, 23, 42, 0.3)'
              : 'rgba(255, 255, 255, 0.3)',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            boxShadow: isDark
              ? '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          }}
        >
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

