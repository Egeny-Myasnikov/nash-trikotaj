import s from './page.module.css'
import { HeroSection } from './sections/heroSection'
import { CatalogSection } from './sections/catalogSection'
import { ContactsComponent } from './contacts/components/contacts'
import { DivLine } from './components/UI/divLine'

// import { PrismaClient } from "@prisma/client"


// const prisma = new PrismaClient()

// async function catalog() {

//   const getAdmin = async () => {
//     const admin = await prisma.admin.findMany()
//     console.log('admin ---> ', admin)
//   }
//   getAdmin()
// }

// catalog()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })


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
