import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Users, Clock, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Course } from '@/lib/mock-data'

interface CourseCardProps {
  course: Course
  variant?: 'default' | 'compact'
}

export function CourseCard({ course, variant = 'default' }: CourseCardProps) {
  const levelColors = {
    Beginner: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
    Intermediate: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
    Advanced: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  }

  if (variant === 'compact') {
    return (
      <Link href={`/courses/${course.id}`}>
        <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {course.isFree ? (
              <Badge className="absolute left-3 top-3 bg-green-600 text-white">Free</Badge>
            ) : (
              <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">${course.price}</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <Badge variant="outline" className={cn('mb-2', levelColors[course.level])}>
              {course.level}
            </Badge>
            <h3 className="line-clamp-2 font-semibold text-foreground group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{course.instructor}</p>
            <div className="mt-3 flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
              <span className="text-muted-foreground">({course.reviews.toLocaleString()})</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-xl hover:border-primary/50">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {course.isFree ? (
            <Badge className="absolute left-4 top-4 bg-green-600 text-white">Free</Badge>
          ) : (
            <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">${course.price}</Badge>
          )}
          {course.featured && (
            <Badge className="absolute right-4 top-4 bg-yellow-500 text-black">Featured</Badge>
          )}
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className={cn(levelColors[course.level])}>
              {course.level}
            </Badge>
            <Badge variant="outline">{course.category}</Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {course.description}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
              <AvatarFallback>{course.instructor[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{course.instructor}</span>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border bg-muted/30 px-5 py-4">
          <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-foreground">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.students.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{course.lessons} lessons</span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
