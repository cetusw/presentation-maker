import {Slide} from '../../store/presentationTypes.ts'
import {SlideComponent} from '../../components/SlideComponent.tsx'
import style from './Workspace.module.css'
import {useAppSelector} from '../hooks/useAppSelector.tsx'

function WorkSpace() {
    const slides = useAppSelector(editor => editor.presentation.slides)
    const selection = useAppSelector(editor => editor.selection)
    const selectedSlide: Slide = slides.find(slide => slide.id === selection?.selectedSlidesIds[0]) || slides[0]

    return (
        <div className={style.workspace}>
            {selectedSlide && slides.length > 0 ? (
                <div className={style.slide}>
                    <SlideComponent
                        className={style.slideComponent}
                        slide={selectedSlide}
                    />
                </div>
            ) : (
                <div className={style.placeholderSlide}>
                    <span className={style.placeholderSlideText}>Добавьте первый слайд</span>
                </div>
            )}
        </div>
    )
}

export {
    WorkSpace,
}