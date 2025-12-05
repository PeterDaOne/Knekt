'use client'

import { useRouter } from 'next/navigation'
import Logo from './components/Logo'

export default function RoleSelectionPage() {
  const router = useRouter()

  const handleRoleSelect = (role) => {
    router.push(`/login?role=${role}`)
  }

  return (
    <div className="flex min-h-screen overflow-hidden flex-col md:flex-row">
      {/* Left Side - Client / User With a Problem */}
      <div
        onClick={() => handleRoleSelect('client')}
        className="flex-1 flex flex-col items-center justify-center relative cursor-pointer group transition-all duration-500 hover:scale-[1.02] min-h-[50vh] md:min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        <div className="z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8 px-8 text-center">
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl">
            <Logo color="#1F2937" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            I have a problem.
          </h2>
        </div>
      </div>

      {/* Right Side - Expert / Solver */}
      <div
        onClick={() => handleRoleSelect('expert')}
        className="flex-1 flex flex-col items-center justify-center relative cursor-pointer group transition-all duration-500 hover:scale-[1.02] min-h-[50vh] md:min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        <div className="z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8 px-8 text-center">
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl">
            <Logo color="#F97316" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            I solve problems.
          </h2>
        </div>
      </div>
    </div>
  )
}
