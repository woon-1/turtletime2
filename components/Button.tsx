'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    font-display font-semibold rounded-lg
    transition-all duration-200 ease-out
    transform hover:-translate-y-0.5 active:translate-y-0
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

  const variants = {
    primary: `
      bg-gray-900 text-white
      hover:bg-gray-800
      focus:ring-gray-900
    `,
    secondary: `
      bg-accent-500 text-white
      hover:bg-accent-600
      focus:ring-accent-500
    `,
    outline: `
      border border-gray-300
      text-gray-700
      hover:bg-gray-100
      hover:border-gray-400
      focus:ring-gray-400
    `,
    ghost: `
      text-gray-600
      hover:text-gray-900
      hover:bg-gray-100
      focus:ring-gray-300
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}
