import { ReactNode } from 'react'
import { TopBar } from '@/features/TopBar'
import { NetworkProvider } from '@/providers/NetworkProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({
  children,
}: Readonly<DefaultLayoutProps>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NetworkProvider>
        <TopBar />
        <section className="w-full p-6">{children}</section>
      </NetworkProvider>
    </ThemeProvider>
  )
}
