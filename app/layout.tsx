import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './components'
import { Footer } from './components'

export const metadata: Metadata = {
  title: 'Find your flag',
  description: 'Next app with typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
