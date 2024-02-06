import s from './style.module.css'
export const TitleSection = ({ children, className }) => {

    const [firstWord, ...all] = children.trim().split(' ');
    const otherText = all.join(' ')
    return (
        <h2 className={`${s.title} ${className}`}>
            <span className={s.firstWordTitle}>{firstWord} </span> {otherText}
        </h2>
    )
}