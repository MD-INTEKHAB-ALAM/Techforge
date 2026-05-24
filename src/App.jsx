import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import Loader from './components/Loader'
import MouseFollower from './components/MouseFollower'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MouseFollower />
          <Navbar />
          <Hero />
          <Stats />
          <Portfolio />
          <WhyChooseUs />
          <Process />
          <Testimonials />
          <ContactCTA />
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
