import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Akademia | Advance Your Career. Pursue Your Passion. Keep Learning.',
    template: '%s | Akademia'
  },
  description: 'Learning often happens in classrooms, but it doesn\'t have to. Use Akademia to facilitate learning experiences no matter the context.',
  keywords: ['education', 'online learning', 'courses', 'finance', 'business administration', 'data science', 'Fortune Development Centre', 'Akademia'],
  authors: [{ name: 'Fortune Development Centre' }],
  creator: 'Fortune Development Centre',
  publisher: 'Fortune Development Centre',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fortunedevelopmentcentre.org',
    siteName: 'Akademia',
    title: 'Akademia | Advance Your Career. Pursue Your Passion. Keep Learning.',
    description: 'Learning often happens in classrooms, but it doesn\'t have to. Use Akademia to facilitate learning experiences no matter the context.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Akademia – Fortune Development Centre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akademia | Advance Your Career. Pursue Your Passion. Keep Learning.',
    description: 'Learning often happens in classrooms, but it doesn\'t have to. Use Akademia to facilitate learning experiences no matter the context.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
