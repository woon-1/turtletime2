'use client'

import React from 'react'
import Button from './Button'

// Feature card component - minimal design
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <div className="group p-6 border border-gray-200 rounded-xl bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
    <div className="mb-4 text-gray-400 group-hover:text-accent-500 transition-colors">
      {icon}
    </div>
    <h3 className="font-display font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
)

interface FeaturesProps {
  onPreOrderClick?: () => void
}

export default function Features({ onPreOrderClick }: FeaturesProps) {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
      title: 'Gentle Wake Sounds',
      description: 'Choose from soft nature sounds, gentle chimes, or a classic alarm. Wake up peacefully.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
      title: 'Soft Night Light',
      description: 'A warm amber glow for those middle-of-the-night moments. No harsh blue light.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Snooze Button',
      description: "We're realistic — everyone needs a snooze button. Tap the top for 9 more minutes.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: 'Phone-Free Mornings',
      description: 'Helps you put your phone away until morning. Out of sight, out of mind.',
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need.
            <br />
            <span className="text-gray-400">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Dawn does one thing really well: wake you up without pulling you into the attention economy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA */}
        {onPreOrderClick && (
          <div className="text-center">
            <Button variant="primary" size="lg" onClick={onPreOrderClick}>
              Pre-order — $49
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
