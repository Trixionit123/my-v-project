"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ru"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations = {
  // Navbar
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.contact": "Contact",

  // Hero
  "hero.hello": "Hello, I'm",
  "hero.title": "Python & Java Developer",
  "hero.description":
    "Crafting elegant solutions to complex problems with clean, efficient code. Specialized in building robust applications and systems that deliver exceptional performance.",
  "hero.contact": "Contact Me",
  "hero.download": "Download CV",

  // About
  "about.title": "About Me",
  "about.subtitle": "Get to know more about me, my background, and what drives me as a developer.",
  "about.heading": "Python & Java Developer with a passion for elegant solutions",
  "about.paragraph1":
    "I'm a dedicated software developer with over 2 years of experience specializing in Python and Java development. My journey in programming began with a fascination for solving complex problems and has evolved into a career building robust, scalable applications.",
  "about.paragraph2":
    "I believe in writing clean, maintainable code and continuously learning new technologies to stay at the forefront of development practices. My approach combines technical expertise with a deep understanding of user needs to create solutions that make a difference.",
  "about.name": "Name:",
  "about.email": "Email:",
  "about.from": "From:",
  "about.availability": "Availability:",
  "about.availability.value": "Full-time",

  // Skills
  "skills.title": "My Skills",
  "skills.subtitle": "A comprehensive overview of my technical skills and proficiency levels.",
  "skills.category.languages": "Programming Languages",
  "skills.category.frameworks": "Frameworks & Libraries",
  "skills.category.databases": "Databases",
  "skills.category.devops": "DevOps & Tools",
  "skills.other": "Other Technical Skills",

  // Projects
  "projects.title": "My Projects",
  "projects.subtitle": "A showcase of my recent development work and projects.",
  "projects.all": "All Projects",
  "projects.python": "Python",
  "projects.java": "Java",
  "projects.code": "Code",
  "projects.demo": "Demo",

  // Experience
  "experience.title": "Experience & Education",
  "experience.subtitle": "My professional journey and educational background.",
  "experience.work": "Work Experience",
  "experience.education": "Education",
  "experience.certifications": "Certifications",

  // Contact
  "contact.title": "Get In Touch",
  "contact.subtitle": "Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!",
  "contact.info": "Contact Information",
  "contact.info.description":
    "Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  "contact.email": "Email",
  "contact.location": "Location",
  "contact.follow": "Follow Me",
  "contact.form.title": "Send Me a Message",
  "contact.form.name": "Your Name",
  "contact.form.email": "Your Email",
  "contact.form.subject": "Subject",
  "contact.form.message": "Message",
  "contact.form.message.placeholder": "Tell me about your project...",
  "contact.form.send": "Send Message",
  "contact.form.sending": "Sending...",
  "contact.form.success": "Message sent!",
  "contact.form.success.description": "Thank you for your message. I'll get back to you soon.",

  // Footer
  "footer.description": "Python & Java Developer crafting elegant solutions to complex problems.",
  "footer.quicklinks": "Quick Links",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
}

// Russian translations
const ruTranslations = {
  // Navbar
  "nav.home": "Главная",
  "nav.about": "Обо мне",
  "nav.skills": "Навыки",
  "nav.projects": "Проекты",
  "nav.experience": "Опыт",
  "nav.contact": "Контакты",

  // Hero
  "hero.hello": "Привет, я",
  "hero.title": "Python и Java разработчик",
  "hero.description":
    "Создаю элегантные решения сложных задач с помощью чистого, эффективного кода. Специализируюсь на разработке надежных приложений и систем, обеспечивающих исключительную производительность.",
  "hero.contact": "Связаться со мной",
  "hero.download": "Скачать резюме",

  // About
  "about.title": "Обо мне",
  "about.subtitle": "Узнайте больше обо мне, моем опыте и о том, что движет мной как разработчиком.",
  "about.heading": "Python и Java разработчик с увлечением элегантными решениями",
  "about.paragraph1":
    "Я опытный разработчик программного обеспечения с более чем 2-летним опытом, специализирующийся на разработке на Python и Java. Мой путь в программировании начался с увлечения решением сложных задач и превратился в карьеру по созданию надежных, масштабируемых приложений.",
  "about.paragraph2":
    "Я верю в написание чистого, поддерживаемого кода и постоянное изучение новых технологий, чтобы оставаться на переднем крае практик разработки. Мой подход сочетает техническую экспертизу с глубоким пониманием потребностей пользователей для создания решений, которые имеют значение.",
  "about.name": "Имя:",
  "about.email": "Email:",
  "about.from": "Откуда:",
  "about.availability": "Доступность:",
  "about.availability.value": "Полный рабочий день",

  // Skills
  "skills.title": "Мои навыки",
  "skills.subtitle": "Комплексный обзор моих технических навыков и уровней владения.",
  "skills.category.languages": "Языки программирования",
  "skills.category.frameworks": "Фреймворки и библиотеки",
  "skills.category.databases": "Базы данных",
  "skills.category.devops": "DevOps и инструменты",
  "skills.other": "Другие технические навыки",

  // Projects
  "projects.title": "Мои проекты",
  "projects.subtitle": "Демонстрация моих недавних разработок и проектов.",
  "projects.all": "Все проекты",
  "projects.python": "Python",
  "projects.java": "Java",
  "projects.code": "Код",
  "projects.demo": "Демо",

  // Experience
  "experience.title": "Опыт и образование",
  "experience.subtitle": "Мой профессиональный путь и образовательный фон.",
  "experience.work": "Опыт работы",
  "experience.education": "Образование",
  "experience.certifications": "Сертификаты",

  // Contact
  "contact.title": "Связаться со мной",
  "contact.subtitle": "Есть проект или хотите обсудить потенциальное сотрудничество? Не стесняйтесь обращаться!",
  "contact.info": "Контактная информация",
  "contact.info.description":
    "Не стесняйтесь обращаться по любому из следующих каналов. Я всегда открыт для обсуждения новых проектов, творческих идей или возможностей стать частью вашего видения.",
  "contact.email": "Email",
  "contact.location": "Местоположение",
  "contact.follow": "Подписывайтесь",
  "contact.form.title": "Отправьте мне сообщение",
  "contact.form.name": "Ваше имя",
  "contact.form.email": "Ваш Email",
  "contact.form.subject": "Тема",
  "contact.form.message": "Сообщение",
  "contact.form.message.placeholder": "Расскажите о вашем проекте...",
  "contact.form.send": "Отправить сообщение",
  "contact.form.sending": "Отправка...",
  "contact.form.success": "Сообщение отправлено!",
  "contact.form.success.description": "Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.",

  // Footer
  "footer.description": "Python и Java разработчик, создающий элегантные решения сложных задач.",
  "footer.quicklinks": "Быстрые ссылки",
  "footer.contact": "Контакты",
  "footer.rights": "Все права защищены.",
}

const translations = {
  en: enTranslations,
  ru: ruTranslations,
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ru")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
