import Link from 'next/link'
import s from './style.module.css'
export const LinkWithArrow = ({ children, className, href, right = false, title }) => {
    const styleRight = {
        '--leftBefore': ' var(--leftBefore-direction__right)',
        '--leftAfter': 'var(--leftAfter-direction__right)',
        '--border-right': 'var(--border-right-direction__right)',
        '--border-left': 'var(--border-left-direction__right)',
        marginRight: '45px',
    }
    const styleLeft = {
        '--leftBefore': ' var(--leftBefore-direction__left)',
        '--leftAfter': 'var(--leftAfter-direction__left)',
        '--border-right': 'var(--border-right-direction__left)',
        '--border-left': 'var(--border-left-direction__left)',
        marginLeft: '45px',
    }
    return (
        <Link
            title={title}
            style={right ? styleLeft : styleRight}
            className={`${s.link} ${className}`}
            href={href}
        >
            {children}
        </Link>
    )
}