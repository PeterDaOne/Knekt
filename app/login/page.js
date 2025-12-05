'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Logo from '../components/Logo'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const role = searchParams.get('role') || 'client' // Default to client if no role specified
  const [activeTab, setActiveTab] = useState('signin') // 'signin' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  // Theme configuration based on role
  const isClient = role === 'client'
  const primaryColor = isClient ? '#F97316' : '#1F2937'
  const accentColor = isClient ? '#1F2937' : '#F97316'
  const logoColor = isClient ? '#1F2937' : '#F97316'
  const gradientStart = isClient ? '#F97316' : '#1F2937'
  const gradientEnd = isClient ? '#ea580c' : '#111827'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (activeTab === 'signup') {
        // Handle sign up
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        })

        if (signUpError) throw signUpError

        // Check if email confirmation is required
        if (data.user && !data.session) {
          setError('Please check your email to confirm your account.')
          setLoading(false)
          return
        }

        if (data.user && data.session) {
          router.push('/dashboard')
        }
      } else {
        // Handle sign in
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (signInError) throw signInError

        if (data.user) {
          router.push('/dashboard')
        }
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const switchTab = (tab) => {
    setActiveTab(tab)
    setError('')
    setEmail('')
    setPassword('')
  }

  return (
    <div 
      className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8 transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
      }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 animate-in fade-in duration-500">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo color={logoColor} className="w-20 h-20" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2" style={{ color: primaryColor }}>
            Welcome to Knekt
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm">
            {isClient ? 'I have a problem.' : 'I solve problems.'}
          </p>

          {/* Tabs */}
          <div 
            className="flex space-x-1 mb-8 p-1 rounded-lg"
            style={{ backgroundColor: isClient ? '#FED7AA' : '#E5E7EB' }}
          >
            <button
              type="button"
              onClick={() => switchTab('signin')}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === 'signin'
                  ? 'bg-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === 'signin' ? { color: primaryColor } : {}}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => switchTab('signup')}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === 'signup'
                  ? 'bg-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === 'signup' ? { color: primaryColor } : {}}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: accentColor }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg outline-none transition-all focus:ring-2"
                style={{
                  borderColor: '#D1D5DB',
                  '--tw-ring-color': primaryColor,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = primaryColor
                  e.target.style.boxShadow = `0 0 0 2px ${primaryColor}40`
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB'
                  e.target.style.boxShadow = 'none'
                }}
                placeholder="you@example.com"
                disabled={loading}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: accentColor }}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={activeTab === 'signup' ? 'new-password' : 'current-password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg outline-none transition-all focus:ring-2"
                style={{
                  borderColor: '#D1D5DB',
                  '--tw-ring-color': primaryColor,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = primaryColor
                  e.target.style.boxShadow = `0 0 0 2px ${primaryColor}40`
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB'
                  e.target.style.boxShadow = 'none'
                }}
                placeholder="••••••••"
                disabled={loading}
                minLength={6}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:scale-[1.02]"
              style={{
                backgroundColor: primaryColor,
                '--tw-ring-color': primaryColor,
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.backgroundColor = isClient ? '#ea580c' : '#111827'
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.backgroundColor = primaryColor
                }
              }}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {activeTab === 'signup' ? 'Creating account...' : 'Signing in...'}
                </span>
              ) : (
                'Continue'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
