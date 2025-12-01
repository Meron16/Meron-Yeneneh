'use client'

import { motion } from 'framer-motion'

/**
 * Floating Shapes Animation
 * Modern, subtle floating geometric shapes for bright backgrounds
 */
export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 30,
            height: 100 + i * 30,
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `linear-gradient(135deg, 
              rgba(${59 + i * 10}, ${130 + i * 5}, ${246 - i * 5}, 0.05),
              rgba(${168 + i * 5}, ${85 + i * 10}, ${246 - i * 5}, 0.03)
            )`,
            border: `1px solid rgba(${59 + i * 10}, ${130 + i * 5}, ${246 - i * 5}, 0.1)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating Blobs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute"
          style={{
            width: 150 + i * 40,
            height: 150 + i * 40,
            left: `${60 + i * 8}%`,
            top: `${30 + (i % 2) * 40}%`,
            background: `radial-gradient(circle, 
              rgba(${236 + i * 5}, ${72 + i * 10}, ${153 - i * 5}, 0.06),
              rgba(${168 + i * 5}, ${85 + i * 10}, ${246 - i * 5}, 0.04)
            )`,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            filter: 'blur(40px)',
          }}
          animate={{
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
            ],
            x: [0, Math.cos(i) * 40, 0],
            y: [0, Math.sin(i) * 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-2xl"
          style={{
            width: 200 + i * 50,
            height: 200 + i * 50,
            left: `${20 + i * 20}%`,
            top: `${10 + i * 20}%`,
            background: `radial-gradient(circle, 
              rgba(${59 + i * 20}, ${130 + i * 10}, ${246 - i * 10}, 0.08),
              transparent 70%
            )`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  )
}


