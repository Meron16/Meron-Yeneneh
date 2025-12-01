'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface GradientFlowBackgroundProps {
  onHover?: (isHovering: boolean) => void
  className?: string
}

/**
 * Gradient Flow Background Animation
 * Slow flowing color gradients - elegant and smooth
 */
export default function GradientFlowBackground({ onHover, className = '' }: GradientFlowBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.4
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.4
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

  const gradients = [
    { colors: ['#3b82f6', '#8b5cf6', '#ec4899'], angle: 135 },
    { colors: ['#06b6d4', '#3b82f6', '#8b5cf6'], angle: 45 },
    { colors: ['#ec4899', '#f59e0b', '#10b981'], angle: 225 },
  ]

  return (
    <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className}`}>
      {gradients.map((gradient, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${gradient.angle}deg, ${gradient.colors.join(', ')})`,
            opacity: 0.4,
            mixBlendMode: 'multiply',
          }}
          animate={{
            x: [
              mousePosition.x * (30 + i * 20),
              mousePosition.x * (30 + i * 20) + Math.sin(i * Math.PI / 3) * 50,
              mousePosition.x * (30 + i * 20),
            ],
            y: [
              mousePosition.y * (30 + i * 20),
              mousePosition.y * (30 + i * 20) + Math.cos(i * Math.PI / 3) * 50,
              mousePosition.y * (30 + i * 20),
            ],
            scale: isHovering ? [1, 1.2, 1] : [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            x: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 60 + i * 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      ))}
      
      {/* Overlay for smooth blending */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}


