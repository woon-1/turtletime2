import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Dawn - Reclaim Your Morning',
  description: 'A distraction-free alarm clock. Wake up without the scroll. No notifications. No temptations. Just you, awake and ready.',
  keywords: ['alarm clock', 'digital wellness', 'phone addiction', 'mindful mornings', 'screen time', 'distraction free'],
  openGraph: {
    title: 'Dawn - Reclaim Your Morning',
    description: 'A distraction-free alarm clock. Wake up without the scroll.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-gray-50 text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
