'use client'
 
import Link from 'next/link'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  MessageSquare, 
  Search, 
  TrendingUp, 
  Award,
  PlusCircle,
  Hash
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

const trendingTopics = [
  '#FinanceBasics',
  '#DataScience2024',
  '#BusinessStrategy',
  '#MindfulnessTips',
  '#DBMSMasters',
  '#CareerGrowth'
]

const recentDiscussions = [
  {
    id: 1,
    title: 'Tips for effective financial modeling?',
    author: 'Michael S.',
    category: 'Finance',
    replies: 12,
    likes: 45,
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=MichaelS'
  },
  {
    id: 2,
    title: 'How to handle large datasets in Python?',
    author: 'Sarah J.',
    category: 'Data Science',
    replies: 8,
    likes: 32,
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=SarahJ'
  },
  {
    id: 3,
    title: 'Best practices for workforce planning?',
    author: 'David R.',
    category: 'Manpower',
    replies: 15,
    likes: 56,
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=DavidR'
  }
]

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Community Forums
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                  Connect with fellow students, share insights, and learn together in the Akademia community.
                </p>
              </div>
              <Button size="lg" className="shrink-0">
                <PlusCircle className="mr-2 h-5 w-5" />
                Start Discussion
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search discussions..." className="pl-10" />
                </div>

                <Tabs defaultValue="recent" className="w-full">
                  <TabsList>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  </TabsList>
                  <TabsContent value="recent" className="mt-6 space-y-4">
                    {recentDiscussions.map((discussion) => (
                      <Card key={discussion.id} className="hover:border-primary/30 transition-colors cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <Avatar className="h-10 w-10 shrink-0">
                              <AvatarImage src={discussion.avatar} alt={discussion.author} />
                              <AvatarFallback>{discussion.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="secondary" className="text-[10px]">{discussion.category}</Badge>
                                <span className="text-xs text-muted-foreground">Posted by {discussion.author}</span>
                              </div>
                              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {discussion.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  <span>{discussion.replies} replies</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <TrendingUp className="h-4 w-4" />
                                  <span>{discussion.likes} likes</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 pt-0">
                    {trendingTopics.map(topic => (
                      <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-primary/10">
                        {topic}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Active Members</span>
                      </div>
                      <span className="font-bold">2,450</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MessageSquare className="h-4 w-4" />
                        <span>Total Topics</span>
                      </div>
                      <span className="font-bold">1,820</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>Experts Only</span>
                      </div>
                      <span className="font-bold">156</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-xl bg-primary/10 p-6 text-center">
                  <h3 className="font-bold text-foreground mb-2">Be an Expert!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contribute valuable answers to earn expert badges and certificates.
                  </p>
                  <Link href="/getting-started">
                    <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
