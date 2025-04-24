"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      pulse: boolean
      pulseSpeed: number
    }[] = []

    const colors = ["#10b981", "#3b82f6", "#8b5cf6"]

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() > 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 150

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x > canvas.width || p.x < 0) p.speedX *= -1
        if (p.y > canvas.height || p.y < 0) p.speedY *= -1

        // Mouse interaction
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx)
          const force = (mouseRadius - distance) / mouseRadius
          p.speedX -= Math.cos(angle) * force * 0.5
          p.speedY -= Math.sin(angle) * force * 0.5
        }

        // Pulsing effect
        if (p.pulse) {
          p.opacity += p.pulseSpeed
          if (p.opacity > 0.6 || p.opacity < 0.1) {
            p.pulseSpeed *= -1
          }
        }

        // Draw particle
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1

        // Connect particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2))

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(150, 150, 150, ${0.2 - distance / 750})`
            ctx.lineWidth = 1
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-emerald-500 font-medium mb-2"
            >
              {t("hero.hello")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-zinc-800 dark:text-white mb-4"
            >
              Trixionit
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-6"
            >
              {t("hero.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto md:mx-0 mb-8"
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300">
                <Mail className="mr-2 h-4 w-4" /> {t("hero.contact")}
              </Button>
              <Button
                variant="outline"
                className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
              >
                <Download className="mr-2 h-4 w-4" /> {t("hero.download")}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4 mt-8 justify-center md:justify-start"
            >
              <Link
                href="#"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors animate-float"
                style={{ animationDelay: "0s" }}
              >
                <GitHub size={24} />
              </Link>
              <Link
                href="#"
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <Linkedin size={24} />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl animate-float">
              <img 
                src="https://i.pinimg.com/736x/94/9a/47/949a47c254fbe113257b29d2c50d8720.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
