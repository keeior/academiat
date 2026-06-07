'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    category: 'eLearning Basics',
    questions: [
      {
        q: 'What is eLearning?',
        a: 'E-Learning is electronic learning, and it typically includes a combination of electronic media and educational technology. E-learning is computer based and makes use of multimedia sources such as text, audio, animations, images, etc. It is an Internet or an extranet web-based learning that combines information and communication systems on either a free standing or network-based Learning Management System (LMS).',
      },
      {
        q: 'Why should I consider eLearning-based training?',
        a: 'E-learning is a fantastic way to learn new skills, expand your horizons and access learning courses at a much cheaper price—all from the comfort of your own home. It saves time and money spent on printed material and classroom supplies. Classroom training hinders working schedules, while eLearning gives you the freedom to take the course at the place and time of your choice.',
      },
      {
        q: 'Is online learning a success?',
        a: 'Online learning is certainly the more effective option for students, but it’s also better for the environment. Online courses equate to an average of 90% less energy and 85% fewer CO2 emissions per student than traditional in-person courses.',
      },
      {
        q: 'How can I master online learning?',
        a: 'Practice time management. The program teaches innovative tech like AI and machine learning while empowering students with necessary skills for jobs and better employability in the digital economy.',
      },
    ],
  },
  {
    category: 'Courses & Customisation',
    questions: [
      {
        q: 'Are eLearning courses available in languages other than English?',
        a: 'Yes, of course! E-learning courses can be made available in various languages such as French, Spanish, Dutch, Arabic and many more. You can easily translate your eLearning course into multiple languages if you need cross-culture training in your organisation.',
      },
      {
        q: 'Can I customise eLearning courses?',
        a: 'Yes, eLearning courses can be customised to your specifications. Customisation helps in providing a better understanding of the processes and principles in an organisation. You can opt for a customised eLearning course when your training needs are unique and confidential.',
      },
      {
        q: 'Can I try it before I purchase?',
        a: 'Yes, you can! We can provide an easy-to-access demo to anyone interested in Better Business.',
      },
      {
        q: 'How can we effect a custom eLearning course?',
        a: 'We can start educating our team so that they can take on the duties of eLearning course creation or bring in a vendor that aligns with our business needs, for example video and eLearning or podcast.',
      },
    ],
  },
  {
    category: 'Requirements & Cost',
    questions: [
      {
        q: 'What are the hardware and software requirements for online training?',
        a: 'To begin online training, you need a Learning Management System (LMS) to host courses and authoring tools like Articulate Storyline or Adobe Captivate to create them. Learners need a computer or laptop with WLAN/Internet access and their login details.',
      },
      {
        q: 'How much does an eLearning course cost?',
        a: 'Tutorial purchases start at a minimum of US$4 for Basic Level, US$14 for Intermediate Level, and US$20 for Advanced Level, depending on the topic. For developers, a 45-minute course costs about US$2,625 to develop over 2-6 weeks, but it serves as a one-time investment that can be used repeatedly.',
      },
    ],
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-foreground hover:text-primary transition-colors"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown className={cn('h-5 w-5 shrink-0 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96 pb-4' : 'max-h-0')}>
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FaqsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Find answers to common questions about Akademia, enrollment, courses, and more.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {faqs.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="mb-10"
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">{section.category}</h2>
                <div className="rounded-lg border border-border bg-card px-6">
                  {section.questions.map((faq) => (
                    <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
