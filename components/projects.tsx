"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Cloud, Database, Link2, FileText, Share2, PieChart, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import AnimatedBackground from "@/components/ui/animated-background"
import { AnimatedCard, AnimatedGrid } from "./animated-cards"
import { Reveal } from "./scroll-animations"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: "python" | "java"
  technologies: string[]
  demoLink: string
  codeLink: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard that shows real-time weather data, forecasts, and weather maps. Built with Python Flask and React, using OpenWeatherMap API.",
    image: "/images/projects/weather-dashboard.png",
    category: "python",
    technologies: ["Python", "Flask", "React", "OpenWeatherMap API", "Chart.js", "Tailwind CSS"],
    demoLink: "https://dashboard.openweather.co.uk",
    codeLink: "https://github.com/openweathermap/openweather-dashboard",
  },
  {
    id: 2,
    title: "Task Manager API",
    description:
      "RESTful API for task management with user authentication, task CRUD operations, and task categorization. Built with Java Spring Boot.",
    image: "/images/projects/task-manager.png",
    category: "java",
    technologies: ["Java", "Spring Boot", "JWT", "PostgreSQL", "Swagger", "JUnit"],
    demoLink: "https://task-manager-api-demo.herokuapp.com/swagger-ui.html",
    codeLink: "https://github.com/Trixionit/task-manager-api",
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "Simple and efficient URL shortener service that creates shortened URLs and tracks click statistics. Features include custom URLs and QR code generation.",
    image: "/images/projects/url-shortener.png",
    category: "python",
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Vue.js", "Docker"],
    demoLink: "https://url-shortener-demo.vercel.app",
    codeLink: "https://github.com/Trixionit/url-shortener",
  },
  {
    id: 4,
    title: "Note Taking App",
    description:
      "Markdown-based note-taking application with real-time preview, tags, and search functionality. Supports file attachments and sharing.",
    image: "/images/projects/note-taking.png",
    category: "java",
    technologies: ["Java", "Spring Boot", "React", "MongoDB", "WebSocket", "AWS S3"],
    demoLink: "https://obsidian.md",
    codeLink: "https://github.com/obsidianmd/obsidian-releases",
  },
  {
    id: 5,
    title: "File Share Service",
    description:
      "Secure file sharing service with end-to-end encryption, expiring links, and password protection. Includes file preview and download tracking.",
    image: "/images/projects/file-share.png",
    category: "python",
    technologies: ["Python", "Django", "React", "PostgreSQL", "AWS S3", "Redis"],
    demoLink: "https://fileport.io",
    codeLink: "https://github.com/fileport/fileport",
  },
  {
    id: 6,
    title: "Budget Tracker",
    description:
      "Personal finance management tool with expense tracking, budget planning, and financial reports. Includes data visualization and export features.",
    image: "/images/projects/budget-tracker.png",
    category: "java",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Chart.js", "Docker"],
    demoLink: "https://budget-tracker-demo.vercel.app",
    codeLink: "https://github.com/Trixionit/budget-tracker",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("all")
  const { t } = useLanguage()

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <AnimatedBackground variant="shapes">
      <section id="projects" ref={ref} className="py-20 bg-white/90 dark:bg-zinc-900/90 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2">{t("projects.title")}</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">{t("projects.subtitle")}</p>
            </motion.div>
          </Reveal>

          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">{t("projects.all")}</TabsTrigger>
                <TabsTrigger value="python">{t("projects.python")}</TabsTrigger>
                <TabsTrigger value="java">{t("projects.java")}</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
                ))}
              </AnimatedGrid>
            </TabsContent>

            <TabsContent value="python" className="mt-8">
              <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
                ))}
              </AnimatedGrid>
            </TabsContent>

            <TabsContent value="java" className="mt-8">
              <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
                ))}
              </AnimatedGrid>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </AnimatedBackground>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const { t } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)
  
  const getProjectIcon = (title: string) => {
    switch (title) {
      case "Weather Dashboard":
        return <Cloud className="w-16 h-16" />
      case "Task Manager API":
        return <Database className="w-16 h-16" />
      case "URL Shortener":
        return <Link2 className="w-16 h-16" />
      case "Note Taking App":
        return <FileText className="w-16 h-16" />
      case "File Share Service":
        return <Share2 className="w-16 h-16" />
      case "Budget Tracker":
        return <PieChart className="w-16 h-16" />
      default:
        return null
    }
  }

  const getGradient = (category: string) => {
    return category === 'python' 
      ? 'from-blue-500 via-emerald-400 to-teal-500'
      : 'from-orange-500 via-red-400 to-pink-500'
  }

  return (
    <AnimatedCard hoverEffect="tilt" className="h-full">
      <Card 
        className="overflow-hidden h-full flex flex-col border-none shadow-lg backdrop-blur-sm bg-white/10 dark:bg-zinc-900/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 group">
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.category)} opacity-75 transition-all duration-700 ease-out
            ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
          />
          
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.5))]
            transition-opacity duration-500 ease-in-out opacity-60 group-hover:opacity-80" />
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-white/30 transition-all duration-1000 ease-in-out
                  ${isHovered ? 'animate-float opacity-100' : 'opacity-0'}`}
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 25}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>

          {/* Icon container with animations */}
          <div className={`absolute inset-0 flex items-center justify-center text-white transition-all duration-500
            ${isHovered ? 'scale-110 -translate-y-2' : 'scale-100 translate-y-0'}`}>
            <motion.div
              animate={{ 
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 1]
              }}
            >
              {getProjectIcon(project.title)}
            </motion.div>
          </div>

          {/* Category badge with glass effect */}
          <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 
            rounded-full border border-white/20 shadow-lg transform transition-all duration-300
            group-hover:scale-110 group-hover:bg-white/20">
            {project.category}
          </div>
        </div>

        {/* Card content with enhanced animations */}
        <CardHeader className="transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 
            bg-clip-text text-transparent">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2 transition-colors duration-300 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 
                  rounded-full text-xs border border-zinc-200 dark:border-zinc-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 
                  transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 
                rounded-full text-xs border border-zinc-200 dark:border-zinc-700">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </CardContent>

        {/* Enhanced buttons with animations */}
        <CardFooter className="flex justify-between gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            asChild 
            className="flex-1 group/btn hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-800
              transition-all duration-300 hover:scale-105"
          >
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
              {t("projects.code")}
            </a>
          </Button>
          <Button 
            size="sm" 
            asChild
            className="flex-1 group/btn bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600
              transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              {t("projects.demo")}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedCard>
  )
}
