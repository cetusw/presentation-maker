import style from './ButtonComponent.module.css';

type ButtonComponentProps = {
    text?: string;
    onClick?: () => void;
    icon?: string;
    alt?: string;
    className?: string
    disabled?: boolean;
}

export function ButtonComponent({ text, onClick, icon, alt, className, disabled = false }: ButtonComponentProps) {
    const buttonClass = `${style.button} ${className || ''}`;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <img src={icon} alt={alt}/>}
            <span>{text}</span>
        </button>
    );
}