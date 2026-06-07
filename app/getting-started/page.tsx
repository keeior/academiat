import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { GraduationCap, BookOpen, Users, HelpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Getting Started',
  description: 'Welcome to Akademia. Follow these steps to begin your learning journey with us.',
}

const steps = [
  {
    title: 'Create Your Account',
    description: 'Sign up for a free student account to track your progress and access exclusive resources.',
    icon: Users,
    link: '/register',
    linkText: 'Register Now'
  },
  {
    title: 'Explore Our Catalog',
    description: 'Browse our departments and courses to find the perfect fit for your goals.',
    icon: BookOpen,
    link: '/courses',
    linkText: 'Explore Courses'
  },
  {
    title: 'Access Library Resources',
    description: 'Utilize our digital library for study materials, guides, and professional tools.',
    icon: GraduationCap,
    link: '/library',
    linkText: 'Go to Library'
  },
  {
    title: 'Join the Community',
    description: 'Connect with fellow students and instructors in our forums.',
    icon: HelpCircle,
    link: '/community',
    linkText: 'Join Forums'
  }
]

export default function GettingStartedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Welcome to Akademia
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start learning? Follow these four simple steps to get the most out of your experience.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Step {index + 1}: {step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Link href={step.link}>
                      <Button variant="outline" className="w-full">
                        {step.linkText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need more help?</h2>
            <p className="text-muted-foreground mb-8">
               Our support team is available to assist you with any questions you may have. 
               Check out our FAQs or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faqs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View FAQs
                </Button>
              </Link>
              <Link href="/contacts">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Support
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
