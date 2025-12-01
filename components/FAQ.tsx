'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    question: 'How long does a project usually take?',
    answer: 'Project timelines vary based on scope, but typically range from 4-12 weeks for complete brand identities or website designs.',
  },
  {
    question: 'What tools do you use?',
    answer: 'I primarily work with Figma for design, and I create websites that are ready for Framer integration. I also use Adobe Creative Suite for brand assets.',
  },
  {
    question: 'Can I edit the design later?',
    answer: 'Yes! I provide style systems and guidelines that make it easy for you or your team to update content and make minor adjustments.',
  },
  {
    question: 'Do I need a developer after the design is done?',
    answer: 'For Framer websites, no developer is needed—the designs are built to be implemented directly in Framer. For custom development, I can provide developer-ready handoff files.',
  },
  {
    question: "What's the best way to start?",
    answer: 'The best way to start is by reaching out through the contact form. We can schedule a call to discuss your project, goals, and timeline.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-wider text-gray-600">✦</span>
            <h2 className="text-sm tracking-wider text-gray-600 uppercase">faq's</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-2">Everything you might want to know.</h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex items-center justify-between py-4"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-600 leading-relaxed pt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


