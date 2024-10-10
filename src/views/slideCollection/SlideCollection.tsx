import {Presentation} from "../../store/presentationTypes.ts";
import style from './SlideCollection.module.css';
import {SlideComponent} from "../../components/SlideComponent.tsx";

type SlideCollectionProps = {
    presentation: Presentation;
};

export function SlideCollection({presentation}: SlideCollectionProps) {
    return (
        <div>
            {presentation.slides.length > 0 ? (
                <ol className={style.slideCollection}>
                    {presentation.slides.map((slide) => (
                        <li key={slide.id}>
                            <SlideComponent
                                className={style.slideInCollection}
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