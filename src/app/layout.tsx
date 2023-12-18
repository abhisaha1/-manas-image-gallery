import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { Header } from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A Gallery',
  description: 'Developed by Abhishek Saha',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={clsx('scroll-smooth', inter.className)}
    >
      <head />
      <body className='bg-neutral-one text-neutral-ten dark:bg-neutral-ten dark:text-neutral-one'>
        <Header heading='Example' text='This is a test' />
        {children}
      </body>
    </html>
  )
}
