import { Hero } from '@/components/sections/Hero'
import { Statement } from '@/components/sections/Statement'
import { Why } from '@/components/sections/Why'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Marquee } from '@/components/sections/Marquee'
import { Science } from '@/components/sections/Science'
import { Ingredients } from '@/components/sections/Ingredients'
import { Testimonials } from '@/components/sections/Testimonials'
import { Order } from '@/components/sections/Order'
import { Wholesale } from '@/components/sections/Wholesale'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Why />
      <HowItWorks />
      <Marquee />
      <Science />
      <Ingredients />
      <Testimonials />
      <Order />
      <Wholesale />
      <FAQ />
    </>
  )
}
