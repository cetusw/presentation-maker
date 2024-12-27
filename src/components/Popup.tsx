import style from './Popup.module.css'
import {ReactNode} from 'react'
import closeButton from '../assets/icons/close.svg'

type PopupProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const Popup = ({ isOpen, onClose, children }: PopupProps) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className={style.popupOverlay} onClick={onClose}>
            <div className={style.popupContainer}>
                <div className={style.popupContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
                <button className={style.popupClose} onClick={onClose}>
                    <img src={closeButton} alt={'close'}/>
                </button>
            </div>
        </div>
    )
}

export {
    Popup,
}
