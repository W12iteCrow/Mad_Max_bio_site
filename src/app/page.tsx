import React from 'react'
import HeroSection from '@/components/HeroSection'
import Biography from '@/components/Biography'
import VideoGallery from '@/components/VideoGallery'
import QuoteOfDay from '@/components/QuoteOfDay'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Biography />
      <VideoGallery />
      <QuoteOfDay />
      <ContactForm />
    </main>
  )
} 