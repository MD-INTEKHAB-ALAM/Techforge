import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Professional team with excellent execution. They understood our requirements perfectly and delivered a solution that exceeded our expectations.',
    name: 'Rajesh Kumar',
    role: 'CTO, Vibgyor School',
    avatar: 'RK',
  },
  {
    quote: 'Delivered our project before the deadline with exceptional quality. Their agile approach kept us informed throughout the development process.',
    name: 'Priya Sharma',
    role: 'Product Manager, IDFC First Bank',
    avatar: 'PS',
  },
  {
    quote: 'Highly recommended for enterprise solutions. Their attention to security and scalability gave us confidence in the final product.',
    name: 'Dr. Amit Patel',
    role: 'Director, HealthTech Solutions',
    avatar: 'AP',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            What our clients say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 md:p-12 text-center"
            >
              <Quote className="mx-auto text-neon-purple/40 mb-6" size={48} />
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue/50 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-neon-blue w-8' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue/50 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
