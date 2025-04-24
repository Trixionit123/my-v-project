"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import AnimatedBackground from "@/components/ui/animated-background"
import { FadeIn, Parallax } from "./scroll-animations"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t, language } = useLanguage()

  // Dynamic work experience based on language
  const workExperience = [
    {
      id: 1,
      title: language === "en" ? "Junior Python Developer" : "Junior Python Developer",
      company: "Wargaming",
      location: language === "en" ? "Minsk, Belarus" : "Минск, Беларусь",
      period: language === "en" ? "2022 - Present" : "2022 - Настоящее время",
      description:
        language === "en"
          ? "Development and support of internal tools for game data analytics. Working with large volumes of data and optimizing SQL queries."
          : "Разработка и поддержка внутренних инструментов для аналитики игровых данных. Работа с большими объемами данных и оптимизация SQL-запросов.",
      responsibilities:
        language === "en"
          ? [
              "Development of scripts for automating data collection and processing",
              "Creating and optimizing SQL queries for analytical reports",
              "Support and development of internal Python applications",
              "Participation in code reviews and implementation of best development practices",
            ]
          : [
              "Разработка скриптов для автоматизации сбора и обработки данных",
              "Создание и оптимизация SQL-запросов для аналитических отчетов",
              "Поддержка и развитие внутренних Python-приложений",
              "Участие в code review и внедрение лучших практик разработки",
            ],
    },
    {
      id: 2,
      title: language === "en" ? "Java Developer Intern" : "Стажер Java-разработчик",
      company: language === "en" ? "Yandex" : "Яндекс",
      location: language === "en" ? "Moscow, Russia (remote)" : "Москва, Россия (удаленно)",
      period: "2021 - 2022",
      description:
        language === "en"
          ? "Participation in the development of microservices using Java Spring Boot. Working in a team on new features for the Yandex.Market service."
          : "Участие в разработке микросервисов на Java Spring Boot. Работа в команде над новыми функциями для сервиса Яндекс.Маркет.",
      responsibilities:
        language === "en"
          ? [
              "Development and testing of new API endpoints",
              "Writing unit tests and integration tests",
              "Working with PostgreSQL databases",
              "Participation in daily Scrum meetings and sprint planning",
            ]
          : [
              "Разработка и тестирование новых API-эндпоинтов",
              "Написание юнит-тестов и интеграционных тестов",
              "Работа с базами данных PostgreSQL",
              "Участие в ежедневных Scrum-митингах и планировании спринтов",
            ],
    },
    {
      id: 3,
      title: language === "en" ? "Freelancer" : "Фрилансер",
      company: "Upwork",
      location: language === "en" ? "Remote" : "Удаленно",
      period: "2020 - 2021",
      description:
        language === "en"
          ? "Development of web applications and automation scripts for various clients. Working with Python, Django, and JavaScript."
          : "Разработка веб-приложений и скриптов автоматизации для различных клиентов. Работа с Python, Django и JavaScript.",
      responsibilities:
        language === "en"
          ? [
              "Creating Django web applications for small businesses",
              "Development of automation scripts for data processing",
              "Integration of payment systems and third-party APIs",
              "Support and updating of existing client projects",
            ]
          : [
              "Создание веб-приложений на Django для малого бизнеса",
              "Разработка скриптов автоматизации для обработки данных",
              "Интеграция платежных систем и API третьих сторон",
              "Поддержка и обновление существующих проектов клиентов",
            ],
    },
  ]

  // Dynamic education based on language
  const education = [
    {
      id: 1,
      degree: language === "en" ? "Software Engineer" : "Инженер-программист",
      institution:
        language === "en"
          ? "Yanka Kupala State University of Grodno (GrSU)"
          : "Гродненский государственный университет имени Янки Купалы (ГрГУ)",
      location: language === "en" ? "Grodno, Belarus" : "Гродно, Беларусь",
      period: "2023 - 2026",
      description:
        language === "en"
          ? "Faculty of Mathematics and Informatics. Specialization: Software of Information Technologies. Study of modern programming languages, algorithms, data structures, and software development methodologies."
          : "Факультет математики и информатики. Специальность: Программное обеспечение информационных технологий. Изучение современных языков программирования, алгоритмов, структур данных и методологий разработки программного обеспечения.",
    },
  ]

  // Dynamic certifications based on language
  const certifications = [
    {
      id: 1,
      name: language === "en" ? "Yandex Practicum: Python Developer" : "Яндекс Практикум: Python-разработчик",
      issuer: language === "en" ? "Yandex" : "Яндекс",
      year: "2023",
    },
    {
      id: 2,
      name: language === "en" ? "Tinkoff Education: Java Developer" : "Тинькофф Образование: Java-разработчик",
      issuer: language === "en" ? "Tinkoff" : "Тинькофф",
      year: "2024",
    },
    {
      id: 3,
      name:
        language === "en"
          ? "Belarusian State University of Informatics and Radioelectronics: Machine Learning Course"
          : "Белорусский государственный университет информатики и радиоэлектроники: Курс по машинному обучению",
      issuer: language === "en" ? "BSUIR" : "БГУИР",
      year: "2023",
    },
  ]

  return (
    <AnimatedBackground variant="gradient">
      <section id="experience" ref={ref} className="py-20 bg-zinc-100/90 dark:bg-zinc-800/90 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2">{t("experience.title")}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">{t("experience.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl font-bold text-zinc-800 dark:text-white mb-8 flex items-center"
              >
                <Briefcase className="mr-3 text-emerald-500 animate-pulse-slow" />
                {t("experience.work")}
              </motion.h3>

              <div className="relative border-l-2 border-emerald-500 pl-8 ml-3">
                {workExperience.map((job, index) => (
                  <FadeIn key={job.id} direction="left" delay={0.2 + index * 0.1}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      className="mb-12 relative"
                    >
                      <div className="absolute -left-11 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white dark:border-zinc-800 animate-pulse-slow"></div>
                      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-bold text-zinc-800 dark:text-white mb-1">{job.title}</h4>
                        <p className="text-emerald-500 font-medium mb-2">{job.company}</p>
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {job.period}
                          </span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{job.description}</p>
                        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 space-y-1">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl font-bold text-zinc-800 dark:text-white mb-8 flex items-center"
              >
                <GraduationCap className="mr-3 text-emerald-500 animate-pulse-slow" />
                {t("experience.education")}
              </motion.h3>

              <div className="relative border-l-2 border-emerald-500 pl-8 ml-3">
                {education.map((edu, index) => (
                  <FadeIn key={edu.id} direction="right" delay={0.2 + index * 0.1}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      className="mb-12 relative"
                    >
                      <div className="absolute -left-11 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white dark:border-zinc-800 animate-pulse-slow"></div>
                      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-bold text-zinc-800 dark:text-white mb-1">{edu.degree}</h4>
                        <p className="text-emerald-500 font-medium mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {edu.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400">{edu.description}</p>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>

              {/* Certifications */}
              <Parallax speed={0.1} direction="up">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6 mt-12">
                    {t("experience.certifications")}
                  </h3>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <ul className="space-y-4">
                      {certifications.map((cert) => (
                        <li key={cert.id} className="flex items-start">
                          <div className="mr-4 mt-1 text-emerald-500 animate-pulse-slow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-800 dark:text-white">{cert.name}</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                              {cert.issuer} • {cert.year}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  )
}
