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

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
})

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // This would be replaced with actual authentication logic
      console.log("Login values:", values)

      toast({
        title: "Login successful",
        description: "Redirecting to your dashboard...",
      })

      // Redirect to dashboard after successful login
      // router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="partner@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={showPassword ? "text" : "password"} placeholder="••••••••" {...field} />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-sm font-normal cursor-pointer">Remember me</FormLabel>
              </FormItem>
            )}
          />

          <Button variant="link" className="p-0 h-auto text-sm font-medium text-[#0a2463]">
            Forgot password?
          </Button>
        </div>

        <Button type="submit" className="w-full bg-[#0a2463] hover:bg-[#0a2463]/90" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </Form>
  )
}

import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0a2463",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
