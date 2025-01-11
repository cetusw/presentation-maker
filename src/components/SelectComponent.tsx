import style from './SelectComponent.module.css'

type SelectComponentProps = {
    options: string[]
    className?: string
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    startValue: string | number
}

function SelectComponent({ options, className, onChange, startValue }: SelectComponentProps) {
    const selectClass = `${style.select} ${className || ''}`

    return (
        <select className={selectClass} onChange={onChange} value={startValue}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export {
    SelectComponent,
}