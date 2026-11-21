import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = {title:'Beyond the Cart | Find everyday essentials',description:'Find support for diapers, hygiene products, household supplies, and pet care beyond SNAP benefits.',icons:{icon:'/basket.svg'}}
export const viewport: Viewport = { themeColor:'#faf8ef', colorScheme:'light' }
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className="antialiased">{children}</body></html>}
