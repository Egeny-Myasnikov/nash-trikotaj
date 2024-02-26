import Link from 'next/link'
import s from './style.module.css'
import Image from 'next/image'
export const Logo = ({ onClick, className }) => {
    return (
        <Link onClick={onClick} href={'/'} className={`${s.logo} ${className}`}>
            <Image src={'/logo-header.svg'} width={150} height={70} alt='логотип hlop-odejda.ru Саратов' />
        </Link>
    )
}