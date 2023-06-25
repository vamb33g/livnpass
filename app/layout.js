
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Liv&Pass',
  description: 'Liv&Pass Transports',
}

export default function RootLayout({ children }) {
  return (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link rel="icon" href="/assets/headLogo.png" />
    </head>

    <html lang="en">
    
      <body className={inter.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
    
    
    </>
  )
}
