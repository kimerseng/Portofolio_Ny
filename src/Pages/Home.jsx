import React, { useState, useEffect, useCallback, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const StatusBadge = memo(() => (
  <div className="inline-block animate-float" data-aos="zoom-in" data-aos-delay="200">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative mt-10 px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
))

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Cinematographer
        </span>
      </span>
    </h1>
  </div>
))

const TechStack = memo(({ tech }) => (
  <div className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
    {tech}
  </div>
))

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
      <Icon className="w-5 h-5 text-gray-300" />
    </div>
  </a>
))

const WORDS = ["Camera Operator", "Video Editor", "Sound Operator", "Assistant Camera Operator"]
const TECH_STACK = ["Davanci resolve ", "Adobe photoshop", "Adobe Lightroom", "Canva"]

const SOCIAL_LINKS = [
  { icon: Instagram, link: "https://www.instagram.com/monytwelve?igsh=OXRsMnA0YTVmbGk4" }
]

const Home = () => {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const handleTyping = useCallback(() => {
    const word = WORDS[wordIndex]

    if (isTyping) {
      if (charIndex < word.length) {
        setText(prev => prev + word[charIndex])
        setCharIndex(prev => prev + 1)
      } else {
        setTimeout(() => setIsTyping(false), 1500)
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length)
        setIsTyping(true)
      }
    }
  }, [charIndex, isTyping, wordIndex])

  useEffect(() => {
    const t = setTimeout(handleTyping, isTyping ? 80 : 40)
    return () => clearTimeout(t)
  }, [handleTyping])

  return (
    <div className="min-h-screen w-full bg-[#030014]" id="Home">

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-10">

        {/* FULL RESPONSIVE LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] gap-12">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 space-y-6 text-left">
            <StatusBadge />
            <MainTitle />

            <div className="text-lg sm:text-2xl text-gray-300 h-8">
              {text}
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-gray-400 max-w-xl text-sm sm:text-base">
              A professional responsible for capturing visual elements of film and video production.
            </p>

            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((t, i) => (
                <TechStack key={i} tech={t} />
              ))}
            </div>

           {/* CTA Buttons */} 
           <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400"> 
            <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} /> 
            <CTAButton href="#Contact" text="Contact" icon={Mail} /> 
           </div>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s, i) => (
                <SocialLink key={i} {...s} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="w-full lg:w-1/2 flex justify-center items-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <DotLottieReact
                src="https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie"
                loop
                autoplay
                className={`w-full transition-transform duration-500 ${
                  isHovering ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default memo(Home)