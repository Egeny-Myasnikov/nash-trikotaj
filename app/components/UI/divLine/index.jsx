import s from './style.module.css'
export const DivLine = () => {
    return (
        <div className={`${s.lineWrap}`}>
            <span className={`${s.line}`}></span>
        </div>
    )
}