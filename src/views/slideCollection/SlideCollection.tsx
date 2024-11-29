import style from './SlideCollection.module.css'
import {DraggableSlideComponent} from '../../components/DraggableSlideComponent.tsx'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useAppSelector} from '../hooks/useAppSelector.tsx'


function SlideCollection() {
    const slides = useAppSelector(editor => editor.presentation.slides)
    const selection = useAppSelector(editor => editor.selection)

    const {setSelection} = useAppActions()
    function onSlideClick(slideId: string) {
        setSelection({
            selectedSlidesIds: [slideId],
            selectedObjectsIds: [],
        })
    }

    return (
        <div>
            {slides.length > 0 ? (
                <div className={style.slideCollection}>
                    {slides.map((slide) => (
                        <DraggableSlideComponent
                            key={slide.id}
                            slide={slide}
                            isSelected={slide.id == selection.selectedSlidesIds[0]}
                            onClick={() => onSlideClick(slide.id)}
                        >
                        </DraggableSlideComponent>
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