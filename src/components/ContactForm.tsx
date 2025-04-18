"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formState)
  }

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-cyan-900 opacity-15 blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-cyan-900 opacity-15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-center mb-8 text-cyan-300">
            Связаться со мной
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Есть интересное предложение или вопрос? Напишите мне!
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 bg-slate-900/50 p-8 rounded-2xl backdrop-blur-sm border border-cyan-800/20 shadow-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium mb-2 text-cyan-300" htmlFor="name">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-cyan-800/30 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium mb-2 text-cyan-300" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-cyan-800/30 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium mb-2 text-cyan-300" htmlFor="message">
                Сообщение
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-cyan-800/30 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 px-10 rounded-full hover:opacity-90 transition-all shadow-md shadow-cyan-700/20 border border-cyan-400/20"
              >
                Отправить сообщение
              </button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400">
              Seattle, Washington • <a href="mailto:contact@example.com" className="text-cyan-400 hover:underline">contact@example.com</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 