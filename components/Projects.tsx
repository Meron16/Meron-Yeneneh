'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Code, Database } from './icons'

type ProjectCategory = 'fullstack' | 'backend' | 'frontend'

const categories = [
  { id: 'fullstack' as ProjectCategory, name: 'Full Stack', icon: Code },
  { id: 'backend' as ProjectCategory, name: 'Backend', icon: Database },
  { id: 'frontend' as ProjectCategory, name: 'Frontend', icon: Code },
]

const projects = {
  fullstack: [
    {
      title: 'FoodWagen',
      description: 'A food delivery platform that connects users with nearby restaurants. Find meals accessible near you within a few clicks with delivery and pickup options.',
      tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Postman'],
      demo: 'https://food-wagen-one.vercel.app/',
      github: 'https://github.com/Meron16/FoodWagen',
      image: '/Foodwagen.jpg',
      logo: null,
    },
    {
      title: 'Employee Performance Management',
      description: 'A comprehensive performance management system with role-based access, evaluations, goals tracking, and analytics dashboards for HR and managers.',
      tech: ['Vue', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Postman'],
      demo: 'https://employee-performance-management-qzm.vercel.app/login',
      github: 'https://github.com/Meron16/Employee-performance-management',
      image: '/employee.png',
      logo: null,
    },
    {
      title: 'AI Recruiter (HuluMatch)',
      description: 'Revolutionizing recruitment with AI-powered matching. Connect with top companies and discover opportunities that match your skills using OpenAI and Hugging Face.',
      tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'Prisma', 'SQLite', 'OpenAI', 'Hugging Face'],
      demo: 'https://airecruiter-omega.vercel.app/',
      github: 'https://github.com/hosanna1616/Airecruiter',
      image: '/Hulumatch.jpg',
      logo: '/logo hulu.jpg',
    },
    {
      title: 'Azmera Farms E-Learning',
      description: 'An online learning platform for agricultural skills education across Ethiopia. Features course creation, video streaming, quizzes, certificates, and payment integration.',
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Postman', 'Tailwind CSS'],
      demo: null,
      github: 'https://github.com/HiwotBelay/Azmera_Farms',
      image: '/Azmera.png',
      logo: null,
    },
  ],
  backend: [
    {
      title: 'Knowledge First',
      description: 'A comprehensive knowledge management platform with content creation, user management, and analytics features. Streamline your workflow with an intuitive interface.',
      tech: ['Laravel', 'MySQL', 'Postman'],
      demo: 'https://knowledge-first.org/',
      github: null,
      image: '/knowldege.png',
      logo: '/dashboard.png',
    },
    {
      title: 'Property Admin',
      description: 'A property management system for efficient content and property administration. Manage properties with ease using our streamlined platform.',
      tech: ['Laravel', 'MySQL', 'Postman'],
      demo: 'https://propertyadmin.dreyobmamo.com/',
      github: null,
      image: '/property.png',
      logo: null,
    },
    {
      title: 'EITEX Badge Generating',
      description: 'A Laravel-based badge generation system for EITEX. Generate and manage badges efficiently with a robust backend solution.',
      tech: ['Laravel'],
      demo: null,
      github: 'https://github.com/Meron16/EITEX_Badge_generating',
      image: '/etex.png',
      logo: null,
    },
  ],
  frontend: [
    {
      title: 'Blue Nile Hotel',
      description: 'A luxury hotel booking website for Blue Nile Hotel located on the shores of Lake Tana in Bahir Dar. Features room booking, special offers, virtual tours, and comprehensive hotel information.',
      tech: ['Next.js', 'Tailwind CSS', 'React'],
      demo: 'https://blue-nile-hotel.vercel.app/',
      github: null,
      image: '/bluenile.png',
      logo: '/blue.png',
    },
    {
      title: 'Saba Hub',
      description: 'An e-commerce platform for authentic Ethiopian handmade crafts. Support local artisans by purchasing pottery, jewelry, embroidery, baskets, and other traditional crafts.',
      tech: ['Next.js', 'Tailwind CSS', 'React'],
      demo: 'https://saba-hub.vercel.app/',
      github: null,
      image: '/saba.png',
      logo: null,
    },
  ],
}

// Project Carousel Component
type ProjectItem = {
  title: string
  description: string
  tech: string[]
  demo: string | null
  github: string | null
  image: string
  logo: string | null
}

function ProjectCarousel({ projects, isInView }: { projects: ProjectItem[], isInView: boolean }) {
  const [isPaused, setIsPaused] = useState(false)
  const [currentX, setCurrentX] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const gap = 24
  const visibleCards = 2
  
  // Calculate card width based on container width
  const cardWidth = containerWidth > 0 ? (containerWidth - gap) / visibleCards : 400
  const singleCardWidth = cardWidth + gap
  const totalScrollDistance = (projects.length - visibleCards) * singleCardWidth
  
  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  
  const handleCardHover = (index: number) => {
    setIsPaused(true)
    // Calculate position to show the hovered card
    const targetX = -index * singleCardWidth
    setCurrentX(targetX)
  }
  
  return (
    <div ref={containerRef} className="overflow-hidden relative w-full">
      {/* Left blur gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none backdrop-blur-sm" />
      {/* Right blur gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none backdrop-blur-sm" />
      
      <motion.div
        ref={carouselRef}
        className="flex gap-6"
        style={{ justifyContent: 'flex-start', width: 'max-content' }}
        animate={isPaused ? {
          x: currentX,
        } : {
          x: [0, -totalScrollDistance, 0],
        }}
        transition={isPaused ? {
          x: {
            duration: 0.5,
            ease: "easeOut",
          },
        } : {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.map((project: any, index: number) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
            isInView={isInView}
          />
        ))}
      </motion.div>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, index, isInView }: { project: any, index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: -20 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateX: 0,
      } : { 
        opacity: 0, 
        y: 60, 
        scale: 0.85, 
        rotateX: -20 
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 15
      }}
      whileHover={{ 
        y: -16, 
        scale: 1.06,
        rotateY: 8,
        rotateX: -8,
        transition: { 
          duration: 0.4, 
          type: "spring", 
          stiffness: 400,
          damping: 20
        }
      }}
      whileTap={{ 
        scale: 0.96,
        rotateY: 0,
        rotateX: 0,
        transition: { duration: 0.15 }
      }}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      {/* Card with amazing design */}
      <motion.div 
        className="relative h-full bg-white dark:bg-black rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg cursor-pointer"
        whileHover={{
          boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)",
        }}
        whileTap={{
          scale: 0.98,
        }}
      >
        {/* Animated gradient border effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 -z-10 blur-xl"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-2xl"></div>
        </motion.div>
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.4 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/25 via-purple-400/25 to-pink-400/25 blur-2xl"></div>
        </motion.div>
        
        {/* Image Container */}
        <div className="relative h-40 overflow-hidden bg-gray-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {project.logo && (
            <motion.div 
              className="absolute top-3 right-3 w-12 h-12 rounded-lg bg-white dark:bg-black p-1.5 shadow-xl z-10"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileHover={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
            >
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                className="object-contain p-0.5"
              />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 lg:p-4">
          <motion.h3 
            className="text-base lg:text-lg font-bold text-gray-800 dark:text-white mb-1.5"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0 
            } : { 
              opacity: 0, 
              x: -20 
            }}
            transition={{ 
              delay: index * 0.15 + 0.3,
              duration: 0.5
            }}
            whileHover={{ 
              color: "#111827",
              scale: 1.03,
              x: 4,
              transition: { duration: 0.2 }
            }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-gray-700 dark:text-gray-300 mb-2.5 leading-relaxed line-clamp-2 text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0 
            } : { 
              opacity: 0, 
              y: 10 
            }}
            transition={{ 
              delay: index * 0.15 + 0.4,
              duration: 0.5
            }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-2.5">
            {project.tech.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0 
                } : { 
                  opacity: 0, 
                  scale: 0.6, 
                  y: 10 
                }}
                transition={{ 
                  delay: index * 0.15 + i * 0.08,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2,
                  y: -4,
                  rotateZ: 2,
                  transition: { type: "spring", stiffness: 500, damping: 15 }
                }}
                whileTap={{ scale: 0.9 }}
                className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-700 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 items-center">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.98
                }}
                className="relative inline-block px-6 py-3 text-white text-sm font-semibold rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 20, 1) 0%, rgba(0, 0, 0, 1) 100%)',
                  border: '1px solid rgba(200, 200, 200, 0.5)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 20px rgba(200, 200, 200, 0.15)',
                }}
              >
                {/* Subtle light reflection streak on top-right corner */}
                <div 
                  className="absolute top-0 right-0 w-3/4 h-1/3 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
                    borderRadius: '0 999px 0 0',
                  }}
                />
                {/* Glossy overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
                    borderRadius: '999px',
                  }}
                />
                <span className="relative z-10">Live</span>
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.98
                }}
                className="relative inline-block px-6 py-3 text-white text-sm font-semibold rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 20, 1) 0%, rgba(0, 0, 0, 1) 100%)',
                  border: '1px solid rgba(200, 200, 200, 0.5)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 20px rgba(200, 200, 200, 0.15)',
                }}
              >
                {/* Subtle light reflection streak on top-right corner */}
                <div 
                  className="absolute top-0 right-0 w-3/4 h-1/3 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
                    borderRadius: '0 999px 0 0',
                  }}
                />
                {/* Glossy overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
                    borderRadius: '999px',
                  }}
                />
                <span className="relative z-10">GitHub</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={{
            scale: 2,
            opacity: 0,
            transition: { duration: 0.6 }
          }}
          style={{
            background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('fullstack')
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Get projects for active category
  const allProjects = projects[activeCategory]
  
  // For fullstack category, filter to show only FoodWagen and AI Recruiter initially
  const featuredProjects = activeCategory === 'fullstack' 
    ? allProjects.filter(p => p.title === 'FoodWagen' || p.title === 'AI Recruiter (HuluMatch)')
    : allProjects
  
  // Projects to display
  const displayedProjects = (activeCategory === 'fullstack' && !showAll) ? featuredProjects : allProjects

  return (
    <section id="projects" className="py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm mb-4"
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my work across different domains
          </motion.p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setShowAll(false) // Reset showAll when changing category
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'button-purple-glow text-gray-900 dark:text-gray-900 shadow-lg scale-105 relative'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
                style={activeCategory === category.id ? { backgroundColor: '#FFFFFF' } : {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-8 max-w-6xl mx-auto"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* See More Button - Only show for fullstack category when not showing all */}
        {activeCategory === 'fullstack' && !showAll && displayedProjects.length < allProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-purple-glow px-8 py-4 text-gray-900 dark:text-gray-900 rounded-lg font-semibold transition-colors shadow-lg relative"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              See More
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

