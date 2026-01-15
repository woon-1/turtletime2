'use client'

import { useState } from 'react'
import { track } from '@vercel/analytics'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import PreOrder from '@/components/PreOrder'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    track('cta_click')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main>
      <StickyBar onPreOrderClick={handleOpenModal} />
      <Hero onPreOrderClick={handleOpenModal} />
      <ProblemSolution />
      <Features onPreOrderClick={handleOpenModal} />
      <PreOrder
        isModalOpen={isModalOpen}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
      />
      <Footer />
    </main>
  )
}
