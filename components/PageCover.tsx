'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface PageCoverProps {
  children: React.ReactNode
}

export default function PageCover({ children }: PageCoverProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const y = useMotionValue(0)
  const springY = useSpring(y, { stiffness: 100, damping: 50, mass: 1 })
  const lastScrollYRef = useRef(0)
  const lastCoverAmountRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Get footer element
      const footer = document.getElementById('footer')
      if (!footer) {
        y.set(0)
        lastCoverAmountRef.current = 0
        return
      }
      
      const footerTop = footer.offsetTop
      const footerHeight = footer.offsetHeight
      const lastScrollY = lastScrollYRef.current
      const scrollDiff = currentScrollY - lastScrollY
      
      // Determine scroll direction
      const scrollingUp = scrollDiff < -3
      const scrollingDown = scrollDiff > 3
      
      lastScrollYRef.current = currentScrollY
      
      // Check if we're in the footer area (footer is in or near viewport)
      const footerRect = footer.getBoundingClientRect()
      const isInFooterArea = footerRect.top < windowHeight && footerRect.bottom > -windowHeight
      
      if (isInFooterArea) {
        // Calculate how much of the footer is visible from the top
        const footerTopInView = Math.max(0, footerRect.top)
        const footerVisibleFromTop = windowHeight - footerTopInView
        const footerProgress = Math.min(footerVisibleFromTop / windowHeight, 1)
        
        if (scrollingUp) {
          // Scrolling UP: Cover the footer by moving white content down
          const coverAmount = footerProgress * windowHeight
          y.set(coverAmount)
          lastCoverAmountRef.current = coverAmount
        } else if (scrollingDown) {
          // Scrolling DOWN: Reveal footer by reducing cover
          const coverAmount = footerProgress * windowHeight * 0.1
          y.set(coverAmount)
          lastCoverAmountRef.current = coverAmount
        } else {
          // Idle: Maintain last cover amount (don't reset)
          y.set(lastCoverAmountRef.current)
        }
      } else {
        // Not in footer area: Reset to top
        y.set(0)
        lastCoverAmountRef.current = 0
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [y])

  return (
    <motion.div
      ref={containerRef}
      className="relative z-50 bg-inherit mx-2 sm:mx-4 md:mx-6"
      style={{
        y: springY,
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div 
        className="w-full h-full"
        style={{
          borderRadius: '32px',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
