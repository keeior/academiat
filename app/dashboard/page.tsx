'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Clock, 
  Award, 
  Flame, 
  TrendingUp, 
  Play, 
  Download,
  ExternalLink,
  Calendar
} from 'lucide-react'
import { mockUser, mockCourses, mockProgress, mockResources } from '@/lib/mock-data'

export default function DashboardPage() {
  const enrolledCourses = mockCourses.filter(c => mockUser.enrolledCourses.includes(c.id))
  const completedCount = mockUser.completedCourses.length
  const inProgressCount = mockUser.enrolledCourses.length - completedCount

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Welcome section */}
        <section className="border-b border-border bg-muted/30 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                  <AvatarFallback>{mockUser.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Welcome back, {mockUser.name.split(' ')[0]}!</h1>
                  <p className="text-muted-foreground">Continue your academic journey with Akademia.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-orange-500">
                  <Flame className="h-6 w-6" />
                  <div>
                    <p className="text-2xl font-bold">{mockUser.streak}</p>
                    <p className="text-xs text-muted-foreground">Study streak</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-6 w-6" />
                  <div>
                    <p className="text-2xl font-bold">{mockUser.totalHours}h</p>
                    <p className="text-xs text-muted-foreground">Learning time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats overview */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{mockUser.enrolledCourses.length}</p>
                    <p className="text-sm text-muted-foreground">Enrolled Programs</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{inProgressCount}</p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                    <Award className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{completedCount}</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                    <Award className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{mockUser.certificates.length}</p>
                    <p className="text-sm text-muted-foreground">Certificates</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="courses" className="space-y-6">
              <TabsList>
                <TabsTrigger value="courses">My Programs</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="saved">Saved Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">Continue Academic Journey</h2>
                  <Link href="/courses">
                    <Button variant="outline" size="sm">Browse More Programs</Button>
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {enrolledCourses.map((course) => {
                    const progress = mockProgress.find(p => p.courseId === course.id)
                    const isCompleted = mockUser.completedCourses.includes(course.id)

                    return (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-40 sm:h-auto sm:w-48 shrink-0">
                            <Image
                              src={course.thumbnail}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                            {isCompleted && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                <Badge className="bg-green-600">Completed</Badge>
                              </div>
                            )}
                          </div>
                          <CardContent className="flex flex-1 flex-col p-4">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-semibold text-foreground line-clamp-1">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">{course.instructor}</p>
                              </div>
                              <Badge variant="outline">{course.level}</Badge>
                            </div>

                            <div className="mt-4 flex-1">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-medium">{progress?.percentage || 0}%</span>
                              </div>
                              <Progress value={progress?.percentage || 0} className="mt-2 h-2" />
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>Last Accessed: {progress?.lastAccessed || 'Never'}</span>
                              </div>
                              <Link href={`/courses/${course.id}`}>
                                <Button size="sm" variant={isCompleted ? 'outline' : 'default'}>
                                  {isCompleted ? 'Review' : 'Continue'}
                                  <Play className="ml-1 h-3 w-3" />
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground">Academic Certificates</h2>

                {mockUser.certificates.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {mockUser.certificates.map((cert) => (
                      <Card key={cert.id}>
                        <CardHeader className="pb-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 mb-3">
                            <Award className="h-6 w-6 text-yellow-500" />
                          </div>
                          <CardTitle className="text-base">{cert.courseName}</CardTitle>
                          <CardDescription>
                            Issued on {new Date(cert.issuedAt).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-xs text-muted-foreground mb-4">
                            Credential ID: {cert.credentialId}
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Download className="mr-1 h-3 w-3" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Share
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Award className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <p className="mt-4 text-muted-foreground">Complete a program to earn your first certificate!</p>
                      <Link href="/courses">
                        <Button className="mt-4">Browse Programs</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="saved" className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground">Learning Resources</h2>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {mockResources.slice(0, 3).map((resource) => (
                    <Card key={resource.id}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="outline">{resource.type}</Badge>
                          {resource.isFree ? (
                            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                              Free
                            </Badge>
                          ) : (
                            <Badge variant="outline">${resource.price}</Badge>
                          )}
                        </div>
                        <CardTitle className="text-base mt-2">{resource.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button className="w-full" variant={resource.isFree ? 'outline' : 'default'}>
                          <Download className="mr-2 h-4 w-4" />
                          {resource.isFree ? 'Download' : 'Purchase'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Link href="/resources">
                    <Button variant="outline">View All Resources</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
