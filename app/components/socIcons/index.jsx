import Link from 'next/link'
import s from './style.module.css'
import { SVGSprite } from '../SVGSprite'
export const SocIcons = () => {
const links = [
    {href:'https://vk.com/', id:'vk', title:'VK', fill:false},
    {href:'/', id:'whatsapp', title:'WhatsApp', fill:true},
    {href:'/', id:'telegram',title:'Telegram', fill:false},
]
    return (
        <div className={s.socIcons}>
            {links.map(({href, id, fill, title })=>(
            <Link key={id} className={s.socIconsLink} href={href} title={title} target='_blank'>
             <SVGSprite className={`${s.icon} ${fill ? s.icon__onlyFill: s.icon__onlyStroke }`} id={id} />
            </Link>
            ))}
        </div>

    )
}