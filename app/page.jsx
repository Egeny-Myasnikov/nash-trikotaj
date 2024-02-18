import s from './page.module.css'
import { HeroSection } from './sections/heroSection'
import { CatalogSection } from './sections/catalogSection'
import { ContactsComponent } from './contacts/components/contacts'
import { DivLine } from './components/UI/divLine'

export default function Home() {
  return (
    <>
      <HeroSection />
      <DivLine />
      <CatalogSection />
      <DivLine />
      <ContactsComponent />
    </>
  )
}
