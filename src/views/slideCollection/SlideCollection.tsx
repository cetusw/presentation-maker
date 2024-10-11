import {Presentation} from '../../store/presentationTypes.ts';
import style from './SlideCollection.module.css';
import {SlideComponent} from '../../components/SlideComponent.tsx';
import {slideCollectionScale} from '../../store/constants.ts';

type SlideCollectionProps = {
    presentation: Presentation;
};

export function SlideCollection({presentation}: SlideCollectionProps) {
    return (
        <div>
            {presentation.slides.length > 0 ? (
                <ol className={style.slideCollection}>
                    {presentation.slides.map((slide) => (
                        <li
                            key={slide.id}
                            className={style.slideCollectionElement}
                        >
                            <SlideComponent
                                className={style.slideInCollection}
                                slide={slide}
                                scale={slideCollectionScale}
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