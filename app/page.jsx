import s from './page.module.css'
import { HeroSection } from './sections/heroSection'
import { CatalogSection } from './sections/catalogSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CatalogSection />
    </>
  )
}
