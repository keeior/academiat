import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Star, 
  Users, 
  Clock, 
  BookOpen, 
  Play, 
  CheckCircle,
  Award,
  ArrowLeft
} from 'lucide-react'
import { mockCourses } from '@/lib/mock-data'

export function generateStaticParams() {
  return mockCourses.map((course) => ({
    id: course.id,
  }))
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = mockCourses.find(c => c.id === id)

  if (!course) {
    notFound()
  }

  const curriculum = [
    { id: 1, title: 'Introduction to the Course', duration: '15 min', completed: true },
    { id: 2, title: 'Setting Up Your Environment', duration: '30 min', completed: true },
    { id: 3, title: 'Core Concepts and Fundamentals', duration: '45 min', completed: true },
    { id: 4, title: 'Hands-On Lab: Basic Techniques', duration: '60 min', completed: false },
    { id: 5, title: 'Advanced Topics', duration: '45 min', completed: false },
    { id: 6, title: 'Real-World Case Studies', duration: '40 min', completed: false },
    { id: 7, title: 'Best Practices and Guidelines', duration: '30 min', completed: false },
    { id: 8, title: 'Final Project', duration: '90 min', completed: false },
  ]

  const levelColors = {
    Beginner: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
    Intermediate: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
    Advanced: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Link href="/courses" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="outline" className={levelColors[course.level]}>
                    {course.level}
                  </Badge>
                  <Badge variant="outline">{course.category}</Badge>
                  {course.featured && (
                    <Badge className="bg-yellow-500 text-black">Featured</Badge>
                  )}
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {course.title}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-5 w-5" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <BookOpen className="h-5 w-5" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                    <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{course.instructor}</p>
                    <p className="text-sm text-muted-foreground">Course Instructor</p>
                  </div>
                </div>
              </div>

              {/* Enrollment card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Button size="lg" variant="secondary" className="gap-2">
                        <Play className="h-5 w-5" />
                        Preview Course
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {course.isFree ? (
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">Free</div>
                      ) : (
                        <div className="text-3xl font-bold text-foreground">${course.price}</div>
                      )}
                    </div>
                    <Link href="/auth/signup">
                      <Button className="w-full mb-3" size="lg">
                        {course.isFree ? 'Enroll for Free' : 'Buy Now'}
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" size="lg">
                      Add to Wishlist
                    </Button>
                    <div className="mt-6 space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Full lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Hands-on lab exercises</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">30-day money-back guarantee</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="curriculum" className="space-y-8">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-foreground">Course Progress</h3>
                      <Progress value={37.5} className="mt-3 h-2" />
                      <p className="mt-2 text-sm text-muted-foreground">3 of 8 lessons completed</p>
                    </div>

                    <div className="space-y-2">
                      {curriculum.map((lesson, index) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between rounded-lg border p-4 transition-colors ${
                            lesson.completed 
                              ? 'border-primary/30 bg-primary/5' 
                              : 'border-border hover:bg-muted/50'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                              lesson.completed 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {lesson.completed ? <CheckCircle className="h-4 w-4" /> : index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{lesson.title}</p>
                              <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                            </div>
                          </div>
                          <Button variant={lesson.completed ? 'outline' : 'default'} size="sm">
                            {lesson.completed ? 'Review' : 'Start'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overview">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">What you&apos;ll learn</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {[
                        'Understand core security concepts and principles',
                        'Set up and configure professional tools',
                        'Perform hands-on security assessments',
                        'Write comprehensive security reports',
                        'Apply best practices in real-world scenarios',
                        'Build a strong foundation for advanced topics',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Reviews coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
