'use client'

import React from 'react'
import Image from 'next/image'
import Button from './Button'

interface HeroProps {
  onPreOrderClick: () => void
}

export default function Hero({ onPreOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-8 pb-20 overflow-hidden bg-[#ebebeb]">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              <span className="text-gray-600 text-sm font-medium">
                Limited first batch — 153 spots left
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Reclaim Your
              <br />
              <span className="text-accent-500">Morning</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              A distraction-free alarm clock. No notifications. No temptations.
              Just you, awake and ready.
            </p>

            {/* CTA Button */}
            <div className="space-y-3">
              <Button variant="primary" size="lg" onClick={onPreOrderClick}>
                Pre-order — $49
              </Button>
              <p className="text-sm text-gray-500">
                No payment until we ship · Cancel anytime
              </p>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Ships Spring 2025
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Free US shipping
              </span>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <Image
                src="/product-hero.jpeg"
                alt="Dawn alarm clock - minimalist design with digital display"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
