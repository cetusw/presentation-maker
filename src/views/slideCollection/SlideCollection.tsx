import {ItemSelection, Presentation} from '../../store/presentationTypes.ts';
import style from './SlideCollection.module.css';
import {dispatch} from '../../store/editor.ts';
import {setSelection} from '../../store/setSelection.ts';
import {DraggableSlideComponent} from '../../components/DraggableSlideComponent.tsx';

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
                        <DraggableSlideComponent
                            key={slide.id}
                            slide={slide}
                            isSelected={slide.id == selection.selectedSlidesIds[0]}
                            onClick={() => onSlideClick(slide.id)}
                        >
                        </DraggableSlideComponent>
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