import React, { Suspense } from 'react'
import LoginClient from './LoginClient'

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div 
        className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8 transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)',
        }}
      >
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <p className="mt-4 text-white/90 font-medium">Loading…</p>
        </div>
      </div>
    }>
      <LoginClient />
    </Suspense>
  )
}
