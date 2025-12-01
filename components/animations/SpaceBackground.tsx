'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SpaceBackgroundProps {
  onHover?: (isHovering: boolean) => void
  className?: string
}

/**
 * Space Background Animation
 * Beautiful cosmic space theme with stars, nebulas, and galaxies
 */
export default function SpaceBackground({ onHover, className = '' }: SpaceBackgroundProps) {
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
    <div 
      ref={containerRef} 
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1e 50%, #000000 100%)',
      }}
    >
      {/* Deep space gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Stars Layer 1 - Small stars */}
      {[...Array(100)].map((_, i) => {
        const x = Math.random() * 100
        const y = Math.random() * 100
        const size = Math.random() * 2 + 0.5
        const delay = Math.random() * 5
        const duration = 3 + Math.random() * 4
        
        return (
          <motion.div
            key={`star-1-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Stars Layer 2 - Medium stars */}
      {[...Array(30)].map((_, i) => {
        const x = Math.random() * 100
        const y = Math.random() * 100
        const size = Math.random() * 3 + 1
        const delay = Math.random() * 5
        
        return (
          <motion.div
            key={`star-2-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 3}px rgba(255, 255, 255, 0.9), 0 0 ${size * 6}px rgba(59, 130, 246, 0.5)`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Nebula 1 - Blue/Purple */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-40"
        style={{
          width: '400px',
          height: '400px',
          left: '20%',
          top: '30%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(168, 85, 246, 0.4), transparent)',
        }}
        animate={{
          x: [
            mousePosition.x * 30,
            mousePosition.x * 30 + Math.sin(0) * 50,
            mousePosition.x * 30,
          ],
          y: [
            mousePosition.y * 30,
            mousePosition.y * 30 + Math.cos(0) * 50,
            mousePosition.y * 30,
          ],
          scale: isHovering ? [1, 1.2, 1] : [1, 1.1, 1],
        }}
        transition={{
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Nebula 2 - Pink/Purple */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: '350px',
          height: '350px',
          right: '15%',
          bottom: '25%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5), rgba(168, 85, 246, 0.3), transparent)',
        }}
        animate={{
          x: [
            mousePosition.x * -25,
            mousePosition.x * -25 + Math.sin(Math.PI / 3) * 40,
            mousePosition.x * -25,
          ],
          y: [
            mousePosition.y * -25,
            mousePosition.y * -25 + Math.cos(Math.PI / 3) * 40,
            mousePosition.y * -25,
          ],
          scale: isHovering ? [1, 1.15, 1] : [1, 1.08, 1],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
          y: {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      />

      {/* Nebula 3 - Cyan/Blue */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-25"
        style={{
          width: '300px',
          height: '300px',
          left: '50%',
          top: '10%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.3), transparent)',
        }}
        animate={{
          x: [
            mousePosition.x * 20,
            mousePosition.x * 20 + Math.sin(Math.PI / 2) * 30,
            mousePosition.x * 20,
          ],
          y: [
            mousePosition.y * 20,
            mousePosition.y * 20 + Math.cos(Math.PI / 2) * 30,
            mousePosition.y * 20,
          ],
          scale: [1, 1.12, 1],
        }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          },
          y: {
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          },
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
        }}
      />

      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute"
          style={{
            width: '2px',
            height: '100px',
            background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8), transparent)',
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
            transform: 'rotate(-45deg)',
          }}
          animate={{
            x: [0, 300],
            y: [0, 300],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Large Stars with glow */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 150
        const centerX = 50
        const centerY = 50
        
        return (
          <motion.div
            key={`big-star-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${centerX + Math.cos(angle) * (radius / 10)}%`,
              top: `${centerY + Math.sin(angle) * (radius / 10)}%`,
              width: '6px',
              height: '6px',
              background: 'white',
              boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(59, 130, 246, 0.6),
                0 0 30px rgba(168, 85, 246, 0.4)
              `,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              },
              opacity: {
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              },
            }}
          />
        )
      })}

      {/* Cosmic dust particles */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 200 + (i % 5) * 50
        
        return (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: '3px',
              height: '3px',
              background: `rgba(${200 + i * 2}, ${220 + i}, ${255 - i * 3}, 0.6)`,
              boxShadow: `0 0 4px rgba(59, 130, 246, 0.5)`,
            }}
            animate={{
              x: [
                Math.cos(angle) * radius + mousePosition.x * 40,
                Math.cos(angle + Math.PI / 6) * (radius + 30) + mousePosition.x * 40,
                Math.cos(angle) * radius + mousePosition.x * 40,
              ],
              y: [
                Math.sin(angle) * radius + mousePosition.y * 40,
                Math.sin(angle + Math.PI / 6) * (radius + 30) + mousePosition.y * 40,
                Math.sin(angle) * radius + mousePosition.y * 40,
              ],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Overlay gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />
    </div>
  )
}


