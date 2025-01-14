import { useEffect } from 'react'
import style from './Toast.module.css'

type ToastProps = {
    message: string
    onClose: () => void
    duration?: number
    toastType: 'positive' | 'negative'
};

function Toast({message, onClose, duration = 3000, toastType}: ToastProps){
    useEffect(() => {
        const timer = setTimeout(onClose, duration)
        return () => clearTimeout(timer)
    })

    let toastStyle: string
    switch (toastType) {
        case 'positive':
            toastStyle = `${style.toast} ${style.positiveToast}`
            break
        case 'negative':
            toastStyle = `${style.toast} ${style.negativeToast}`
            break
        default:
            toastStyle = `${style.toast}`
    }

    return (
        <div className={toastStyle}>
            <p>{message}</p>
            <button onClick={onClose}>&times;</button>
        </div>
    )
}

export {
    Toast,
}
