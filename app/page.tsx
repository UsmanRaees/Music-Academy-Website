"use client"
import HeroSection from "@/components/HeroSection"
import FeaturedCourses from "@/components/FeaturedCourses"
import WhyChooseUs from "@/components/WhyChooseUs"
import SchoolTestimonialCards from "@/components/TestimonialCards"
import UpcomingWebinars from "@/components/UpcomingWebinars"
import Instructors from "@/components/Instructors"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.3]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <SchoolTestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  )
}

export default page