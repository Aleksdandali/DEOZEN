import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Animations } from '@/components/ui/Animations'

export const metadata: Metadata = {
  title: 'DEOZEN — 15 днів без запаху. Одне нанесення.',
  description: 'Натуральний крем-дезодорант на китайських травах. До 15 днів захисту після одного нанесення. Без алюмінію, без парабенів. Клінічно підтверджено. 597 грн.',
  openGraph: {
    title: 'DEOZEN — 15 днів без запаху. Одне нанесення.',
    description: 'До 15 днів захисту після одного нанесення. Без алюмінію.',
    images: ['/og-image.jpg'],
    locale: 'uk_UA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <CustomCursor />
        <StickyCTA />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Animations />
      </body>
    </html>
  )
}
