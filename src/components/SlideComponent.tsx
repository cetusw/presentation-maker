import {Slide} from "../store/presentationTypes.ts";
import style from '../views/slideCollection/SlideCollection.module.css';
import {ObjectComponent} from "./ObjectComponent.tsx";
import {renderBackground} from "../store/presentationUtils.ts";

type SlideComponentProps = {
    className?: string;
    slide: Slide,
    scale?: number,
};

export function SlideComponent({className, slide, scale}: SlideComponentProps) {
    const newScale = scale ?? 1;
    const slideClass = `${style.slide} ${className || ''}`;

    return (
        <div
            className={slideClass}
            style={{
                background: renderBackground(slide.background),
                width: `calc(900px / ${newScale})`,
                height: `calc((900px * 9 / 16) / ${newScale})`,
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