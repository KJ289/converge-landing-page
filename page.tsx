import Image from "next/image"
import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image/Branding */}
      <div className="hidden md:flex md:w-1/2 bg-[#0a2463] relative">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-2 grid-rows-3 h-full">
            {[
              "/landmarks/eiffel-tower.jpg",
              "/landmarks/taj-mahal.jpg",
              "/landmarks/statue-liberty.jpg",
              "/landmarks/colosseum.jpg",
              "/landmarks/great-wall.jpg",
              "/landmarks/sydney-opera.jpg",
            ].map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Famous landmark"
                  fill
                  className="object-cover opacity-40 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white z-20">
          <div className="mb-8">
            <Image src="/logo-white.svg" alt="Converge Logo" width={200} height={60} priority />
          </div>
          <h2 className="text-3xl font-bold mb-4">Global Education Partners</h2>
          <p className="text-lg mb-6 text-center">
            Connecting students to world-class educational opportunities across the globe.
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8 flex justify-center">
            <Image src="/logo.svg" alt="Converge Logo" width={180} height={50} priority />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Partner Login</h1>
            <p className="text-gray-600 mt-2">Sign in to access your partner dashboard</p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Not a partner yet?{" "}
              <a href="#" className="text-[#0a2463] font-medium hover:underline">
                Apply for partnership
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

