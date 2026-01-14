'use client'

import React from 'react'

// Stat card - clean minimal design
const StatCard = ({
  number,
  label,
  icon,
}: {
  number: string
  label: string
  icon: React.ReactNode
}) => (
  <div className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
    <div className="mb-3 text-gray-400">{icon}</div>
    <div className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
      {number}
    </div>
    <p className="text-gray-500 text-sm leading-relaxed">{label}</p>
  </div>
)

// Check item component - minimal
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-600">{children}</span>
  </li>
)

export default function ProblemSolution() {
  const stats = [
    {
      number: '96%',
      label: 'of people use their phone as an alarm clock',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      number: '80%',
      label: 'check their phone within 15 minutes of waking',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '2.5hrs',
      label: 'average time lost to morning scrolling per week',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your phone is stealing your mornings
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            You reach for your phone to turn off the alarm. Then you check
            &ldquo;just one notification.&rdquo; Before you know it, 30 minutes have vanished.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-24">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Solution Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            There&apos;s a better way
          </h3>

          <p className="text-gray-500 mb-8 leading-relaxed">
            Dawn is a dedicated alarm clock that removes your phone from the equation entirely.
            Start your day with intention, not distraction.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
            <CheckItem>No notifications, ever</CheckItem>
            <CheckItem>No addictive algorithms</CheckItem>
            <CheckItem>No blue light before bed</CheckItem>
            <CheckItem>Just an alarm clock</CheckItem>
          </ul>
        </div>
      </div>
    </section>
  )
}
