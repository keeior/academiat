'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Users, 
  ClipboardCheck, 
  GraduationCap,
  Calendar,
  BookOpen
} from 'lucide-react'

const admissionSteps = [
  {
    step: 1,
    title: 'Choose Your Program',
    description: 'Browse our available programs and select the one that aligns with your career goals.',
    icon: BookOpen,
  },
  {
    step: 2,
    title: 'Submit Application',
    description: 'Complete the online application form with your personal details and academic background.',
    icon: FileText,
  },
  {
    step: 3,
    title: 'Document Review',
    description: 'Our admissions team reviews your application and supporting documents within 5 business days.',
    icon: ClipboardCheck,
  },
  {
    step: 4,
    title: 'Enrollment Confirmation',
    description: 'Once accepted, complete your enrollment and gain access to your courses and resources.',
    icon: GraduationCap,
  },
]

const requirements = [
  'Completed secondary education or equivalent qualification',
  'Valid government-issued identification',
  'Proof of prior academic records (if applicable)',
  'Statement of purpose (250–500 words)',
  'Two letters of recommendation (for advanced programs)',
  'English language proficiency (for non-native speakers)',
]

export default function AdmissionPage() {
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
                Admission
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Begin your academic journey with Akademia. Our streamlined admission process is designed to get you started quickly and smoothly.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Badge variant="outline" className="px-3 py-1.5">
                  <Calendar className="mr-2 h-3.5 w-3.5" />
                  Applications Open Year-Round
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5">
                  <Users className="mr-2 h-3.5 w-3.5" />
                  15,000+ Students Enrolled
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">How to Apply</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {admissionSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="h-full relative">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="mb-3">Step {item.step}</Badge>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Admission Requirements</h2>
            <div className="max-w-2xl">
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <Link href="/register">
                <Button size="lg" className="font-semibold">
                  Apply Now
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
