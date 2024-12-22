import style from './LinkButtonComponent.module.css'
import {Link} from 'react-router'

type LinkButtonComponentProps = {
    text?: string
    textClassName?: string
    link: string
    className?: string
}

function LinkButtonComponent({ text, textClassName, link, className }: LinkButtonComponentProps) {
    const buttonClass = `${style.button} ${className || ''}`

    return (
        <Link
            to={link}
            className={buttonClass}
        >
            <span
                className={textClassName}
            >
                {text}
            </span>
        </Link>
    )
}

export {
    LinkButtonComponent,
}