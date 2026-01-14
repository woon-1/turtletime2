'use client'

import React from 'react'
import Button from './Button'

interface HeroProps {
  onPreOrderClick: () => void
}

// Abstract alarm clock illustration - minimal geometric
const ClockIllustration = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
    {/* Outer circle */}
    <circle cx="150" cy="150" r="120" className="stroke-gray-200" strokeWidth="2" fill="none" />

    {/* Inner clock face */}
    <circle cx="150" cy="150" r="100" className="fill-white stroke-gray-900" strokeWidth="3" />

    {/* Hour markers */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const x1 = 150 + 85 * Math.sin(rad)
      const y1 = 150 - 85 * Math.cos(rad)
      const x2 = 150 + 92 * Math.sin(rad)
      const y2 = 150 - 92 * Math.cos(rad)
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className="stroke-gray-400"
          strokeWidth={i % 3 === 0 ? 3 : 1.5}
          strokeLinecap="round"
        />
      )
    })}

    {/* Clock hands - showing 7:00 */}
    {/* Hour hand */}
    <line
      x1="150"
      y1="150"
      x2="150"
      y2="90"
      className="stroke-gray-900"
      strokeWidth="4"
      strokeLinecap="round"
      transform="rotate(210, 150, 150)"
    />
    {/* Minute hand */}
    <line
      x1="150"
      y1="150"
      x2="150"
      y2="70"
      className="stroke-gray-900"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Center dot */}
    <circle cx="150" cy="150" r="6" className="fill-accent-500" />

    {/* Bell on top */}
    <ellipse cx="150" cy="25" rx="20" ry="12" className="fill-gray-900" />
    <rect x="145" y="28" width="10" height="8" className="fill-gray-900" />
  </svg>
)

export default function Hero({ onPreOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-8 pb-20 overflow-hidden bg-gray-50">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

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

          {/* Product Illustration */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px]">
              <ClockIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
