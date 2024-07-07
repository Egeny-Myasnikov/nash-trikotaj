import { TitlePage } from '@/app/components/UI/titlePage'
import s from './style.module.css'
import { logoutAction } from '../../login/actions/logoutAction'
import { Logout } from '../../login/components/logout'
import { auth } from '@/app/utils/auth/auth'
export const AdminHero = async () => {
    const { name } = await auth()
    return (
        <section className={`${s.adminHero}`}>
            <TitlePage>Привет {name}!</TitlePage>
            <Logout action={logoutAction} />
        </section>
    )
}