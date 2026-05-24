import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
      }}
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    />
  )
}
