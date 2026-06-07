'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowRight, 
  DollarSign, 
  Briefcase, 
  Users, 
  Sparkles, 
  Database, 
  BarChart3,
  Clock,
  Award,
  BookOpen
} from 'lucide-react'

const departments = [
  {
    title: 'Finance',
    description: 'Study financial analysis, corporate finance, investment management, and accounting fundamentals. Prepare for careers in banking, financial advisory, and corporate finance.',
    icon: DollarSign,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    courses: 12,
    duration: '4 semesters',
  },
  {
    title: 'Business Administration',
    description: 'Develop expertise in strategic management, marketing, organizational behavior, and entrepreneurship. Build the skills to lead modern organizations.',
    icon: Briefcase,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    courses: 15,
    duration: '4 semesters',
  },
  {
    title: 'Manpower Development',
    description: 'Explore human resource management, workforce planning, talent acquisition, and labor relations. Become an expert in people management and organizational development.',
    icon: Users,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    courses: 10,
    duration: '3 semesters',
  },
  {
    title: 'Meditation & Wellness',
    description: 'Learn mindfulness practices, stress management techniques, holistic health approaches, and wellness coaching. Develop skills for personal growth and professional wellness facilitation.',
    icon: Sparkles,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    courses: 8,
    duration: '2 semesters',
  },
  {
    title: 'Database Management Systems',
    description: 'Master database design, SQL programming, data modeling, and database administration. Learn to build and maintain modern data infrastructure.',
    icon: Database,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    courses: 11,
    duration: '3 semesters',
  },
  {
    title: 'Data Science',
    description: 'Study statistical analysis, machine learning, data visualization, and predictive modeling. Transform raw data into actionable insights for business and research.',
    icon: BarChart3,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    courses: 14,
    duration: '4 semesters',
  },
]

export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Academic Programs
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Discover our comprehensive academic departments designed to equip you with the knowledge and skills needed for success in today&apos;s competitive world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 group">
                    <CardContent className="p-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${dept.bgColor} mb-4 transition-transform group-hover:scale-110`}>
                        <dept.icon className={`h-7 w-7 ${dept.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{dept.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{dept.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{dept.courses} courses</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{dept.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/admission">
                <Button size="lg" className="font-semibold">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
