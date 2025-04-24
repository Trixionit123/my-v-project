"use client"

import type React from "react"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function Parallax({ children, speed = 0.5, className = "", direction = "up" }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const transformValueUp = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
  const transformValueDown = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const transformValueLeft = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
  const transformValueRight = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return transformValueUp
      case "down":
        return transformValueDown
      case "left":
        return transformValueLeft
      case "right":
        return transformValueRight
      default:
        return transformValueUp
    }
  }

  const transformValue = getTransformValue()
  const springValue = useSpring(transformValue, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        [direction === "up" || direction === "down" ? "y" : "x"]: springValue,
      }}
    >
      {children}
    </motion.div>
  )
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
}

export function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${1 - threshold}`, `start ${threshold}`],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  const getInitialValue = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 }
      case "down":
        return { opacity: 0, y: -50 }
      case "left":
        return { opacity: 0, x: 50 }
      case "right":
        return { opacity: 0, x: -50 }
      case "none":
        return { opacity: 0 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getAnimateValue = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "none":
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialValue()}
      animate={getAnimateValue()}
      transition={{ duration, delay }}
      style={{ opacity: springOpacity }}
    >
      {children}
    </motion.div>
  )
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
}

export function Reveal({ children, className = "", direction = "left", delay = 0, duration = 0.5 }: RevealProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const springProgress = useSpring(progress, { stiffness: 100, damping: 30 })

  const getInitialClipPath = () => {
    switch (direction) {
      case "left":
        return "inset(0% 100% 0% 0%)"
      case "right":
        return "inset(0% 0% 0% 100%)"
      case "up":
        return "inset(100% 0% 0% 0%)"
      case "down":
        return "inset(0% 0% 100% 0%)"
      default:
        return "inset(0% 100% 0% 0%)"
    }
  }

  const clipPath = useTransform(springProgress, [0, 1], [getInitialClipPath(), "inset(0% 0% 0% 0%)"])

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: getInitialClipPath() }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration, delay, ease: "easeInOut" }}
      style={{ clipPath }}
    >
      {children}
    </motion.div>
  )
}
