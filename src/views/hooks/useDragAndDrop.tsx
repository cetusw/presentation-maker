import React, {
	useEffect, useRef, useState,
} from 'react'
import {type Position} from '../../store/presentationTypes.ts'

type DragAndDropProps = {
	currentPosition: Position,
	onPositionChange: (position: Position) => void,
}

type DragAndDropResult = {
	elementRef: React.RefObject<HTMLDivElement>,
	position: Position,
	setPosition: React.Dispatch<React.SetStateAction<Position>>,
}

function useDragAndDrop({ onPositionChange, currentPosition }: DragAndDropProps): DragAndDropResult {
	const [position, setPosition] = useState<Position>(currentPosition)
	const positionRef = useRef<Position>(currentPosition)
	const elementRef = useRef<HTMLDivElement | null>(null)
	const startPos = useRef<Position>({ x: 0, y: 0 })
	const resizeDirectionRef = useRef<string | null>(null)

	useEffect(() => {
		if (position.x !== currentPosition.x || position.y !== currentPosition.y) {
			setPosition(currentPosition)
			positionRef.current = currentPosition
		}
	}, [currentPosition])

	useEffect(() => {
		function handleMouseDown(e: MouseEvent) {
			const target = e.target as HTMLElement
			const resizeDirection = target.dataset.resizeDirection
			if (resizeDirection === 'right' || resizeDirection === 'bottom-right' || resizeDirection === 'bottom') return
			if (resizeDirection) {
				resizeDirectionRef.current = resizeDirection
			}

			startPos.current = {
				x: e.pageX - positionRef.current.x,
				y: e.pageY - positionRef.current.y,
			}
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
		}

		function handleMouseMove(e: MouseEvent) {
			const newPos = {...currentPosition}
			if (resizeDirectionRef.current === 'top') {
				newPos.y = e.pageY - startPos.current.y
			}
			if (resizeDirectionRef.current === 'top-right') {
				newPos.y = e.pageY - startPos.current.y
			}
			if (resizeDirectionRef.current === 'bottom-left') {
				newPos.x = e.pageX - startPos.current.x
			}
			if (resizeDirectionRef.current === 'left') {
				newPos.x = e.pageX - startPos.current.x
			}
			if (resizeDirectionRef.current === 'top-left') {
				newPos.x = e.pageX - startPos.current.x
				newPos.y = e.pageY - startPos.current.y
			}
			if (resizeDirectionRef.current === null) {
				newPos.x = e.pageX - startPos.current.x
				newPos.y = e.pageY - startPos.current.y
			}

			setPosition(newPos)
			positionRef.current = newPos
		}

		function handleMouseUp() {
			resizeDirectionRef.current = null
			if (onPositionChange) {
				onPositionChange(positionRef.current)
			}
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
		}

		const currentElement = elementRef.current
		currentElement?.addEventListener('mousedown', handleMouseDown)

		return () => {
			currentElement?.removeEventListener('mousedown', handleMouseDown)
		}
	}, [currentPosition, onPositionChange])

	return {
		elementRef,
		position,
		setPosition,
	}
}

export {
	useDragAndDrop,
}
