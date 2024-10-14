import {Presentation} from '../../store/presentationTypes.ts';
import style from './SlideCollection.module.css';
import {SlideComponent} from '../../components/SlideComponent.tsx';
import {editor, slideCollectionScale} from '../../store/constants.ts';
import {dispatch} from '../../store/editor.ts';
import {setSelection} from '../../store/setSelection.ts';

type SlideCollectionProps = {
    presentation: Presentation;
};

function SlideCollection({presentation}: SlideCollectionProps) {
    function onSlideClick(slideId: string) {
        dispatch(setSelection, {
            selectedSlidesIds: [slideId],
            selectedObjectsIds: [],
        });
        console.log(editor.selection.selectedSlidesIds[0])
    }
    return (
        <div>
            {presentation.slides.length > 0 ? (
                <ol className={style.slideCollection}>
                    {presentation.slides.map((slide) => (
                        <li
                            key={slide.id}
                            className={style.slideCollectionElement}
                            onClick={() => onSlideClick(slide.id)}
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

export {
    SlideCollection,
}