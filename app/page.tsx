import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedCourses } from '@/components/sections/featured-courses'
import { CategoriesSection } from '@/components/sections/categories-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CtaSection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCourses />
        <CategoriesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
