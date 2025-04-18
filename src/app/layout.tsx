import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Максат Мадаминов | Общественный деятель, лидер',
  description: 'Официальный сайт Максата Мадаминова - общественного деятеля и лидера, вдохновляющего тысячи',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  )
} 