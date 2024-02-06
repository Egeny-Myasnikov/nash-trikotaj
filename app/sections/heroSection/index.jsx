'use client'
import { Slider } from '@/app/components/slider'
import s from './style.module.css'
import Image from 'next/image'
export const HeroSection = () => {
    const sliderList = [
        {src: 'trikotazh.jpg', alt:'trikotazh'},
        {src: '1.jpg', alt:'1'},
        {src: 'trikotazh.jpg', alt:'trikotazh'},
        {src: '2.jpg', alt:'2'},
]
    const size = 2400
    return (
        <section className={`${s.heroSection}`}>
            <Slider>
            {
                sliderList ?
                sliderList.map(({src, alt}, idx)=>(
                    <div key={idx} className={s.imgWrap}>
                    <Image
                        className={s.img}
                        src={`/imgs/${src}`}
                        width={size}
                        height={size}
                        alt={alt}
                    />
                </div>
                )):
                'Нет слайдера'
            }
            </Slider>
        </section>
    )
}