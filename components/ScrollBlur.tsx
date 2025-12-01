'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import DarkModeToggle from './DarkModeToggle'

export default function ScrollBlur() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Always visible glassy effect that follows scroll - Very transparent and blurry, blends seamlessly
  const blurIntensity = Math.min(scrollY / 100, 1) // Increases with scroll

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-20 z-50 flex items-center justify-center"
      style={{
        // Very transparent, seamless blend - no visible gradient line
        background: `linear-gradient(to top, 
          ${isDark ? `rgba(15, 23, 42, ${0.08 + blurIntensity * 0.05})` : `rgba(255, 255, 255, ${0.08 + blurIntensity * 0.05})`} 0%, 
          ${isDark ? `rgba(15, 23, 42, ${0.05 + blurIntensity * 0.03})` : `rgba(255, 255, 255, ${0.05 + blurIntensity * 0.03})`} 40%,
          ${isDark ? `rgba(15, 23, 42, ${0.02 + blurIntensity * 0.02})` : `rgba(255, 255, 255, ${0.02 + blurIntensity * 0.02})`} 70%,
          transparent 100%
        )`,
        // Strong blur for glassy effect
        backdropFilter: `blur(${80 + blurIntensity * 20}px) saturate(150%)`,
        WebkitBackdropFilter: `blur(${80 + blurIntensity * 20}px) saturate(150%)`,
        transition: 'background 0.2s ease, backdrop-filter 0.2s ease',
      }}
    >
      {/* Dark Mode Toggle in the center - No container, just the button */}
      <div className="pointer-events-auto">
        <DarkModeToggle />
      </div>
    </div>
  )
}

