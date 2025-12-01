'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

/**
 * Global Floating Bubbles Background
 * Semi-transparent white circles and pill shapes scattered across the website
 */
export default function GlobalFloatingBubbles() {
  // Generate stable bubble positions using useMemo
  const bubbles = useMemo(() => {
    const generateBubble = (index: number, type: 'circle' | 'pill') => {
      // Use index-based pseudo-random for consistency
      const seed = index * 123.456
      const random = () => {
        const x = Math.sin(seed) * 10000
        return x - Math.floor(x)
      }
      
      const size = type === 'circle' 
        ? 40 + random() * 120  // Circles: 40-160px
        : { width: 60 + random() * 140, height: 20 + random() * 40 } // Pills: various sizes
      
      return {
        id: index,
        type,
        left: random() * 100,
        top: random() * 100,
        size: type === 'circle' ? size : (size as { width: number; height: number }),
        rotation: type === 'pill' ? random() * 360 : 0,
        delay: random() * 5,
        duration: 12 + random() * 8, // Faster movement
        xAmplitude: 40 + random() * 60, // Movement range
        yAmplitude: 40 + random() * 60,
      }
    }

    return [
      ...Array.from({ length: 50 }, (_, i) => generateBubble(i, 'circle')),
      ...Array.from({ length: 40 }, (_, i) => generateBubble(i + 50, 'pill')),
    ]
  }, [])

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none" 
      aria-hidden="true"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}
    >
      {/* Floating Bubbles - Circles and Pills */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute"
          style={{
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            width: bubble.type === 'circle' ? `${bubble.size}px` : `${(bubble.size as { width: number }).width}px`,
            height: bubble.type === 'circle' ? `${bubble.size}px` : `${(bubble.size as { height: number }).height}px`,
            borderRadius: bubble.type === 'circle' ? '50%' : '9999px',
            background: bubble.type === 'circle'
              ? 'rgba(0, 0, 0, 0.15)'
              : 'rgba(0, 0, 0, 0.12)',
            border: `1px solid rgba(0, 0, 0, 0.2)`,
            transform: `rotate(${bubble.rotation}deg)`,
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.1)',
          }}
          animate={{
            x: [
              0,
              Math.sin(bubble.id * 0.3) * bubble.xAmplitude,
              Math.cos(bubble.id * 0.5) * bubble.xAmplitude * 0.8,
              Math.sin(bubble.id * 0.7) * bubble.xAmplitude * 0.6,
              0,
            ],
            y: [
              0,
              Math.cos(bubble.id * 0.3) * bubble.yAmplitude,
              Math.sin(bubble.id * 0.5) * bubble.yAmplitude * 0.8,
              Math.cos(bubble.id * 0.7) * bubble.yAmplitude * 0.6,
              0,
            ],
            scale: [1, 1.15, 0.9, 1.1, 1],
            opacity: [0.6, 0.9, 0.7, 0.85, 0.6],
            rotate: bubble.type === 'pill' 
              ? [bubble.rotation, bubble.rotation + 20, bubble.rotation - 15, bubble.rotation + 10, bubble.rotation]
              : [0, 5, -5, 3, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Additional smaller circles for depth */}
      {Array.from({ length: 35 }, (_, i) => {
        const seed = (i + 100) * 123.456
        const random = () => {
          const x = Math.sin(seed) * 10000
          return x - Math.floor(x)
        }
        const size = 20 + random() * 40
        const amplitude = 30 + random() * 40
        return (
          <motion.div
            key={`small-circle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${random() * 100}%`,
              top: `${random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: 'rgba(0, 0, 0, 0.12)',
              border: `1px solid rgba(0, 0, 0, 0.18)`,
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
            }}
            animate={{
              x: [
                0,
                Math.sin(i * 0.4) * amplitude,
                Math.cos(i * 0.6) * amplitude * 0.7,
                Math.sin(i * 0.8) * amplitude * 0.5,
                0,
              ],
              y: [
                0,
                Math.cos(i * 0.4) * amplitude,
                Math.sin(i * 0.6) * amplitude * 0.7,
                Math.cos(i * 0.8) * amplitude * 0.5,
                0,
              ],
              scale: [1, 1.2, 0.9, 1.1, 1],
              opacity: [0.5, 0.8, 0.6, 0.75, 0.5],
            }}
            transition={{
              duration: 10 + random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: random() * 4,
            }}
          />
        )
      })}

      {/* Medium sized pills in various orientations */}
      {Array.from({ length: 30 }, (_, i) => {
        const seed = (i + 200) * 123.456
        const random = () => {
          const x = Math.sin(seed) * 10000
          return x - Math.floor(x)
        }
        const width = 80 + random() * 100
        const height = 25 + random() * 35
        const rotation = random() * 360
        const amplitude = 35 + random() * 45
        return (
          <motion.div
            key={`medium-pill-${i}`}
            className="absolute"
            style={{
              left: `${random() * 100}%`,
              top: `${random() * 100}%`,
              width: `${width}px`,
              height: `${height}px`,
              borderRadius: '9999px',
              background: 'rgba(0, 0, 0, 0.13)',
              border: `1px solid rgba(0, 0, 0, 0.2)`,
              transform: `rotate(${rotation}deg)`,
              boxShadow: '0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.1)',
            }}
            animate={{
              x: [
                0,
                Math.sin(i * 0.5) * amplitude,
                Math.cos(i * 0.7) * amplitude * 0.8,
                Math.sin(i * 0.9) * amplitude * 0.6,
                0,
              ],
              y: [
                0,
                Math.cos(i * 0.5) * amplitude,
                Math.sin(i * 0.7) * amplitude * 0.8,
                Math.cos(i * 0.9) * amplitude * 0.6,
                0,
              ],
              scale: [1, 1.15, 0.95, 1.1, 1],
              opacity: [0.55, 0.85, 0.65, 0.8, 0.55],
              rotate: [
                rotation,
                rotation + 25,
                rotation - 20,
                rotation + 15,
                rotation,
              ],
            }}
            transition={{
              duration: 14 + random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: random() * 5,
            }}
          />
        )
      })}

      {/* Large background blurs for depth */}
      {Array.from({ length: 15 }, (_, i) => {
        const seed = (i + 300) * 123.456
        const random = () => {
          const x = Math.sin(seed) * 10000
          return x - Math.floor(x)
        }
        const size = 150 + random() * 100
        const amplitude = 50 + random() * 60
        return (
          <motion.div
            key={`large-bg-${i}`}
            className="absolute rounded-full blur-2xl"
            style={{
              left: `${random() * 100}%`,
              top: `${random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: 'radial-gradient(circle, rgba(0, 0, 0, 0.12), transparent 70%)',
            }}
            animate={{
              x: [
                0,
                Math.sin(i * 0.3) * amplitude,
                Math.cos(i * 0.5) * amplitude * 0.8,
                Math.sin(i * 0.7) * amplitude * 0.6,
                0,
              ],
              y: [
                0,
                Math.cos(i * 0.3) * amplitude,
                Math.sin(i * 0.5) * amplitude * 0.8,
                Math.cos(i * 0.7) * amplitude * 0.6,
                0,
              ],
              scale: [1, 1.25, 0.9, 1.15, 1],
              opacity: [0.4, 0.7, 0.5, 0.65, 0.4],
            }}
            transition={{
              duration: 20 + random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        )
      })}
    </div>
  )
}
