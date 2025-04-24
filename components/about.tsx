"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import AnimatedBackground from "@/components/ui/animated-background"
import { FadeIn, Parallax } from "./scroll-animations"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t, language } = useLanguage()

  return (
    <AnimatedBackground variant="dots">
      <section id="about" ref={ref} className="py-20 bg-white/90 dark:bg-zinc-900/90 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2">{t("about.title")}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">{t("about.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Parallax speed={0.2} direction="left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-96 bg-zinc-900 rounded-lg overflow-hidden relative p-8">
                  <div className="typing-line" style={{animationDelay: "0s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500"># Python & Java Developer</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "1s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">class Developer:</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "2s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">    def __init__(self):</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "3s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">        self.name = "Trixionit"</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "4s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">        self.languages = [</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "5s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">            "Python 🐍",</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "6s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">            "Java ☕",</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "7s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">            "JavaScript 🌐"</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "8s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">        ]</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "9s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">    def code(self):</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "10s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">        return "Building amazing things"</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "11s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">    def learn(self):</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "12s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">        return "Always learning..."</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "13s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500"></span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "14s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">dev = Developer()</span>
                  </div>
                  <div className="typing-line" style={{animationDelay: "15s"}}>
                    <span className="text-sm md:text-base lg:text-lg font-mono text-emerald-500">dev.code()</span>
                  </div>
                </div>

                <style jsx>{`
                  .typing-line {
                    position: relative;
                    width: fit-content;
                    opacity: 0;
                    animation: typing 16s steps(30) forwards infinite;
                    white-space: pre;
                  }

                  .typing-line::after {
                    content: "";
                    position: absolute;
                    right: -4px;
                    top: 2px;
                    height: 1.2em;
                    width: 3px;
                    background: #10b981;
                    animation: blink 0.8s step-end infinite;
                    opacity: 0;
                  }

                  @keyframes typing {
                    0% {
                      width: 0;
                      opacity: 0;
                    }
                    5% {
                      width: 0;
                      opacity: 1;
                    }
                    95% {
                      width: 100%;
                      opacity: 1;
                    }
                    99% {
                      width: 100%;
                      opacity: 0;
                    }
                    100% {
                      width: 0;
                      opacity: 0;
                    }
                  }

                  @keyframes blink {
                    from, to {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  .typing-line:last-of-type::after {
                    opacity: 1;
                    animation: blink 0.8s step-end infinite;
                  }
                `}</style>
              </motion.div>
            </Parallax>

            <Parallax speed={0.2} direction="right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">{t("about.heading")}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{t("about.paragraph1")}</p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{t("about.paragraph2")}</p>
                <div className="grid grid-cols-2 gap-4">
                  <FadeIn direction="up" delay={0.1}>
                    <div>
                      <h4 className="font-bold text-zinc-800 dark:text-white mb-2">{t("about.name")}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">Trixionit</p>
                    </div>
                  </FadeIn>
                  <FadeIn direction="up" delay={0.2}>
                    <div>
                      <h4 className="font-bold text-zinc-800 dark:text-white mb-2">{t("about.email")}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">root@gmail.com</p>
                    </div>
                  </FadeIn>
                  <FadeIn direction="up" delay={0.3}>
                    <div>
                      <h4 className="font-bold text-zinc-800 dark:text-white mb-2">{t("about.from")}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {language === "en" ? "Grodno, Belarus" : "Гродно, Беларусь"}
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn direction="up" delay={0.4}>
                    <div>
                      <h4 className="font-bold text-zinc-800 dark:text-white mb-2">{t("about.availability")}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">{t("about.availability.value")}</p>
                    </div>
                  </FadeIn>
                </div>
              </motion.div>
            </Parallax>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  )
}
