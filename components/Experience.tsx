'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

type ExperienceCategory = 'leadership' | 'internship' | 'work' | 'hackathon'

const categories = [
  { id: 'leadership' as ExperienceCategory, name: 'Leadership Experience' },
  { id: 'internship' as ExperienceCategory, name: 'Internship' },
  { id: 'work' as ExperienceCategory, name: 'Work Experience' },
  { id: 'hackathon' as ExperienceCategory, name: 'Hackathon Winner' },
]

const experiences = {
  leadership: [
    {
      title: 'Event Organizer and Representative',
      company: 'BIT Career Development Center',
      period: '09/2024 – 06/2025',
      description: 'Organized events and represented the Career Development Center, facilitating career development programs and connecting students with opportunities.',
      achievements: [
        'Organized career development events and workshops',
        'Represented BIT CDC in various programs and initiatives',
        'Connected students with internship and job opportunities',
        'Facilitated networking events and career development activities'
      ],
      certificates: [
        {
          name: 'BIT CDC Representative Certificate',
          url: 'https://drive.google.com/file/d/1owSC4sqhWWtFvFvx3xXCy1_zY3kdp3Z9/view?usp=sharing'
        }
      ],
    },
    {
      title: 'Mentor on Summer Program',
      company: 'Bahir Dar American Corner',
      period: '06/2019 – Present',
      description: 'Serving as a mentor in summer programs at the American Corner, promoting cultural exchange, educational programs, and community engagement.',
      achievements: [
        'Mentored students in summer programs and educational initiatives',
        'Organized cultural and educational events',
        'Promoted American Corner programs and resources',
        'Supported language learning and exchange programs'
      ],
      certificates: [
        {
          name: 'Bahir Dar American Corner Certificate',
          url: 'https://drive.google.com/file/d/1i__4miLas4ehsc1nK-b6Cs1W2cTIX3tc/view?usp=sharing'
        }
      ],
    },
    {
      title: 'Co-facilitator and Mentor',
      company: 'BIT Career Development Center',
      period: '12/2022 – 2024',
      description: 'Co-facilitated programs and mentored students at the Career Development Center, supporting career development initiatives.',
      achievements: [
        'Co-facilitated career development workshops and programs',
        'Mentored students in career planning and development',
        'Supported various CDC initiatives and activities',
        'Helped organize and run career-related events'
      ],
      certificates: [
        {
          name: 'Cofacilitation Certificate',
          url: 'https://drive.google.com/file/d/17UPXZ_NKjNBilfFOoZBsqgYiT6O6QI_z/view?usp=sharing'
        }
      ],
    },
    {
      title: 'Environmental Volunteer',
      company: 'Tana Gihon Environmental Protection and Organizational Association',
      period: '06/2019 – Present',
      description: 'Volunteering for environmental protection initiatives, contributing to conservation efforts and community awareness programs.',
      achievements: [
        'Participated in environmental protection initiatives',
        'Contributed to conservation and awareness programs',
        'Engaged in community environmental activities',
        'Supported organizational environmental goals'
      ],
      certificates: [
        {
          name: 'Tanagihon Environmental Volunteer Certificate',
          url: 'https://drive.google.com/file/d/11hQXjvsbPGv8IXwzszTflzw_5hspUwGE/view?usp=sharing'
        }
      ],
    },
  ],
  internship: [
    {
      title: 'Machine Learning Intern',
      company: 'DevTech',
      period: '09/2024 – 02/2025',
      description: 'Developed ML models for real-time prediction tasks and built end-to-end data pipelines for production deployment.',
      achievements: [
        'Developed ML models for real-time prediction tasks, improving accuracy by 20%',
        'Built end-to-end data pipelines and deployed models through production APIs',
        'Worked on machine learning model optimization and deployment'
      ],
      certificates: [
        {
          name: 'DevTech Internship Certificate',
          url: 'https://drive.google.com/file/d/17UPXZ_NKjNBilfFOoZBsqgYiT6O6QI_z/view?usp=sharing'
        }
      ],
    },
  ],
  work: [
    {
      title: 'Backend Developer',
      company: 'Helder Technologies PLC',
      period: '06/2025 – 09/2025',
      description: 'Led backend development of infrastructure using Node.js/Express and Laravel, building secure RESTful APIs for authentication and data processing.',
      achievements: [
        'Led backend development of infrastructure using Node.js/Express and Laravel, reducing latency by 15%',
        'Built and optimized secure RESTful APIs for authentication and data processing',
        'Mentored junior developers through code reviews and best practices'
      ],
      certificates: [
        {
          name: 'Helder Internship Certificate',
          url: 'https://drive.google.com/file/d/1iVmBa6RJb1WJcbT0zT27koEJJ4pccaMv/view?usp=sharing'
        }
      ],
    },
    {
      title: 'Web Developer',
      company: 'BIT Career Development Center',
      period: '01/2025 – Present',
      description: 'Leading full-stack development of the Career Development Center web platform with modern, responsive UI design.',
      achievements: [
        'Led full-stack development of the Career Development Center web platform',
        'Designed a modern, responsive UI with smooth animations and intuitive navigation',
        'Implemented user-friendly features for career development resources'
      ],
      certificates: [],
    },
  ],
  hackathon: [
    {
      title: '🏆 1st Place Winner - 3 Times in a Row!',
      company: '2025 Digital Innovation Hackathon',
      period: '2025',
      description: 'Secured 1st Place at the 2025 Digital Innovation Hackathon, hosted by Bahir Dar Institute of Technology, Bahir Dar University, in collaboration with Poly Alumina Network (PAN). This marks my third consecutive first-place win, proving that consistency compounds.',
      achievements: [
        '🏆 1st Place Winner - 3rd consecutive hackathon victory',
        'Built AI Recruiter - smart recruitment system that filters CVs, evaluates skills, and streamlines hiring using AI',
        'Designed solution for fairness, speed, and accessibility in the Ethiopian job market',
        'Awarded HP Core i7 laptops as grand prize',
        'Collaborated with amazing teammates: Hiwot Belay, Tsadkan Kelemework, and Hosanna walle'
      ],
      certificates: [
        {
          name: '2025 Digital Innovation Hackathon Certificate',
          url: 'https://drive.google.com/file/d/17UPXZ_NKjNBilfFOoZBsqgYiT6O6QI_z/view?usp=sharing'
        }
      ],
      certificateImage: '/bit.jfif',
      certificateType: 'image',
    },
    {
      title: '1st Place Winner - AI Recruiter Project',
      company: 'She Codes Hackathon',
      period: '2024',
      description: 'Won 1st place with AI Recruiter project - a revolutionary recruitment system powered by AI that matches candidates with opportunities using OpenAI and Hugging Face technologies.',
      achievements: [
        'Ranked 1st place out of 40+ teams',
        'Built AI Recruiter - AI-powered recruitment matching system',
        'Integrated OpenAI and Hugging Face for intelligent candidate matching',
        'Demonstrated exceptional problem-solving and development skills'
      ],
      certificates: [
        {
          name: 'She Codes Hackathon Certificate (Individual)',
          url: 'https://drive.google.com/file/d/17UPXZ_NKjNBilfFOoZBsqgYiT6O6QI_z/view?usp=sharing'
        },
        {
          name: 'She Codes Hackathon Certificate (Group)',
          url: 'https://drive.google.com/file/d/17UPXZ_NKjNBilfFOoZBsqgYiT6O6QI_z/view?usp=sharing'
        }
      ],
      certificateImage: '/shecodes group.jfif',
      certificateType: 'image',
    },
    {
      title: '1st Place Winner - Pet Twin Project',
      company: 'Gig Hackathon',
      period: '2024',
      description: 'Won 1st place with Pet Twin project, earning a paid internship opportunity and a prize of 32,000 Ethiopian Birr. Showcased technical excellence and innovative thinking.',
      achievements: [
        'Ranked 1st place out of 20+ teams',
        'Developed Pet Twin - innovative solution for pet care and matching',
        'Awarded 32,000 Ethiopian Birr prize',
        'Received paid internship opportunity with Gig',
        'Demonstrated leadership and technical capabilities'
      ],
      certificates: [
        {
          name: 'Gig Hackathon Certificate',
          url: 'https://drive.google.com/file/d/17UPXZ_NKjNBilfFOoZBsqgYiT6O6QI_z/view?usp=sharing'
        }
      ],
      certificateImage: '/gig.png',
      certificateType: 'image',
    },
  ],
}

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>('leadership')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" className="py-12 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#F4BBFF] to-[#E8A8FF] text-white font-semibold text-sm mb-4 shadow-lg"
          >
            ✨ Experience
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-sm text-gray-700 max-w-2xl mx-auto font-medium">
            Professional experiences and achievements
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'button-purple-glow text-gray-900 dark:text-gray-900 shadow-lg relative'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              style={activeCategory === category.id ? { backgroundColor: '#FFFFFF' } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Experience Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-6 ${
              experiences[activeCategory].length === 1 
                ? 'grid-cols-1' 
                : experiences[activeCategory].length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {experiences[activeCategory].map((exp, index) => {
              const isHackathon = activeCategory === 'hackathon'
              const hasCertificate = isHackathon && (exp as any).certificateImage
              
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  style={{ 
                    perspective: '1000px',
                    minHeight: hasCertificate ? '400px' : 'auto'
                  }}
                >
                  <motion.div
                    className="relative w-full"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                      minHeight: hasCertificate ? '400px' : 'auto'
                    }}
                    whileHover={hasCertificate ? { rotateY: 180 } : { y: -5, scale: 1.02 }}
                    transition={{ 
                      duration: 0.7, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: 'tween'
                    }}
                  >
                    {/* Front of Card */}
                    <div className="relative bg-gradient-to-br from-white dark:from-black to-purple-50/30 dark:to-purple-900/20 rounded-xl p-5 border-2 border-purple-200/50 dark:border-purple-800/50 shadow-lg hover:shadow-2xl hover:border-[#F4BBFF] transition-all duration-300 overflow-hidden group"
                      style={{ 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                        minHeight: hasCertificate ? '400px' : 'auto'
                      }}
                    >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(244, 187, 255, 0.1) 0%, rgba(232, 168, 255, 0.05) 100%)'
                  }}
                />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F4BBFF]/20 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="flex flex-col mb-3">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <h3 className="text-base font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1 leading-tight">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-1">
                          <svg className="w-3.5 h-3.5 text-[#F4BBFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <p className="text-xs text-gray-800 font-semibold">{exp.company}</p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-block"
                        >
                          <span className="text-xs font-semibold bg-gradient-to-r from-[#F4BBFF] to-[#E8A8FF] text-white px-2 py-0.5 rounded-full shadow-md">
                            {exp.period}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
                          className="flex items-start gap-2 text-xs text-gray-800 leading-relaxed group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="w-4 h-4 rounded-full bg-gradient-to-br from-[#F4BBFF] to-[#E8A8FF] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                          >
                            <span className="text-white text-xs font-bold">✓</span>
                          </motion.div>
                          <span className="font-medium group-hover/item:text-gray-900 transition-colors">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                      {!isHackathon && (
                        <div>
                          <motion.h4
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                            className="font-bold text-gray-900 mb-2 text-xs uppercase tracking-wider flex items-center gap-2"
                          >
                            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#F4BBFF] to-[#E8A8FF] flex items-center justify-center shadow-md">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <span className="text-gray-900 dark:text-gray-900">Certificates & Proof</span>
                          </motion.h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.certificates.map((cert, i) => (
                              typeof cert === 'string' ? (
                                <motion.span
                                  key={i}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg text-xs font-semibold border border-gray-200 shadow-sm"
                                >
                                  {cert}
                                </motion.span>
                              ) : (
                                <motion.a
                                  key={i}
                                  href={cert.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="button-purple-glow px-3 py-1.5 text-gray-900 dark:text-gray-900 rounded-lg text-xs font-semibold border transition-colors cursor-pointer relative shadow-sm"
                                  style={{ 
                                    backgroundColor: '#FFFFFF',
                                    borderColor: '#F4BBFF'
                                  }}
                                >
                                  {cert.name}
                                </motion.a>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {isHackathon && (
                        <div className="text-center pt-2">
                          <p className="text-xs text-gray-600 italic">Hover to see certificate</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Back of Card - Certificate */}
                  {hasCertificate && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-white dark:from-black to-purple-50/30 dark:to-purple-900/20 rounded-xl p-2 border-2 border-purple-200/50 dark:border-purple-800/50 shadow-lg overflow-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        minHeight: '400px',
                        transformOrigin: 'center center'
                      }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden" style={{ minHeight: '380px' }}>
                        {(exp as any).certificateType === 'image' ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={(exp as any).certificateImage}
                              alt={`${exp.title} Certificate`}
                              fill
                              className="object-contain p-2"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4">
                            <svg className="w-16 h-16 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Certificate PDF</p>
                            <motion.a
                              href={(exp as any).certificateImage}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="button-purple-glow px-4 py-2 text-gray-900 dark:text-gray-900 rounded-lg text-sm font-semibold relative"
                              style={{ backgroundColor: '#FFFFFF' }}
                            >
                              View PDF
                            </motion.a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )})}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}


