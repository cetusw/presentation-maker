import style from './SlideCollection.module.css'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useAppSelector} from '../hooks/useAppSelector.tsx'
import {SlideComponent} from '../../components/SlideComponent.tsx'
import {slideCollectionScale} from '../../store/data/editorData.ts'


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
                    {slides.map((slide, index) => (
                        <SlideComponent
                            key={slide.id}
                            slide={slide}
                            scale={slideCollectionScale}
                            isSelected={slide.id == selection.selectedSlidesIds[0]}
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