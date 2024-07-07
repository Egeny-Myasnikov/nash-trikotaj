import s from './style.module.css'
export const FieldColor = ({ className = '', required = false, name }) => {
    return (
        <label className={`${s.fieldColorLabel}`} htmlFor={name}>

            <input
                type="color"
                className={`${s.fieldColor} ${className}`}
                required={required}
                name={name}
                id={name}
                onChange={(e) => console.log('value ---> ', e)}
            />
        </label>
    )
}