'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  DollarSign, 
  Briefcase, 
  Users, 
  Sparkles, 
  Database, 
  BarChart3,
  ArrowRight
} from 'lucide-react'

const categories = [
  {
    title: 'Finance',
    description: 'Master financial analysis, accounting principles, and investment strategies.',
    icon: DollarSign,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    title: 'Business Administration',
    description: 'Develop leadership skills and learn modern management practices.',
    icon: Briefcase,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Manpower',
    description: 'Explore human resource management, workforce planning, and talent development.',
    icon: Users,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    title: 'Meditation',
    description: 'Learn mindfulness techniques, stress management, and holistic well-being.',
    icon: Sparkles,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
  },
  {
    title: 'Database Management System',
    description: 'Design, implement, and manage relational and NoSQL database systems.',
    icon: Database,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
  },
  {
    title: 'Data Science',
    description: 'Analyze data, build predictive models, and drive data-informed decisions.',
    icon: BarChart3,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of programs designed to equip you with the skills and knowledge for a successful career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.bgColor} mb-4 transition-transform group-hover:scale-110`}>
                    <category.icon className={`h-7 w-7 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore courses <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/academics">
            <Button size="lg" variant="outline" className="font-semibold">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
