import s from './style.module.css'
export const BtnClose = ({onClick}) => {
    return (
        <button type='button' onClick={onClick} className={`${s.btnClose}`}></button>
    )
}