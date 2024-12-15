import {useEffect} from 'react'
import {slideCollectionScale} from '../store/data/editorData.ts'
import {type Slide} from '../store/presentationTypes.ts'
import {useDragAndDrop} from '../views/hooks/useDragAndDrop.tsx'
import style from './DraggableSlideComponent.module.css'
import {SlideComponent} from './SlideComponent.tsx'

type DraggableSlideComponentProps = {
	slide: Slide,
	isSelected: boolean,
	onClick: () => void,
}

function DraggableSlideComponent({ slide, isSelected, onClick }: DraggableSlideComponentProps) {
	const {elementRef, position} = useDragAndDrop({
		currentPosition: {
			x: 0,
			y: 0,
		},
	})

	useEffect(() => {
		if (isSelected && elementRef.current) {
			elementRef.current.focus()
		}
	}, [isSelected, elementRef])

	return (
		<div
			ref={elementRef}
			onClick={onClick}
			style={{transform: `translate(0, ${position.y}px)`}}
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
