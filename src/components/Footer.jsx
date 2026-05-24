import { motion } from 'framer-motion'
import { Globe, ExternalLink, Mail, MessageCircle } from 'lucide-react'

const footerLinks = {
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'ERP Solutions'],
  Support: ['Documentation', 'Help Center', 'Privacy Policy', 'Terms of Service'],
}

const socialLinks = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: ExternalLink, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
  { icon: MessageCircle, href: '#', label: 'Chat' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              TechForge
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              We build premium digital products that deliver results. Your trusted technology partner for scalable solutions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-neon-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TechForge. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Crafted with passion for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
