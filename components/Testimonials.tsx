'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Clara Jennings',
    role: 'Creative Director, Lune Studio',
    quote: "Working with Elena felt effortless. She immediately understood our vision and translated it into a design that just worked.",
  },
  {
    name: 'Marek Ivanov',
    role: 'Founder, BetterBlocks',
    quote: "Elena brought clarity to our brand and built a site that reflects who we are. She's fast, communicative, and cares about the details.",
  },
  {
    name: 'Jasmine Liu',
    role: 'Product Manager, Kiva',
    quote: "She made everything feel simple. From concept to launch, Elena guided us with a clear process and delivered exactly what we needed.",
  },
  {
    name: 'Rafael Mendez',
    role: 'Co-Founder, Noto',
    quote: "This was the smoothest design experience I've had. Elena listened, adapted quickly, and created something far better than we imagined.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-wider text-gray-600">✦</span>
            <h2 className="text-sm tracking-wider text-gray-600 uppercase">testimonials</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold">Thoughtful words from people I&apos;ve worked with.</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Photo</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold mb-1">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

