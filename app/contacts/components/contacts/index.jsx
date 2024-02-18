import { SocIcons } from '@/app/components/socIcons'
import s from './style.module.css'
import Link from 'next/link'
import { DropDownList } from '@/app/components/dropDownList'
export const ContactsComponent = ({ mapIsOpen }) => {
    return (
        <address className={`${s.address}`}>

            <p>Приходите к нам по адресу: <br /> <strong className={`${s.addressStrong}`}> г. Саратов, Крымская, 5</strong></p>
            <DropDownList btnAtiveText='Развернуть карту' btnNotActiveText='Свернуть Карту'>

                <iframe className={`${s.map}`} src="https://yandex.ru/map-widget/v1/?ll=45.926377%2C51.489162&mode=poi&poi%5Bpoint%5D=45.927189%2C51.489463&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D69567444196&z=18.35" allowFullScreen={true} ></iframe>

            </DropDownList>

            <p>Звоните нам по телефону:
                <br />
                <Link className={`${s.linkTel}`} href='tel:+79001658659'>8 (900) 165-86-59</Link>
            </p>

            <p>Пишите нам в социальных сетях:
                <br />
                <SocIcons className={`${s.socicons}`} />
            </p>

        </address>
    )
}