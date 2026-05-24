import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-dark-800 to-neon-blue/20" />
          <div className="absolute inset-0 glass" />

          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]" />

          <div className="relative z-10 p-8 md:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Let&apos;s Build Your Next
              <br />
              <span className="gradient-text">Big Product</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-lg mx-auto mb-8"
            >
              Ready to transform your idea into a powerful digital product? Let&apos;s discuss your project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <motion.a
                href="mailto:hello@techforge.dev"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-neon-purple/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <a href="mailto:hello@techforge.dev" className="flex items-center gap-2 hover:text-neon-blue transition-colors">
                <Mail size={16} />
                hello@techforge.dev
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-neon-blue transition-colors">
                <Phone size={16} />
                +91 98765 43210
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
