'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function GetInTouch() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-sm tracking-wider text-gray-600">✦</span>
            <h2 className="text-sm tracking-wider text-gray-600 uppercase">get in touch</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-8">Ready when you are.</h3>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            work with me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


