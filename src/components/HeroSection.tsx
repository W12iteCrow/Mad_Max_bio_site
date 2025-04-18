"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Параллакс-фон */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: 'brightness(0.25)'
        }}
      />
      
      {/* Градиентный оверлей для лучшей видимости текста */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"
      />

      {/* Основной контейнер */}
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
          
          {/* Левая часть с фото */}
          <div className="md:w-5/12 mb-8 md:mb-0 order-2 md:order-1">
            <div className="relative">
              <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px]">
                <Image 
                  src="/images/photo1.jpg" 
                  alt="Максат Мадаминов" 
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
              
              {/* Неоновая рамка */}
              <div 
                className="absolute -inset-4 -z-10 border-4 border-cyan-400 rounded-xl"
                style={{ 
                  boxShadow: '0 0 15px rgba(6, 182, 212, 0.4), 0 0 30px rgba(6, 182, 212, 0.2)'
                }}
              ></div>
            </div>
          </div>
          
          {/* Правая часть с текстом */}
          <div className="md:w-7/12 text-center md:text-left order-1 md:order-2">
            <div className="bg-slate-900/60 backdrop-blur-sm py-6 px-8 rounded-xl mb-6 inline-block">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold mb-4 neon-text"
              >
                Максат Мадаминов
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-inter text-xl md:text-2xl text-cyan-300 mb-4"
              >
                Путешественник • Воин духа • Покоритель вершин
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-gray-300"
              >
                <p>Из Ош, Кыргызстан • Живёт в Сиэтле, США</p>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-full transition-all border-2 border-cyan-400 shadow-lg shadow-cyan-700/30"
              onClick={() => {
                document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Узнать больше
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
} 