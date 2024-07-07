'use client'
import { useState } from 'react';
import Image from 'next/image'
import s from './style.module.css'
export const FieldFile = ({ className = '', required, name }) => {
    const [result, setResult] = useState('/imgs/no-photo.png')

    const change = (e) => {
        if (!e.target.files[0]) {
            setResult('/imgs/no-photo.png')
            return
        }
        const reader = new FileReader()
        reader.onloadend = function () {
            setResult(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }


    return (
        <div className={`${s.wrap}`}>
            <input
                type="file"
                accept="image/*"
                className={`${s.fieldFile} ${className}`}
                required={required}
                name={name}
                onChange={(e) => change(e)}
            />
            <div className={`${s.imgWrap}`}>
                <Image src={result} alt='imgPrev' width={200} height={300} className={`${s.imgPrev}`} />
            </div>
        </div>
    )
}