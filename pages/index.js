import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Converge - Modern Landing Page</title>
        <meta name="description" content="Welcome to Converge - Your Modern Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
          <a className="flex items-center justify-center" href="#">
            <span className="font-bold text-xl">Converge</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Features
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Pricing
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Welcome to Converge
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Your modern solution for seamless digital experiences. Built with cutting-edge technology.
                  </p>
                </div>
                <div className="space-x-4">
                  <a
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </a>
                  <a
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Features</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover what makes Converge different
                  </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {[
                    {
                      title: "Modern Design",
                      description: "Clean and intuitive interface built with the latest web technologies."
                    },
                    {
                      title: "Responsive",
                      description: "Fully responsive design that works seamlessly on all devices."
                    },
                    {
                      title: "Customizable",
                      description: "Easily customize the design to match your brand identity."
                    },
                    {
                      title: "Fast & Reliable",
                      description: "Optimized for performance and reliability."
                    }
                  ].map((feature) => (
                    <div key={feature.title} className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Converge. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 ml-auto">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
} 