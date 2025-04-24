"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"
import AnimatedBackground from "@/components/ui/animated-background"

type CategoryKey = "languages" | "frameworks" | "databases" | "devops" | "other"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const skills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["Django", "Spring Boot", "React", "Flask", "Pandas"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
    devops: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS"],
    other: [
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "OOP",
      "Design Patterns",
      "TDD",
      "Agile",
      "Scrum",
      "Data Structures",
      "Algorithms",
      "System Design",
      "Cloud Computing",
      "Machine Learning",
      "Data Analysis",
      "Web Security",
    ],
  }

  const categoryStyles: Record<CategoryKey, { color: string; gradient: string }> = {
    languages: {
      color: "from-emerald-400 to-teal-500",
      gradient: "from-emerald-400/10 via-teal-500/10 to-transparent",
    },
    frameworks: {
      color: "from-blue-400 to-indigo-500",
      gradient: "from-blue-400/10 via-indigo-500/10 to-transparent",
    },
    databases: {
      color: "from-purple-400 to-pink-500",
      gradient: "from-purple-400/10 via-pink-500/10 to-transparent",
    },
    devops: {
      color: "from-orange-400 to-red-500",
      gradient: "from-orange-400/10 via-red-500/10 to-transparent",
    },
    other: {
      color: "from-cyan-400 via-sky-500 to-blue-600",
      gradient: "from-cyan-400/20 via-sky-500/10 to-blue-600/30",
    },
  }

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <AnimatedBackground variant="waves">
      <section id="skills" ref={ref} className="py-20 bg-zinc-900/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-2">{t("skills.title")}</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">{t("skills.subtitle")}</p>
          </motion.div>

          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {(Object.entries(skills) as [CategoryKey, string[]][]).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemAnimation}
                className={`group relative ${category === "other" ? "md:col-span-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className={`
                    absolute inset-0 bg-gradient-to-br ${categoryStyles[category].gradient} 
                    rounded-3xl blur-xl transition-all duration-500 
                    group-hover:scale-110 opacity-50
                    animate-pulse-slow
                  `} 
                />
                <div className="relative bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:shadow-2xl">
                  <div className="mb-6 flex items-center">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${categoryStyles[category].color} bg-clip-text text-transparent`}>
                      {t(`skills.category.${category === "other" ? "other" : category}`)}
                    </h3>
                    <div className={`h-px flex-grow ml-4 bg-gradient-to-r ${categoryStyles[category].color} opacity-20`} />
                  </div>
                  <div className={`flex flex-wrap gap-3 ${category === "other" ? "justify-center" : ""}`}>
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + index * 0.05,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="group/skill relative"
                      >
                        <div 
                          className={`
                            absolute inset-0 bg-gradient-to-r ${categoryStyles[category].gradient} 
                            rounded-full blur-lg opacity-0 transition-all duration-300 
                            group-hover/skill:opacity-100
                          `} 
                        />
                        <div 
                          className={`
                            relative px-4 py-2 bg-gradient-to-r ${categoryStyles[category].color} 
                            bg-clip-text transform transition-all duration-300
                            hover:rotate-[-2deg] hover:shadow-xl
                          `}
                        >
                          <span className="text-transparent font-medium">{skill}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent rotate-12 transform-gpu animate-pulse-slow" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 via-transparent to-transparent -rotate-12 transform-gpu animate-pulse-slow" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)] animate-pulse-slower" />
        </div>
      </section>
    </AnimatedBackground>
  )
}
