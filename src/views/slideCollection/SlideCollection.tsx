import {ItemSelection, Presentation} from '../../store/presentationTypes.ts';
import style from './SlideCollection.module.css';
import {SlideComponent} from '../../components/SlideComponent.tsx';
import {editor, slideCollectionScale} from '../../store/constants.ts';
import {dispatch} from '../../store/editor.ts';
import {setSelection} from '../../store/setSelection.ts';

type SlideCollectionProps = {
    presentation: Presentation;
    selection: ItemSelection;
};

function SlideCollection({presentation, selection}: SlideCollectionProps) {
    function onSlideClick(slideId: string) {
        dispatch(setSelection, {
            selectedSlidesIds: [slideId],
            selectedObjectsIds: [],
        });
    }

    return (
        <div>
            {presentation.slides.length > 0 ? (
                <div className={style.slideCollection}>
                    {presentation.slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={style.slideCollectionElement}
                            onClick={() => onSlideClick(slide.id)}
                        >
                            <SlideComponent
                                className={style.slideInCollection}
                                slide={slide}
                                scale={slideCollectionScale}
                                isSelected={slide.id == selection.selectedSlidesIds[0]}
                                selection={editor.selection}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <ol className={style.slideCollection}></ol>
            )}
        </div>
    );
}

export {
    SlideCollection,
}