'use client'

import { useRouter } from 'next/navigation'
import { LogoDark, LogoOrange } from '../components/Logo'

export default function SelectRolePage() {
  const router = useRouter()

  const handleRoleSelect = (role: 'client' | 'solver') => {
    router.push(`/login?role=${role}`)
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row relative">
      {/* Client Side - Left */}
      <div
        className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 cursor-pointer transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden group z-10"
        style={{
          background: 'linear-gradient(to right, #F97316 0%, #F97316 30%, rgba(249, 115, 22, 0.85) 50%, rgba(249, 115, 22, 0.6) 70%, rgba(249, 115, 22, 0.3) 85%, rgba(249, 115, 22, 0.1) 95%, transparent 100%)',
        }}
        onClick={() => handleRoleSelect('client')}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl">
            <div className="w-24 h-24 md:w-32 md:h-32">
              <LogoOrange />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center transition-all duration-300 group-hover:drop-shadow-lg max-w-md">
            I need a solution.
          </h2>
          <p className="text-white/80 text-sm md:text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to continue
          </p>
        </div>
      </div>

      {/* Divider - Only visible on mobile */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent md:hidden z-20" />

      {/* Solver Side - Right */}
      <div
        className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 cursor-pointer transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] relative overflow-hidden group z-10"
        style={{
          background: 'linear-gradient(to left, #1F2937 0%, #1F2937 30%, rgba(31, 41, 55, 0.85) 50%, rgba(31, 41, 55, 0.6) 70%, rgba(31, 41, 55, 0.3) 85%, rgba(31, 41, 55, 0.1) 95%, transparent 100%)',
        }}
        onClick={() => handleRoleSelect('solver')}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right duration-700">
          <div className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl">
            <div className="w-24 h-24 md:w-32 md:h-32">
              <LogoDark />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center transition-all duration-300 group-hover:drop-shadow-lg max-w-md">
            I solve problems.
          </h2>
          <p className="text-white/80 text-sm md:text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to continue
          </p>
        </div>
      </div>
    </div>
  )
}