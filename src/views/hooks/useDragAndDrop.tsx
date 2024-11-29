import React, { useEffect, useState, useRef } from 'react'
import {Position} from '../../store/presentationTypes.ts'

type DragAndDropProps = {
    initialPosition?: Position
};

type DragAndDropResult = {
    elementRef: React.RefObject<HTMLDivElement>
    position: Position
    setPosition: React.Dispatch<React.SetStateAction<Position>>
};

function useDragAndDrop({ initialPosition = { x: 0, y: 0 } }: DragAndDropProps = {}): DragAndDropResult {
    const [position, setPosition] = useState<Position>(initialPosition)
    const elementRef = useRef<HTMLDivElement | null>(null)
    const startPos = useRef<Position>({ x: 0, y: 0 })

    useEffect(() => {
        function handleMouseDown(e: MouseEvent) {
            startPos.current = { x: e.pageX, y: e.pageY }
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
        }

        function handleMouseMove(e: MouseEvent){
            const delta = {
                x: e.pageX - startPos.current.x,
                y: e.pageY - startPos.current.y,
            }
            setPosition(prevPos => ({
                x: prevPos.x + delta.x,
                y: prevPos.y + delta.y,
            }))
            startPos.current = { x: e.pageX, y: e.pageY }
        }

        function handleMouseUp(){
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        const currentElement = elementRef.current
        currentElement?.addEventListener('mousedown', handleMouseDown)

        return () => {
            currentElement?.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    return {
        elementRef,
        position,
        setPosition,
    }
}

export {
    useDragAndDrop,
}
