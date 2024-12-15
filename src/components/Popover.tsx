import {ReactNode, useEffect, useRef, useState} from 'react'
import style from './Popover.module.css'

type PopoverProps = {
    content: ReactNode;
    children: ReactNode;
};

const Popover = ({ content, children }: PopoverProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const popoverRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement
            if (popoverRef.current && !popoverRef.current.contains(target)) {
                setIsVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const togglePopover = () => setIsVisible((prev) => !prev)

    return (
        <div className={style.popoverContainer} ref={popoverRef}>
            <div onClick={togglePopover} className={style.popoverTrigger}>
                {content}
            </div>
            {isVisible && (
                <div className={style.popoverContent}>
                    {children}
                </div>
            )}
        </div>
    )
}

export {
    Popover,
}
