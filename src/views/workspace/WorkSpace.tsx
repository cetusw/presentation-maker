import {EditorType} from '../../store/presentationTypes.ts';
import {SlideComponent} from '../../components/SlideComponent.tsx';
import style from './Workspace.module.css';

type WorkSpaceProps = {
    editor: EditorType;
    currentSlideId: string;
};

function WorkSpace({editor, currentSlideId}: WorkSpaceProps) {
    const currentSlide = editor.presentation.slides.find(slide => slide.id === currentSlideId);
    return (
        <div className="workspace">
            {currentSlide && editor.presentation.slides.length > 0 ? (
                <div className={style.slide}>
                    <SlideComponent
                        className={style.slideComponent}
                        slide={currentSlide}
                        selection={editor.selection}
                    />
                </div>
            ) : (
                <div className={style.placeholderSlide}>
                    <span className={style.placeholderSlideText}>Добавьте первый слайд</span>
                </div>
            )}
        </div>
    );
}

export {
    WorkSpace,
}