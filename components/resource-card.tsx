import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Video, FileCode, Package, Download, Lock } from 'lucide-react'
import type { Resource } from '@/lib/mock-data'

interface ResourceCardProps {
  resource: Resource
}

const typeIcons = {
  PDF: FileText,
  Video: Video,
  Article: FileText,
  Tool: FileCode,
  Template: Package,
}

const typeColors = {
  PDF: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  Video: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  Article: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  Tool: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Template: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = typeIcons[resource.type]

  return (
    <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className={typeColors[resource.type]}>
              {resource.type}
            </Badge>
            {resource.isFree ? (
              <Badge variant="outline" className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                Free
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                ${resource.price}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {resource.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {resource.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground">
          <Download className="h-4 w-4" />
          <span>{resource.downloads.toLocaleString()} downloads</span>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border pt-4">
        {resource.isFree ? (
          <Button className="w-full" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Free
          </Button>
        ) : (
          <Button className="w-full">
            <Lock className="mr-2 h-4 w-4" />
            Unlock for ${resource.price}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
