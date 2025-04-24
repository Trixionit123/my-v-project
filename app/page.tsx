import { ArrowDown } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
      <Hero />

      <div className="container mx-auto px-4 py-8 flex justify-center">
        <a
          href="#about"
          className="animate-bounce flex flex-col items-center text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
