import s from './style.module.css'
export const TitlePage = ({ children }) => {
    return (
        <h1 className={`${s.title}`}> {children}</h1>
    )
}