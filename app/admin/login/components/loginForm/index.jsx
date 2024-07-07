'use client'
import { useState } from 'react'
import s from './style.module.css'
import { MessageStatus } from '@/app/admin/components/messageStatus'
export const LoginForm = ({ loginAction }) => {
    const [phoneValue, setPhoneValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [message, setMessage] = useState('')


    const submitForm = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(e.target)
        const login = await loginAction(dataForm)

        if (login?.status === 'error') return setMessage({ text: login?.message, status: login?.satus })
        e.target.reset()
    }

    return (
        <>
            <form className={`${s.authForm}`} onSubmit={submitForm}>

                <div className={`${s.fields}`}>
                    <div className={`${s.formControl}  ${phoneValue !== '' ? s.formControlActive : ''}`}>
                        <input
                            required
                            className={`${s.fieldText}`}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            onChange={(e) => setPhoneValue(e.target.value)}
                            value={phoneValue}
                            id='phone'
                        />
                        <label
                            className={`${s.labelText} ${phoneValue !== '' ? s.labelTextActive : ''}`}
                            htmlFor="phone"
                        > Имя </label>
                    </div>

                    <div className={`${s.formControl}  ${passwordValue !== '' ? s.formControlActive : ''}`}>
                        <input
                            required
                            className={`${s.fieldText}`}
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            onChange={(e) => setPasswordValue(e.target.value)}
                            value={passwordValue}
                            id='password'
                        />
                        <label
                            className={`${s.labelText} ${passwordValue !== '' ? s.labelTextActive : ''}`}
                            htmlFor="password"
                        > Пароль </label>
                    </div>
                </div>

                <div className={`${s.btns}`}>
                    <button className={`${s.btn}`} type='submit'> Войти </button>
                    <button className={`${s.btn} ${s.btnReset}`} type='reset'> Отчистить </button>
                </div>

            </form>
            <MessageStatus message={message} setMessage={setMessage} />
        </>

    )
}