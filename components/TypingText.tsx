'use client'

import { useState, useEffect } from 'react'

const roles = [
  'Full Stack Developer',
  'Specialized in Backend',
  'Rive Animation Developer',
]

interface TypingTextProps {
  className?: string
}

export default function TypingText({ className = '' }: TypingTextProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentRole.substring(0, displayText.length + 1))

        if (displayText.length === currentRole.length) {
          // Finished typing, wait then start deleting
          setIsDeleting(true)
          setTypingSpeed(100)
          setTimeout(() => setTypingSpeed(50), 1500)
        }
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1))

        if (displayText.length === 0) {
          // Finished deleting, move to next role
          setIsDeleting(false)
          setTypingSpeed(150)
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, currentRoleIndex, isDeleting, typingSpeed])

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="font-bold text-gray-900">
        {displayText}
      </span>
      <span className="inline-block w-1 h-6 md:h-8 lg:h-10 ml-1 bg-gray-900 animate-pulse"></span>
    </div>
  )
}

