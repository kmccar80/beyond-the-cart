import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fill the Caddy | Find everyday essentials',
  description:
    'Find support for diapers, hygiene products, household supplies, and pet care beyond SNAP benefits.',
  icons: { icon: '/basket.svg' },
}

export const viewport: Viewport = {
  themeColor: '#f7f1e3',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
