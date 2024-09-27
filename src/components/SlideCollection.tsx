import {Presentation} from "../presentationTypes.ts";
import style from '../styles/SlideCollection.module.css';
import {SlideComponent} from "./SlideComponent.tsx";

type SlideCollectionProps = {
    presentation: Presentation;
};

export function SlideCollection(props: SlideCollectionProps) {
    return (
        <ol className={style.slideCollection}>
            {props.presentation.slides.map((slide) => (
                <li>
                    <SlideComponent
                        slide={slide}
                        scale={5}
                    />
                </li>
            ))}
        </ol>
    )
}