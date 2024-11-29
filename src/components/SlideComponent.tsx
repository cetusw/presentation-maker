import {BackgroundType, Slide} from '../store/presentationTypes.ts'
import style from './SlideComponent.module.css'
import {ObjectComponent} from './ObjectComponent.tsx'
import {useAppSelector} from '../views/hooks/useAppSelector.tsx'
import {useAppActions} from '../views/hooks/useAppActions.tsx'

type SlideComponentProps = {
    className?: string;
    slide: Slide,
    scale?: number,
    isSelected?: boolean,
};

function SlideComponent({className, slide, scale, isSelected}: SlideComponentProps) {
    const selection = useAppSelector(editor => editor.selection)

    const newScale = scale ?? 1

    const slideClass = isSelected
        ? `${style.selectedSlide} ${className || ''}`
        : `${style.slide} ${className || ''}`

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
            className={slideClass}
            style={{
                ...backgroundStyles,
                width: `calc(960px / ${newScale})`,
                height: `calc(540px / ${newScale})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            tabIndex={0}
        >
            {slide.objects.map((object) => (
                <div
                    key={object.id}
                    onClick={() => onObjectClick(object.id)}
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
    )
}

export {
    SlideComponent,
}