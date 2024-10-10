import {Presentation} from "../../store/presentationTypes.ts";
import style from './SlideCollection.module.css';
import {SlideComponent} from "../../components/SlideComponent.tsx";

type SlideCollectionProps = {
    presentation: Presentation;
};

export function SlideCollection(props: SlideCollectionProps) {
    return (
        <div>
            {props.presentation.slides.length > 0 ? (
                <ol className={style.slideCollection}>
                    {props.presentation.slides.map((slide) => (
                        <li key={slide.id}>
                            <SlideComponent
                                slide={slide}
                                scale={5}
                            />
                        </li>
                    ))}
                </ol>
            ) : (
                <ol className={style.slideCollection}></ol>
            )}
        </div>
    );
}