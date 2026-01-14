'use client'

import React, { useState, useEffect } from 'react'
import Button from './Button'

interface StickyBarProps {
  onPreOrderClick: () => void
}

export default function StickyBar({ onPreOrderClick }: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~500px (below the hero fold)
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Left: Product info */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <circle cx="12" cy="12" r="9" className="stroke-gray-900" strokeWidth="2" />
              <path d="M12 7V12L15 14" className="stroke-gray-900" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-gray-900">Dawn</span>
              <span className="text-gray-500 ml-3">
                <span className="line-through text-sm">$59</span>
                <span className="font-semibold text-gray-900 ml-1">$49</span>
              </span>
            </div>
          </div>

          {/* Center: Urgency (desktop only) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-block w-1.5 h-1.5 bg-accent-500 rounded-full" />
            <span>Early bird pricing</span>
          </div>

          {/* Right: CTA */}
          <Button variant="primary" size="sm" onClick={onPreOrderClick}>
            Pre-order — $49
          </Button>
        </div>
      </div>
    </div>
  )
}
