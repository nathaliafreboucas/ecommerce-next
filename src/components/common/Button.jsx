export const Button = ({type, label, onClick, dataAttributes, color, id}) => {
    return (
        <button
            className={`${color === 'white' ? 'botaoBranco' : 'botoes'}`}
            type={type}
            id={id}
            onClick={onClick}
            {...dataAttributes}
        >
            {label}
        </button>
    )
}