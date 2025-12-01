'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SoftBlobBackground from './SoftBlobBackground'
import GradientFlowBackground from './GradientFlowBackground'
import ParticleSystemBackground from './ParticleSystemBackground'

interface MultiAnimationBackgroundProps {
  onHover?: (isHovering: boolean) => void
  mode?: 'blend' | 'cycle' | 'random'
  cycleInterval?: number
}

/**
 * Multi Animation Background
 * Combines multiple animations for a rich, layered effect
 */
export default function MultiAnimationBackground({ 
  onHover, 
  mode = 'blend',
  cycleInterval = 10000 
}: MultiAnimationBackgroundProps) {
  const [activeLayers, setActiveLayers] = useState({
    blob: true,
    gradient: true,
    particles: false,
  })

  useEffect(() => {
    if (mode === 'cycle') {
      const interval = setInterval(() => {
        setActiveLayers(prev => ({
          blob: !prev.blob,
          gradient: !prev.gradient,
          particles: !prev.particles,
        }))
      }, cycleInterval)

      return () => clearInterval(interval)
    } else if (mode === 'random') {
      const interval = setInterval(() => {
        setActiveLayers({
          blob: Math.random() > 0.5,
          gradient: Math.random() > 0.5,
          particles: Math.random() > 0.3,
        })
      }, cycleInterval)

      return () => clearInterval(interval)
    }
  }, [mode, cycleInterval])

  return (
    <div className="relative w-full h-full">
      {/* Layer 1: Soft Blob (base) */}
      <AnimatePresence>
        {activeLayers.blob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <SoftBlobBackground onHover={onHover} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layer 2: Gradient Flow (overlay) */}
      <AnimatePresence>
        {activeLayers.gradient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <GradientFlowBackground onHover={onHover} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layer 3: Particles (accent) */}
      <AnimatePresence>
        {activeLayers.particles && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <ParticleSystemBackground onHover={onHover} particleCount={25} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

