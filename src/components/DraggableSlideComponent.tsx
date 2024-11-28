import {Slide} from '../store/presentationTypes.ts';
import {useDragAndDrop} from '../views/hooks/useDragAndDrop.tsx';
import {SlideComponent} from './SlideComponent.tsx';
import {slideCollectionScale} from '../store/data/editorData.ts';
import style from './DraggableSlideComponent.module.css';
import {handleKeyPress} from '../store/keyPressHandler.ts';
import {useEffect} from 'react';

type DraggableSlideComponentProps = {
    slide: Slide;
    isSelected: boolean;
    onClick: () => void;
};

function DraggableSlideComponent({ slide, isSelected, onClick }: DraggableSlideComponentProps) {
    const { elementRef, position } = useDragAndDrop();

    useEffect(() => {
        if (isSelected && elementRef.current) {
            elementRef.current.focus();
        }
    }, [isSelected, elementRef]);

    return (
        <div
            ref={elementRef}
            onClick={onClick}
            style={{ transform: `translate(0, ${position.y}px)` }}
            className={style.slideCollectionElement}
            onKeyDown={() => handleKeyPress}
            tabIndex={0}
        >
            <SlideComponent
                className={style.slideInCollection}
                slide={slide}
                scale={slideCollectionScale}
                isSelected={isSelected}
            />
        </div>
    );
}

export {
    DraggableSlideComponent,
}