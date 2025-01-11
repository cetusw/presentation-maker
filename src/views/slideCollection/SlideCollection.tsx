import style from './SlideCollection.module.css'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useAppSelector} from '../hooks/useAppSelector.tsx'
import {SlideComponent} from '../../components/SlideComponent.tsx'
import {slideCollectionScale} from '../../store/data/editorData.ts'
import {useEffect, useState} from 'react'


function SlideCollection() {
    const slides = useAppSelector(editor => editor.presentation.slides)
    const selection = useAppSelector(editor => editor.selection)
    const [shiftPressed, setShiftPressed] = useState<boolean>(false)
    const {setSelection} = useAppActions()

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    })

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Shift') {
            setShiftPressed(true)
        }
    }

    function handleKeyUp(event: KeyboardEvent) {
        if (event.key === 'Shift') {
            setShiftPressed(false)
        }
    }

    function onSlideClick(slideId: string) {
        if (!shiftPressed) {
            setSelection({
                selectedSlidesIds: [slideId],
                selectedObjectsIds: [],
            })
        } else if (shiftPressed && !selection.selectedSlidesIds.includes(slideId)) {
            setSelection({
                selectedSlidesIds: [...selection.selectedSlidesIds, slideId],
                selectedObjectsIds: [],
            })
        } else if (shiftPressed && selection.selectedSlidesIds.includes(slideId)) {
            const newSelectedSlides = getMultipleSlideSelection(slideId, selection.selectedSlidesIds)
            setSelection({
                selectedSlidesIds: [...newSelectedSlides],
                selectedObjectsIds: [],
            })
        }
    }

    function getMultipleSlideSelection(slideId: string, selection: Array<string>) {
        const newSelection: string[] = []

        if (selection.length === 1) {
            return selection
        }

        for (let i = 0; i < selection.length; i++) {
            if (selection[i] !== slideId) {
                newSelection.push(selection[i])
            }
        }

        return newSelection
    }

    return (
        <div>
            {slides.length > 0 ? (
                <div className={style.slideCollection}>
                    {slides.map((slide, index) => (
                        <SlideComponent
                            key={slide.id}
                            slide={slide}
                            scale={slideCollectionScale}
                            isSelected={selection.selectedSlidesIds.includes(slide.id)}
                            onClick={() => onSlideClick(slide.id)}
                            index={index}
                            inSlideCollection={true}
                        >
                        </SlideComponent>
                    ))}
                </div>
            ) : (
                <ol className={style.slideCollection}></ol>
            )}
        </div>
    )
}

export {
    SlideCollection,
}