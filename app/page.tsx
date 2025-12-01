import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageCover from '@/components/PageCover'

export default function Home() {
  return (
    <>
      {/* Main Content - White sections */}
      <PageCover>
        <main 
          className="min-h-screen bg-white dark:bg-black relative"
          style={{
            borderRadius: '32px',
            overflow: 'hidden',
          }}
        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </PageCover>
      
      {/* Footer - Separate section after white content */}
      <Footer />
    </>
  )
}

