import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neurodactyl',
  description: 'Neurodactyl - Contactless fingerprint recognition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css" />
      </head>
      <body className={inter.className}>{children}
        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" async></script>
      </body>
    </html>
  )
}
