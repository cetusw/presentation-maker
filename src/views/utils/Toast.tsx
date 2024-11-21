import { useEffect } from 'react';
import style from './Toast.module.css';

type ToastProps = {
    message: string;
    onClose: () => void;
    duration?: number;
};

function Toast({message, onClose, duration = 3000}: ToastProps){
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    });

    return (
        <div className={style.toast}>
            <p>{message}</p>
            <button onClick={onClose}>&times;</button>
        </div>
    );
}

export {
    Toast,
}
