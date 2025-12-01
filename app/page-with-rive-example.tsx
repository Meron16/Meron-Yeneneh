/**
 * Example: Portfolio Page with Rive Background
 * 
 * This is an example showing how to integrate RiveBackground
 * into your portfolio. Copy the pattern to your main page.tsx
 * 
 * To use:
 * 1. Install: npm install rive-js
 * 2. Get a Rive file URL from https://rive.app/community/
 * 3. Replace RIVE_FILE_URL with your actual .riv file URL
 * 4. Customize the content card styling
 */

import RiveBackground from '@/components/RiveBackground'
import Navbar from '@/components/Navbar'

// Replace this with your actual Rive file URL
const RIVE_FILE_URL = "YOUR_RIVE_FILE_URL_HERE"

export default function HomeWithRive() {
  return (
    <div className="min-h-screen relative">
      {/* Rive Background Layer - sits at z-index 0 */}
      <RiveBackground 
        src={RIVE_FILE_URL}
        autoplay={true}
        scale="cover"
      />
      
      {/* Content Layer - sits above background at z-index 10+ */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section with Glassmorphism Card */}
        <section className="min-h-screen flex items-center justify-center p-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-12 border border-white/20 shadow-2xl max-w-4xl w-full">
            <h1 className="text-5xl font-bold text-white mb-4">
              Hi — I make interactive web experiences
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Click projects below to explore my work.
            </p>
            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm">
              View Projects
            </button>
          </div>
        </section>
        
        {/* Rest of your portfolio sections */}
        {/* Add your Projects, Services, About, etc. components here */}
      </div>
    </div>
  )
}


