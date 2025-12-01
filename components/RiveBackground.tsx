'use client'

import React, { useEffect, useRef, useState } from 'react'

interface RiveBackgroundProps {
  src: string
  autoplay?: boolean
  scale?: 'fit' | 'cover'
  className?: string
}

/**
 * RiveBackground Component
 * 
 * A high-performance, GPU-accelerated Rive animation background component.
 * 
 * @param src - URL to your .riv file (required)
 * @param autoplay - Whether to autoplay the animation (default: true)
 * @param scale - How to scale the animation: 'fit' or 'cover' (default: 'cover')
 * @param className - Additional CSS classes
 * 
 * Usage:
 * ```tsx
 * <RiveBackground 
 *   src="https://cdn.rive.app/your-animation.riv" 
 *   autoplay={true}
 *   scale="cover"
 * />
 * ```
 * 
 * Recommended free Rive animations for portfolio backgrounds:
 * 1. Soft Blob Background - Subtle organic shapes
 * 2. Gradient Flow - Slow flowing color gradients
 * 3. Particle System - Gentle particle effects
 * 
 * Find more at: https://rive.app/community/
 */
const RiveBackground: React.FC<RiveBackgroundProps> = ({ 
  src, 
  autoplay = true,
  scale = 'cover',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const riveRef = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Respect reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      console.log('Reduced motion preference - skipping Rive animation')
      return
    }

    let mounted = true

    const initRive = async () => {
      try {
        // Dynamic import of rive-js
        let RiveLib: any
        
        // Try to import from node_modules first
        try {
          // Type declaration allows this to compile even if rive-js is not installed
          const riveModule = await import('rive-js')
          // Handle different export formats
          RiveLib = riveModule.default || riveModule.Rive || riveModule
          
          // If it's an object with Rive property, use that
          if (!RiveLib && typeof riveModule === 'object' && 'Rive' in riveModule) {
            RiveLib = riveModule
          }
        } catch (importError) {
          // Fallback: Check if Rive is available globally (from CDN)
          if (typeof window !== 'undefined' && (window as any).rive) {
            RiveLib = (window as any).rive
          } else {
            // Silently fail if rive-js is not available (component is optional)
            console.warn('Rive animation not available. Install rive-js or use CDN fallback.')
            setError('Rive animation library not found')
            return
          }
        }

        if (!mounted) return

        const canvasEl = canvasRef.current
        if (!canvasEl) return

        // Size canvas for crisp rendering with high DPI support
        const resizeCanvas = () => {
          if (!canvasEl) return
          const dpr = window.devicePixelRatio || 1
          canvasEl.width = window.innerWidth * dpr
          canvasEl.height = window.innerHeight * dpr
          canvasEl.style.width = window.innerWidth + 'px'
          canvasEl.style.height = window.innerHeight + 'px'
          
          const ctx = canvasEl.getContext('2d')
          if (ctx) {
            ctx.scale(dpr, dpr)
          }
        }

        const handleResize = () => {
          resizeCanvas()
        }

        window.addEventListener('resize', handleResize, { passive: true })
        resizeCanvas()

        // Create Rive instance
        riveRef.current = new RiveLib({
          src,
          canvas: canvasEl,
          autoplay,
          layout: new RiveLib.Layout({
            fit: scale === 'cover' ? RiveLib.Fit.COVER : RiveLib.Fit.FIT,
            alignment: RiveLib.Alignment.CENTER
          }),
          onLoad: () => {
            if (mounted) {
              setIsLoaded(true)
              setError(null)
            }
          },
          onLoadError: (err: Error) => {
            if (mounted) {
              setError(`Failed to load Rive animation: ${err.message}`)
              console.error('Rive load error:', err)
            }
          }
        })

        // Optional gentle parallax effect (subtle, non-distracting)
        let rafId: number | null = null
        const handlePointerMove = (e: PointerEvent) => {
          if (rafId) cancelAnimationFrame(rafId)
          
          rafId = requestAnimationFrame(() => {
            if (!canvasEl || !mounted) return
            
            // Small transforms for depth (non-invasive)
            const px = (e.clientX / window.innerWidth - 0.5) * 8 // range ~ -4..4
            const py = (e.clientY / window.innerHeight - 0.5) * 8
            
            // Apply subtle transform to canvas element
            canvasEl.style.transform = `translate(${px}px, ${py}px)`
          })
        }

        window.addEventListener('pointermove', handlePointerMove, { passive: true })

        // Cleanup function
        return () => {
          mounted = false
          window.removeEventListener('resize', handleResize)
          window.removeEventListener('pointermove', handlePointerMove)
          if (rafId) cancelAnimationFrame(rafId)
          
          if (riveRef.current) {
            try {
              if (riveRef.current.cleanup) {
                riveRef.current.cleanup()
              } else if (riveRef.current.stop) {
                riveRef.current.stop()
              }
            } catch (cleanupError) {
              console.warn('Error cleaning up Rive instance:', cleanupError)
            }
            riveRef.current = null
          }
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || 'Failed to initialize Rive animation')
          console.error('Rive initialization error:', err)
        }
      }
    }

    const cleanup = initRive()

    return () => {
      mounted = false
      if (cleanup && typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [src, autoplay, scale])

  // Show error message in development
  if (error && process.env.NODE_ENV === 'development') {
    console.warn('RiveBackground error:', error)
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className={className}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          willChange: 'transform', // GPU acceleration hint
          transform: 'translateZ(0)', // Force GPU layer
        }}
        aria-hidden="true"
      />
      {/* Overlay children go above the canvas — place main content after this component */}
    </>
  )
}

export default RiveBackground

