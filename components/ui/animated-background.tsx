"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedBackgroundProps {
  children: ReactNode
  variant?: "dots" | "grid" | "waves" | "gradient" | "shapes"
}

const AnimatedBackground = ({ children, variant = "dots" }: AnimatedBackgroundProps) => {
  const renderBackground = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>
          </div>
        )
      case "grid":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
        )
      case "waves":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )
      case "gradient":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full opacity-30"
              style={{
                background: "linear-gradient(-45deg, #10b981, #3b82f6, #8b5cf6, #10b981)",
                backgroundSize: "400% 400%",
                animation: "gradient 15s ease infinite",
              }}
            />
          </div>
        )
      case "shapes":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {renderBackground()}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AnimatedBackground 