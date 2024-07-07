
import { TitleSection } from '@/app/components/UI/titleSection'
import { LoginForm } from '../../components/loginForm'
import s from './style.module.css'
export const LoginSection = async ({ loginAction }) => {
    return (
        <section className={`${s.authSection}`}>
            <TitleSection>Вход</TitleSection>
            <LoginForm loginAction={loginAction} />
        </section>
    )
}