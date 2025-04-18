"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const quotes = [
  "Верь в себя, и весь мир покорится тебе",
  "Горы существуют не только для того, чтобы на них любоваться, но и чтобы их покорять",
  "Мой дух свободен, как ветер в горах Кыргызстана",
  "Истинная сила находится в способности принимать мир таким, какой он есть, и менять то, что можешь"
]

export default function QuoteOfDay() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = quotes.indexOf(currentQuote)
      const nextIndex = (currentIndex + 1) % quotes.length
      setCurrentQuote(quotes[nextIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [currentQuote])

  const words = currentQuote.split(' ')

  return (
    <section className="py-32 bg-gradient-to-r from-slate-900 to-cyan-900 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentQuote}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
            className="text-3xl md:text-5xl font-montserrat font-bold leading-relaxed text-center"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 20,
                    rotateX: 90
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0
                  }
                }}
                className="inline-block mx-2 neon-text"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-10 text-center"
          >
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-cyan-300 text-xl">Максат Мадаминов</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 