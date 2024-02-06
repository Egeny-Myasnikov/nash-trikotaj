import s from './style.module.css'
export const Button = ({ type = 'button', children, shiny, onClick, style, className, activeClass, disabled = false }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${s.btn} ${s.btn__action} ${activeClass ? s.active : ''} ${className}`}
            style={{ '--paused': shiny ? 'running' : 'paused', style }}
            type={type}
        >
            {children}
        </button>
    )
}