'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { GraduationCap, Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const primaryNav = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'My Instructors', href: '/instructors' },
  { name: 'Library', href: '/library' },
  { name: 'Academics', href: '/academics' },
]

const moreNav = [
  { name: 'Admission', href: '/admission' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'Getting Started', href: '/getting-started' },
]

const allNav = [...primaryNav, ...moreNav]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">Akademia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                pathname === item.href
                  ? 'text-foreground bg-accent'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              {item.name}
            </Link>
          ))}
          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className={cn(
                'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md',
                moreNav.some(i => i.href === pathname)
                  ? 'text-foreground bg-accent'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              More
              <ChevronDown className={cn('h-4 w-4 transition-transform', moreOpen && 'rotate-180')} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-border bg-popover p-1 shadow-lg">
                {moreNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'text-foreground bg-accent'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/account">
            <Button variant="ghost" size="sm">
              My Account
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="font-semibold">
              Student Registration
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold tracking-tight">Akademia</span>
                </Link>
                <nav className="flex flex-col gap-1">
                  {allNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'px-4 py-3 text-base font-medium transition-colors rounded-lg',
                        pathname === item.href
                          ? 'text-foreground bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <Link href="/account" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      My Account
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full font-semibold">
                      Student Registration
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
