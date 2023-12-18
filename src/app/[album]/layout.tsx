import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Container } from '../../components/Container';
import { getImages } from '../../lib/data';
import ImageGrid from '../../components/ImageGrid';
import { Albums } from '../../components/Albums';


export const metadata: Metadata = {
  title: 'A Gallery',
  description: 'Developed by Abhishek Saha',
}

export default async function RootLayout({
  params,
  children
}: {
  children: ReactNode
  params: { album: string }
}) {
  return (
    <Container>
      {children}
    </Container>
  )
}
