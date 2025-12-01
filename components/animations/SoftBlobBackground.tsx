'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SoftBlobBackgroundProps {
  onHover?: (isHovering: boolean) => void
  className?: string
}

/**
 * Soft Blob Background Animation
 * Organic, subtle blob movements - perfect for minimalist portfolios
 */
export default function SoftBlobBackground({ onHover, className = '' }: SoftBlobBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.3
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3
      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
      onHover?.(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      onHover?.(false)
      setMousePosition({ x: 0, y: 0 })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true })
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [onHover])

  return (
    <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className}`}>
      {/* Animated Blobs */}
      {[...Array(5)].map((_, i) => {
        const delay = i * 0.5
        const size = 200 + i * 80
        const x = (i % 3) * 33.33
        const y = Math.floor(i / 3) * 50
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              background: `radial-gradient(circle, 
                rgba(${59 + i * 20}, ${130 + i * 10}, ${246 - i * 15}, 0.4),
                rgba(${168 + i * 15}, ${85 + i * 20}, ${246 - i * 10}, 0.3)
              )`,
            }}
            animate={{
              x: [
                mousePosition.x * (20 + i * 10),
                mousePosition.x * (20 + i * 10) + Math.sin(i) * 30,
                mousePosition.x * (20 + i * 10),
              ],
              y: [
                mousePosition.y * (20 + i * 10),
                mousePosition.y * (20 + i * 10) + Math.cos(i) * 30,
                mousePosition.y * (20 + i * 10),
              ],
              scale: isHovering ? [1, 1.1 + i * 0.05, 1] : [1, 1.05, 1],
            }}
            transition={{
              x: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
              y: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 1,
              },
              scale: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
            }}
          />
        )
      })}
    </div>
  )
}


