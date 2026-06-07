'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ResourceCard } from '@/components/resource-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, FileText, Video, Wrench, BookOpen } from 'lucide-react'
import { mockResources } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const resourceTypes = [
  'All',
  'PDF',
  'Video',
  'Article',
  'Tool',
  'Template'
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'paid'>('all')

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = selectedType === 'All' || resource.type === selectedType
    
    const matchesPrice = priceFilter === 'all' || 
      (priceFilter === 'free' && resource.isFree) || 
      (priceFilter === 'paid' && !resource.isFree)

    return matchesSearch && matchesType && matchesPrice
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Learning Resources
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Access guides, templates, and study materials to support your academic progress at Akademia.
            </p>

            {/* Search and filters */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={priceFilter === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setPriceFilter('all')}
                >
                  All
                </Button>
                <Button 
                  variant={priceFilter === 'free' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setPriceFilter('free')}
                >
                  Free
                </Button>
                <Button 
                  variant={priceFilter === 'paid' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setPriceFilter('paid')}
                >
                  Paid
                </Button>
              </div>
            </div>

            {/* Types */}
            <div className="mt-6 flex flex-wrap gap-2">
              {resourceTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? 'default' : 'outline'}
                  className={cn(
                    'cursor-pointer transition-colors px-3 py-1',
                    selectedType === type 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-primary/10'
                  )}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredResources.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">No resources found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedType('All')
                    setPriceFilter('all')
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
