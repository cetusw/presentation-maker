import {Slide} from '../../store/presentationTypes.ts'
import {SlideComponent} from '../../components/SlideComponent.tsx'
import style from './Workspace.module.css'
import {useAppSelector} from '../hooks/useAppSelector.tsx'
import {useEffect, useState} from 'react'
import {useAppActions} from '../hooks/useAppActions.tsx'
import {useNavigate} from 'react-router'

type WorkSpaceProps = {
    isSlideshow: boolean
}

function WorkSpace({ isSlideshow }: WorkSpaceProps) {
    const navigate = useNavigate()
    const slides = useAppSelector(editor => editor.presentation.slides)
    const selection = useAppSelector(editor => editor.selection)
    const {setSelection} = useAppActions()
    const [currentSlideIndex, setCurrentSlideIndex] = useState(
        selection?.selectedSlidesIds.length > 0
            ? slides.findIndex(slide => slide.id === selection.selectedSlidesIds[0])
            : 0
    )
    const selectedSlide: Slide = slides[currentSlideIndex] || slides[0]

    let className
    let workspaceWrapper = ''
    let workspace
    let scale
    if (isSlideshow) {
        workspaceWrapper = style.workspaceWrapper
        workspace = style.workspaceSlideshow
        scale = 2 / 3
    } else {
        className = style.slideComponent
        workspace = style.workspace
        scale = 1
    }

    function updateSelectedSlides(slideId: string) {
        setSelection({
            selectedSlidesIds: [slideId],
            selectedObjectsIds: [],
        })
    }

    function goToNextSlide() {
        if (slides.length > 0) {
            const nextIndex = (currentSlideIndex + 1) % slides.length
            console.log(nextIndex)
            setCurrentSlideIndex(nextIndex)
            updateSelectedSlides(slides[nextIndex].id)
        }
    }

    function goToPreviousSlide() {
        if (slides.length > 0) {
            const previousIndex = (currentSlideIndex - 1 + slides.length) % slides.length
            console.log(previousIndex)
            setCurrentSlideIndex(previousIndex)
            updateSelectedSlides(slides[previousIndex].id)
        }
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'ArrowRight') {
            goToNextSlide()
        } else if (event.key === 'ArrowLeft') {
            goToPreviousSlide()
        } else if (event.key === 'Escape' && isSlideshow) {
            navigate('/presentation')
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selection])

    useEffect(() => {
        if (selection?.selectedSlidesIds.length > 0) {
            const index = slides.findIndex(slide => slide.id === selection.selectedSlidesIds[0])
            setCurrentSlideIndex(index !== -1 ? index : 0)
        }
    }, [selection, slides])

    return (
        <div className={workspaceWrapper}>
            <div className={workspace}>
                {selectedSlide && slides.length > 0 ? (
                    <div className={style.slide}>
                        <SlideComponent
                            className={className}
                            scale={scale}
                            slide={selectedSlide}
                        />
                    </div>
                ) : (
                    <div className={style.placeholderSlide}>
                        <span className={style.placeholderSlideText}>Добавьте первый слайд</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export {
    WorkSpace,
}