'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ParticleSystemBackgroundProps {
  onHover?: (isHovering: boolean) => void
  className?: string
  particleCount?: number
}

/**
 * Particle System Background Animation
 * Gentle particle effects - dynamic and engaging
 */
export default function ParticleSystemBackground({ 
  onHover, 
  className = '',
  particleCount = 40 
}: ParticleSystemBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.5
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
      {/* Particles */}
      {[...Array(particleCount)].map((_, i) => {
        const angle = (i / particleCount) * Math.PI * 2
        const radius = 100 + (i % 5) * 50
        const size = 3 + (i % 3) * 2
        const delay = i * 0.1
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: '50%',
              top: '50%',
              background: `radial-gradient(circle, 
                rgba(${59 + (i % 3) * 50}, ${130 + (i % 2) * 50}, ${246 - (i % 4) * 30}, 0.8),
                rgba(${168 + (i % 3) * 30}, ${85 + (i % 2) * 40}, ${246 - (i % 4) * 20}, 0.4)
              )`,
              boxShadow: `0 0 ${size * 2}px rgba(59, 130, 246, 0.5)`,
            }}
            animate={{
              x: [
                Math.cos(angle) * radius + mousePosition.x * 50,
                Math.cos(angle + Math.PI / 4) * (radius + 30) + mousePosition.x * 50,
                Math.cos(angle) * radius + mousePosition.x * 50,
              ],
              y: [
                Math.sin(angle) * radius + mousePosition.y * 50,
                Math.sin(angle + Math.PI / 4) * (radius + 30) + mousePosition.y * 50,
                Math.sin(angle) * radius + mousePosition.y * 50,
              ],
              scale: isHovering ? [1, 1.5, 1] : [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              x: {
                duration: 5 + (i % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
              y: {
                duration: 6 + (i % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.5,
              },
              scale: {
                duration: 3 + (i % 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
              opacity: {
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
            }}
          />
        )
      })}
      
      {/* Connecting Lines (subtle) */}
      {isHovering && [...Array(15)].map((_, i) => {
        const startAngle = (i / 15) * Math.PI * 2
        const endAngle = ((i + 1) / 15) * Math.PI * 2
        
        return (
          <motion.line
            key={i}
            x1={`${50 + Math.cos(startAngle) * 30}%`}
            y1={`${50 + Math.sin(startAngle) * 30}%`}
            x2={`${50 + Math.cos(endAngle) * 30}%`}
            y2={`${50 + Math.sin(endAngle) * 30}%`}
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            className="absolute"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        )
      })}
    </div>
  )
}


