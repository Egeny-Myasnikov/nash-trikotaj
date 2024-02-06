import s from './style.module.css'
export const BtnCircle = ({ children, onClick, onTouchEnd, onTouchStart, className }) => {
    return (
        <button
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={onClick}
        className={`${className} ${s.btn}`}
        type='button'
        >
            {children}
        </button>
    )
}