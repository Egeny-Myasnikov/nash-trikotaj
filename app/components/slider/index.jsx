'use client'
import { BtnCircle } from '@/app/components/UI/btnCircle'
import s from './style.module.css'
import { useRef } from 'react'

export const Slider = ({ children }) => {
    const listRef = useRef(null)

    const foo = (direction) => {
        const listCurrentScroll = listRef.current.scrollLeft
        const listChildWidth = listRef.current.firstElementChild.offsetWidth + 60
        const endScroll = listChildWidth * (children.length - 1)

        const move = (direction) => {
            switch (direction) {
                case 'left':
                    listCurrentScroll === 0 ?
                        listRef.current.scrollTo({ left: endScroll, behavior: 'instant', }) :
                        listRef.current.scrollTo({ left: listCurrentScroll - listChildWidth, behavior: 'instant', })
                    visible(true)
                    return
                case 'right':
                    listCurrentScroll === endScroll ?
                        listRef.current.scrollTo({ left: 0, behavior: 'instant', }) :
                        listRef.current.scrollTo({ left: listCurrentScroll + listChildWidth, behavior: 'instant', })
                    visible(true)
                    return
                default:
                    return
            }
        }

        const visible = (visible) => {
            if (visible) {
                listRef.current.style.opacity = '1'
                listRef.current.style.transform = 'translateX(0)'

            } else {
                listRef.current.style.opacity = '0'
                listRef.current.style.transform = 'translateX(100%)'
            }
        }

        visible(false)

        setTimeout(() => {
            move(direction)
        }, 500)
    }

    return (
        <div className={s.slider}>
            <ul ref={listRef} className={s.list}>
                {children}
            </ul>

            <div className={s.btnWrap}>
                <BtnCircle
                    className={`${s.btn} ${s.btnPrev}`}
                    onClick={() => foo('left')}>
                    <span className={`${s.arrow} ${s.arrowLeft}`}></span>
                </BtnCircle>
                <BtnCircle
                    className={`${s.btn} ${s.btnNext}`}
                    onClick={() => foo('right')}>
                    <span className={`${s.arrow} ${s.arrowRight}`}></span>
                </BtnCircle>
            </div>
        </div>
    )
}