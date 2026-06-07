'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Mail, Link, BirdIcon, ExternalLink } from 'lucide-react'

const instructors = [
  {
    name: 'Jacob Chikuhwa',
    role: 'Principal Consultant & Author',
    image: '/instructor.jpg',
    bio: 'Economist and administrator with over 40 years of experience in public and private sectors. Former SIDA Consultant, Bureau Director at Swedish Postal Services, and UN IOM Sponsored Consultant. Author of seven books on socio-economic development and business management.',
    specialties: ['Economics', 'Management Information Systems', 'Governance', 'Finance'],
    longBio: `Worked as an economist and administrator in the public and private sectors for over 40 years and have lectured on economics, finance and management information systems.
    
    • Was SIDA Consultant on Zimbabwe (Jan – Sept 1990)
    • Bureau Director in the Internal Audit, Swedish Postal Services (June 1994 – Aug. 1999)
    • Was a U.N. International Organisation for Migration Sponsored Consultant in Zimbabwe as Financial Controller for Small— and Medium-size companies (Oct 1999 – Dec. 2001)
    
    OTHER CREDENTIALS:
    Full time author/ consultant. Published five (5) books on Zimbabwe’s socio-economic development and two (2) on Business Management. "A Crisis of Governance: Zimbabwe" was recommended for postgraduate students in African Studies in the USA.
    
    HOBBIES:
    Soccer and Artistic expression that includes fine art and stone sculptures.`,
  },
  {
    name: 'Dr. Sarah Moyo',
    role: 'Head of Finance Department',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah',
    bio: 'With over 15 years in corporate finance and academic research, Dr. Moyo brings deep expertise in investment strategies and financial modeling.',
    specialties: ['Corporate Finance', 'Investment Analysis', 'Accounting'],
  },
  {
    name: 'Prof. James Ndlovu',
    role: 'Business Administration Lead',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=James',
    bio: 'Prof. Ndlovu is a renowned expert in strategic management and organizational leadership, having consulted for top-tier African corporations.',
    specialties: ['Strategic Planning', 'Leadership', 'Management'],
  },
  {
    name: 'Dr. Emma Chikwava',
    role: 'Data Science Specialist',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Emma',
    bio: 'Dr. Emma Chikwava specializes in machine learning and statistical analysis, bridging the gap between raw data and business intelligence.',
    specialties: ['Machine Learning', 'Python', 'Statistical Analysis'],
  },
  {
    name: 'Prof. David Maponga',
    role: 'DBMS Expert',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=David',
    bio: 'Prof. Maponga has designed database systems for large-scale government and industrial applications across the SADC region.',
    specialties: ['SQL', 'NoSQL', 'Database Architecture'],
  },
  {
    name: 'Tendai Makoni',
    role: 'Wellness & Meditation Instructor',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Tendai',
    bio: 'Tendai has spent a decade studying mindfulness techniques and facilitates retreats focusing on holistic well-being for professionals.',
    specialties: ['Mindfulness', 'Meditation', 'Stress Management'],
  },
  {
    name: 'Lisa Muponda',
    role: 'Manpower Development Consultant',
    image: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lisa',
    bio: 'Lisa is an expert in workforce planning and talent acquisition, with a focus on empowering emerging talent in competitive industries.',
    specialties: ['HR Strategy', 'Talent Acquisition', 'Recruitment'],
  }
]

export default function InstructorsPage() {
  const featuredInstructor = instructors[0]
  const otherInstructors = instructors.slice(1)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Faculty & Leadership
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Meet the dedicated professionals and academic experts leading our programs at Akademia.
            </p>
          </div>
        </section>

        {/* Featured Instructor */}
        <section className="py-16 bg-muted/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-primary/20 shadow-xl">
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 relative h-[400px] lg:h-auto">
                    <img 
                      src={featuredInstructor.image} 
                      alt={featuredInstructor.name}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all hover:grayscale-0"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 uppercase tracking-widest px-3 py-1">Featured Leadership</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{featuredInstructor.name}</h2>
                    <p className="text-xl text-primary font-medium mb-6">{featuredInstructor.role}</p>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p className="whitespace-pre-line">
                        {featuredInstructor.longBio}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {featuredInstructor.specialties.map(specialty => (
                        <Badge key={specialty} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-4">
                      <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                        <Mail className="h-5 w-5" />
                      </button>
                      <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                        <Link className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Other Instructors */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-10">Academic Faculty</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherInstructors.map((instructor, index) => (
                <motion.div
                  key={instructor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="h-full group overflow-hidden border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <Avatar className="h-20 w-20 border-2 border-primary/10">
                            <AvatarImage src={instructor.image} alt={instructor.name} />
                            <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{instructor.name}</h3>
                            <p className="text-sm text-primary font-medium">{instructor.role}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {instructor.bio}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {instructor.specialties.map(specialty => (
                            <Badge key={specialty} variant="secondary" className="text-[10px] uppercase tracking-wider">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
