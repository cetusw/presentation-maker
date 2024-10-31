import {Slide} from '../store/presentationTypes.ts';
import {useDragAndDrop} from '../store/hooks/useDragAndDrop.tsx';
import {SlideComponent} from './SlideComponent.tsx';
import {editor, slideCollectionScale} from '../store/constants.ts';
import style from './DraggableSlideComponent.module.css';

type DraggableSlideComponentProps = {
    slide: Slide;
    isSelected: boolean;
    onClick: () => void;
};

function DraggableSlideComponent({ slide, isSelected, onClick }: DraggableSlideComponentProps) {
    const { elementRef, position } = useDragAndDrop();

    return (
        <div
            ref={elementRef}
            onClick={onClick}
            style={{ transform: `translate(0, ${position.y}px)` }}
            className={style.slideCollectionElement}
        >
            <SlideComponent
                className={style.slideInCollection}
                slide={slide}
                scale={slideCollectionScale}
                selection={editor.selection}
                isSelected={isSelected}
            />
        </div>
    );
}

export {
    DraggableSlideComponent,
}