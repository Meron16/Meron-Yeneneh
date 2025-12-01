'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import dynamic from 'next/dynamic'

const ScrollBlur = dynamic(() => import('@/components/ScrollBlur'), {
  ssr: false,
})

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* Scroll-following blur effect at bottom */}
      <ScrollBlur />
      {/* All content */}
      <div className="relative" style={{ zIndex: 10, position: 'relative' }}>
        {children}
      </div>
    </ThemeProvider>
  )
}

