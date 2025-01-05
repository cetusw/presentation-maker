import {BackgroundType, Slide} from '../store/presentationTypes.ts'
import style from './SlideComponent.module.css'
import {ObjectComponent} from './ObjectComponent.tsx'
import {useAppSelector} from '../views/hooks/useAppSelector.tsx'
import {useAppActions} from '../views/hooks/useAppActions.tsx'
import {useDragAndDrop} from '../views/hooks/useDragAndDrop.tsx'
import {useEffect, useState} from 'react'

type SlideComponentProps = {
    className?: string
    slide: Slide
    scale?: number
    onClick?: () => void
    isSelected?: boolean
    index?: number
};

function SlideComponent({className, slide, scale, isSelected, onClick, index}: SlideComponentProps) {
    const selection = useAppSelector(editor => editor.selection)
    const slides = useAppSelector((editor => editor.presentation.slides))
    const [slidePosition, setSlidePosition] = useState({ x: 0, y: 0 })
    const { updateSlideIndex } = useAppActions()

    const { elementRef, position } = useDragAndDrop({
        currentPosition: slidePosition,
        onPositionChange: (newPosition) => {
            let newIndex = Math.round(newPosition.y / 125)
            if (index) {
                newIndex += index
            }
            if (newIndex !== index && newIndex >= 0 && newIndex < slides.length) {
                updateSlideIndex(newIndex)
            }
            setSlidePosition({ x: 0, y: 0 })
        },
    })

    useEffect(() => {
        const element = elementRef.current
        if (element) {
            setSlidePosition({ x: 0, y: 0})
        }
    }, [elementRef])

    const newScale = scale ?? 1

    let draggableSlide
    let slideClass = isSelected
        ? `${style.selectedSlide} ${className || ''}`
        : `${style.slide} ${className || ''}`

    if (newScale !== 1) {
        slideClass += `${style.slideHover}`
        draggableSlide = {transform: `translate(0, ${position.y}px)`}
    }

    const { setSelection } = useAppActions()
    function onObjectClick(objectId: string) {
        setSelection({
            selectedSlidesIds: selection.selectedSlidesIds,
            selectedObjectsIds: [objectId],
        })
    }

    function renderBackground(background: BackgroundType) {
        switch (background.type) {
            case 'color':
                return {backgroundColor: background.color}
            case 'image':
                return {backgroundImage: `url(${background.imageUrl})`}
            case 'gradient':
                return {backgroundImage: `linear-gradient(${background.firstColor}, ${background.secondColor})`}
            default:
                return {backgroundColor: 'white'}
        }
    }

    const backgroundStyles = renderBackground(slide.background)

    return (
        <div
            ref={elementRef}
            className={slideClass}
            style={{
                ...backgroundStyles,
                width: `calc(960px / ${newScale})`,
                height: `calc(540px / ${newScale})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                ...draggableSlide,
            }}
            onMouseDown={onClick}
            tabIndex={0}
        >
            <div
                className={newScale !== 1 ? style.slideWrapper : ''}
            >
                {slide.objects.map((object) => (
                    <div
                        key={object.id}
                        onMouseDown={() => onObjectClick(object.id)}
                    >
                        <ObjectComponent
                            objectId={object.id}
                            object={object}
                            scale={newScale}
                            isSelected={object.id === selection.selectedObjectsIds[0]}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export {
    SlideComponent,
}