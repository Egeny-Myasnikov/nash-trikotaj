export const SVGSprite = ({ id, className, onClick }) => {
    return (
        <svg className={className} onClick={onClick}>
            <use xlinkHref={`icons.svg#${id}`} />
        </svg>
    )
}
