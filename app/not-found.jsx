'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const {back}=useRouter()
  return (
    <div>
      <h1>Страница не найдена!</h1>
      <br />
      <button onClick={()=>back()}>Вы можете вернуться назад</button>
      <br />
      <br />
      <p>или</p>
      <br />
      <Link href={'/'}>Перейти на главную страницу</Link>
    </div>
  )
}