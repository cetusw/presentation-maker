import {useEffect} from 'react'
import {slideCollectionScale} from '../store/data/editorData.ts'
import {type Slide} from '../store/presentationTypes.ts'
import {useDragAndDrop} from '../views/hooks/useDragAndDrop.tsx'
import style from './DraggableSlideComponent.module.css'
import {SlideComponent} from './SlideComponent.tsx'
import {useAppActions} from '../views/hooks/useAppActions.tsx'
import {useAppSelector} from '../views/hooks/useAppSelector.tsx'

type DraggableSlideComponentProps = {
	slide: Slide
	isSelected: boolean
	onClick: () => void
	index: number
}

function DraggableSlideComponent({ slide, isSelected, onClick, index }: DraggableSlideComponentProps) {
	const slides = useAppSelector((editor => editor.presentation.slides))
	// const { updateSlideIndex } = useAppActions()
	// const { elementRef, position } = useDragAndDrop({
	// 	currentPosition: { x: 0, y: 0 },
	// 	onPositionChange: (newPosition) => {
	// 		console.log(newPosition)
	// 	},
	// })

	useEffect(() => {
		if (isSelected && elementRef.current) {
			elementRef.current.focus()
		}
	}, [isSelected, elementRef])

	return (
		<div
			ref={elementRef}
			onMouseDown={onClick}
			style={{transform: `translate(${position.x}px, ${position.y}px)`}}
			className={style.slideCollectionElement}
			tabIndex={0}
		>
			<SlideComponent
				className={style.slideInCollection}
				slide={slide}
				scale={slideCollectionScale}
				isSelected={isSelected}
			/>
		</div>
	)
}

export {
	DraggableSlideComponent,
}
