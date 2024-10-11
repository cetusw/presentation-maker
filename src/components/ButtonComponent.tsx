import style from './ButtonComponent.module.css';

type ButtonComponentProps = {
    text?: string;
    textClassName?: string;
    onClick?: () => void;
    icon?: string;
    alt?: string;
    className?: string
    disabled?: boolean;
}

export function ButtonComponent({ text, onClick, icon, alt, className, disabled = false, textClassName }: ButtonComponentProps) {
    const buttonClass = `${style.button} ${className || ''}`;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <img className={style.buttonIcon} src={icon} alt={alt}/>}
            <span className={textClassName}>{text}</span>
        </button>
    );
}