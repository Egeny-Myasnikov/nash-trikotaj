import { LinkWithArrow } from '../UI/linkWithArrow'
import s from './style.module.css'
export const BreadCrumbs = ({ breadCrumbs }) => {
    return (
        <ul className={`${s.breadCrumbs}`}>
            {
                breadCrumbs.map(({ title, path }, idx) => {
                    return <li key={idx}><LinkWithArrow title={`Перейти на страницу ${title}`} href={path} right> {title} </LinkWithArrow></li>
                })
            }
        </ul>
    )
}