import { motion } from 'framer-motion'
import {
  Target,
  Layers,
  Palette,
  Zap,
  Headphones,
  ShieldCheck,
} from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Commitment-Based Delivery',
    description: 'We deliver on our promises with clear timelines and milestones.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one.',
  },
  {
    icon: Palette,
    title: 'Modern UI/UX',
    description: 'Stunning interfaces that users love and engage with.',
  },
  {
    icon: Zap,
    title: 'Agile Development',
    description: 'Iterative approach with continuous feedback and rapid delivery.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Round-the-clock assistance to keep your systems running smoothly.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable Systems',
    description: 'Enterprise-grade security built into every solution we deliver.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 px-6">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            We combine technical excellence with business understanding to deliver solutions that matter.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-2xl glass hover:glow-blue transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all">
                <Icon className="text-neon-blue" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
