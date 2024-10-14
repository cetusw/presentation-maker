import {BackgroundType, Slide} from '../store/presentationTypes.ts';
import style from './SlideComponent.module.css';
import {ObjectComponent} from './ObjectComponent.tsx';

type SlideComponentProps = {
    className?: string;
    slide: Slide,
    scale?: number,
};

function SlideComponent({className, slide, scale}: SlideComponentProps) {
    const newScale = scale ?? 1;
    const slideClass = `${style.slide} ${className || ''}`;

    function renderBackground(background: BackgroundType) {
        switch (background.type) {
            case 'color':
                return {backgroundColor: background.color};
            case 'image':
                return {backgroundImage: `url(${background.imageUrl})`};
            case 'gradient':
                return {backgroundImage: `linear-gradient(${background.firstColor}, ${background.secondColor})`};
            default:
                return {backgroundColor: 'white'};
        }
    }

    const backgroundStyles = renderBackground(slide.background);

    return (
        <div
            className={slideClass}
            style={{
                ...backgroundStyles,
                width: `calc(960px / ${newScale})`,
                height: `calc(540px / ${newScale})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {slide.objects.map((object) => (
                <ObjectComponent
                    key={object.id}
                    object={object}
                    scale={newScale}
                />
            ))}
        </div>
    );
}

export {
    SlideComponent,
}