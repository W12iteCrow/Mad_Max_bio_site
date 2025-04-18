"use client"

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const timelineEvents = [
  {
    year: '1990',
    title: 'Рождение воина',
    description: 'Родился в городе Ош, Кыргызстан, в семье горцев'
  },
  {
    year: '2010',
    title: 'Начало путешествия',
    description: 'Переезд в США, обучение в Seattle Central College'
  },
  {
    year: '2015',
    title: 'Покорение вершин',
    description: 'Путешествия по Америке, исследование новых горизонтов'
  },
  {
    year: '2018',
    title: 'Создание семьи',
    description: 'Женитьба на MeLis Kyzy Khanzada, начало нового этапа жизни'
  },
  {
    year: '2023',
    title: 'Настоящее время',
    description: 'Жизнь в Сиэтле, штат Вашингтон, продолжение приключений'
  }
]

const photoGallery = [
  { 
    src: '/images/photo1.jpg', 
    alt: 'Максат в традиционном костюме',
    title: 'Национальные традиции'
  },
  { 
    src: '/images/photo2.jpg', 
    alt: 'Максат у звезды славы',
    title: 'Аллея славы в Голливуде'
  },
  { 
    src: '/images/photo3.jpg', 
    alt: 'Максат у памятника Брюсу Ли',
    title: 'Памятник легенде'
  },
  { 
    src: '/images/photo4.jpg', 
    alt: 'Максат плавает в океане',
    title: 'Покорение океана'
  },
  { 
    src: '/images/photo5.jpg', 
    alt: 'Максат у моста Золотые Ворота',
    title: 'Золотые Ворота Сан-Франциско'
  }
]

export default function Biography() {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="biography" className="py-20 bg-gradient-to-b from-slate-950 to-cyan-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-montserrat font-bold text-center mb-16 text-cyan-300"
        >
          Путь воина
        </motion.h2>

        {/* Фотогалерея в стиле карточек */}
        <div className="mb-24" ref={ref}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoGallery.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)'
                }}
                className="bg-slate-800 rounded-xl overflow-hidden transform border-2 border-cyan-700"
                style={{ 
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.15)'
                }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-cyan-200">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Вертикальная линия с неоновым эффектом */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-400" 
              style={{ 
                boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)'
              }}
            />

            {/* События на временной шкале */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Пузырь года */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center z-10"
                  style={{ 
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 15px rgba(6, 182, 212, 0.2)'
                  }}
                >
                  <div className="w-6 h-6 bg-cyan-300 rounded-full animate-pulse" />
                </div>

                {/* Контент */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <h3 className="text-3xl font-montserrat font-bold text-cyan-300 mb-2">
                    {event.year}
                  </h3>
                  <h4 className="text-2xl font-semibold mb-2 text-white">{event.title}</h4>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 bg-slate-900 p-8 rounded-xl shadow-xl border border-cyan-800"
            style={{ 
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.15)'
            }}
          >
            <p className="text-2xl text-cyan-300 italic font-montserrat">
              &quot;Жизнь – это охота, а я – король джунглей.&quot;
              <span className="block mt-2 text-lg">— Автор: Mad Max</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 