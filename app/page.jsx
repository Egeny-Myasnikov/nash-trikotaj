import { HomeHero } from './sections/homeHero'
import { CatalogSection } from './sections/catalogSection'
import { ContactsComponent } from './contacts/components/contacts'
import { DivLine } from './components/UI/divLine'

export default function Home() {
  return (
    <>
      <HomeHero />
      <DivLine />
      <CatalogSection />
      <DivLine />
      <ContactsComponent />
    </>
  )
}
