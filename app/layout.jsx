import localFont from 'next/font/local'
import './globals.css'
import { Header } from './parts/Header'
import { Footer } from './parts/Footer'

const BadScript = localFont({
  src: [{ path: '../public/font/Bad_Script/BadScript-Regular.ttf' }],
  variable: '--font-bad-script',
})
const Montserrat = localFont({
  src: [{ path: '../public/font/Montserrat/Montserrat.ttf' }],
  variable: '--font-montserrat',
})

export const metadata = {
  title: {
    default: 'Трикотаж из хлопка в Саратове "ХлопОдежда"',
    template: '%s | "ХлопОдежда" трикотаж из хлопка в Саратове'
  },
  description: ' Магазин "ХлопОдежда" предлагает вам купить в Саратове мужскую, женскую, детскую одежду от производителя "Богатырь" по привлекательным ценам',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${Montserrat.variable} ${BadScript.variable}`}>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
