import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ResourceCard } from '@/components/resource-card'
import { mockResources } from '@/lib/mock-data'
import { BookOpen, Search, FileText, Video, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Library',
  description: 'Access Akademia\'s digital library of educational resources, guides, templates, and tools.',
}

const resourceTypes = [
  { name: 'All Resources', icon: BookOpen, count: mockResources.length },
  { name: 'PDFs & Guides', icon: FileText, count: mockResources.filter(r => r.type === 'PDF' || r.type === 'Article').length },
  { name: 'Videos', icon: Video, count: mockResources.filter(r => r.type === 'Video').length },
  { name: 'Tools & Templates', icon: Wrench, count: mockResources.filter(r => r.type === 'Tool' || r.type === 'Template').length },
]

export default function LibraryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Digital Library
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Explore our curated collection of educational resources, study materials, and professional tools to support your learning journey.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resourceTypes.map((type) => (
                <div key={type.name} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <type.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{type.name}</p>
                    <p className="text-sm text-muted-foreground">{type.count} items</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
