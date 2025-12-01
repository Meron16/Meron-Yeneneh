'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Brand identity',
    description: 'Distinctive brand identities built with clarity and purpose.',
    features: [
      'Logo & Visual Language',
      'Strategic Brand Positioning',
      'Brand Voice',
      'Style Guidelines & Usage Rules',
      'Collateral Design & Asset Kits',
    ],
  },
  {
    title: 'Web Design',
    description: 'Modern websites that feel seamless, structured, and easy to navigate.',
    features: [
      'Custom Layout Design',
      'Responsive Mobile Views',
      'Page Structure & Flow Planning',
      'Framer Integration–Ready',
      'Style Systems for Easy Updates',
    ],
  },
  {
    title: 'UI & App Design',
    description: 'Clean, intuitive interfaces shaped around real user needs.',
    features: [
      'App Interface Design (iOS / Web)',
      'Wireframes & User Flows',
      'Design Systems & Components',
      'Microinteractions & States',
      'Developer-Ready Handoff',
    ],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
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
            <h2 className="text-sm tracking-wider text-gray-600 uppercase">services</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold">What I offer across brand, web, and UI design.</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: typeof services[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500 shadow-md">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Service Image</span>
        </div>
      </div>
      <h4 className="text-2xl font-semibold mb-3 capitalize">{service.title}</h4>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-500">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

