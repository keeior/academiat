'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap, BookOpen } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-20 lg:px-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-foreground">
              <GraduationCap className="h-4 w-4" />
              Fortune Development Centre
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Curious about undergraduate study? Try it out with us.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Take the first step toward your future. Explore our available programs, connect with expert instructors, 
              and discover a learning experience designed to help you succeed — whether you&apos;re starting fresh or 
              advancing your career.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/admission">
                <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/academics">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-8 text-base font-semibold border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-white/10"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
