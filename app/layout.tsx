import type { Metadata } from 'next'
import './globals.css'
import BreakpointVisualizer from '@/components/breakpoint-visualizer'
import { ThemeProvider } from '@/components/theme-provider'
import Toolbar from '@/components/toolbar'
import { berkeleyMono, inter } from '@/lib/fonts'
import {
  BacklogStatusIcon,
  DoneStatusIcon,
  InProgressStatusIcon,
  MotionLogo,
  NextJSLogo,
  RadixLogo,
  VercelLogo,
} from '@/lib/icons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kian Bazarjani',
  description:
    'Kian Bazarjani. Designing beautiful, modern interfaces. Building avelin.app.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${berkeleyMono.variable} font-sans antialiased bg-background text-foreground min-h-screen w-screen flex flex-col py-4`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toolbar />
          <BreakpointVisualizer />
          <main className="flex flex-col max-w-screen-md h-full mx-auto w-full sm:flex-1 px-4">
            {children}
          </main>
          <footer className="flex flex-col w-full font-mono text-sand-10 text-sm select-none">
            <div className="lg:hidden inline-block h-[1px] w-full bg-sand-4 mb-4" />
            <div className="max-w-screen-md text-xs font-medium mx-auto rounded-xl px-4 flex lg:hidden gap-4 items-center mb-4 w-full">
              <span className="text-sand-10 font-bold">Legend</span>
              <div className="flex items-center gap-4">
                <div className="inline-flex gap-1.5 items-center">
                  <BacklogStatusIcon />
                  <span>Backlog</span>
                </div>
                <div className="inline-flex gap-1.5 items-center">
                  <InProgressStatusIcon />
                  <span>In Progress</span>
                </div>
                <div className="inline-flex gap-1.5 items-center">
                  <DoneStatusIcon />
                  <span>Done</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-sand-4 mb-4" />
            <div className="max-w-screen-md mx-auto flex w-full px-4 justify-between">
              <span>2025 © Kian Bazarjani.</span>
              <p className="h-4 inline-flex items-center">
                <span className="hidden sm:block mr-[1.5ch]">Built with</span>
                <span className="inline-flex items-center gap-1">
                  <Link href="https://vercel.com">
                    <VercelLogo className="size-5 inline-block" />
                  </Link>
                  <Link href="https://nextjs.org">
                    <NextJSLogo className="size-5 inline-block" />
                  </Link>
                  <Link href="https://motion.dev">
                    <MotionLogo className="inline-block size-5 translate-y-1 bg-[#fff312] rounded-full" />
                  </Link>
                  <Link href="https://radix-ui.com">
                    <RadixLogo className="inline-block size-5 fill-sand-12" />
                  </Link>
                </span>
                .
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
