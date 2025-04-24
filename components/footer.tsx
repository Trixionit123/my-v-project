"use client"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-zinc-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-500 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 -right-20 w-60 h-60 bg-blue-500 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/4 w-20 h-20 bg-purple-500 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-10 right-1/3 w-32 h-32 bg-emerald-700 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <Link href="#home" className="text-2xl font-bold">
              Trixionit<span className="text-emerald-500">.</span>
            </Link>
            <p className="mt-4 text-zinc-400">{t("footer.description")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t("footer.quicklinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.skills")}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">Гродно, Беларусь</li>
              <li>
                <a href="mailto:root@gmail.com" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  root@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors animate-float"
                style={{ animationDelay: "0s" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://t.me/pmaaaaaaaaaa"
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors animate-float"
                style={{ animationDelay: "0.4s" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.5 2l-19 19"></path>
                  <path d="M21.5 2v12h-12"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Trixionit. {t("footer.rights")}
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors animate-pulse-slow"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
