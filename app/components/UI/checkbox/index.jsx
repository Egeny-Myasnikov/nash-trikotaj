'use client'
import s from './style.module.css'
export const Checkbox = ({text, checked, onChange, className}) => {
    const onChangeHandler=()=>{
        onChange && onChange()
    }
    return (
        <label  className={`${s.checkboxWrap} ${className}`}>
            <input
              className={`${s.checkboxDef}`}
              type="checkbox"
              name="agriment"
              checked={checked}
              onChange={onChangeHandler}

              />
            <span className={`${s.checkbox} ${checked ? s.active : ''}`}></span>
            <p  className={`${s.checkboxText}`}>{text}</p>
        </label>
    )
}