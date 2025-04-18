"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { InstagramEmbed, FacebookEmbed } from 'react-social-media-embed'

const socialPosts = [
  {
    type: 'instagram',
    url: 'https://www.instagram.com/p/CzcYylrIYRz/',
    title: 'Приключения в горах'
  },
  {
    type: 'facebook',
    url: 'https://www.facebook.com/Maksatali55/posts/pfbid02wHVfE7P4VDJJRDSpdWWJ8SGxzMaJr9fCW5FLFa8ehBCiKPFLn4nGH9xGXzGx3Mz1l',
    title: 'Путешествие в Сан-Франциско'
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/p/CyVnXhfon3z/',
    title: 'Традиции Кыргызстана'
  }
]

export default function VideoGallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-montserrat font-bold text-center mb-16 text-cyan-300"
        >
          Мои приключения
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -3 : 3 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
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
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-200">{post.title}</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  {post.type === 'instagram' ? (
                    <InstagramEmbed url={post.url} width="100%" />
                  ) : (
                    <FacebookEmbed url={post.url} width="100%" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <a
              href="https://www.instagram.com/max_madaminov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-10 rounded-full hover:opacity-90 transition-all transform shadow-md shadow-purple-700/20"
            >
              Instagram
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <a
              href="https://www.facebook.com/Maksatali55"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-10 rounded-full hover:opacity-90 transition-all transform shadow-md shadow-blue-700/20"
            >
              Facebook
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 