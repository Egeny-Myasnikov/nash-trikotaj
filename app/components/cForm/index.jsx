'use client'
import { useState } from 'react'
import { Form } from '../UI/MyForm'
import { MyField } from '../UI/myField'
import s from './style.module.css'
import { Button } from '../UI/button'
import { Checkbox } from '../UI/checkbox'
export const CForm = ({ title, descr = '', className='' }) => {
    const [fieldName, setFieldName] = useState('')
    const [fieldPhone, setFieldPhone] = useState('')
    const [checked, setChecked] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()
        console.log('formHandler');
    }
    return (
        <div className={`${s.CForm} ${className}`}>
            <div className={s.header}>
                <h3 className={s.title}>{title}</h3>
                <h4 className={s.description}>{descr}</h4>
            </div>
            <Form
                onSubmit={formHandler}
                className={s.form}
            >
                <div className={s.row}>
                    <MyField
                        className={s.field}
                        onChange={(e) => setFieldName(e.target.value)}
                        value={fieldName}
                        placeholder='Имя'
                        name='userName'
                    />
                    <MyField
                        className={s.field}
                        type='tel'
                        onChange={(e) => setFieldPhone(e.target.value)}
                        value={fieldPhone}
                        placeholder='Телефон'
                        name='userPhone'
                    />
                </div>
                <div className={s.row}>
                    <Checkbox
                        className={`${s.checkbox}`}
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        text='Нажимая на кнопку, Вы подтверждаете ознакомление с политикой конфиденциальности и даете согласие на обработку персональных данных.'
                    />
                    <Button
                        className={`${s.btn}`}
                        onClick={formHandler}
                        disabled={checked}
                        type='submit'
                    >Отправить</Button>
                </div>
            </Form>

        </div>
    )
}