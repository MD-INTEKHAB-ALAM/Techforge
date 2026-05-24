import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Attendance Management ERP',
    client: 'Vibgyor School',
    description:
      'A comprehensive ERP system for managing student attendance, analytics dashboards, and role-based access control for school administrators.',
    tags: ['React', 'Node.js', 'MongoDB', 'ERP'],
    features: ['Attendance Tracking', 'Student Management', 'Analytics Dashboard', 'Role-Based Access'],
    gradient: 'from-blue-500/20 to-purple-500/20',
    accent: 'neon-blue',
  },
  {
    title: 'IDFC First Bank UI',
    client: 'IDFC First Bank',
    description:
      'Modern banking interface with responsive dashboard design, secure user authentication flows, and intuitive financial management tools.',
    tags: ['React', 'TypeScript', 'Tailwind', 'REST API'],
    features: ['Modern Banking UI', 'Responsive Dashboard', 'Secure User Flows'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    accent: 'neon-purple',
  },
  {
    title: 'Medical Mobile Applications',
    client: 'Healthcare Solutions',
    description:
      'Suite of mobile applications for healthcare providers enabling appointment booking, digital prescriptions, and secure doctor-patient communication.',
    tags: ['React Native', 'Firebase', 'Node.js', 'HIPAA'],
    features: ['Appointment Booking', 'Prescriptions', 'Doctor-Patient Chat', 'Health Records'],
    gradient: 'from-pink-500/20 to-orange-500/20',
    accent: 'neon-pink',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Delivering excellence across industries with cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-[1px]">
                <div className="w-full h-full rounded-2xl bg-dark-800" />
              </div>

              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Image placeholder */}
                <div className={`w-full h-44 rounded-xl bg-gradient-to-br ${project.gradient} mb-5 flex items-center justify-center overflow-hidden`}>
                  <div className="text-white/20 text-6xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>

                <p className="text-xs text-neon-blue font-semibold uppercase tracking-wider mb-2">
                  {project.client}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="px-2 py-1 rounded-md bg-white/5 text-gray-400 text-xs"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-xs font-medium border border-neon-purple/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5 hover:border-neon-blue/50 transition-all"
                >
                  View Case Study
                  <ExternalLink size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
