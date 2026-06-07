'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Users, Library, Award, GraduationCap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
          <div className="h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <div className="text-primary font-medium tracking-wide">
              Fortune Development Centre Learning Platform
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            Advance your{' '}
            <span className="text-primary">career</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2 block">
              Pursue Your Passion. Keep Learning.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Learning often happens in classrooms, but it doesn&apos;t have to. 
            Use Akademia to facilitate learning experiences no matter the context.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/courses">
              <Button size="lg" className="h-12 px-8 text-base font-semibold">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admission">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Programs
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { icon: BookOpen, title: 'Diverse Programs', description: 'Finance, Business, Data Science & more' },
            { icon: Users, title: 'Expert Instructors', description: 'Learn from industry professionals' },
            { icon: Library, title: 'Digital Library', description: 'Access resources anytime, anywhere' },
            { icon: Award, title: 'Certification', description: 'Earn recognized credentials' },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:bg-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
