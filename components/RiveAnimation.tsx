'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface RiveAnimationProps {
  onHover?: (isHovering: boolean) => void
}

export default function RiveAnimation({ onHover }: RiveAnimationProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [eyePosition, setEyePosition] = useState({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [blink, setBlink] = useState(false)

  // Smooth spring animations for eyes
  const leftEyeX = useSpring(eyePosition.leftX, { stiffness: 300, damping: 30 })
  const leftEyeY = useSpring(eyePosition.leftY, { stiffness: 300, damping: 30 })
  const rightEyeX = useSpring(eyePosition.rightX, { stiffness: 300, damping: 30 })
  const rightEyeY = useSpring(eyePosition.rightY, { stiffness: 300, damping: 30 })

  // Character movement spring
  const charX = useSpring(mousePosition.x, { stiffness: 100, damping: 20 })
  const charY = useSpring(mousePosition.y, { stiffness: 100, damping: 20 })

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 150)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate relative position
      const x = ((e.clientX - centerX) / (rect.width / 2)) * 0.6
      const y = ((e.clientY - centerY) / (rect.height / 2)) * 0.6

      setMousePosition({ x, y })
      
      // Update eye positions with constraints
      const eyeX = Math.max(-1, Math.min(1, x * 1.2))
      const eyeY = Math.max(-1, Math.min(1, y * 1.2))
      
      setEyePosition({
        leftX: eyeX,
        leftY: eyeY,
        rightX: eyeX,
        rightY: eyeY,
      })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
      onHover?.(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      onHover?.(false)
      setMousePosition({ x: 0, y: 0 })
      setEyePosition({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
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
      className="w-full h-full flex items-center justify-center relative"
    >
      <motion.div
        className="w-full h-full max-w-lg max-h-lg relative"
        style={{
          x: useTransform(charX, (x) => x * 25),
          y: useTransform(charY, (y) => y * 25),
          rotate: useTransform(charX, (x) => x * 3),
        }}
      >
        {/* Main Character Container */}
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovering ? [1, 1.05, 1] : 1,
            y: [0, -8, 0],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Glow Background */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main Character Face */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                boxShadow: '0 25px 80px rgba(59, 130, 246, 0.4), 0 15px 40px rgba(168, 85, 247, 0.3), 0 5px 15px rgba(236, 72, 153, 0.2)',
              }}
              animate={{
                boxShadow: [
                  "0 25px 80px rgba(59, 130, 246, 0.4), 0 15px 40px rgba(168, 85, 247, 0.3)",
                  "0 25px 80px rgba(168, 85, 247, 0.4), 0 15px 40px rgba(236, 72, 153, 0.3)",
                  "0 25px 80px rgba(236, 72, 153, 0.4), 0 15px 40px rgba(59, 130, 246, 0.3)",
                  "0 25px 80px rgba(59, 130, 246, 0.4), 0 15px 40px rgba(168, 85, 247, 0.3)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Animated gradient mesh overlay */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-60"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 70%)
                  `,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Face Features */}
              <div className="relative w-full h-full z-10">
                {/* Eyes Container */}
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-40 h-20 flex items-center justify-center gap-10">
                  {/* Left Eye */}
                  <motion.div
                    className="relative w-20 h-20"
                  >
                    {/* Eye socket */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/95 backdrop-blur-md border-3 border-gray-200 shadow-xl"
                      style={{
                        borderWidth: '3px',
                      }}
                    />
                    
                    {/* Eye ball */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
                      style={{
                        x: useTransform(leftEyeX, (x) => x * 15),
                        y: useTransform(leftEyeY, (y) => y * 15),
                      }}
                    >
                      {/* Eye highlight */}
                      <div className="absolute top-2 left-3 w-3 h-3 rounded-full bg-white/90 blur-sm" />
                      {/* Blink effect */}
                      {blink && (
                        <motion.div
                          className="absolute inset-0 bg-white rounded-full"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                          transition={{ duration: 0.15 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Right Eye */}
                  <motion.div
                    className="relative w-20 h-20"
                  >
                    {/* Eye socket */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/95 backdrop-blur-md border-3 border-gray-200 shadow-xl"
                      style={{
                        borderWidth: '3px',
                      }}
                    />
                    
                    {/* Eye ball */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
                      style={{
                        x: useTransform(rightEyeX, (x) => x * 15),
                        y: useTransform(rightEyeY, (y) => y * 15),
                      }}
                    >
                      {/* Eye highlight */}
                      <div className="absolute top-2 left-3 w-3 h-3 rounded-full bg-white/90 blur-sm" />
                      {/* Blink effect */}
                      {blink && (
                        <motion.div
                          className="absolute inset-0 bg-white rounded-full"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                          transition={{ duration: 0.15 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Nose */}
                <motion.div
                  className="absolute top-[50%] left-1/2 -translate-x-1/2 w-3 h-8 rounded-full bg-gray-300/30"
                  animate={{
                    scaleY: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Smile */}
                <motion.div
                  className="absolute bottom-[32%] left-1/2 -translate-x-1/2 w-32 h-16 border-4 border-gray-700 rounded-full border-t-transparent shadow-lg"
                  animate={{
                    scaleY: [1, 1.08, 1],
                    scaleX: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Cheeks */}
                <motion.div
                  className="absolute top-[45%] left-[15%] w-12 h-8 rounded-full bg-pink-300/20 blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-[45%] right-[15%] w-12 h-8 rounded-full bg-pink-300/20 blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.7,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Particles - Enhanced */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const radius = 180 + (i % 3) * 30
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(${59 + i * 10}, ${130 + i * 5}, ${246 - i * 5}, 0.6),
                    rgba(${168 + i * 5}, ${85 + i * 10}, ${246 - i * 5}, 0.6)
                  )`,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos(angle) * radius,
                    Math.cos(angle + Math.PI / 6) * (radius + 20),
                    Math.cos(angle) * radius,
                  ],
                  y: [
                    Math.sin(angle) * radius,
                    Math.sin(angle + Math.PI / 6) * (radius + 20),
                    Math.sin(angle) * radius,
                  ],
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            )
          })}

          {/* Energy Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: `rgba(${59 + i * 20}, ${130 + i * 10}, ${246 - i * 10}, 0.3)`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1 + i * 0.3, 1.2 + i * 0.3, 1 + i * 0.3],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
