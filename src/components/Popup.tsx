import style from './Popup.module.css'
import {ReactNode} from 'react'

type PopupProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const Popup = ({ isOpen, onClose, children }: PopupProps) => {
    if (!isOpen) return null

    return (
        <div className={style.popupOverlay} onClick={onClose}>
            <div className={style.popupContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.popupClose} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export {
    Popup,
}
