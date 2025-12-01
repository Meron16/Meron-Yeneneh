'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SoftBlobBackground from './SoftBlobBackground'
import GradientFlowBackground from './GradientFlowBackground'
import ParticleSystemBackground from './ParticleSystemBackground'
import RiveBackground from '../RiveBackground'

export type AnimationType = 'soft-blob' | 'gradient-flow' | 'particles' | 'rive-blob' | 'rive-gradient' | 'rive-particles'

interface AnimationSelectorProps {
  onHover?: (isHovering: boolean) => void
  defaultAnimation?: AnimationType
  showSelector?: boolean
}

/**
 * Animation Selector Component
 * Switch between different background animations
 */
export default function AnimationSelector({ 
  onHover, 
  defaultAnimation = 'soft-blob',
  showSelector = false 
}: AnimationSelectorProps) {
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>(defaultAnimation)

  const animations = [
    { id: 'soft-blob' as AnimationType, name: 'Soft Blob', icon: '🫧' },
    { id: 'gradient-flow' as AnimationType, name: 'Gradient Flow', icon: '🌊' },
    { id: 'particles' as AnimationType, name: 'Particles', icon: '✨' },
    { id: 'rive-blob' as AnimationType, name: 'Rive Blob', icon: '🎨' },
    { id: 'rive-gradient' as AnimationType, name: 'Rive Gradient', icon: '🌈' },
    { id: 'rive-particles' as AnimationType, name: 'Rive Particles', icon: '⭐' },
  ]

  const renderAnimation = () => {
    switch (currentAnimation) {
      case 'soft-blob':
        return <SoftBlobBackground onHover={onHover} />
      case 'gradient-flow':
        return <GradientFlowBackground onHover={onHover} />
      case 'particles':
        return <ParticleSystemBackground onHover={onHover} particleCount={40} />
      case 'rive-blob':
        return (
          <RiveBackground 
            src="/animations/soft-blob.riv" 
            autoplay={true}
            scale="cover"
          />
        )
      case 'rive-gradient':
        return (
          <RiveBackground 
            src="/animations/gradient-flow.riv" 
            autoplay={true}
            scale="cover"
          />
        )
      case 'rive-particles':
        return (
          <RiveBackground 
            src="/animations/particles.riv" 
            autoplay={true}
            scale="cover"
          />
        )
      default:
        return <SoftBlobBackground onHover={onHover} />
    }
  }

  return (
    <div className="relative w-full h-full">
      {/* Animation Display */}
      <div className="absolute inset-0">
        {renderAnimation()}
      </div>

      {/* Animation Selector (optional) */}
      {showSelector && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            {animations.map((anim) => (
              <motion.button
                key={anim.id}
                onClick={() => setCurrentAnimation(anim.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentAnimation === anim.id
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{anim.icon}</span>
                {anim.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  )
}


