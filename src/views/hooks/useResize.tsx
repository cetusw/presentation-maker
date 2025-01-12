import React, {
    useEffect, useRef, useState,
} from 'react'
import {type Position, Size} from '../../store/presentationTypes.ts'

type ResizeProps = {
    currentSize: Size,
    onSizeChange: (size: Size) => void,
    elementRef?: React.RefObject<HTMLDivElement>,
}

type ResizeResult = {
    ref: React.RefObject<HTMLDivElement>,
    size: Size,
    setSize: React.Dispatch<React.SetStateAction<Size>>,
}

function useResize({ currentSize, onSizeChange, elementRef }: ResizeProps): ResizeResult {
    const [size, setSize] = useState<Size>(currentSize)
    const sizeRef = useRef<Size>(currentSize)
    const startSize = useRef<Size>({ width: 0, height: 0 })
    const startMousePosition = useRef<Position>({ x: 0, y: 0 })
    const internalRef = useRef<HTMLDivElement | null>(null)

    const ref = elementRef || internalRef

    useEffect(() => {
        if (size.width !== currentSize.width || size.height !== currentSize.height) {
            setSize(currentSize)
            sizeRef.current = currentSize
        }
    }, [currentSize])

    useEffect(() => {
        function handleMouseDown(e: MouseEvent) {
            const target = e.target as HTMLElement
            const resizeDirection = target.dataset.resizeDirection
            if (!resizeDirection) return

            startSize.current = sizeRef.current
            startMousePosition.current = { x: e.pageX, y: e.pageY }
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
        }

        function handleMouseMove(e: MouseEvent) {
            const deltaX = e.pageX - startMousePosition.current.x
            const deltaY = e.pageY - startMousePosition.current.y

            const newSize = {
                width: startSize.current.width + deltaX,
                height: startSize.current.height + deltaY,
            }

            setSize(newSize)
            sizeRef.current = newSize
        }

        function handleMouseUp() {
            if (onSizeChange) {
                onSizeChange(sizeRef.current)
            }
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        const currentElement = ref.current
        currentElement?.addEventListener('mousedown', handleMouseDown)

        return () => {
            currentElement?.removeEventListener('mousedown', handleMouseDown)
        }
    }, [onSizeChange])

    return {
        ref,
        size,
        setSize,
    }
}

export {
    useResize,
}
