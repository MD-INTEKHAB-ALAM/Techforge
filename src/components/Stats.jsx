import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Briefcase, Clock, Headphones } from 'lucide-react'

const stats = [
  { icon: Users, value: 99, suffix: '+', label: 'Clients Served' },
  { icon: Briefcase, value: 120, suffix: '+', label: 'Projects Delivered' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: Headphones, value: 24, suffix: '/7', label: 'Support' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 md:p-8 rounded-2xl glass text-center hover:glow-purple transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Icon className="mx-auto mb-4 text-neon-blue" size={32} />
                <Counter target={value} suffix={suffix} />
                <p className="mt-2 text-gray-400 text-sm font-medium">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
