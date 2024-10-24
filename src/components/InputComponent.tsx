import style from './ButtonInputComponent.module.css';
import React from 'react';

type InputComponentProps = {
    inputId: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text?: string;
    textClassName?: string;
    icon?: string;
    alt?: string;
    className?: string
    disabled?: boolean;
}

function InputComponent({ inputId, type, onChange, text, icon, alt, className, disabled = false, textClassName }: InputComponentProps) {
    const buttonClass = `${style.button} ${className || ''}`;

    function triggerInput() {
        document.getElementById(inputId)?.click();
    }

    return (
        <>
            <button
                className={buttonClass}
                onClick={triggerInput}
                disabled={disabled}
            >
                {icon && <img className={style.buttonIcon} src={icon} alt={alt}/>}
                <span className={textClassName}>{text}</span>
            </button>

            <input
                id={inputId}
                className={style.inputBlock}
                type={type}
                onChange={onChange}
            />
        </>
    );
}

export {
    InputComponent,
}