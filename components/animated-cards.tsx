"use client"

import React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "border" | "scale" | "tilt"
}

export function AnimatedCard({ children, className = "", hoverEffect = "lift" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect === "tilt") {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({
        x: (x / rect.width - 0.5) * 2, // -1 to 1
        y: (y / rect.height - 0.5) * 2, // -1 to 1
      })
    }
  }

  const getHoverStyles = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          boxShadow: isHovered ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" : "",
          transform: isHovered ? "translateY(-8px)" : "",
        }
      case "glow":
        return {
          boxShadow: isHovered ? "0 0 15px 2px rgba(16, 185, 129, 0.4)" : "",
        }
      case "border":
        return {
          boxShadow: isHovered ? "inset 0 0 0 2px #10b981" : "",
        }
      case "scale":
        return {
          transform: isHovered ? "scale(1.03)" : "",
        }
      case "tilt":
        return {
          transform: isHovered
            ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`
            : "",
        }
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={`transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={getHoverStyles()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedGridProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function AnimatedGrid({ children, className = "", staggerDelay = 0.1 }: AnimatedGridProps) {
  return (
    <motion.div className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
