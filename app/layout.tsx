import { NavBar } from '@/Components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nike ',
  description: 'Shop with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
    <head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}</body>
    </html>
  )
}
