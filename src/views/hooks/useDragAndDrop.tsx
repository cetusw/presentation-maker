import React, {
	useEffect, useRef, useState,
} from 'react';
import {type Position} from '../../store/presentationTypes.ts'

type DragAndDropProps = {
	currentPosition: Position,
	onPositionChange?: (position: Position) => void,
}

type DragAndDropResult = {
	elementRef: React.RefObject<HTMLDivElement>,
	position: Position,
	setPosition: React.Dispatch<React.SetStateAction<Position>>,
}

function useDragAndDrop({onPositionChange, currentPosition}: DragAndDropProps): DragAndDropResult {
	const [position, setPosition] = useState<Position>(currentPosition)
	const elementRef = useRef<HTMLDivElement | null>(null)
	const startPos = useRef<Position>({
		x: 0,
		y: 0,
	})

	useEffect(() => {
		function handleMouseDown(e: MouseEvent) {
			startPos.current = {
				x: e.pageX,
				y: e.pageY,
			}
			console.log(startPos)
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
		}

		function handleMouseMove(e: MouseEvent) {
			const delta = {
				x: e.pageX - startPos.current.x,
				y: e.pageY - startPos.current.y,
			}
			setPosition(prevPos => ({
				x: prevPos.x + delta.x,
				y: prevPos.y + delta.y,
			}))
			startPos.current = {
				x: e.pageX,
				y: e.pageY,
			}
		}

		function handleMouseUp() {
			if (onPositionChange) {
				onPositionChange(position)
			}
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
		}

		const currentElement = elementRef.current
		currentElement?.addEventListener('mousedown', handleMouseDown)

		return () => {
			currentElement?.removeEventListener('mousedown', handleMouseDown)
		}
	}, [position, onPositionChange])

	return {
		elementRef,
		position,
		setPosition,
	}
}

export {
	useDragAndDrop,
}
