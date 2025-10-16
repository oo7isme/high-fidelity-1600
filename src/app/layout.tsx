import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/lib/AppContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ByggOm - Gjenbruk av byggematerialer',
  description: 'Finn bærekraftige byggematerialer fra ombruksanlegg over hele Norge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <AppProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="main-content flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
