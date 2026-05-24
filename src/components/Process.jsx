import { motion } from 'framer-motion'
import {
  Search,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  LifeBuoy,
} from 'lucide-react'

const steps = [
  { icon: Search, title: 'Requirement Analysis', description: 'Deep dive into your needs' },
  { icon: PenTool, title: 'UI/UX Design', description: 'Crafting beautiful interfaces' },
  { icon: Code2, title: 'Development', description: 'Building robust solutions' },
  { icon: TestTube, title: 'Testing', description: 'Ensuring quality & performance' },
  { icon: Rocket, title: 'Deployment', description: 'Launching to production' },
  { icon: LifeBuoy, title: 'Support', description: 'Ongoing maintenance & care' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A proven methodology that ensures successful project delivery every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line - visible on large screens */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-white/10 flex items-center justify-center mb-4 hover:glow-purple transition-all"
                >
                  <Icon className="text-neon-blue" size={24} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neon-purple text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </motion.div>

                <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                <p className="text-xs text-gray-500">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
