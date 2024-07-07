import { LinkWithArrow } from '../UI/linkWithArrow'
import s from './style.module.css'
export const BreadCrumbs = ({ breadCrumbs }) => {
    return (
        <ul className={`${s.breadCrumbs}`}>
            {
                breadCrumbs.map(({ title, path, btnFn }, idx) => {
                    return (<li key={idx}>
                        <LinkWithArrow
                            title={`Перейти на страницу ${title}`}
                            href={path}
                            btnFn={btnFn}
                            right
                        > {title}
                        </LinkWithArrow>
                    </li>)
                })
            }
        </ul>
    )
}