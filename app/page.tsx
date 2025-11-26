import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { LogoMarquee } from "@/components/home/LogoMarquee"
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel"
import { CTAGlass } from "@/components/home/CTAGlass"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/20 relative">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Features />
      <TestimonialCarousel />
      <CTAGlass />
      <Footer />
    </main>
  )
}
