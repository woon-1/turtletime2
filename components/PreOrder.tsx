'use client'

import React, { useState } from 'react'
import { track } from '@vercel/analytics'
import Button from './Button'

interface PreOrderProps {
  isModalOpen: boolean
  onOpenModal: () => void
  onCloseModal: () => void
}

// Check item component - minimal
const IncludedItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3">
    <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-600 text-sm">{children}</span>
  </li>
)

// Stats bar component - minimal
const StatsBar = () => (
  <div className="flex justify-center gap-12 mb-10">
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-gray-900">40%</div>
      <div className="text-xs text-gray-500">Less morning stress</div>
    </div>
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-gray-900">25min</div>
      <div className="text-xs text-gray-500">Saved each day</div>
    </div>
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-gray-900">89%</div>
      <div className="text-xs text-gray-500">Recommend to friends</div>
    </div>
  </div>
)

export default function PreOrder({ isModalOpen, onOpenModal, onCloseModal }: PreOrderProps) {
  const [checkoutStep, setCheckoutStep] = useState(1)
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    if (checkoutStep === 1) {
      track('checkout_step_1')
      setCheckoutStep(2)
    } else if (checkoutStep === 2) {
      track('checkout_step_2')
      setIsSubmitted(true)
    }
  }

  const resetModal = () => {
    setCheckoutStep(1)
    setEmail('')
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
    })
    setIsSubmitted(false)
    onCloseModal()
  }

  const includedItems = [
    'Dawn alarm clock',
    'USB-C charging cable',
    'Quick start guide',
    '30-day money-back guarantee',
    'Free shipping (US)',
  ]

  return (
    <>
      {/* Pre-order Section */}
      <section id="preorder" className="relative py-24 px-4 bg-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pre-order Dawn
          </h2>

          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-12">
            Be among the first to experience mornings without the scroll.
          </p>

          {/* Pricing Card */}
          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-md mx-auto mb-12">
            {/* Early bird badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Early Bird — Save $10
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-gray-900 mb-2 mt-2">
              Dawn Alarm Clock
            </h3>

            {/* Pricing */}
            <div className="mb-2">
              <span className="text-gray-400 line-through text-lg">$59</span>
              <span className="font-display text-5xl font-bold text-gray-900 ml-3">$49</span>
              <span className="text-gray-500 text-sm ml-1">USD</span>
            </div>

            {/* Scarcity indicator */}
            <p className="text-accent-600 text-sm font-medium mb-6">
              Only 153 left at this price
            </p>

            {/* Included items */}
            <ul className="text-left space-y-3 mb-8">
              {includedItems.map((item, index) => (
                <IncludedItem key={index}>{item}</IncludedItem>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="primary" size="lg" onClick={onOpenModal} className="w-full">
              Pre-order — $49
            </Button>

            {/* Shipping note */}
            <p className="text-sm text-gray-500 mt-4">
              Ships Spring 2025 · Cancel anytime
            </p>
          </div>

          {/* Stats Bar */}
          <StatsBar />

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure Checkout
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              All Major Cards
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
              </svg>
              30-Day Returns
            </span>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {!isSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-display text-xl font-bold text-gray-900">
                        {checkoutStep === 1 ? 'Shipping Information' : 'Payment Details'}
                      </h3>
                      <p className="text-sm text-gray-500">Step {checkoutStep} of 2</p>
                    </div>
                    <button
                      onClick={resetModal}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-900 rounded-full transition-all duration-500 ease-out"
                      style={{ width: checkoutStep === 1 ? '50%' : '100%' }}
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-gray-900">Dawn</div>
                        <div className="text-sm text-gray-500">Qty: 1</div>
                      </div>
                    </div>
                    <div className="font-display text-xl font-bold text-gray-900">$49.00</div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleCheckout} className="p-6">
                  {checkoutStep === 1 ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Shipping Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="San Francisco"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="94102"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                          placeholder="4242 4242 4242 4242"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            CVC
                          </label>
                          <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <Button variant="primary" size="lg" type="submit" className="w-full">
                      {checkoutStep === 1 ? 'Continue to Payment' : 'Complete Pre-order — $49'}
                    </Button>
                  </div>

                  {checkoutStep === 2 && (
                    <button
                      type="button"
                      onClick={() => setCheckoutStep(1)}
                      className="w-full mt-3 text-gray-500 hover:text-gray-700 text-sm transition-colors"
                    >
                      ← Back to shipping
                    </button>
                  )}
                </form>

                <div className="px-6 pb-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure 256-bit SSL encryption</span>
                </div>
              </>
            ) : (
              <div className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Thanks for Your Interest!
                </h3>

                <p className="text-gray-500 mb-8 leading-relaxed">
                  We&apos;re putting the finishing touches on production and aren&apos;t
                  quite ready to take orders yet.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <p className="text-gray-700 font-medium mb-2">
                    Be the first to know when we launch:
                  </p>
                  <p className="text-gray-900 font-medium text-lg">
                    {email || 'your email'}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    We&apos;ll send you an exclusive early-bird discount code.
                  </p>
                </div>

                <Button variant="outline" onClick={resetModal}>
                  Back to Site
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
